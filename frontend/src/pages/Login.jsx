
import { useContext, useState } from 'react';
import { BASE_URL } from '../../config';
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import {AuthContext} from '../context/AuthContext.jsx';
import  HashLoader  from 'react-spinners/HashLoader';

const Login = () => {

  const [formData, setFormData] =useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {dispatch} = useContext(AuthContext)

  const handleInputChange = (e) => {
    setFormData({
      ...formData, [e.target.name] : e.target.value
    })
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)

    try{
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
      })
      
      const result = await res.json();

      if(!res.ok){
        throw new Error(result.message) 
      }

      dispatch({
        type:'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      })

      console.log(result, 'login data')

      setLoading(false)
      toast.success(result.message)
      navigate('/home')

    } catch (error){
      toast.error(error.message)
      setLoading(false) 
    }
  }

  return (
    <section className="px-5 lg:px-0">
      <div className="shadow-md w-full mx-auto rounded-lg max-w-[570px] md:p-10">
        <h3 className="text-headingColor text-[22px] text-center leading-9 font-bold mb-10">
          Hello!<span className="text-primaryColor">Welcome</span>
          Back 🎉
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              name="email"
              type='email'
              placeholder="Enter your email"
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor
               text-[22px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer mb-2"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="w-full py-3  border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor 
              text-[22px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer mb-2"
              onChange={handleInputChange}
              required
              value={formData.password}
            />
          </div>
          <div className="mt-7">
            <button className="btn bg-primaryColor text-white text-[18px] leading-[30px] w-full rounded-lg px-4" type="submit">
              { loading ? <HashLoader size={25} color="#fff"/>: "Login"}
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don't have an account?
            <Link to="/register" className='text-primaryColor font-medium ml-1'>Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login;
