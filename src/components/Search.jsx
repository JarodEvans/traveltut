import React from 'react';
import{ RiCustomerService2Fill } from 'react-icons/ri'
import{ MdOutlineTravelExplore } from 'react-icons/md'


const Search = () => {
    return (
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
          <div>
            <h2>Luxury Included Vacations For Two People</h2>
            <p className='py-4 className="py-2"'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              laoreet vitae mi sed efficitur. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Cras id
              ligula id enim sodales interdum. Aenean nec est fringilla,
              efficitur dui finibus, eleifend eros. Duis et blandit dolor, non
              placerat nisl. Sed porttitor tortor quis scelerisque accumsan.
              Nulla scelerisque, nunc nec commodo tempus, nisi sem bibendum
              felis, non laoreet turpis magna id augue. Vivamus velit est,
              lobortis id iaculis ut, scelerisque id nisl. Suspendisse mi nunc,
              imperdiet et ullamcorper at, tempor et orci. Quisque non lobortis
              massa, in vehicula purus. Donec.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <RiCustomerService2Fill size={50}/>
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center text-center'>
              <button>
                <MdOutlineTravelExplore size={50}/>
              </button>
              <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div className='border text-center'>
                <p>GET AN ADDITIONAL 10% OFF</p>
                <p className='py-4'>12 HOURS LEFT</p>
                <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
        </div>
      </div>
    );
}
 
export default Search;