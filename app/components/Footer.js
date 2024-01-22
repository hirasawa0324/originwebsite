import Container from "./Container";
import React from "react";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";


function Footer() {
  const footerList = [
    { _id: 111, title: "お問い合わせ", link: "#", icon: true },
    { _id: 112, title: "特定商品取引法", link: "#", icon: true },
    { _id: 113, title: "プライバシーポリシー", link: "#", icon: true },
  ];
  return (
    <div className="w-full bg-blueLight mt-10">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2 ">
          <p className="mb-2 text-gray-700 ">c ORIGIN.Inc</p>
          <ul className="flex items-center gap-2 mb-2">
            {footerList.map((List) => (
              <Link key={List._id} href={List.link}  >
              <li className="flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer ">
                {List.title}
                {List.icon && <TbMinusVertical />}
                
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-gray-700 ">
            <a href="https://twitter.com/home" target="_blank " className="text-xl hover:text-primeColor cursor-pointer duration-300 "><FaGithub /></a>
            <a href="" className="text-xl hover:text-primeColor cursor-pointer duration-300 "><FaFacebook /></a>
            <a href="" className="text-xl hover:text-primeColor cursor-pointer duration-300 "><FaYoutube /></a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
