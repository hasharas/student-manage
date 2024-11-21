import React from 'react';
import Record from '../Record/Record';
import DetailView from '../TableView/DetailView';

const Home = () => {
      return (
            <div className='mx-5 my-5  h-auto'>
                  <div className=' w-full bg-slate-200'>
                        <span className="text-xl flex font-bold px-5 py-5  justify-center">ADD YOUR DETAILS</span>

                        <div className='w-auto'>
                              <Record />
                        </div>
                        <div className='w-auto'>
                              <DetailView />
                        </div>
                  </div>
            </div>
      );
}

export default Home;
