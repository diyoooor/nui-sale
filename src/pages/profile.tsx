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
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">โปรไฟล์</h1>
        <form className="space-y-4" onSubmit={saveProfile}>
          <div className="flex flex-col">
            <label
              htmlFor="lineUsername"
              className="mb-2 font-semibold text-2xl"
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
                className="border rounded p-2 text-xl"
              />
            ) : (
              <p className="text-xl">{profile.lineUsername}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="shopName" className="mb-2 font-semibold text-2xl">
              ชื่อร้าน
            </label>
            {isEditing ? (
              <input
                type="text"
                id="shopName"
                name="shopName"
                value={profile.shopName}
                onChange={handleChange}
                className="border rounded p-2 text-xl"
              />
            ) : (
              <p className="text-xl">{profile.shopName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 font-semibold text-2xl">
              ที่อยู่ร้านค้า
            </label>
            {isEditing ? (
              <input
                type="text"
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="border rounded p-2 text-xl"
              />
            ) : (
              <p className="text-xl">{profile.address}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="telephone" className="mb-2 font-semibold text-2xl">
              เบอร์โทรศัพท์
            </label>
            {isEditing ? (
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={profile.telephone}
                onChange={handleChange}
                className="border rounded p-2 text-xl"
              />
            ) : (
              <p className="text-xl">{profile.telephone}</p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={toggleEdit}
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
            >
              {isEditing ? "ยกเลิก" : "แก้ไข"}
            </button>
            {isEditing && (
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
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
