/* eslint-disable @next/next/no-img-element */
import Skeleton from "components/Skeleton";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const ProfilePage: NextPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    lineUsername: "Max Chutiphong",
    address: "หลังขรรค์ชัย",
    telephone: "093-213-0099",
    shopName: "น้ำเมา",
  });

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you can add code to save the profile to a server if needed
  };

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton type="profile" items={4} />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4 max-w-lg bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-600">
          โปรไฟล์
        </h1>
        <form className="space-y-6" onSubmit={saveProfile}>
          <div className="flex flex-col">
            <label
              htmlFor="lineUsername"
              className="mb-2 font-semibold text-xl text-gray-700 "
            >
              ชื่อไลน์
            </label>
            {isEditing ? (
              <input
                type="text"
                id="lineUsername"
                name="lineUsername"
                value={profile.lineUsername}
                onChange={handleChange}
                className="border rounded p-3 text-xl focus:ring-2 focus:ring-green-500 focus:outline-none hover:shadow-md transition-shadow duration-200"
              />
            ) : (
              <p className="text-xl text-gray-900">{profile.lineUsername}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="shopName"
              className="mb-2 font-semibold text-xl text-gray-700"
            >
              ชื่อร้าน
            </label>
            {isEditing ? (
              <input
                type="text"
                id="shopName"
                name="shopName"
                value={profile.shopName}
                onChange={handleChange}
                className="border rounded p-3 text-xl focus:ring-2 focus:ring-green-500 focus:outline-none hover:shadow-md transition-shadow duration-200"
              />
            ) : (
              <p className="text-xl text-gray-900">{profile.shopName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="mb-2 font-semibold text-xl text-gray-700"
            >
              ที่อยู่ร้านค้า
            </label>
            {isEditing ? (
              <input
                type="text"
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="border rounded p-3 text-xl focus:ring-2 focus:ring-green-500 focus:outline-none hover:shadow-md transition-shadow duration-200"
              />
            ) : (
              <p className="text-xl text-gray-900">{profile.address}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="telephone"
              className="mb-2 font-semibold text-xl text-gray-700"
            >
              เบอร์โทรศัพท์
            </label>
            {isEditing ? (
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={profile.telephone}
                onChange={handleChange}
                className="border rounded p-3 text-xl focus:ring-2 focus:ring-green-500 focus:outline-none hover:shadow-md transition-shadow duration-200"
              />
            ) : (
              <p className="text-xl text-gray-900">{profile.telephone}</p>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={toggleEdit}
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-200"
            >
              {isEditing ? "ยกเลิก" : "แก้ไข"}
            </button>
            {isEditing && (
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                 บันทึก
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfilePage;
