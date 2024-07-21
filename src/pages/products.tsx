/* eslint-disable @next/next/no-img-element */
import ProductModal from "components/ProductModal";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  productName: string;
  variants: string[];
  price: {
    byBag: number;
    byKilogram: number;
    byItem: number;
  };
  unit: {
    byBag: string;
    byKilogram: string;
    byItem: string;
  };
  quantityInStock: number;
  storeDate: string;
  imageUrl: string;
  categories: string[];
};

const products: Product[] = [
  {
    id: 1,
    productName: "หัวไชเท้า",
    variants: ["หัวผักกาด"],
    price: {
      byBag: 100,
      byKilogram: 50,
      byItem: 10,
    },
    unit: {
      byBag: "Bag",
      byKilogram: "Kilogram",
      byItem: "Item",
    },
    quantityInStock: 20,
    storeDate: "2023-01-01",
    imageUrl: "https://via.placeholder.com/50",
    categories: ["ก๋วยเตี๋ยว"],
  },
  {
    id: 2,
    productName: "ผักชีฝรั่ง",
    variants: ["ผักชีใบเลื่อย"],
    price: {
      byBag: 120,
      byKilogram: 60,
      byItem: 12,
    },
    unit: {
      byBag: "Bag",
      byKilogram: "Kilogram",
      byItem: "Item",
    },
    quantityInStock: 15,
    storeDate: "2023-02-15",
    imageUrl: "https://via.placeholder.com/50",
    categories: ["ก๋วยเตี๋ยว", "Category2"],
  },
  {
    id: 3,
    productName: "แตงล้าน",
    variants: ["แตงใหญ่"],
    price: {
      byBag: 320,
      byKilogram: 60,
      byItem: 12,
    },
    unit: {
      byBag: "Bag",
      byKilogram: "Kilogram",
      byItem: "Item",
    },
    quantityInStock: 15,
    storeDate: "2023-02-15",
    imageUrl: "https://via.placeholder.com/50",
    categories: ["ก๋วยเตี๋ยว", "Category2"],
  },
];

const __mock_catagories__ = [
  "ร้านส้มตำ",
  "ก๋วยเตี๋ยว",
  "ขนมจีน",
  "ผักใบ",
  "เครื่องปรุง",
];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterProducts();
    }, 2000);

    return () => clearTimeout(timeoutId);
  });

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

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
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
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`p-2 border rounded mr-2 mb-2 ${
              selectedTags.includes(tag) ? "bg-blue-500 text-white" : ""
            }`}
          >
            {tag}
            {selectedTags.includes(tag) && (
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
              src={product.imageUrl}
              alt={product.productName}
              className="w-32 h-32 object-cover mr-2"
            />
            <div className="p-2 flex flex-col w-full">
              <h2 className="text-lg font-bold">{product.productName}</h2>
              <p>
                <strong>ชื่ออื่นๆ : </strong> {product.variants.join(", ")}
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
