// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import base64url from 'base64url'

import Jwt, { JwtStatusCode } from '../../../lib/jwt'
import client from '../../../lib/client'

type Data = {
  StatusCode: number,
  point?: number,
  error?: string
}

interface iRequest extends NextApiRequest {
  query: {
    token: string
  }
}

export default async function handler(
  req: iRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'GET') {
    const token = req.query.token
    const tokenData = JSON.parse(base64url.decode(token.split('.')[1]))
    const verifyResult = Jwt.verify(token)
    if (verifyResult == JwtStatusCode.TokenExpired) {
      res.json({ StatusCode: 401, error: 'token expired', })
      return
    } else if (verifyResult === JwtStatusCode.TokenInvalid) {
      res.json({ StatusCode: 401, error: 'token invalid', })
      return
    }
    const data = await client.user.findMany({
      where: { name: tokenData.name }
    })
    if (data.length != 0) {
      res.json({
        StatusCode: 200,
        point: data[0].point
      })
    }
  } else {
    res.json({
      StatusCode: 405,
      error: 'only POST method is allowed',
    })
  }
}