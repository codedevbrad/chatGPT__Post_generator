import UserComponent from "../(clerk)/useAuth"
import UserData from "../(clerk)/useUser"
import { auth } from '@clerk/nextjs/app-beta'

async function getData( ): Promise<any> {
  const { userId } : { userId : string | null } = auth();
  const res = await fetch(`${ process.env.BASE_URL }/api/example/getExampleUser?userId=${ userId }` , { cache: "no-store" });
  if ( !res.ok ) {
      res.text().then( text => console.error( text ) );
      return [];
  } else {
      return res.json();
  }
}

export default async function Dashboard () {
  let data = await getData( );
  console.log( data )
  return (
    <div>
        <h1 className="text-lg"> this will do something </h1>
        <UserComponent />
        <UserData />
    </div>
  )
}