import {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const FaqItem = ({item}) => {
    const[isOpen, setIsOpen] = useState(false)
    const toggleAccording = ()=>{  {/* to create a toggle option when clicked in the box to change signs */}
        setIsOpen(!isOpen)
    }

  return (
    
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#d9dce2] mb-5
    cursor-pointer'> {/* div styling for the faq questions such as the rounded boxes that contain them */}
        
        <div className="flex items-center justify-between gap-5" onClick={toggleAccording} >
            <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
                {item.question}
            </h4>

            {/* the backtick `` is for inputting conditional when isOpen true, it sets a blue color to the square box*/}
            <div className={`${isOpen && "bg-primaryColor text-white border-none"} 
            w-7 h-7 lg:w-8 lg:h8 border border-solid border-[#141f21] rounded flex
            items-center justify-center `} > {/* creates the square boxes inside on the right */}
                {isOpen? <AiOutlineMinus/> : <AiOutlinePlus/>} {/* in the begining, isOpen is false so plus sign appears */}
            </div>
        </div>

        {/* Below create a content for the FAQ section. When clicked/isOpen = true, it will open */}
        {isOpen && <div className="mt-4">
        <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[480] text-textColor '>{item.content}</p>
        </div>}
            
        

    </div>
  )
}

export default FaqItem