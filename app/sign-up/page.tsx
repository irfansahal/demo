"use client"

import { authClient} from "../lib/auth-client"
import toast from "react-hot-toast";


const SignUpPage =  () => {

    const submitHandler = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email : string;  password : string ;
         name : string ;
         image : string ; }

         
         const { data , error } = await authClient.signUp.email({
             email : user.email , // user email address
             password : user.password, // user password -> min 8 characters by default
             name : user.name , // user display name
             image : user.image, //  User image URL (optional)
             callbackURL: "/"
            });
            console.log('.....user',user);        
            
        if(data){
           toast.success("You rigistared successfully");
           console.log(data)
        }
        if(error){
           console.log(error);    
        }
    }
  
    

    return(
        <>
        <h1>This is sing up page</h1>
        <div className="flex justify-center items-center">
             <form onSubmit={submitHandler}>
            <fieldset className="fieldset   rounded-box w-[500px]  p-4">
   <h1 className="font-bold text-2xl text-red-600 text-center">সাইন আপ </h1>

  <label className="label text-[16px]">নাম</label>
  <input type="text" name="name" className="input w-full " placeholder="Name" />

  <label className="label text-[16px]">ইমেইল</label>
  <input type="email" name="email" className="input w-full " placeholder="Email" />

  <label className="label text-[16px]">Image</label>
  <input   name="image"  type="url" className="input w-full " placeholder="image" />

  <label className="label text-[16px]">পাসওয়ার্ড</label>
  <input type="password" name="password"  className="input w-full " placeholder="Password" />

  <button className="btn btn-neutral bg-red-700 text-white mt-4 border-0" type="submit">সাইন আপ করুন</button>
</fieldset>
         </form>
        </div>
        </>
    )
}
export default SignUpPage