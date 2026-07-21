import DeleteModel from "@/component/Deletebutton";
import UpdateModel from "@/component/Updatebutton";
import connectDB from "@/lib/db"
import User from "@/models/User"
import mongoose from "mongoose";

const Details = async (
    {searchParams,}:{
        searchParams?:Promise<{ query?:string; course?:string}>
    }
) => {
    const resolvedParams = await searchParams;
    const query = resolvedParams?.query || "";
    const course = resolvedParams?.course || "";
    await connectDB()

    const filterQuery:any = {};

    if(query){
        filterQuery.$or = [
            {name:{$regex:query, $options: "i" }},
            {email:{$regex:query, $options: "i"}}
        ]
    }

    if(course  && course !== "All"){
        filterQuery.course = course;
    }

    const users = await User.find(filterQuery)
    return (
        <div className="bg-slate-600 min-h-screen p-3 text-white">
            <div className="flex md:justify-center overflow-x-auto">
                <table
                    className="border-separate border-spacing-x-4 border-spacing-y-2 border"
                >
                    <thead>
                        <tr>
                            <th className="border px-2">name</th>
                            <th className="border px-2">email</th>
                            <th className="border">phone</th>
                            <th className="border px-2">age</th>
                            <th className="border px-2">course</th>
                            <th className="border px-2">Updates</th>
                            <th className="border px-2">Deletion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length >0 ? (
                            users.map((user: any) => {
                            return (
                                <tr
                                    key={user._id.toString()}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.age}</td>
                                    <td>{user.course}</td>
                                    <td className=" p-1 rounded">
                                       <UpdateModel user={JSON.parse(JSON.stringify(user))}/>
                                    </td>
                                    <td className="bg-red-500 p-1 rounded">
                                        <DeleteModel id={user._id.toString()}/>
                                    </td>
                                </tr>
                            )
                        })
                        ):(
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-gray-300">
                                    No matching student found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Details;