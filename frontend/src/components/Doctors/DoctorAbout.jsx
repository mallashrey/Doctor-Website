
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About 
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Dr. Nick
                </span>
            </h3>
            <p>
            With a steadfast commitment to patient care and excellence in surgical practice, Dr. Nick is a board-certified surgeon renowned for his expertise and compassionate approach. Dr. Nick specializes in minimally invasive techniques, ensuring that you receive the most advanced care with the least amount of discomfort and downtime.
            </p>
        </div>

        {/* ======= Education Completed section ============ */}
        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education Completed</h3>

            <ul className="pt-4 md:p-5">

                {/* 1st list of educations  */}
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                        {formateDate('08-04-2020')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Balmain Hospital, Sydney.
                    </p>
                </li>
                {/* end 1st list of education */}
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                            {formateDate('10-09-2018')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">
                            Master in Surgeon
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Balmain Hospital, Sydney.
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                            {formateDate('12-04-2010')}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor ">
                            Bachelor in Surgeon
                        </p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Balmain Hospital, Sydney.
                    </p>
                </li>
            </ul>
        </div>
        {/*=============== END of Education Completed section ============= */}
        
        {/*=============== Experience  section ============= */}
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
                Experience
            </h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5 ">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("07-04-2010")} - {formateDate("08-13-2014")}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                        Sr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Sydney Hospital
                    </p>
                </li> 
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate("09-08-2008")} - {formateDate("06-04-2010")}
                    </span>
                    <p className="text-[15px] leading-6 font-medium text-textColor">
                        Jr. Surgeon
                    </p>
                    <p className="text-[14px] leading-5 font-medium text-textColor">
                        Sydney Hospital
                    </p>
                </li> 
            </ul>
        </div>

        {/*=============== END of Experience section ============= */}


    </div>

    
  )
}

export default DoctorAbout