"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const SigninButton =  () => {
    const { data: session,status } =  useSession();
    // console.log(status,session?.user?.email);
        // console.log(session?.user.)
    if (status === 'authenticated') {
        return (
            <div className="flex gap-4 ml-auto">
                <p className="text-sky-600">{session?.user?.user_id}</p>
                <button onClick={() => signOut()} className="text-red-600">
                    Sign Out
                </button>
            </div>
        );
    }
    return (
        <button onClick={() => signIn()} className="text-green-600 ml-auto">
            Sign In
        </button>
    );
};

export default SigninButton;