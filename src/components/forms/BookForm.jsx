import { AdultsDropdown, CheckIn, CheckOut, KidsDropdown } from './../../components';
import { useAppDispatch } from '../../app/hook';
import { resetBookings } from '../../features/booking/bookingSlice';
import { resetRoomFilter } from '../../features/rooms/roomFilterSlice';
const BookForm = () => {
  const dispatch = useAppDispatch();

  const resetFilters = (e) => {
    e.preventDefault();
    dispatch(resetRoomFilter());
    dispatch(resetBookings());
  }

  return (
    <form className='h-[300px] lg:h-[70px] w-full'>
      <div className='flex flex-col w-full h-full lg:flex-row'>

        <div className='flex-1 border-r'>
          <CheckIn />
        </div>

        <div className='flex-1 border-r'>
          <CheckOut />
        </div>

        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>

        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>

        <button
          className='btn btn-primary'
          onClick={resetFilters}
        >
          Clear Filters
        </button>

      </div>
    </form>
  );
};

export default BookForm;
