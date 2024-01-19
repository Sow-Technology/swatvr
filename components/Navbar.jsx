"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Service", href: "#", sublinks: ["Sublink 1", "Sublink 2"] },
    { name: "Contact", href: "/contact" },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [subModal1Open, setSubModal1Open] = useState(false);
  const [subModal2Open, setSubModal2Open] = useState(false);
  const [subModal3Open, setSubModal3Open] = useState(false);
  const [subModal4Open, setSubModal4Open] = useState(false);
  const [subModal5Open, setSubModal5Open] = useState(false);
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  return (
    <Disclosure as="nav" className="glassmorphism relative z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-[309999]">
            <div className="absolute w-[50%] inset-0 gradient-01 gradient-01" />

            <div className="relative z-[99920] flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 z-50"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between sm:items-stretch sm:justify-between relative w-9/12 lg:w-full">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center cursor-pointer ">
                    <Image
                      className="h-20 w-auto noselect"
                      height={80}
                      width={80}
                      src="/logo.webp"
                      alt="SWAT VR | Best VR rentals in India"
                    />
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:flex items-center">
                  <div className="flex space-x-4 items-center justify-center relative z-20">
                    <Link
                      href="/"
                      className={classNames(
                        pathname === "/"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white",
                        "rounded-md hover:scale-105 transition-transform px-3 py-2 text-sm font-medium cursor-pointer relative z-20"
                      )}
                    >
                      Home
                    </Link>
                    <div
                      href="#"
                      className={classNames(
                        pathname === "#"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white",
                        "rounded-md hover:scale-105 transition-transform px-3 py-2 text-sm font-medium cursor-pointer relative z-20 flex gap-3"
                      )}
                      onClick={() => setModalOpen(!modalOpen)}
                      onMouseEnter={() => setModalOpen(true)}
                      onMouseLeave={() => setModalOpen(false)}
                    >
                      Services
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </div>
                    <Link
                      href="/contact"
                      className={classNames(
                        pathname === "/contact"
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-900 hover:text-white",
                        "rounded-md hover:scale-105 transition-transform px-3 py-2 text-sm font-medium cursor-pointer relative z-20"
                      )}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                {modalOpen && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-14 menumorphism right-16 lg:right-28 glassmorphism text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000]  "
                    onMouseEnter={() => setModalOpen(true)}
                    onMouseLeave={() => setModalOpen(false)}
                  >
                    <motion.li
                      variants={itemVariants}
                      className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      onMouseEnter={() => setSubModal1Open(true)}
                      onMouseLeave={() => setSubModal1Open(false)}
                    >
                      PC VR
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className=" -rotate-90"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      onMouseEnter={() => setSubModal2Open(true)}
                      onMouseLeave={() => setSubModal2Open(false)}
                    >
                      Standalone Games
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className=" -rotate-90"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      onMouseEnter={() => setSubModal3Open(true)}
                      onMouseLeave={() => setSubModal3Open(false)}
                    >
                      Mixed Reality
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className=" -rotate-90"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      onMouseEnter={() => setSubModal4Open(true)}
                      onMouseLeave={() => setSubModal4Open(false)}
                    >
                      Asymeteric Games
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className=" -rotate-90"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </motion.li>
                    <motion.li
                      variants={itemVariants}
                      className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      onMouseEnter={() => setSubModal5Open(true)}
                      onMouseLeave={() => setSubModal5Open(false)}
                    >
                      Stimulator Games
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className=" -rotate-90"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    </motion.li>
                  </motion.ul>
                )}
                {subModal1Open && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-20 lg:-right-20 -right-28  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] "
                    onMouseEnter={() => (
                      setSubModal1Open(true), setModalOpen(true)
                    )}
                    onMouseLeave={() => setSubModal1Open(false)}
                  >
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        PC VR
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Standalone Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Mixed Reality
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Asymeteric Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Stimulator Games
                      </motion.li>
                    </Link>
                  </motion.ul>
                )}
                {subModal2Open && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-20 lg:-right-20 -right-28  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] "
                    onMouseEnter={() => (
                      setSubModal2Open(true), setModalOpen(true)
                    )}
                    onMouseLeave={() => setSubModal2Open(false)}
                  >
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        PC VR
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Standalone Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Mixed Reality
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Asymeteric Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Stimulator Games
                      </motion.li>
                    </Link>
                  </motion.ul>
                )}
                {subModal3Open && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-20 lg:-right-20 -right-28  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] "
                    onMouseEnter={() => (
                      setSubModal3Open(true), setModalOpen(true)
                    )}
                    onMouseLeave={() => setSubModal3Open(false)}
                  >
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        PC VR
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Standalone Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Mixed Reality
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Asymeteric Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Stimulator Games
                      </motion.li>
                    </Link>
                  </motion.ul>
                )}
                {subModal4Open && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-20 lg:-right-20 -right-28  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px]  "
                    onMouseEnter={() => (
                      setSubModal4Open(true), setModalOpen(true)
                    )}
                    onMouseLeave={() => setSubModal4Open(false)}
                  >
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        PC VR
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Standalone Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Mixed Reality
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Asymeteric Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Stimulator Games
                      </motion.li>
                    </Link>
                  </motion.ul>
                )}
                {subModal5Open && (
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                    className="absolute top-20 lg:-right-20 -right-28  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] "
                    onMouseEnter={() => (
                      setSubModal5Open(true), setModalOpen(true)
                    )}
                    onMouseLeave={() => setSubModal5Open(false)}
                  >
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        PC VR
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Standalone Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Mixed Reality
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Asymeteric Games
                      </motion.li>
                    </Link>
                    <Link href="#">
                      <motion.li
                        variants={itemVariants}
                        className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                      >
                        Stimulator Games
                      </motion.li>
                    </Link>
                  </motion.ul>
                )}
                {/* <div className="flex items-center">
                  <Link href="https://wa.me/message/67M7J5TGVYC7L1">
                    <Button className="bg-gray-900 hover:scale-105 transition-transform">
                      Whatsapp
                    </Button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* {navigation.map((item) => ( */}
              <Disclosure.Button
                // key={item.name}
                as="a"
                href="/"
                className={classNames(
                  pathname === "/"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                // aria-current={item.current ? "page" : undefined}
              >
                Home{" "}
              </Disclosure.Button>
              <Disclosure.Button
                // key={item.name}
                as="div"
                // href="#"
                className={classNames(
                  pathname === "#"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  " rounded-md px-3 py-2 text-base font-medium flex justify-between"
                )}
                onClick={() => setModalOpen(!modalOpen)}
              >
                Services
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="rgb(209 213 219)"
                    className="text-gray-300"
                  >
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </Disclosure.Button>
              <Disclosure.Button
                // key={item.name}
                as="a"
                href="/contact"
                className={classNames(
                  pathname == "/contact"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                // aria-current={item.current ? "page" : undefined}
              >
                Contact
              </Disclosure.Button>
              {/* ))} */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
