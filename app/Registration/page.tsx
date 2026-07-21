import { createUser } from "../action/page";

const Registration =()=>{
    const inputStyle = "bg-slate-600 text-white p-2"
    return (
        <div className="bg-slate-700 min-h-screen p-10 text-lg">
            <div className="flex justify-center">
                <form action={createUser}
            className="bg-white p-3 flex flex-col  md:w-1/2 gap-2 justify-center"
            >
                <input 
                type="text"
                name="Name"
                className={inputStyle}
                placeholder="Enter Name" />

                <input 
                type="email"
                name="email"
                className={inputStyle}
                placeholder="Enter email" />

                <input 
                type="text"
                name="phone"
                className={inputStyle}
                placeholder="Enter phone" />

                <input 
                type="text"
                name="age"
                className={inputStyle}
                placeholder="Enter age" />

                <select 
                name="course"
                className={inputStyle}>
                    <option value="BSC">BSC</option>
                    <option value="BCOM">BCOM</option>
                    <option value="BA">BA</option>
                    <option value="BCA">BCA</option>
                    <option value="BTECH">BTECH</option>
                    <option value="MA">MA</option>
                </select>

                <button
                className="bg-red-500 rounded py-2 text-white"
                >
                    submit
                </button>
            </form>
            </div>
        </div>
    )
}
export default Registration;