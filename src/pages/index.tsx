/* eslint-disable @next/next/no-img-element */
import Skeleton from "components/Skeleton";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
import { highlightCat } from "../mocks/__categories__.json";
import "swiper/swiper-bundle.css";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  const banners = [
    { id: 1, imageUrl: "/images/banner1.png" },
    { id: 2, imageUrl: "/images/banner2.png" },
    { id: 3, imageUrl: "/images/banner3.png" },
  ];

  const handleClickCategory = (cat: string) => {
    router.push(`/products?cat=${cat}`);
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 space-y-8 ">
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
      <div className="container mx-auto p-4 pb-24 bg-slate-500 bg-opacity-25">
        <div className="text-center p-4 text-3xl  mb-4">
          <strong>นุ้ย ผักสด สะเดา</strong>
        </div>
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
            onSwiper={() => console.log()}
            onSlideChange={() => console.log()}
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
            <Link href="/categories" className="text-green-500 hover:underline">
              ดูทั้งหมด
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlightCat.map((category) => (
              <div
                key={category.id}
                className="flex flex-col items-center p-4 border rounded-lg shadow-sm space-y-4 bg-slate-200"
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
      </div>
    </>
  );
};

export default IndexPage;
