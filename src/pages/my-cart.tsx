import Skeleton from "components/Skeleton";
import { NextPage } from "next";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  pricePerBag: number;
  pricePerKg: number;
  quantity: number; // in bags or kgs
  unit: "bag" | "kg";
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "ผักกาดหอม - ไทย",
    pricePerBag: 50,
    pricePerKg: 5,
    quantity: 2,
    unit: "bag",
  },
  {
    id: 2,
    name: "ผักกาดหอม - จีน",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 3,
    name: "ผักกาดขาวบ้าน",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 4,
    name: "กะหล่ำ - ไทย",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 5,
    name: "กะหล่ำ - จีน",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 6,
    name: "ผักบุ้งจีน",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 7,
    name: "คะน้า",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 8,
    name: "กวางตุ้ง",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 9,
    name: "ถั่วยาว",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 10,
    name: "หอมใหญ่",
    pricePerBag: 30,
    pricePerKg: 3,
    quantity: 1,
    unit: "kg",
  },
  {
    id: 11,
    name: "หอมแดง",
    pricePerBag: 300,
    pricePerKg: 30,
    quantity: 1,
    unit: "kg",
  },
];

const CartPage: NextPage = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton type="cart" items={3} />
      </div>
    );
  }

  const incrementQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const decrementQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      const price =
        product.unit === "bag" ? product.pricePerBag : product.pricePerKg;
      return total + price * product.quantity;
    }, 0);
  };
  return (
    <>
      <div className="container mx-auto p-4 pb-24">
        <h1 className="text-2xl mb-4">ตะกร้าของฉัน</h1>
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              className="flex justify-between items-center mb-4 p-4 border rounded"
            >
              <div>
                <h2 className="text-md">{product.name}</h2>
                <p>
                  {product.unit === "bag"
                    ? "ราคาต่อถุง: "
                    : "ราคาต่อกิโลกรัม: "}
                  {product.unit === "bag"
                    ? product.pricePerBag
                    : product.pricePerKg}
                </p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => decrementQuantity(product.id)}
                  className="bg-gray-300 text-gray-700 p-2 rounded mr-2"
                >
                  -
                </button>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value))
                  }
                  className="w-10 p-1 border rounded text-center"
                  min="1"
                />
                <button
                  onClick={() => incrementQuantity(product.id)}
                  className="bg-gray-300 text-gray-700 p-2 rounded ml-2"
                >
                  +
                </button>
                <p className="pl-2">{product.unit === "bag" ? "ถุง" : "กก."}</p>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="bg-red-500 text-white p-2 rounded ml-4"
                >
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h2 className="text-xl">
            ยอดทั้งหมด : ${calculateTotalPrice().toFixed(2)}
          </h2>
        </div>
      </div>
    </>
  );
};

export default CartPage;
