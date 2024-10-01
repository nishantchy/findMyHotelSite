import React from "react";
import FilterSidebar from "./FilterSideBar";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const HotelListing = ({ hotels }) => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar className="w-full md:w-1/4" hotels={hotels} />
        <div className="w-full md:w-3/4">
          <div className="mb-4 flex justify-end">
            <Filter hotels={hotels} />
          </div>
          <SearchBar hotels={hotels} />
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
