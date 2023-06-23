export default async function makeGeneratedPosts({ generateIdea , style }): Promise<any> {
    const res = await fetch(`${ process.env.BASE_URL }/api/generate/postideas` , { 
      cache: "no-store" ,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        generateIdea,
        style: 'creative'
      })
    });
    if ( !res.ok ) {
        res.text().then( text => console.error( text ) );
        return [];
    } 
    else {
        return res.json();
    }
}