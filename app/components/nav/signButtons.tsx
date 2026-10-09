"use client"

import Link from "next/link"
import { authClient } from "@/app/lib/auth-client"

const SignButtons =  () => {

     const { data : session  , error } =  authClient.useSession()
     
     const existing = session?.user
     
     console.log('session',existing);

     const signOutHandler = async () => {
         await authClient.signOut() 
     }

    return(
        <>
          {existing ? <div>
              <img src={existing.image as string} alt="profile_picture"/>
            <h1>{existing.name} Is Logged In</h1>
            <button className="btn btn-neutral bg-red-600 border-0" onClick={signOutHandler}>সাইন আউট</button>
          </div> : <div>  
     <Link href={'/sign-in'}>
     <button className="btn btn-outline text-red-600 hover:bg-amber-50 ">সাইন ইন</button>
     </Link>   
    
    <Link href={'/sign-up'}>
    <button className="btn btn-neutral bg-red-600 border-0">সাইন আপ</button>
    </Link>
    </div>}
        </>
    )
}

export default SignButtons