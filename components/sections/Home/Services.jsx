import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 relative z-10">
      <div className="mb-10 grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-500">
                SERVICE LEVELS
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Virtual Reality Rental Package Options
              </h1>
            </div>
          </div>
          <p className="mt-6 text-xl leading-8 text-gray-50/80">
            Take users on a journey through real-life applications of virtual
            reality. Showcase how VR is being used across various industries and
            experiences:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
        <div className="divide-y glassmorphism divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-yellow-500">
              Starter
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-50/80">
              Standalone setup require game space of 10′ X 10′ with stable power
              Supply
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-yellow-500 sm:text-4xl">
                20$
              </strong>
              <span className="text-sm font-medium text-gray-50/60">
                /month
              </span>
            </p>
            <Link href="/contact">
              <Button className="mt-5 mx-auto px-16 py-6">Get Started</Button>
            </Link>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-yellow-500 sm:text-xl">
              What`s included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Customizable hour package
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  VR Gear with available VR games
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Trained personal to assist with setup
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Set up 30 min prior to event
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="divide-y divide-gray-200 glassmorphism rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-yellow-500">
              Pro
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-50/80">
              High Quality and long duration wired setup with branding and top
              games
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-yellow-500 sm:text-4xl">
                30$
              </strong>
              <span className="text-sm font-medium text-gray-50/80">
                /month
              </span>
            </p>
            <Link href="/contact">
              <Button className="mt-5 mx-auto px-16 py-6">Get Started</Button>
            </Link>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-yellow-500 sm:text-xl">
              What`s included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <span className="text-gray-50/80">
                  {" "}
                  Everything Starter plus
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Highest graphic performance
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80"> High speed Gaming PC </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Set up 1 hour prior to event
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="divide-y glassmorphism divide-gray-200 rounded-2xl border border-gray-200 shadow-sm">
          <div className="p-6 sm:px-8">
            <h2 className="text-lg font-medium text-yellow-500">
              Enterprise
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 text-gray-50/80">
              More customization options, branding and top games such as racing
              sims
            </p>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-yellow-500 sm:text-4xl">
                100$
              </strong>
              <span className="text-sm font-medium text-gray-50/80">
                /month
              </span>
            </p>

            <Link href="/contact">
              <Button className="mt-5 mx-auto px-16 py-6">Get Started</Button>
            </Link>
          </div>
          <div className="p-6 sm:px-8">
            <p className="text-lg font-medium text-yellow-500 sm:text-xl">
              What`s included:
            </p>
            <ul className="mt-2 space-y-2 sm:mt-4">
              <li className="flex items-center gap-1">
                <span className="text-gray-50/80"> Everything in Pro plus</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80"> Custom branding </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80">
                  Trained person to assist
                </span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-50/80"> Extra hgh Graphics </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
