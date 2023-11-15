import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillMail} from 'react-icons/ai'
import {FaJava,FaPhp} from 'react-icons/fa'
import Image from 'next/image'
import ylogo from '../public/logo-dale.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import webkece from '../public/webkece.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import des1 from '../public/des1.png'
import {useState} from 'react'

//import image development

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark': ""}>
      <Head>
        <title>Yusuf K. Muhammad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800" >
        <section className="min-h-screen">

        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons dark:text-teal-600">Y~</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-xl dark:text-white" onClick={()=>setDarkMode(!darkMode)} /></li>
            <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-teal-600  bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
          </ul>
        </nav>

        <div className="text-center px-10 py-5">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl font-burtons">Yusuf K. Muhammad</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-blue-100">Engineer and Artisan</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-blue-100">
          As a Software Engineer and designer, I am passionate about creating beautiful and functional digital experiences. With a keen eye for detail and a love for problem-solving, I thrive on bringing complex ideas to life.
          </p>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-600  rounded-full w-80 h-80 mb-10 overflow-hidden md:h-96 md:w-96">
          {/* <Image src={ylogo} fill className="rounded-full" alt={''}/> */}
        </div>

        <div className="text-4xl flex justify-center gap-16 pb-10 text-gray-600 dark:text-white">
          <a href="twitter.com/kyusufm" className="hover:text-blue-400"><AiFillTwitterCircle /></a>
          <a href="linkedin.com/in/kyusufm" className="hover:text-blue-600"><AiFillLinkedin /></a>
          <a href="#" className="hover:text-red-600"><AiFillYoutube /></a>
          <a href="#" className="hover:text-red-600"><AiFillMail /></a>
          
          
          
        </div>

        </section>
        {/* comment */}

        <section className="dark:shadow-teal-600 dark:text-teal-50">
          <div >
          <h3 className="text-3xl py-1 max-w-xl mx-auto font-burtons">Experiences</h3>

            <ul className="text-md py-2 leading-8 text-gray-80 max-w-xl mx-auto ">

            <li className="text-md ">Freelance As <a href="#" target="_blank" className="text-teal-600 px-2 py-1 rounded-md ">Engineer and Designer</a>, 2012 ~ Present</li>
              <li className="text-md ">Sr. Software Engineer @ <a href="connexiocloud.com" target="_blank" className="bg-gradient-to-r from-cyan-500 to-teal-600  bg-cyan-500 text-white px-2 py-1 rounded-md ">CONNEXIOCLOUD</a> , NEW YORK ~ 2022</li>
              <li className="text-md ">Lead Engineer @ <a href="kecenusantara.id" target="_blank" className="text-teal-600">PT. Kece Nusantara</a> , Jakarta ~ 2017-2022</li>
              <li className="text-md ">Lead Engineer @ <a href="#" target="_blank" className="text-teal-600">Inaship</a> , Jakarta ~ 2016-2017</li>
              <li className="text-md ">Sr. Web Developer @ <a href="aqi.co.id" target="_blank" className="text-teal-600">Asia Quest Indonesia</a>  ~ 2014-2016 </li>
              <li className="text-md ">Instructor @ <a href="kemdikbud.go.id" target="_blank" className="text-teal-600">Indonesia Ministry of Cultural & Education</a>  ~ 2013-2014 </li>
              <li className="text-md ">IT Developer @ <a href="jaringanprima.co.id" target="_blank" className="text-teal-600"> PT. Rintis Sejahtera (Jaringan Prima)</a> ~ 2013-2013 </li>
            </ul>

          </div>
        </section>

        <section className="text-gray-800 pt-8 dark:text-teal-100">
          <div className="">
            <h3 className="text-3xl py-1 max-w-xl mx-auto font-burtons"> Services I Offer</h3>
            <p className="text-md py-2 leading-8 max-w-xl mx-auto">
            Whether you need a new website, a custom application, or a unique design, I am here to help. I have a diverse skill set that includes web development, graphic design, and user experience design, and I am always looking for new challenges to tackle.
            <br />
            If you`re looking for a skilled and experienced developer and designer to help bring your vision to life, please don`t hesitate to contact me. I would love the opportunity to work with you and help take your project to the next level.
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className=" shadow-lg p-10 rounded-xl my-10 text-gray-800 basis-1/3 dark:shadow-teal-600 dark:text-teal-50" >
              <Image src={design} width={100} height={100} alt={''} />
              <h3 className="text-2xl pt-8 pb-2 font-burtons">Beautiful Design</h3>
              <p className="py-2">Whether you need a custom application, a responsive website, or a unique user interface, I am here to help. I have a keen eye for detail and a love for problem-solving, and I am always looking for new challenges to tackle.</p>
              <h4 className="pt-4 text-teal-600 font-black">Tools i used</h4>
              <p className="py-1">Inkscape, Figma</p>
            </div>

            <div className=" shadow-lg p-10 rounded-xl my-10 basis-1/3 dark:shadow-teal-600 dark:text-teal-50" >
              <Image src={code} width={100} height={100} alt={''} />
              <h3 className="text-2xl pt-8 pb-2 font-burtons">Applications Development</h3>
              <p className="py-2">If you`re looking for a skilled and experienced software engineer and designer to help bring your vision to life, please don`t hesitate to contact me.</p>
              <h4 className="pt-4 text-teal-600 font-black">Tools i used</h4>
              <p className="text-gray-800 py-1">
                JAVA, Php, Laravel, MERN-stack, Springboot
              </p>
            </div>

            <div className=" shadow-lg p-10 rounded-xl my-10 basis-1/3 dark:shadow-teal-600 dark:text-teal-50"  >
              <Image src={consulting} width={100} height={100} alt={''} />
              
              <h3 className="text-2xl pt-8 pb-2 font-burtons">Consulting</h3>
              <p className="py-2">I offer expert services for website and application development. With years of experience and a passion for technology, I am dedicated to helping businesses achieve their goals. Whether you need a new website or are looking to improve an existing application, I can provide the personalized consultation and support you need.</p>
             
            </div>
          </div>

        </section>

        


        <section className="text-gray-800 dark:text-teal-100">
        <div>
            <h3 className="text-3xl py-1 max-w-xl mx-auto font-burtons">My Works</h3>
            <p className="text-md py-2 leading-8 text-gray-80 max-w-xl mx-auto">
            As a web developer and designer with years of experience, I am passionate about creating beautiful and functional websites that help businesses and individuals achieve their goals online. With a focus on user experience and modern design, I strive to deliver high-quality products that not only look great, but are also easy to use and navigate.
            </p>

            <p className="text-md py-2 leading-8 text-gray-80 max-w-xl mx-auto">
            I offer services to create your product or websites, and also teach and guide you.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web1} alt={'Develop web-application of SAMSAT East Borneo'} className="rounded-lg object-cover" />
            </div>
            {/* <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web2} alt={''} className="rounded-lg object-cover" />
            </div> */}
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web3} alt={''} className="rounded-lg object-cover" />
            </div>
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web4} alt={''} className="rounded-lg object-cover" />
            </div>
            {/* <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web5} alt={''} className="rounded-lg object-cover" />
            </div> */}
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={web6} alt={''} className="rounded-lg object-cover" />
            </div>
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={webkece} alt={''} className="rounded-lg object-cover" />
            </div>
            <div className="basis-1/4 flex-1 drop-shadow-md ">
              <Image src={des1} alt={''} className="rounded-lg object-cover" />
            </div>
          </div>

        </section>

      </main>

      
    </div>
  )
}
