import React from "react";
import logo from "../../../../assets/img/logo.png";
import { Button } from "../../../../components/button";
export const FooterFirstBox = () => {
  return (
    <div className="bg-brilliant-white pb-[100px] pt-[95px]">
      <div className="container flex items-start justify-between">
        <div>
          <a href="#" className="mb-[45px] block">
            <img src={logo} alt="logo Hekto" />
          </a>
          <form className="relative mb-[25px]">
            <input
              className="w-full pb-[11px] pl-[20px] pr-[160px] pt-[14px] text-base font-normal text-soft-blue-lavender outline-cosmic"
              type="text"
              placeholder="Enter Email Address"
              aria-label="Enter Email Address"
            />
            <Button
              type="buuton"
              variant="primary"
              classname="py-[11px] px-[40px] absolute top-0 bottom-0 right-0"
            >
              Sign Up
            </Button>
          </form>
          <p className="mb-[10px] text-base font-normal text-soft-blue-lavender">
            Contact Info
          </p>
          <p className="mb-[10px] text-base font-normal text-soft-blue-lavender">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div>
          <p className="mb-[42px] text-xl font-semibold">Catagories</p>
          <div className="flex flex-col">
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Laptops & Computers
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Cameras & Photography
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Smart Phones & Tablets
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Video Games & Consoles
            </a>
            <a
              href="#"
              className=" text-base font-normal text-soft-blue-lavender"
            >
              Waterproof Headphones
            </a>
          </div>
        </div>
        <div>
          <p className="mb-[42px] text-xl font-semibold">Customer Care</p>
          <div className="flex flex-col">
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              My Account
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Discount
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Returns
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Orders History
            </a>
            <a
              href="#"
              className=" text-base font-normal text-soft-blue-lavender"
            >
              Order Tracking
            </a>
          </div>
        </div>
        <div>
          <p className="mb-[42px] text-xl font-semibold">Pages</p>
          <div className="flex flex-col">
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Blog
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Browse the Shop
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Category
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Pre-Built Pages
            </a>
            <a
              href="#"
              className="mb-[21px] text-base font-normal text-soft-blue-lavender"
            >
              Visual Composer Elements
            </a>
            <a
              href="#"
              className=" text-base font-normal text-soft-blue-lavender"
            >
              WooCommerce Pages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
