"use client"

import { useState } from "react"
import { Code,  Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import TeamMemberCheckDialogButton from "./team-member-check-dialog-button"







export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href={"/"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Image src={"/logo.png"} alt="J-JParams Logo" className="h-8 w-8" height={32} width={32}/>
                            <span className="text-xl font-bold">J-JParams</span>
                        </Link>
                        <div>
                            <TeamMemberCheckDialogButton 
                                label="Join Us !"
                                accentClassName="bg-blue-500"
                                heightClassName="h-13"
                                forceAnswer={true}
                            />
                        </div>
                </div>
            </div>
        </nav>
    )
}