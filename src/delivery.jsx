import React, { useState } from 'react';
import EasyShip from './assets/images/Easyship 1 (1).png'
import Dashboard from './assets/images/Dashboard.png'
import Delivery from './assets/images/Delivery.png'
import Payment from './assets/images/Payment.png'
import Tracking from './assets/images/Tracking.png'
import Person from './assets/images/Person.png'
import Search from './assets/images/Search.png'

import { Listbox } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

const DeliveryPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Booking Details:', { from, to, date });
    // Add logic to handle booking
  };



  return (
    <div className="flex h-[800px] max-h-screen w-screen font-inter bg-[#F7F8FA]">
      {/* Sidebar */}
      <aside className="w-[80px] mt-[-22px] bg-white shadow-md flex flex-col items-center py-6 justify-around ">
        
          <img src={EasyShip} />
          <div className='space-y-[27px]'>
            
          <div>
          <img src={Dashboard}  /> 
          <h3 className='text-[11px] text-black/75'>Dashboard</h3>
            </div> 
            
            
            <div>
          <img src={Tracking}  /> 
          <h3 className='text-[11px] text-black/75'>Tracking</h3>
            </div> 
            
            
            <div>
          <img src={Payment}  /> 
          <h3 className='text-[11px] text-black/75'>Payment</h3>
            </div>  
            
            
            <div>
          <img src={Delivery}  /> 
          <h3 className='text-[11px] text-black/75'>Delivery</h3>
            </div>  
          
          </div>     
        <img src={Person} />
      </aside>

      {/* Main content */}
      <main className="flex-1 px-[64px] pt-[32px] pb-[48px] overflow-auto">
        <div className="flex justify-between items-center mb-[40px]">
          <div className="text-sm text-[#A0A3BD] font-medium space-x-1">
            <span>Overview</span>
            <span className="text-[#4E4B66]">•</span>
            <span className="text-[#4E4B66] font-semibold">Tracking</span>
          </div>
          <div className="relative w-[240px]">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-2 border border-[#D9DBE9] rounded-lg text-sm w-full text-[#4E4B66] focus:outline-none"
            />
            <div className="absolute right-3 top-2.5 w-4 h-4 bg-[url('/images/icons/search.svg')] bg-no-repeat bg-center" />
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-[20px] shadow-[0_8px_16px_rgba(0,0,0,0.06)] px-[40px] py-[48px] max-w-[960px] mx-auto">
          <h1 className="text-[28px] font-semibold text-center mb-3 tracking-tight">
            BOOK A <span className="text-[#264AE5]">DELIVERY</span>
          </h1>
          <p className="text-center text-[#6E7191] text-[15px] mb-[36px] max-w-[480px] mx-auto leading-[1.6]">
            Pick where you're leaving from and where you're going using the dropdowns,
            then choose your travel date
          </p>

          <div className="flex flex-col md:flex-row gap-[20px] mb-[32px]">
            {/* <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 border border-[#D9DBE9] rounded-[14px] px-[18px] py-[16px] text-sm text-[#4E4B66] bg-white shadow-sm"
            >
              <option value="" >From</option>
              {states.map((state) => (
                <option key={state} value={state}>&nbsp;&nbsp;&nbsp;{state}</option>
              ))}
            </select> */}

 {/* From Dropdown */}
 <Listbox value={from} onChange={setFrom}>
    <div className="relative w-[280px] max-md:m-auto max-sm:w-[180px]">
      <Listbox.Button className="h-[55px] w-full border border-[#D9DBE9] rounded-[14px] bg-white py-[16px] pl-[18px] pr-10 text-sm text-[#4E4B66] text-left shadow-sm">
        {from || "From"}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[14px] bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {states.map((state) => (
          <Listbox.Option
            key={state}
            className={({ active }) =>
              `cursor-pointer select-none py-2 pl-4 pr-4 ${
                active ? 'bg-[#EDF0FD] text-[#264AE5]' : 'text-[#4E4B66]'
              }`
            }
            value={state}
          >
            {state}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>

  {/* To Dropdown */}
  <Listbox value={to} onChange={setTo}>
    <div className="relative w-[280px] max-md:m-auto max-sm:w-[180px]">
      <Listbox.Button className="h-[55px] w-full border border-[#D9DBE9] rounded-[14px] bg-white py-[16px] pl-[18px] pr-10 text-sm text-[#4E4B66] text-left shadow-sm">
        {to || "To"}
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[14px] bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {states.map((state) => (
          <Listbox.Option
            key={state}
            className={({ active }) =>
              `cursor-pointer select-none py-2 pl-4 pr-4 ${
                active ? 'bg-[#EDF0FD] text-[#264AE5]' : 'text-[#4E4B66]'
              }`
            }
            value={state}
          >
            {state}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 border max-sm:w-[180px] max-md:w-[280px]  border-[#D9DBE9] rounded-[14px] px-[18px] py-[16px] text-sm text-[#4E4B66] max-md:m-auto bg-white shadow-sm"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-[471px] max-sm:w-[180px] max-md:w-[220px] h-[53px] bg-[#264AE5] hover:bg-[#1f3bcc] text-white py-[16px] rounded-[14px] flex items-center justify-center gap-2 m-auto text-[15px] font-medium"
          > <img src={Search} />
            Book a Delivery
          </button>
        </div>
      </main>
    </div>
  );
};

export default DeliveryPage;
