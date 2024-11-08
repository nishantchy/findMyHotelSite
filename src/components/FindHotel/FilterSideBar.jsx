import React from "react";

const FilterSection = ({ title, options }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    {options.map((option, index) => (
      <div key={index} className="flex items-center mb-1">
        <input type="checkbox" id={option} className="mr-2" />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </div>
);

const FilterSidebar = ({ hotels }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl">
      <h2 className="text-xl font-bold mb-4">Filter by:</h2>
      <FilterSection
        title="Filter by Ratings"
        options={["5 Star", "4 Star", "3 Star"]}
      />
      <hr />
      <FilterSection
        title="Filter by Pricings"
        options={[
          "Rs. 1000 to 3000",
          "Rs. 3000 to 6000",
          "Rs. 6000 to 15000",
          "Rs. 15000 to 50000",
        ]}
      />
      <hr />
      <FilterSection
        title="Property Type"
        options={["Villa", "Hotel", "Resort", "Guest House"]}
      />
      <hr />
      <FilterSection
        title="Room Types"
        options={["Single", "Double", "King", "Queen", "Suite"]}
      />
    </div>
  );
};

export default FilterSidebar;
