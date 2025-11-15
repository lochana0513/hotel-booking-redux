import { BsCalendar } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { setCheckOut } from '../../features/booking/bookingSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../style/datepicker.css';


const CheckOut = () => {
  const dispatch = useAppDispatch();
  const endDate = useAppSelector((state) => state.booking.CheckOut);

  return (
    <div className='relative flex items-center justify-end h-full'>

      <div className='absolute z-10 pr-8'>
        <div><BsCalendar className='text-accent text-base' /> </div>
      </div>

      <DatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText='Check out'
        onChange={(date) => dispatch(setCheckOut(date))}
      />

    </div>
  );
};

export default CheckOut;
