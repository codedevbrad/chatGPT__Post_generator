import GenerateComponent from "./generatePosts/index"

export default async function Generate () {
  return (
    <div>
        <h1 className="text-lg"> Generate social media post ideas. </h1>
        <GenerateComponent />
    </div>
  )
}