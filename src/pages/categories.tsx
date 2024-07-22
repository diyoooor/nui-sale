/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

import { localThaiShops } from "../mocks/__categories__.json";

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const handleClickCategory = (cat: string) => {
    router.push(`/products?cat=${cat}`);
  };

  return (
    <div className="container mx-auto p-4 pb-24">
      <h1 className="text-2xl mb-4">หมวดหมู่สินค้า</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {localThaiShops.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
            onClick={() => handleClickCategory(category.category)}
          >
            <h3 className="text-2xl font-semibold underline underline-offset-8">
              {category.category}
            </h3>
            <img
              src={"https://via.placeholder.com/150"}
              alt={category.category}
              width={150}
              height={150}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <p className="text-xl">{category.vegetables.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
