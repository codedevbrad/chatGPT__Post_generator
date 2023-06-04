// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../prisma/client'
 
export default async function handler( req: NextApiRequest, res: NextApiResponse ) {
  try {
    const { title , content , data } = req.body;
    const post = await prisma.post.create({
        data: {
            title , content , data
        }
    })
    return res.status(200).json( post );
  }
  catch ( err ) {
    return res.status(500).json( err );
  }
}