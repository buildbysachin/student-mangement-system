"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="bg-slate-400 flex justify-between items-center p-2">
            <h1 className="font-bold md:text-2xl">Student Mangement System</h1>
            <div className="hidden text-lg text-gray-900 md:flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/Registration">Registration</Link>
                <Link href="/Details">Details</Link>
            </div>
            <div className="flex pr-3 md:hidden">
                <button onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? <X /> : <Menu />}</button>
            </div>
            {isOpen && (
                <div className="bg-slate-500 fixed inset-0 w-fit flex flex-col md:hidden gap-3 p-2 text-slate-950 font-semibold">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/Registration" onClick={() => setIsOpen(false)}>Registration</Link>
                    <Link href="/Details" onClick={() => setIsOpen(false)}>Details</Link>
                </div>
            )}
        </div>
    )
}
export default Navbar;