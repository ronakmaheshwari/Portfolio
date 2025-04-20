'use client'
import Link from "next/link"
import { Terminal, ExternalLink } from "lucide-react"
import Navbar from "@/components/ui/Navbar"


export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-green-900 p-4 pb-36 md:p-8 font-mono flex justify-center items-center">
      <div className="max-w-2xl w-full">
        <Navbar />

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-green-900 border-b border-green-800 pb-2 hover:text-white hover:bg-green-400 p-1 ">projects</h2>
            <div className="grid gap-6">

            <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/ronakmaheshwari/second-brain.git"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Second-brain</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">a sleek personal knowledge system that helps you effortlessly capture, organize, and retrieve ideas, notes, and tasks.</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">ReactJs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Express</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Prisma</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/ronakmaheshwari/hirely"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Hirely</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">a modern hiring platform that seamlessly connects employers and candidates through a fast, intuitive recruitment experience.</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">ShadCn</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">ReactJs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Typescript</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/waliilaw/Chaser-final"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Craddle</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">A minimalist web app that fosters deep focus with a clean, zen-like interface—perfect for reading, writing, or coding without distractions.</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">ReactJs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Postgres</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Zustand</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "https://github.com/ronakmaheshwari/paybay"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Paybay</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">A full-stack digital wallet app for seamless, secure money transfers and balance management—built with modern web technologies. {"(wallet management app)"}</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">Javascript</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">React</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "#"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Imagine</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">An AI image generator that provides custom prompts or even take prompts from the user (intended to be the clone of PhotoAI)</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">TailwindCSS</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Typescript</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "#"} >
            
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Valentino</h3>
                    <Link href="#" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">You enter your username and the Twitter API fetch your profile and pass it on to Gemini API which has prompt to comment on the user's Posts, PFP, username</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">Nextjs</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Twitter API</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">TypeScript</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 p-4 bg-green-900/10 rounded-lg hover:bg-green-900/20 transition-colors flex cursor-pointer " onClick={() => window.location.href = "#"} >
                {/* <Image src="/rangers.webp" className="w-[120px] h-[120px] bg-green-900/20 rounded-lg mr-4 mt-6 md:mt-2 object-cover" width={160} height={160} alt="pic"/> */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-green-400 font-bold">Red Ranger</h3>
                    <Link href="https://github.com/waliilaw/Power-Rangers-FRONTEND--PUBLIC" className="text-green-900 hover:text-green-400">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm pt-2">Use Twitter's API to allow users to fetch their profile details (e.g., username, profile picture) by entering their X username. This information can be used to assign a Ranger to the user</p>
                  <div className="flex flex-wrap gap-2 text-xs pt-5">
                    <span className="bg-green-900/20 px-2 py-1 rounded">React</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">TypeScript</span>
                    <span className="bg-green-900/20 px-2 py-1 rounded">Kinde</span>
                  </div>
                </div>
              </div>
      
          </div>
          </section>
        </div>
        
      </div>
      
    </main>
  )
}

