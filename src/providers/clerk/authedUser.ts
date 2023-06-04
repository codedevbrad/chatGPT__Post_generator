import type { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";


interface authedUserType {
  userId: string;
  type: string;
}

export default async function getAuthedUser ( req: NextApiRequest , res: NextApiResponse ) : Promise<authedUserType> {
    let authedUser = { userId: '' , type: '' };
    // user exists (from server component to API ).
    let userIdFromQuery = String(req.query.userId);
    if ( req.query.userId ) {
      authedUser = { userId: userIdFromQuery , type: 'client-fetch' };
    } 
    else {
      const { userId } = getAuth(req);
      // user exists in clerk (from client component to API ).
      if ( userId ) {
          authedUser = { userId : userId , type: 'clerk-fetch' };
      } else {
          // user not exist from clerk (from client > server or server > server )
          res.status(401).json({ error: 'something' });
      }
    }
    return authedUser;
}
 