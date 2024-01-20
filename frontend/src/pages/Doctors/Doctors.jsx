import DoctorCard from './../../components/Doctors/DoctorCard';
import { doctors } from './../../assets/data/doctors';
import Testimonial from '../../components/Testimonial/Testimonial';


const Doctors = () => {
  return (
    <>
    {/*=========== FIND a doctor section============= */}
    <section className='bg-[#fff9ea] '>
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md
        flex items-center justify-between">

          {/* Input field to search for doctor */}
          <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer' placeholder="Search Doctor"/>

          <button className='btn mt-0 rounded-[0px] rounded-r-md '>Search</button>
        </div>
          
      </div>
    </section>
    {/* =========end of FIND a doctor section ===========*/}

    {/*============= Doctors copies from doctorList============= */}
    <section>
      <div className="container">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {doctors.map((doctor)=>{
            return <DoctorCard key={doctor.id} doctor={doctor}/>
        })}
    </div>
      </div>
    </section>
    {/*============= End Doctors copied from doctorList============= */}

    {/* =============Testimonial Section coped from Home ================= */}
    <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>What out patients say</h2>
            <p className='texr__para text-center'>World-class care for everyone. Our healthcare system offers unmatched expert healthcare</p>
          </div>

          <Testimonial/>

        </div>
      </section>
      {/* =============Testimonial Section coped from Home ================= */}

    </>
  )
}

export default Doctors