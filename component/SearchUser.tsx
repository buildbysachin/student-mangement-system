"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const SearchUser = () => {
    const Pathname = usePathname()
    const SearchParams = useSearchParams()
    const {replace} = useRouter()

    const HandleSearch = (term:string) =>{
        const params = new URLSearchParams(SearchParams);
        if(term){
            params.set("query", term)
        }
        else{
            params.delete("query")
        }
        replace(`${Pathname}?${params.toString()}`)
    }

    const HandleCourse =(course:string)=>{
        const params = new URLSearchParams(SearchParams);
        if(course && course !== "All"){
            params.set("course", course)
        }
        else {
            params.delete("course")
        }
        replace(`${Pathname}?${params.toString()}`);
    }

    return (
        <div className="bg-gray-800 py-2 px-3 flex justify-center">
            <div className=" flex gap-2">
                <input
                    className="bg-white rounded p-1"
                    type="text"
                    placeholder="Enter user name"
                    onChange={(e)=>HandleSearch(e.target.value)}
                />

                <select
                    name="course"
                    className="bg-gray-400"
                    onChange={(e)=> HandleCourse(e.target.value)}
                    >
                    <option value="All">All</option>
                    <option value="BSC">BSC</option>
                    <option value="BCOM">BCOM</option>
                    <option value="BA">BA</option>
                    <option value="BCA">BCA</option>
                    <option value="BTECH">BTECH</option>
                    <option value="MA">MA</option>
                </select>
            </div>
        </div>
    )
}
export default SearchUser;