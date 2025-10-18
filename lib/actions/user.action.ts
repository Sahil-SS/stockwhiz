"use server";

import { connectToDatabase } from "@/database/mongoose";

export const getAllUsersForNews=async()=>{
    try{
        const mongoose = await connectToDatabase();
        const db = mongoose.connection.db;
        if(!db) throw new Error("Database connection not established");

        const users = await db.collection("user").find(
            {email:{$exists:true, $ne:""}},
            {projection:{id:1,_id:1,email:1,country:1}}
        ).toArray();

        return users.filter((user)=>user.email && user.name).map((user)=>({
            id:user.id || user._id.toString() || "",
            email:user.email!,
            name:user.name!, 
        }));
    }catch(err){
        console.error("Error fetching users for newsletter:", err);
        return [];
    }
}