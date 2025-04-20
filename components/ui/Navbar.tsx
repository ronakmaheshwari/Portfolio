import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <nav className="flex items-center gap-6 text-sm mb-8">
            <Terminal className="w-5 h-5" />
            <Link href="/" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
                ~/home
            </Link>
            <Link href="/stacks" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
                ./stacks
            </Link>
            <Link href="/projects" className="hover:text-white hover:bg-green-400 p-1 transition-colors">
                ./projects
            </Link>
            <Link href="/wallet" className="text-white bg-green-400 p-1 transition-colors">
                ./..
            </Link>
            </nav>
        </>
    )
}