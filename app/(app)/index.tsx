"use client";
import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import { NetworkErrorModal } from "../components/headlessUiComponents/networkErrorModal";
export default function  AppLayoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    const {fetchAuthenticatedUser,isLoading,isAuthenticated,networkError,setNetworkError}=useAuthStore()
      useEffect(()=>{
        fetchAuthenticatedUser()
      },[])
    if (isLoading) {
        return (
          <div className="w-full h-screen flex items-center justify-center">
            <p className="txt-2xl title-font2 text-black">Loading...</p>
          </div>
        );
    }else{
      return (
        <>
        {children}
        <NetworkErrorModal isOpen={networkError} onClose={()=>setNetworkError(false)} onRetry={fetchAuthenticatedUser}/>
        </>
      )
    }
  
}
