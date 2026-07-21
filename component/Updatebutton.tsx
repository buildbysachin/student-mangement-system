"use client"

import { updateUser } from "@/app/action/page";
import { SquarePen } from "lucide-react";
import { useState } from "react";

const UpdateModel = ({ user }: { user: any }) => {
    const [isUpdate, setIsUpdate] = useState(false)
    const inputStyle = "bg-slate-600 text-white p-2"
    return (
        <>
            <button onClick={() => { setIsUpdate(true) }}><SquarePen /></button>

            {isUpdate && (
                <div className="fixed inset-0 flex bg-black/60 justify-center items-center">
                    <form action={updateUser}
                        className="bg-white p-3 flex flex-col  md:w-1/2 gap-2 justify-center"
                    >
                        <input type="hidden"
                            name="id"
                            value={user._id.toString()} />

                        <input
                            type="text"
                            name="Name"
                            className={inputStyle}
                            defaultValue={user.name} />

                        <input
                            type="email"
                            name="email"
                            className={inputStyle}
                            defaultValue={user.email} />

                        <input
                            type="text"
                            name="phone"
                            className={inputStyle}
                            defaultValue={user.phone} />

                        <input
                            type="text"
                            name="age"
                            className={inputStyle}
                            defaultValue={user.age} />

                        <select
                            name="course"
                            className={inputStyle}
                            defaultValue={user.course}
                        >
                            <option value="BSC">BSC</option>
                            <option value="BCOM">BCOM</option>
                            <option value="BA">BA</option>
                            <option value="BCA">BCA</option>
                            <option value="BTECH">BTECH</option>
                            <option value="MA">MA</option>
                        </select>

                        <div className="flex justify-evenly text-lg">
                            <button
                                className="bg-red-500 rounded py-2 px-4 text-white"
                            >
                                submit
                            </button>
                            <button
                                className="bg-gray-500 rounded py-2 px-4 text-white"
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
export default UpdateModel;