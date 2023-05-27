import { NextResponse } from 'next/server'
import base64url from 'base64url'

import Jwt, { JwtStatusCode } from '../../../../lib/jwt'
import client from '../../../../lib/client'

type Params = {
  token: string
}

export async function GET(req: Request, context: { params: Params }) {
  console.log(context)
  const token = context.params.token
  console.log(token)
  const tokenData = JSON.parse(base64url.decode(token.split('.')[1]))
  const verifyResult = Jwt.verify(token)
  if (verifyResult == JwtStatusCode.TokenExpired) {
    return NextResponse.json({ error: 'Token expired', message: 'Token expired'}, { status: 401 })
  } else if (verifyResult === JwtStatusCode.TokenInvalid) {
    return NextResponse.json({ error: 'Token invalid', message: 'Token invalid' }, { status: 401 })
  }
  const data = await client.user.findMany({
    where: { name: tokenData.name }
  })
  if (data.length != 0) {
    NextResponse.json({
      point: data[0].point,
      message: 'Success'
    }, { status: 200 })
  }
}
