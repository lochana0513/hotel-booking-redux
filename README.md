# Hotel Booking Redux

A **refactored and scalable hotel booking frontend application** built with **React**, **Redux Toolkit**, and **Tailwind CSS**.  

This project was **originally a React + Context API project** ([original repo](https://github.com/arnobt78/HotelBooking--TailwindCSS-Fundamental-Project-3)) and has been refactored to implement **Redux state management**, **feature-based folder structure**, and **modern architecture** suitable for larger projects.

## Features

- Browse available rooms with images, descriptions, and capacity information.  
- Filter rooms by check-in/check-out dates, number of guests, and room features.  
- Book rooms using an interactive booking form.  
- Responsive UI for mobile, tablet, and desktop devices.  
- Global state management with **Redux Toolkit** (slices, RTK Query for API calls).  
- Modular, **feature-based folder structure** (`features/rooms`, `features/booking`) for maintainability.  
- Reusable components (`common`, `forms`) for better code organization.  
- Loading indicators using `spinners-react`.  
- Utility components like `ScrollToTop` for smooth navigation.  

## Technology Stack

- **Frontend:** React 18, Redux Toolkit, Tailwind CSS, Vite  
- **State Management:** Redux slices, RTK Query  
- **Styling:** Tailwind CSS  
- **Routing:** React Router DOM  
- **Utilities & Libraries:** React Date Picker, Swiper Slider, spinners-react  


## Key Changes & What I Did

- Refactored **original Context API state** to **Redux Toolkit slices** for rooms and bookings.  
- Implemented **RTK Query API slices** for consistent data fetching (mock APIs included).  
- Organized **components and pages** into reusable and maintainable structure (`common`, `forms`, `features`).  
- Improved folder hierarchy and naming conventions for scalability.  
- Added **loading states**, **filtering logic**, and better state management with Redux.   

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/lochana0513/hotel-booking-redux.git
cd hotel-booking-redux

Install dependencies:

npm install

Run the development server:

npm run dev

Open your browser:

http://localhost:5173

