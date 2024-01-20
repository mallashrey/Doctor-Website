
import Faqitem from './FaqItem';
import { faqs } from './../../assets/data/faqs';


const FaqList = () => {
    return (
        <ul className='mt-[38px]'>
            {faqs.map((item,index)=>{
                return <Faqitem item={item} key={index} />
            })}
        </ul>        
    )
}

export default FaqList