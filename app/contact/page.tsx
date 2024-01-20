"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  location: string;
  requirements: string;
  agreed: boolean;
  eventType: string;
  startDate: string;
  endDate: string;
  serviceHours: number;
  interests: string[];
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "IN",
    location: "",
    requirements: "",
    agreed: false,
    eventType: "",
    startDate: "",
    endDate: "",
    serviceHours: 0,
    interests: [],
  });

  const [formErrors, setFormErrors] = useState<Record<string, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    country: false,
    location: false,
    eventType: false,
    startDate: false,
    endDate: false,
    serviceHours: false,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      interests: prevData.interests.includes(interest)
        ? prevData.interests.filter((item: any) => item !== interest)
        : [...prevData.interests, interest],
    }));
    console.log(formData);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    toast.loading("Submitting!...", {
      icon: "◌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    // Check for required fields
    const requiredFields: Array<keyof FormData> = [
      "firstName",
      "lastName",
      "email",
      "phoneNumber",
      "country",
      "location",
      "eventType",
      "startDate",
      "endDate",
      "serviceHours",
    ];

    const newFormErrors: Record<string, boolean> = {};
    let hasErrors = false;

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newFormErrors[field] = true;
        hasErrors = true;
      } else {
        newFormErrors[field] = false;
      }
    });
    const today = new Date().toISOString().split("T")[0];
    if (formData.startDate && formData.startDate < today) {
      newFormErrors.startDate = true;
      hasErrors = true;
    } else {
      newFormErrors.startDate = false;
    }
    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      newFormErrors.endDate = true;
      hasErrors = true;
    } else {
      newFormErrors.endDate = false;
    }

    setFormErrors(newFormErrors);

    if (!hasErrors) {
      // Form submission logic

      console.log("Form submitted:", formData);
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        toast("We will reach out to you soon!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        console.log(JSON.stringify(formData));
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log("Error sending form data:", error);
      }
    } else {
      // Scroll to the first field with an error for better visibility
      const firstErrorField = requiredFields.find(
        (field) => newFormErrors[field]
      );
      const element = document.getElementById(firstErrorField || "");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    console.log(formData);
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitButton = () => {
    // Use toast for success message
    setIsLoading(true);

    // Simulate a delay for demonstration purposes (you can remove this in production)
    setTimeout(() => {
      // Reset loading state after a delay
      setIsLoading(false);
      toast.dismiss();

      // Show success message
      toast.success("Your message has been sent.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }, 2000); // Change the duration as needed
  };

  return (
    <>
      <Navbar />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 relative">
        <Toaster />
        <div
          className="absolute inset-x-0 top-[20rem] -z-20 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Rent a VR
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Fill out your details and our team will contact you.
          </p>
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  onChange={handleInputChange}
                  name="firstName"
                  id="firstName"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleInputChange}
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  required
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    onChange={handleInputChange}
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>IN</option>
                    <option disabled>CA</option>
                    <option disabled>EU</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  onChange={handleInputChange}
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="startDate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Event Start Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formErrors.startDate && "border-red-500"
                  }`}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.startDate && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.startDate
                      ? "Start Date must be greater than today"
                      : "Start Date is required"}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="endDate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Event End Date
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formErrors.endDate && "border-red-500"
                  }`}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.endDate && (
                  <p className="text-red-500 text-xs mt-1">
                    End Date cannot be before Start Date
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Event Location (City,State)
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="location"
                  onChange={handleInputChange}
                  id="location"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="eventType"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Event Type
              </label>
              <div className="mt-2.5">
                <select
                  id="eventType"
                  name="eventType"
                  className="block w-full rounded-md border-0 bg-transparent bg-none px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Event Type</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Individual">Individual</option>
                  <option value="School/college">School/College</option>
                  <option value="Conference">Conference</option>
                </select>

                {formErrors.eventType && (
                  <p className="text-red-500 text-xs mt-1">
                    Event Type is required
                  </p>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="serviceHours"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Service Hours Per Day
              </label>
              <div className="mt-2.5">
                <input
                  type="range"
                  name="serviceHours"
                  id="serviceHours"
                  min="0"
                  max="10"
                  step="1"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                />
                <span className="text-gray-600">
                  {formData.serviceHours} hours
                </span>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="interests"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Are you interested in:
              </label>
              <div className="mt-2.5">
                <div className="flex gap-2 flex-wrap justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="catering"
                      onChange={() =>
                        handleCheckboxChange("STANDALONE – Wireless")
                      }
                    />
                    <span className="ml-2">STANDALONE – Wireless</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="Mixed Reality Games"
                      onChange={() =>
                        handleCheckboxChange("Mixed Reality Games")
                      }
                    />
                    <span className="ml-2">Mixed Reality Games</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="Zombie shooter"
                      onChange={() => handleCheckboxChange("Zombie shooter")}
                    />
                    <span className="ml-2">Zombie shooter</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="VR+Mobile Group Gaming"
                      onChange={() =>
                        handleCheckboxChange("VR+Mobile Group Gaming")
                      }
                    />
                    <span className="ml-2">VR+Mobile Group Gaming</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="VR High performance – Gaming"
                      onChange={() =>
                        handleCheckboxChange("VR High performance – Gaming")
                      }
                    />
                    <span className="ml-2">VR High performance – Gaming</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="VR Cricket Simulator"
                      onChange={() =>
                        handleCheckboxChange("VR Cricket Simulator")
                      }
                    />
                    <span className="ml-2">VR Cricket Simulator</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests"
                      value="VR Race Simulator"
                      onChange={() => handleCheckboxChange("VR Race Simulator")}
                    />
                    <span className="ml-2">VR Race Simulator</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="requirements"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Event Requirements
              </label>
              <div className="mt-2.5">
                <textarea
                  name="requirements"
                  id="requirements"
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      requirements: e.target.value,
                    }))
                  }
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={formData.agreed}
                  onChange={() =>
                    setFormData((prevData) => ({
                      ...prevData,
                      agreed: !prevData.agreed,
                    }))
                  }
                  className={classNames(
                    formData.agreed ? "bg-indigo-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      formData.agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              onClick={handleSubmitButton}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let`s talk
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
