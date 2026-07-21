import Link from "next/link";

const Home =()=>{
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="py-9">
        <h1 className="font-bold text-5xl text-center pt-3">Student Management System</h1>
      <p className="text-center text-2xl text-slate-400">A centralized platform for student administration</p>
      </div>
      <div className="flex justify-evenly md:text-3xl py-5 ">
        <h1 className="bg-slate-500 px-2 py-1 rounded">Total student</h1>
        <h1 className="bg-slate-500 px-2 py-1 rounded">active student</h1>
        <h1 className="bg-slate-500 px-2 py-1 rounded">system status</h1>
      </div>
      <div className="px-3 flex justify-evenly">
        <Link href="/Registration">
        <button className="bg-white text-slate-950 md:text-3xl font-bold py-1 px-2 rounded">
          Add Student
        </button>
        </Link>
        <Link href="/Details">
        <button className="bg-white text-slate-950 md:text-3xl font-bold py-1 px-2 rounded">
          view student details
        </button>
        </Link>
      </div>
    </div>
  )
}
export default Home;