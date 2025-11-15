import { useGetRoomsQuery } from '../../rooms/roomsApi';
import { useGetBookedRoomsQuery } from '../../booking/bookingApi';
import { useAppSelector } from '../../../app/hook';
import { SpinnerDotted } from 'spinners-react';
import { Room } from '../../../components';

const Rooms = () => {

  const { data: rooms = [], isLoading, error } = useGetRoomsQuery();
  const { data: bookedRooms = [] } = useGetBookedRoomsQuery();
  const { CheckIn, CheckOut } = useAppSelector((state) => state.booking);
  const { total } = useAppSelector((state) => state.roomFilter);

  if (isLoading) {
    return (
      <div className='h-screen w-full fixed bottom-0 top-0 bg-black/80 z-50 grid place-items-center'>
        <SpinnerDotted />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <h2 className="text-red-500 text-xl">Failed to load rooms</h2>
      </div>
    );
  }

  const filteredRooms = rooms.filter(room => {
    if (room.maxPerson < total) {
      return false;
    }

    if (!CheckIn || !CheckOut) return true;

    const isBooked = bookedRooms.some(b => {
      if (b.roomId !== room.id) return false;

      const bookingStart = new Date(b.checkIn);
      const bookingEnd = new Date(b.checkOut);

      return (
        (CheckIn >= bookingStart && CheckIn < bookingEnd) ||
        (CheckOut > bookingStart && CheckOut <= bookingEnd) ||
        (CheckIn <= bookingStart && CheckOut >= bookingEnd)
      );
    });

    return !isBooked;
  });

  return (
    <section className='py-24'>
      <div className='container mx-auto lg:px-0'>

        <div className='text-center'>
          <p className='font-tertiary uppercase text-[15px] tracking-[6px]'>Hotel & Spa Adina</p>
          <h2 className='font-primary text-[45px] mb-6'>Room & Suites</h2>
        </div>

        <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
            {filteredRooms.map(room => <Room key={room.id} room={room} />)}
        </div>
      </div>

    </section>
  );
};

export default Rooms;
