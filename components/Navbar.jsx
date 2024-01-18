"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <Disclosure as="nav" className="glassmorphism rlative z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative z-[309999]">
            <div className="absolute w-[50%] inset-0 gradient-01 gradient-01" />

            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between ml-10 sm:items-stretch sm:justify-between">
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
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-900 hover:text-white",
                          "rounded-md hover:scale-105 transition-transform px-3 py-2 text-sm font-medium cursor-pointer relative z-20"
                        )}
                        aria-current={
                          item.href === pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href="https://wa.me/message/67M7J5TGVYC7L1">
                    <Button className="bg-gray-900 hover:scale-105 transition-transform">
                      Whatsapp
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-slate-900 text-white"
                      : "text-gray-300 hover:bg-slate-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
