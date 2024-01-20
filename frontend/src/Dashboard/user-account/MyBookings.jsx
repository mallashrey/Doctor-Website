import { BASE_URL } from "../../../config"
import DoctorCard from "../../components/Doctors/DoctorCard"
import Error from "../../components/Error/Error"
import Loading from "../../components/Loader/Loading"
import useFetchData from "../../hooks/useFetchData"


const MyBooking = () => {

  const {data:appointents, loading, error} = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
    <div>
      {loading && !error && <Loading/>}

      { error && !loading && <Error errMessage={error}/> }

      {!loading && !error &&  (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointents.map(doctor=>(
            <DoctorCard doctor={doctor} key={doctor._id} />))}
        </div>
      )}

      {!loading && !error && appointents.length===0 && (
      <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor ">
        You did not book any doctor yet</h2> )}
        
    </div>
  )
}

export default MyBooking