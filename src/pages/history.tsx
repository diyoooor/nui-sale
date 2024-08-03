/* eslint-disable @next/next/no-img-element */
import Skeleton from "components/Skeleton";
import { NextPage } from "next";
import { useState, useEffect } from "react";

interface Order {
  id: number;
  item: string;
  status:
    | "pending"
    | "prepare order"
    | "prepared order"
    | "out of delivery"
    | "done"
    | "cancelled";
  date: string;
  totalPrice: number;
}

const orders: Order[] = [
  {
    id: 1,
    item: "Item A",
    status: "pending",
    date: "2024-07-20T14:48:00",
    totalPrice: 29.99,
  },
  {
    id: 2,
    item: "Item B",
    status: "prepare order",
    date: "2024-07-19T10:30:00",
    totalPrice: 49.99,
  },
  {
    id: 3,
    item: "Item C",
    status: "prepared order",
    date: "2024-07-18T09:15:00",
    totalPrice: 19.99,
  },
  {
    id: 4,
    item: "Item D",
    status: "out of delivery",
    date: "2024-07-17T12:00:00",
    totalPrice: 39.99,
  },
  {
    id: 5,
    item: "Item E",
    status: "done",
    date: "2024-07-16T08:45:00",
    totalPrice: 24.99,
  },
  {
    id: 6,
    item: "Item F",
    status: "cancelled",
    date: "2024-07-15T16:20:00",
    totalPrice: 59.99,
  },
];

const formatDateTime = (dateTime: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateTime).toLocaleDateString("th-TH", options);
};

const getStatusClass = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "prepare order":
      return "bg-blue-500";
    case "prepared order":
      return "bg-indigo-500";
    case "out of delivery":
      return "bg-purple-500";
    case "done":
      return "bg-green-500";
    case "cancelled":
      return "bg-red-500";
    default:
      return "";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "pending":
      return "รอดำเนินการ";
    case "prepare order":
      return "จัดเตรียมสินค้า";
    case "prepared order":
      return "เตรียมสินค้าเสร็จสิ้น";
    case "out of delivery":
      return "กำลังจัดส่ง";
    case "done":
      return "สำเร็จ";
    case "cancelled":
      return "ยกเลิก";
    default:
      return "";
  }
};

const HistoryPage: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton type="order" items={6} />
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4 pb-24">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
          ประวัติการสั่งซื้อ
        </h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-white hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <p className="text-md font-semibold text-gray-700">
                  วันที่ {formatDateTime(order.date)}
                </p>
                <p className="text-sm text-gray-500">
                  คำสั่งซื้อที่ : {order.id}
                </p>
                <p className="text-sm text-gray-500">
                  ยอดรวม : {order.totalPrice.toFixed(2)} บาท
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-white text-xs font-semibold ${getStatusClass(
                  order.status
                )}`}
              >
                {getStatusText(order.status)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
