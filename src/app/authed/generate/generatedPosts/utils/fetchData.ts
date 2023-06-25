export default async function makeGeneratedPosts({ searchQuery }): Promise<any> {

    const res = await fetch(`/api/generate/postideas` , { 
      cache: "no-store" ,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchQuery
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