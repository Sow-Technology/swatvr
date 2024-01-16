import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Product() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">VR Showcase</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Real-Life Applications of Virtual Reality</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Take users on a journey through real-life applications of virtual reality. Showcase how VR is being used across various industries and experiences:


              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <video
          autoplay={true}
          loop={true}
          muted={true}
          controls
          
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            alt=""
          >
            <source src="/vr1.mp4"/>
          </video>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              Embark on a captivating journey through the versatile realms of virtual reality in our VR Rental Service. Immerse yourself in the real-world applications that transcend traditional boundaries, showcasing how VR technology extends far beyond gaming. Explore innovative solutions in business, healthcare, travel, art, and more, as we unveil the transformative impact of virtual reality across diverse industries. From revolutionizing employee training to redefining how we experience healthcare, our VR Showcase is your passport to witness the extraordinary ways in which VR is shaping our future. Join us on this exploration as we unveil the limitless possibilities of virtual reality in an immersive showcase like never before.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                💼
                  <span>
                    <strong className="font-semibold text-gray-900">Business and Training Solutions.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                🏥                  <span>
                    <strong className="font-semibold text-gray-900">Healthcare and Therapy.</strong> Explore the use of VR in healthcare, showcasing how it aids in therapy, pain management, and medical training.

                  </span>
                </li>
                <li className="flex gap-x-3">
                🌍                  <span>
                    <strong className="font-semibold text-gray-900">Virtual Tourism.</strong> Transport users to different parts of the world through VR. Showcase how virtual reality is changing the landscape of travel and exploration.

                  </span>
                </li>
                <li className="flex gap-x-3">
                🎨                <span>
                    <strong className="font-semibold text-gray-900">Art and Creativity.</strong> Illustrate how VR is transforming social interactions with virtual gatherings, events, and shared experiences. Showcase platforms that facilitate social connections in the virtual space.


                  </span>
                </li>
                <li className="flex gap-x-3">
                🏛️               <span>
                    <strong className="font-semibold text-gray-900">Architectural Visualization.</strong> Explore how VR is revolutionizing architectural design and visualization, allowing users to step into virtual representations of buildings and spaces.



                  </span>
                </li>
              </ul>
              <p className="mt-8">
              As you explore the boundless possibilities within our VR Rental services we invite you to envision a world where virtual reality transcends the expected, shaping industries, sparking creativity, and fostering connections in ways previously unimaginable. At SWAT VR Rental services, we are not merely providing VR rentals; we are at the forefront of a revolution that is redefining how we experience and interact with the world. Join us on this thrilling journey into the future, where the extraordinary becomes the norm, and virtual reality becomes an integral part of our daily lives. Embrace the transformative power of VR, and let us pave the way for a reality that knows no bounds.


              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Get Started Today.</h2>
              <p className="mt-6">
              Ready to embark on your own VR adventure? Dive into our VR rentals, discover new dimensions, and unlock a world of immersive experiences. Whether you`re a seasoned VR enthusiast or a curious explorer, SWAT VR  is here to provide the tools and inspiration for you to shape your own virtual reality narrative. Start your journey today and witness the extraordinary possibilities that await within the captivating landscapes of virtual reality.






              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
