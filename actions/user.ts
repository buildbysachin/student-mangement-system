"use server"
import mongoose from "mongoose";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUser(formData:FormData){
    await connectDB()

    const name = formData.get("Name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const age = formData.get("age")
    const course = formData.get("course")
    
    console.log(formData.get("course"));
    await User.create({
        name,
        email,
        phone,
        age,
        course
    })

    console.log("User saved");

}

export async function updateUser(formData:FormData){
    await connectDB()

    const id = formData.get("id")
    const name = formData.get("Name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const age = formData.get("age")
    const course = formData.get("course")

    await User.findByIdAndUpdate(id,{
        name,
        email,
        phone,
        age,
        course
    })

    revalidatePath('/Details')

    redirect('/Details')
}

export async function deleteUser(formData:FormData){
    await connectDB()

    const id = formData.get("id")

    await User.findByIdAndDelete(id)

    revalidatePath('/Details')

    redirect('/Details')
}