import React, { useState } from 'react';
import CategoryList from './CategoryList';

function ProductList() {
  const [filteredCategory, setFilteredCategory] = useState(null);

  const handleFilter = (category) => {
    setFilteredCategory(category);
    // Add your filtering logic here
    console.log(`Filtering products by category: ${category}`);
  };

  return (
    <div>
      <CategoryList onFilter={handleFilter} />
      {/* Render filtered products here */}
    </div>
  );
}

export default ProductList;