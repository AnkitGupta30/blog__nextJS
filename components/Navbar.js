"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-btn";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [isOpen] = useState(false);

  const pathname = usePathname();
  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(70);
    }, 100);
    setTimeout(() => {
      setProgress(100);
    }, 400);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => {
      setProgress(0);
    }, 500);
  }, []);

  return (
    <nav className="p-4 bg-background/50 sticky top-0  backdrop-blur border-b z-10">
      <LoadingBar
        color="#A855F7"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container max-w-screen-lg mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-lg font-bold">AnkitBlog</div>
        </Link>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4 font-bold">AnkitBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>

                    <div>
                      <Button className="mx-1" variant="outline" size={"sm"}>
                        Login
                      </Button>
                      <Button className="mx-1" variant="outline" size={"sm"}>
                        Signup
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm md:flex items-center space-x-2">
            <Link href="/" className="hover:font-bold">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:font-semibold hover:scale-105 transition-transform duration-300"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="hover:font-semibold hover:scale-105 transition-transform duration-300"
            >
              Blog
            </Link>

            <div className="flex items-center">
              <Button className="mx-1" variant="outline">
                Login
              </Button>
              <Button className="mx-1" variant="outline">
                Signup
              </Button>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
