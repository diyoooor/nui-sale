/* eslint-disable @next/next/no-img-element */
import Loading from "components/Loading";
import Skeleton from "components/Skeleton";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/swiper-bundle.css";

const IndexPage: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const banners = [
    { id: 1, imageUrl: "/images/banner1.png" },
    { id: 2, imageUrl: "/images/banner2.png" },
    { id: 3, imageUrl: "/images/banner3.png" },
  ];

  const highlightCategories = [
    {
      id: 1,
      name: "ร้านส้มตำ",
      imageUrl: "https://via.placeholder.com/150",
    },
    { id: 2, name: "ร้านอาหาร", imageUrl: "https://via.placeholder.com/150" },
    {
      id: 3,
      name: "ร้านก๋วยเตี๋ยว",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "ร้านขนมจีน",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  const highlightProducts = [
    {
      id: 1,
      name: "ผักใบ",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "ผักหัว",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "เครื่องปรุง",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  if (loading) {
    return (
      <div className="container mx-auto p-4 space-y-8">
        <Skeleton type="banner" />
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/6 animate-pulse"></div>
          </div>
          <Skeleton type="category" items={3} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/6 animate-pulse"></div>
          </div>
          <Skeleton type="product" items={3} />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 pb-24">
        {/* Banner Section */}
        <div className="mb-8">
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              FreeMode,
              Autoplay,
            ]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={() => console.log(`swipe`)}
            onSlideChange={() => console.log("slide change")}
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <Image
                  src={banner.imageUrl}
                  alt={`Banner ${banner.id}`}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Highlight Categories Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">ประเภทสิ้นค้าที่แนะนำ</h2>
            <a href="/categories" className="text-blue-500 hover:underline">
              ดูทั้งหมด
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlightCategories.map((category) => (
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

        {/* Highlight Products Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">หมวดหมู่สินค้าแนะนำ</h2>
            <a href="/products" className="text-blue-500 hover:underline">
              ดูทั้งหมด
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlightProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
