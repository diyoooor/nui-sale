import { NextPage } from "next";

const ContactPage: NextPage = () => {
  return (
    <>
      <div className="container mx-auto p-4 space-y-8 pb-24">
        <h1 className="text-3xl font-bold mb-4">ติดต่อสอบถาม</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">ช่องทางการติดต่อ</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span className="font-semibold w-32">เบอร์โทรศัพท์:</span>
              <a href="tel:090 483 9032" className="text-blue-500">
                090-438-9032
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-32">Facebook:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61558650133542"
                target="_blank"
                className="text-blue-500"
              >
                พี่นุ้ย ผักสด
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-semibold w-32">Line@:</span>
              <a
                href="https://line.me/R/ti/p/@yourlineid"
                target="_blank"
                className="text-blue-500"
              >
                @yourlineid
              </a>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">ที่อยู่ร้านค้า:</span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1981.5568240272028!2d100.42208!3d6.632804999999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzcnNTguMSJOIDEwMMKwMjUnMTkuNSJF!5e0!3m2!1sth!2sth!4v1721456985016!5m2!1sth!2sth"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">เกี่ยวกับเรา</h2>
          <p className="text-gray-700">
            Welcome to our company! We are committed to providing the best
            service possible. Our team of professionals is dedicated to ensuring
            that you have the best experience with us. For more details about
            our services and how we can help you, please feel free to contact
            us.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
