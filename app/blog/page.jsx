import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <div className="container max-w-screen-lg mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="shadow-lg rounded-lg overflow-hidden dark:border-2"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className=" text-sm mb-4">
                <span>By {blog.author}</span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
