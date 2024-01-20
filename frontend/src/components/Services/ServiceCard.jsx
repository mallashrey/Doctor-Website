
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({item, index}) => {

    const {name, desc: description, bgColor, textColor} = item /*the name, desc.. needs to be the same as those coming from services.js for the destructuring to work or do desc:description to set own name*/ 

  return (
    <div className='py-[30px] px-3 lg:px-5'>
    <h2 className='text-[26px] leading-9 text-headingColor font-[700] '>{name}</h2>  {/* this returns the names and description such as Mental Health */}
    <p className='text-[16px] leading-7 font-[400] text-textColor mt-4 '>{description}</p>

    <div className="flex items-center justify-between mt-[30px]">
        <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid
        border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor
        hover:border-none'>
            <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        {/* this returns the right arrows*/}
       
        <span className='w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px]
        font-[600]' style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:"6px 0 0 6px" }}>
            {index + 1}
        </span>  
        {/* this creates the colourful numbering on the bottom right side of the service card section yellow, purple, green*/}
    </div>
</div>

  )
}

export default ServiceCard