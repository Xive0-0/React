import Image from 'next/image'
import Head from 'next/head';
import{BsFillMoonStarsFill}from 'react-icons/bs'
import{AiFillTwitterCircle}from "react-icons/ai"
import{AiFillLinkedin}from "react-icons/ai"
import{AiFillYoutube}from "react-icons/ai"
import deved from "../../public/dev-ed-wave.png"

export default function Home() {
  return (
    <div>
      <>
        <title>stive bamouni</title>
       <meta nome="descripion"></meta>
       <link rel="icon" href="favicon.ico" /> 
       <main className="bg-white px-10">
          <section className="mid-h-screen"> 
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className="text-xl font-burtons">developer</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
                </li>
                <li>
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="">Resume</a></li>

              </ul>
            </nav>
            <div className="text-center p-10 ">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">bamouni stive</h2>
              <h3 className='text-5xl py-2'>junior developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 '>d by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React fea</p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube/>
              
            </div>
            <div className="">
              <Image src={deved}/>

            </div>
          </section>
       </main>
      </>
    </div>
    
  );
}
