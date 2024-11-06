import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up to ensure no overflow-hidden remains if component is unmounted
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);



  return (
    <nav
      className={`h-20 w-full flex justify-between items-center px-16 bg-[#DEDEDE] z-[1] fixed top-0 max-sm:px-5 `}
    >
      <a
        href="#"
        className="flex gap-1 text-4xl font-primarybold max-sm:text-xl max-sm:flex-col max-sm:gap-0"
      >
        <h1>DecoNest</h1>
        <h1 className="text-[#FF6201]">Interiors.</h1>
      </a>

      <div className="flex gap-10 font-primarymedium text-xl max-sm:hidden">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </div>

      <div className="hidden max-sm:block" onClick={() => setOpen(true)}>
        <IoMenu size={30} />
      </div>

      <div
        className={`transform transition-transform duration-300 ease-in-out text-2xl font-primarymedium shadow-md flex flex-col absolute top-0 right-0 w-3/4 h-screen bg-[#DEDEDE] items-start pl-10 gap-10 ${
          open ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <div className="w-full flex justify-end p-5">
          <RxCross2 size={24} onClick={() => setOpen(false)} />
        </div>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
      </div>
    </nav>
  );
}
