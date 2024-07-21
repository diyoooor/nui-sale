/* eslint-disable @next/next/no-img-element */
import React from "react";

const CategoryPage: React.FC = () => {
  // Example data; replace this with your actual category data or fetch from an API
  const categories = [
    { id: 1, name: "Category 1", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "Category 2", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 3", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 4", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 5", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 6", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 7", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 8", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 9", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "Category 10", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container mx-auto p-4 pb-24">
      <h1 className="text-2xl mb-4">หมวดหมู่สินค้า</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              width={150}
              height={150}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
