// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

async function sendMessage( message , style ) {
  const apiKey = process.env.OPENAI_CREDS;
  const url = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        'model': 'gpt-3.5-turbo',
        'messages': [
          { 'role': 'user', 
            "content": `generate social media post ideas, ${message}. try to use emojis and add a ${ style }to the writing` 
        }],
        'n': 5
      }),
    });

    const data = await response.json();
    console.log('Response:', data.choices );
    return data.choices;
  } 
  catch (error) {
    console.error('Error:', error);
    throw new Error('could not generate with open a.i');
  }
}

export default async function handler( req: NextApiRequest, res: NextApiResponse ) {

  let { generateIdea , style } = req.body;

  try {
    const fetchResponse = await sendMessage( generateIdea , style );
    return res.status(200).json( fetchResponse );
  }
  catch ( err ) {
    console.log( err.message );
    return res.status(500).send({ error: err.message });
  }
}