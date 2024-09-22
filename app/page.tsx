"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Coding", "Web Dev....", "Data Science", "Software Engg..."],
      typeSpeed: 150,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // "Explore a free repository of community-driven software engineering components

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Explore a <span className="font-semibold">free repository</span> of
            community-diven{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
            <span>components</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>
      <section className="bg-gray-100 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Our Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Basic Plan */}
            <div className="w-full max-w-[300px] mx-4 mb-8 lg:mb-0 lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Basic
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400 line-through">
                    10GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400 line-through">
                    Basic Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400 line-through">
                    Single User
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1 dark:bg-black" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            {/* Standard Plan */}
            <div className="w-full max-w-[300px] mx-4 mb-8 lg:mb-0 lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border-purple-500 border-2">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Standard
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full mt-1">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    50GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Upto 5 users
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1 dark:bg-black" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>

            <div className="w-full max-w-[300px] mx-4 mb-8 lg:mb-0 lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                  Premium
                </h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">
                    300GB Storage
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Unlimited user
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Community Access
                  </li>
                  <li className="text-gray-600 dark:text-gray-400">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1 dark:bg-black" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-200">
              What Our Client Say
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Here from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Feature 1 */}
            <div className="w-full max-w-[330px] mx-4 mb-8 lg:mb-0 lg:w-1/3 transform transition-transform duration-500 hover:scale-105">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4 dark:text-gray-300">
                  We bring innovative solutions to the table
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center dark:text-gray-200">
                  Ankit Gupta
                </h3>
                <p className="mt-1 text-gray-600 text-center dark:text-gray-300">
                  CEO,Company A
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full max-w-[330px] mx-4 mb-8 lg:mb-0 lg:w-1/3 transform transition-transform duration-500 hover:scale-105">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4 dark:text-gray-300">
                  We bring innovative solutions to the table
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center dark:text-gray-200">
                  Ankit
                </h3>
                <p className="mt-1 text-gray-600 text-center dark:text-gray-300">
                  CEO,Company B
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full max-w-[330px] mx-4 mb-8 lg:mb-0 lg:w-1/3 transform transition-transform duration-500 hover:scale-105">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center mb-4 dark:text-gray-300">
                  We bring innovative solutions to the table
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center dark:text-gray-200">
                  AGM
                </h3>
                <p className="mt-1 text-gray-600 text-center dark:text-gray-300">
                  CEO,Company c
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog  */}
      <section className="bg-gray-100 py-12 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-[28%] p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 1
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <Button className="my-1 dark:bg-black" variant="outline">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-[28%] p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 2
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <Button className="my-1 dark:bg-black" variant="outline">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-[28%] p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 3
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <Button className="my-1 dark:bg-black" variant="outline">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
