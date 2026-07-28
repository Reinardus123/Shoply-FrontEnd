import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import footerData from "../../data/footerData";
import FooterColumn from "./FooterColumn";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="px-10 py-14 flex justify-between gap-10">
        <div className="max-w-[260px]">
          <h1 className="text-3xl font-bold">Shoply.</h1>
          <p className="text-gray-500 mt-5 leading-7">
            Your one-stop destination for trendy fashion, shoes, and
            accessories.
          </p>
          <div className="flex gap-4 mt-6">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
        {footerData.map((item) => (
          <FooterColumn key={item.id} title={item.title} links={item.links} />
        ))}
        <div>
          <h2 className="font-bold text-lg mb-5">Contact Us</h2>
          <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-3">
              <FaPhone />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope />
              <p>support@shoply.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-10 py-5 flex items-center justify-center">
        <p className="text-gray-400">@ 2026 Shoply All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
