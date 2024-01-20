import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [reviewText, setReviewText] = useState("")
    
    const HandleSubmitReview = async (e) => {
        e.preventDefault()
        // TODO: use API
    }

  return (
    <form action='' >
        {/* Start of rating Experince  */}

        <div>
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 ">
            How would you rate the overall experience?*
            </h3>
        {/* creates the 5 stars below in the feedback section that we can hover over */}
            <div>
                {[...Array(5).keys()].map((_,index)=>{
                    index += 1;
                    return (
                        <button key={index} type="button"
                        className={`${index <= (rating || hover) ? 'text-yellowColor' : 'text-gray-400' } 
                        bg-transparent border-none outline-none text-[22px] cursor-pointer`} /*Condition for the stars showing where mouse is hovering */
                        onClick={()=> setRating(index)}
                         onMouseEnter={()=> setHover(index)}
                         onMouseLeave={()=> setHover(rating)}
                         onDoubleClick={()=>{setHover(0); setRating(0) }}
                        >
                            <span>
                                <AiFillStar/>
                            </span>                
                        </button>
                    )
                    })
                }
            </div>
        </div>

        {/* End of rating Experince  */} 

        <div className="mt-[30px] ">
            <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0 ">
                Share your feedback and suggestions*
            </h3>
            <textarea  className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor
            w-full px-4 py-3 rounded-md' rows={5}
            placeholder='Write your message' onChange={(e)=>setReviewText(e.target.value)}></textarea>
        </div>  
        <button type='submit' onChange={HandleSubmitReview} className='btn' >
            Submit Feedback
        </button>
    </form>
  )
}

export default FeedbackForm