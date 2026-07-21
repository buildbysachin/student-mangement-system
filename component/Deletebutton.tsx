"use client"

import { deleteUser } from "../actions/user";
import { useState } from "react";

const DeleteModel = (
    { id }: { id: string }
) => {
    const [isDelete, setIsDelete] = useState(false)
    return (
        <>
            <button onClick={() => { setIsDelete(true) }}>Delete</button>
            {isDelete && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white p-10 flex flex-col gap-8">
                        <div className="text-slate-800 font-semibold text-xl">
                            <h1>Are you shure to delete your account</h1>
                        </div>
                        <div>
                            <form action={deleteUser}>
                                <input type="hidden"
                                name="id"
                                value={id} />
                                <div className="flex gap-3">
                                    <button
                                        className="bg-red-600 px-2 rounded text-lg"
                                        type="submit">
                                        Delete
                                    </button>
                                    <button
                                        className="bg-gray-600 px-2 rounded text-lg"
                                        onClick={() => { setIsDelete(false) }}>cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default DeleteModel;