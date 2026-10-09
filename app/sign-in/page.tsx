"use client"

import toast from "react-hot-toast"
import { authClient } from "../lib/auth-client"
import React from "react"
import { google } from "better-auth"

const SingInPage = () => {

    const submitHandler = async (e:React.SubmitEvent<HTMLElement>) => {
       e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email : string ; password : string }
        console.log(user);
        
        const { data , error } = await authClient.signIn.email({
            ...user,
             callbackURL: "/"
        });

        if(data){
            console.log(data);
             toast.success("You Logged In Successfully")
        }

        if(error){
            console.log(error);
             toast.error("something went wrong")
        }  
    }    

    const googleSubmitHndler = async (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      
      const data = await authClient.signIn.social({
        provider : "google"
      })
       console.log(data);
       
    }

    const githubSubmitHndler = async (e:React.MouseEvent<HTMLButtonElement>) => {
       e.preventDefault();

       const data = await authClient.signIn.social({
        provider : "github"
       });

       console.log(data);
       
    }

    return(
        <>
        <div className="flex justify-center items-center">
             <form onSubmit={submitHandler}>
            <fieldset className="fieldset   rounded-box w-[500px]  p-4">
   <h1 className="font-bold text-2xl text-red-600 text-center">সাইন ইন </h1>

  <label className="label text-[16px]">ইমেইল</label>
  <input type="email" name="email" className="input w-full " placeholder="Email" />

  <label className="label text-[16px]">পাসওয়ার্ড</label>
  <input type="password" name="password"  className="input w-full " placeholder="Password" />

  <button className="btn btn-neutral bg-red-700 text-white mt-4 border-0">সাইন ইন করুন</button>
</fieldset>
         </form>
          <button className="btn btn-neutral bg-red-700 text-white mt-4 border-0" onClick={googleSubmitHndler}>সাইন ইন করুন Google দিয়ে</button>
          <button className="btn btn-neutral bg-red-700 text-white mt-4 border-0" onClick={githubSubmitHndler}>সাইন ইন করুন Github দিয়ে</button>
        </div>
        </>
        
    )
}
export default SingInPage