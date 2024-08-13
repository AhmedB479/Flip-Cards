"use client";
import React from "react"
import Navbar from "./navbar"
import dynamic from "next/dynamic";
const Background = dynamic(() => import('./background'),{ssr:false})

export default function Onboarding () {
    return ( 
        
        <div>
           <div style={{ position: 'fixed', zIndex: '1' }}>
                <Background />
                <div style={{ position: 'fixed', zIndex: '2' }}>
            <Navbar />
        </div>
            </div>
            </div>

        
    );
}