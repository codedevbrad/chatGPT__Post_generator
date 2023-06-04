import type { NextApiRequest, NextApiResponse } from "next";
import getAuthedUser from "@/providers/clerk/authedUser";

export default async function handler( req: NextApiRequest , res: NextApiResponse ) {
    let { userId } = await getAuthedUser( req , res );
    // retrieve data from your database
    res.status(200).json({ user: userId });
}