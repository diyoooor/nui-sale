import React from "react";

interface SkeletonProps {
  type:
    | "banner"
    | "category"
    | "product"
    | "custom"
    | "order"
    | "profile"
    | "cart";
  items?: number;
  customClasses?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  type,
  items = 3,
  customClasses,
}) => {
  switch (type) {
    case "banner":
      return (
        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>
      );

    case "category":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          ))}
        </div>
      );

    case "product":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
            >
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </div>
          ))}
        </div>
      );

    case "order":
      return (
        <div className="space-y-4">
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <div className="h-6 bg-gray-200 rounded w-32 animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse mb-1"></div>
                <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
          ))}
        </div>
      );

    case "profile":
      return (
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse mb-4"></div>
          {Array.from({ length: items }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-1"></div>
              <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
            </div>
          ))}
        </div>
      );

    case "cart":
      return (
        <div className="space-y-4">
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm flex space-x-4 items-center"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      );

    case "custom":
      return (
        <div className={customClasses}>
          {Array.from({ length: items }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg animate-pulse mb-2"
            ></div>
          ))}
        </div>
      );

    default:
      return null;
  }
};

export default Skeleton;
