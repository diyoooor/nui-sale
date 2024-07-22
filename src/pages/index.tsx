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
import { highlightProducts } from "../mocks/__products__.json";
import "swiper/swiper-bundle.css";
import ProductModal from "components/ProductModal";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  const banners = [
    { id: 1, imageUrl: "/images/landing/landing.png" },
    { id: 2, imageUrl: "/images/landing/promo.png" },
  ];

  const handleClickCategory = (cat: string) => {
    router.push(`/products?cat=${cat}`);
  };

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

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
    <div className="container mx-auto p-4 pb-24 bg-gray-50">
      <div className="text-center p-4 text-3xl mb-4">
        <strong className="">นุ้ย ผักสด</strong>
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
          <h2 className="text-2xl font-bold text-gray-800">
            ประเภทสิ้นค้าที่แนะนำ
          </h2>
          <Link href="/categories" className="text-green-600 hover:underline">
            ดูทั้งหมด
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightCat.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center p-6 border rounded-lg shadow-lg space-y-4 bg-white hover:bg-green-50 cursor-pointer transition-all"
              onClick={() => handleClickCategory(category.category)}
            >
              <h3 className="text-2xl font-semibold text-gray-700">
                {category.category}
              </h3>
              <img
                src={category.image_url}
                alt={category.category}
                width={150}
                height={150}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <p className="text-lg text-gray-600">
                {category.vegetables.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">สินค้ายอดนิยม</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ul>
            {highlightProducts.map((product) => (
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
                  <h2 className="text-2xl font-bold">
                    <strong>{product.productName}</strong>
                  </h2>
                  <p className="text-xl">
                    <strong>ชื่ออื่นๆ : </strong>{" "}
                    {product.variants.join(", ") || "-"}
                  </p>
                  <div className="flex justify-between">
                    <p>
                      <strong>ราคาต่อถุง</strong> {product.price.byBag} บ.{" "}
                      <br />
                      <strong>ราคาต่อกก.</strong> {product.price.byKilogram} บ.
                    </p>
                    <button
                      onClick={() => openModal(product)}
                      className="bg-green-600 text-white p-1 rounded self-end w-3/12"
                    >
                      เพิ่ม
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
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

export default IndexPage;
