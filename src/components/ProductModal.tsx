/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import CustomModal from "./CustomModal";

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

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedUnit, setSelectedUnit] = useState<"bag" | "kilogram" | "item">(
    "bag"
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleIncrease = () => {
    if (quantity < product.quantityInStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUnit(e.target.value as "bag" | "kilogram" | "item");
  };

  const handleAddToCart = () => {
    // Add product to cart logic here
    console.log(
      `Added ${quantity} ${selectedUnit} of ${product.productName} to cart`
    );
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl mb-4">{product.productName}</h2>
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="w-full object-cover mb-4"
      />
      <div className=" w-full text-end">
        <p className="text-xl  ">
          <strong>ถุงละ :</strong> {product.price.byBag} บาท
        </p>
        <p className="text-xl">
          <strong>กิโลกรัม :</strong> {product.price.byKilogram} บาท
        </p>
        <p className="text-xl">
          <strong>ชิ้นละ :</strong> {product.price.byItem} บาท
        </p>
      </div>

      <div className="mt-4 w-full text-end">
        <label htmlFor="unit" className="block mb-2">
          เลือกหน่วย:
        </label>
        <select
          id="unit"
          value={selectedUnit}
          onChange={handleUnitChange}
          className="p-2 border rounded w-25 mb-4"
        >
          <option value="bag">ถุง</option>
          <option value="kilogram">กิโลกรัม</option>
          <option value="item">ชิ้น</option>
        </select>
        <label htmlFor="quantity" className="block mb-2">
          จำนวน:
        </label>
        <div className="flex items-center justify-end">
          <button
            onClick={handleDecrease}
            className="p-2 border rounded-l bg-gray-200"
          >
            −
          </button>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            className="p-2 border-t border-b border-gray-300 text-center w-16"
          />
          <button
            onClick={handleIncrease}
            className="p-2 border rounded-r bg-gray-200"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
      >
        เพิ่มลงตะกร้า
      </button>
    </CustomModal>
  );
};

export default ProductModal;
