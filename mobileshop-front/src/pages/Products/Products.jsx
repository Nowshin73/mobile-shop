import React, { useState, useEffect } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set initial filtered products
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterAndSortProducts(query, selectedCategory, selectedBrand, sortOrder);
  };

  const handleSortOrderChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    filterAndSortProducts(searchQuery, selectedCategory, selectedBrand, order);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterAndSortProducts(searchQuery, category, selectedBrand, sortOrder);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    filterAndSortProducts(searchQuery, selectedCategory, brand, sortOrder);
  };

  const filterAndSortProducts = (query, category, brand, order) => {
    let filtered = products;

    // Filter by search query
    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Filter by brand
    if (brand !== "All") {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    // Sort by price
    filtered = filtered.sort((a, b) =>
      order === "ascending"
        ? a.price - b.price
        : b.price - a.price
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-6 lg:p-12  max-w-[1200px] mx-auto min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      {/* Search Bar */}
      <div className="mb-6 flex flex-col justify-center items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search products by name..."
          className="w-1/2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Filters and Sorting */}
      <div className="mb-6 flex flex-col lg:flex-row justify-center items-center gap-4">
        {/* Sort Order */}
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="ascending">Sort by Price: Low to High</option>
          <option value="descending">Sort by Price: High to Low</option>
        </select>

        {/* Filter by Category */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Categories</option>
          <option value="Android">Android</option>
          <option value="iPhone">iPhone</option>
          <option value="CellPhone">CellPhone</option>
        </select>

        {/* Filter by Brand */}
        <select
          value={selectedBrand}
          onChange={handleBrandChange}
          className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="All">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-x-6 justify-center items-center gap-y-10 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
