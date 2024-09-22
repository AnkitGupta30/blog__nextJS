import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>
      <header className="text-white py-4">
        <h1 className="text-4xl text-center text-black dark:text-white">
          About Me
        </h1>
      </header>
      <main className="flex-grow p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Ankit Gupta</h2>
          <p className="text-lg">
            Passionate MERN Stack Developer | Crafting Dynamic Web Solutions
            with MongoDB, Express.js, React, and Node.js also Next.JS
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            50<sup>+</sup>
            <span className="text-blue-600">Project</span>
          </h2>
          <p className="text-lg">
            As a MERN stack developer, I have completed over{" "}
            <span className="text-xl font-bold">50</span>
            <sup className="text-xl font-bold">+</sup>projects during college,
            building dynamic web applications with MongoDB, Express.js, React,
            and Node.js. These projects showcase my proficiency in creating
            scalable, responsive, and user-friendly solutions.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-lg">
            Feel free to reach out to us at Linkedin :{" "}
            <a
              href="https://www.linkedin.com/in/ankit-kumar-0b91bb23a/"
              className="text-blue-600 underline"
              target="_main"
            >
              ankit-kumar-0b91bb23a
            </a>
          </p>
          <p className="text-lg">
            Feel free to reach out to us at GitHub :{" "}
            <a
              href="https://github.com/AnkitGupta30"
              className="text-blue-600 underline"
              target="_main"
            >
              AnkitGupta30
            </a>
          </p>
          <p className="text-lg">
            Feel free to reach out to us at email :{" "}
            <a
              href="mailto:contact@ourcompany.com"
              className="text-blue-600 underline"
            >
              ankitgupta72950@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Our Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
