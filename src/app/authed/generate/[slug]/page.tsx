import makeGeneratedPosts from "./makeGenerated";
import FacebookGenerated from './socialComponents/facebook';


export default async function Generated () {

    const { generated } = await makeGeneratedPosts({ generateIdea: 'sheepskin selling clothing' , style: 'energetic' });
    return (
      <div>
        <h1 className="text-lg"> Generate social media post ideas. </h1>
        <div className="grid grid-cols-3 gap-4">
          { generated.map( ( idea , index ) =>
                <section key={ `generatedIndex__${ index }`} className="bg-gray-200 p-4">
                    <FacebookGenerated generatedPost={ idea } />
                </section>
          )}
        </div>
      </div>
    )
  }