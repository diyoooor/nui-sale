/* eslint-disable @next/next/no-img-element */
import ProductModal from "components/ProductModal";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { products } from "../mocks/__products__.json";
import { localThaiShops } from "../mocks/__categories__.json";

const __mock_catagories__ = localThaiShops;

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const { query } = router;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterProducts();
    }, 200);

    return () => clearTimeout(timeoutId);
  });

  useEffect(() => {
    const { cat } = query;
    if (cat !== undefined || typeof cat === "string") {
      setSelectedTags([String(cat)]);
    }
  }, [query]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filterProducts = () => {
    let filtered = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedTags.length > 0) {
      filtered = filtered.filter((product) =>
        selectedTags.every((tag) => product.categories.includes(tag))
      );
    }

    setFilteredProducts(filtered);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredProducts(products);
  };

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 pb-24">
      <h1 className="text-2xl mb-4">Products</h1>

      <div className="relative mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name..."
          className="p-2 border rounded w-full pr-10"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500"
          >
            ✖
          </button>
        )}
      </div>

      <div className="mb-4">
        <h2 className="text-lg mb-2">Tags</h2>
        {__mock_catagories__.map((tag) => (
          <button
            key={tag.id}
            onClick={() => handleTagClick(tag.category)}
            className={`p-2 border rounded mr-2 mb-2 ${
              selectedTags.includes(tag.category)
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            {tag.category}
            {selectedTags.includes(tag.category) && (
              <span className="ml-1 text-white">✖</span>
            )}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="mb-4  border rounded flex relative max-h-32"
          >
            <img
              src={"https://via.placeholder.com/50"}
              alt={product.productName}
              className="w-32 h-32 object-cover mr-2"
            />
            <div className="p-2 flex flex-col w-full">
              <h2 className="text-2xl font-bold">
                <strong>{product.productName}</strong>
              </h2>
              <p className="text-xl">
                <strong>ชื่ออื่นๆ : </strong>{" "}
                {product.variants.join(", ") || "-"}
              </p>
              <div className="flex justify-between">
                <p>
                  <strong>ราคาต่อถุง</strong> {product.price.byBag} บ. <br />
                  <strong>ราคาต่อกก.</strong> {product.price.byKilogram} บ.
                </p>
                <button
                  onClick={() => openModal(product)}
                  className="bg-blue-500 text-white p-1 rounded self-end w-3/12"
                >
                  เพิ่ม
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default ProductsPage;
