import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';

const socialLinks = [
  {
    path:"https://github.com/mallashrey",
  icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com/malla_1949/",
  icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  } 
]

const quicklinks01 = [
  {
    path:"/home",
    display:"Home"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog"
  }

]

const quicklinks02 = [
  {
    path:"/doctors",
    display:"Find a Doctor"
  },
  {
    path:"/doctors",
    display:"Request an Appointment"
  },
  {
    path:"/",
    display:"Find a Location"
  },
  {
    path:"/",
    display:"Get a Opinion"
  }

]

const quicklinks03 = [
  {
    path:"/",
    display:"Donate"
  },
  {
    path:"/contact",
    display:"Contact Us"
  }
]


const Footer = () => {
  const year = new Date().getFullYear

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          
          {/* Medicare, copyright and social LINKs  in the footer */}
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>
              Shreyas Malla Portfolio
            </p>
            <div className='flex items-center gap-3 mt-4 '>
              {socialLinks.map((link, index)=>{
                return <Link to={link.path} key={index} className='w-9 h-9 border-solid border-[#181A1E] 
                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>   {/*creates a blue when hovering */}
                  {link.icon}
                  
                </Link>
                  
              })}
            </div>
          </div>
          {/* END of Medicare, copyright and social LINKs  in the footer */}

        {/* QuickLinks in the footer */}
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mt-6 text-headingColor'>
            Quick Links
          </h2>

          <ul>
            {/* maps the QuickLinks below the QuickLinks heading */}
            {quicklinks01.map((item, index) =>{
              return <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor '>{item.display}</Link>
              </li>})}
          </ul>

        </div>
        {/* END of QuickLinks in the footer */}

        {/* I Want to in the footer */}
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mt-6 text-headingColor'>
            I Want To
          </h2>

          <ul>
            {/* maps the QuickLinks below the QuickLinks heading */}
            {quicklinks02.map((item, index) =>{
              return <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor '>{item.display}</Link>
              </li>})}
          </ul>

        </div>
        {/* END of I want to in the footer */}

        {/* Support in the footer */}
        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mt-6 text-headingColor'>
            Support
          </h2>

          <ul>
            {/* maps the QuickLinks below the QuickLinks heading */}
            {quicklinks03.map((item, index) =>{
              return <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor '>{item.display}</Link>
              </li>})}
          </ul>

        </div>
        {/* END of Support in the footer */}

        </div>
      </div>
    </footer>
  )
}

export default Footer