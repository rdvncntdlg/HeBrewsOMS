import React from 'react';
import Header from '../assets/components/Header';
import SearchBar from '../assets/components/SearchBar';
import CategoryList from '../assets/components/CategoryList';

function Menu() {
    return (
      <div className="overflow-hidden max-md:pr-5">
        <Header text="Menu"/>
        <div className='flex justify-end mt-8 mb-4'>
          <SearchBar />
        </div>
        <div className="flex justify-end">
  <button className="text-base font-medium text-white bg-custom-brown py-2 px-4 rounded-2xl">
    + Add Product
  </button>
</div>
        <CategoryList />  
        <section className="mt-16 max-md:mt-10 max-md:max-w-full">

        </section>
    </div>

    )
  };
  
  export default Menu;