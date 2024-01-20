import React from 'react'

/* Creates the sidepanel next to the doctor's picture in doctorDetails */

const SidePanel = () => {
  return (
    <div className="shadow-panel p-3 lg:p-5 rounded-md">
        <div className="flex items-center justify-between ">
            <p className="text__para mt-0 font-semibold">Booking Price</p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8
            text-headingColor font-bold">
                $100 AUD
            </span>
        </div>
        <div className="mt-[30px]">
            <div className="text__para mt-0 font-semibold text-headingColor">
                <p>Available Time Slots:</p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Sunday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:00 PM
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Teusday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            6:00 PM - 11:00 PM
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Thursday
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            3:00 PM - 9:00 PM
                        </p>
                    </li>
                </ul>
            </div>
            <button className="btn px-2 w-full rounded-md">
                Book Appointment
            </button>
        </div>
    </div>
  )
}

export default SidePanel