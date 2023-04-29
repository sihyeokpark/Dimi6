// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

import client from '../../lib/client'
import Jwt from '../../lib/jwt'

type ResponseDataType = {
  StatusCode: number,
  error?: string,
  message: string,
  token?: string
}

interface iRequest extends NextApiRequest {
  query: {
    name: string,
    password: string
  }
}

export default async function handler(
  req: iRequest,
  res: NextApiResponse<ResponseDataType>
) {
  if (req.method == 'GET') {
    const crytoPassword = crypto.createHash('sha256').update(req.query.password).digest('hex')
    const data = await client.user.findMany({
      where: {
        name: req.query.name,
        password: crytoPassword
      }
    })
    if (data.length === 1) {
      const jwt = new Jwt(data[0].name as string)
      res.json({
        StatusCode: 200,
        message: `user ${data[0].name} login successfully`,
        token: jwt.getJwt(),
      })
    } else {
      res.json({
        StatusCode: 401,
        message: 'login failed',
        error: 'username or password is incorrect',
      })
    }
  }
}
