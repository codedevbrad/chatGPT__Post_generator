export default async function makeGeneratedPosts( ): Promise<any> {
  const res = await fetch(`${ process.env.BASE_URL }/generate/api/route` , { cache: "no-store" });
  if ( !res.ok ) {
      res.text().then( text => console.error( text ) );
      return [];
  } else {
      return res.json();
  }
}