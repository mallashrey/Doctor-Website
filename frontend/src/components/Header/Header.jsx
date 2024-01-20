import { useEffect, useRef, useContext} from 'react';
import React from 'react'
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from 'react-router-dom';
import {BiMenu} from 'react-icons/bi';
import { AuthContext } from '../../context/AuthContext';
import avatar from '../../assets/images/doctor-img01.png'

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }

]

const Header = () => {

  const headerRef = useRef(null) /*In React, useRef is a hook that allows you to persistently store a mutable value across re-renders of a component without causing additional renders when its value changes.*/
  const menuRef = useRef(null)   /* headerRef & menuref=This is a ref created by calling useRef(). It's used to get a reference to the header/menu DOM element in your component, allowing you to directly manipulate the element */
  const {user, role, token} = useContext(AuthContext)

  /* Before using headerRef.current, check if it is not null. This is especially important because the ref might not be set at the time your scroll event handler runs. */
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
        if (headerRef.current) {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add("sticky__header");
            } else {
                headerRef.current.classList.remove("sticky__header");
            }
        }
    });
  };


  useEffect(()=>{  /*useEffect is a hook that runs side effects in a functional component. Side effects can be anything that reaches outside of the component to interact with the outside world, like fetching data, directly manipulating the DOM, setting up subscriptions, etc. */
    handleStickyHeader(); /*handleStickyHeader(); is called when the component mounts, due to the empty dependency array [], which makes this effect run only once. handleStickyHeader is a function that adds an event listener to the window object that listens for scroll events. */
    return ()=> window.removeEventListener('scroll', handleStickyHeader); /*The return function () => window.removeEventListener('scroll', handleStickyHeader); is a cleanup function that React will run when the component is unmounted. This is important for preventing memory leaks by removing the event listener when the component is no longer in use. */
  });

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu'); /*when called, will toggle the class show__menu on the DOM element that menuRef is referencing.

  menuRef is a ref object created by the useRef hook, intended to reference a menu DOM element in your component.
  menuRef.current accesses the current reference of menuRef, which should be the menu DOM element after the component has mounted.
  classList is a property that provides methods to add, remove, and toggle CSS classes on an element.
  toggle is a method on classList that will add the class if it's not present, or remove it if it is. */


  return (
    <header className='header flex items-center' ref={headerRef}> {/*useRef: This hook creates a ref object with a current property that can be attached to a React element via the ref attribute. The value inside ref.current persists for the lifetime of the component.*/}
      <div className="container">
        <div className="flex items-center justify-between">
          {/*logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/*Menu*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link,index)=> <li key={index}>
                  <NavLink to={link.path} className={navClass=> navClass.isActive /* When you use NavLink, it automatically receives a prop called navClass (or navData, or any other name you give it) which is an object containing information about the navigation state of that link. One of the properties on this object is isActive,*/
                  ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                  :"text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>{link.display}</NavLink>
                </li> )
              }
            </ul>
          </div>
          
          {/* nav right */}
          <div className="flex items-center gap-4">
            {/* show logo if logged in else the login button */}
            {
              token && user ?  
              <div>
                <Link to={`${role==='doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer' >
                    <img src={avatar} className='w-full rounded-full' />
                  </figure>
                  
                </Link>
              </div> :

              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                flex items-center rounded-[50px]' >Login</button>
              </Link>
            }

            <span className='md:hidden' onClick={toggleMenu} >
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header