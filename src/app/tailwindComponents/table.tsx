function CellTag ( { color = 'black' , value } ) {
    return (
      <span className={`text-black p-1 px-4 rounded-md`}> { value } </span>
    )
}

export default function TailwindTable({ title , headings , tableData }) {
    return (
      <div className="mb-9 px-4 py-5 sm:px-6 lg:px-8 shadow-lg rounded-md">

        <h1 className="text-2xl pt-5"> { title } </h1>
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    { headings.map( ( head ) =>
                        <th key={ head } scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                            { head }
                        </th>
                    )}
                  </tr>
                </thead>
                <tbody className=" bg-white"> 
                  
                  { tableData.map( ( data , index ) => 
                    <tr key={`${title}-${index}-index`} className="even:bg-gray-50">
                          { data.map( ( row ) =>
                             <td key={ row } className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900"> { row } </td>
                          )}
                    </tr>   
                   )}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }