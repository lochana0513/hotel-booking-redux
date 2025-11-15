import { BsCalendar } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { setCheckIn } from '../../features/booking/bookingSlice';  
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/datepicker.css';


const CheckIn = () => {

  const dispatch = useAppDispatch();
  const checkIn = useAppSelector((state) => state.booking.CheckIn);

  return (
    <div className='relative flex items-center justify-end h-full'>

      <div className='absolute z-10 pr-8'>
        <div><BsCalendar className='text-accent text-base' /> </div>
      </div>

      <DatePicker
        className='w-full h-full'
        selected={checkIn}
        placeholderText='Check in'
        onChange={(date) => dispatch(setCheckIn(date))}
      />

    </div>
  );
};

export default CheckIn;
