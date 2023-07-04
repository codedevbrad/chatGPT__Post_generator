import { GeneratedSearchProps } from "../../props.search"

export default async function makeGeneratedPosts({ searchQuery }: { searchQuery: GeneratedSearchProps }): Promise<[string] | []> {
  // Send a POST request to the '/api/generate/postideas' endpoint
  const res = await fetch(`/api/generate/postideas`, {
      cache: "no-store",
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          searchQuery
      })
  });

  // If the response is not OK, log the error and return an empty array
  if (!res.ok) {
      const errorText = await res.text();
      console.error(errorText);
      return [];
  } else {
      // If the response is OK, parse the JSON response and return it.
      const { generated } = await res.json();
      return generated
      // old return res.json();
  }
}