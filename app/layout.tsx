"use client";
import "./globals.css";
import { Post } from "./components/post";
import { Infos } from "./components/infos";
import Icons from "./components/icons";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container mx-auto px- py-2">
            <div className="hidden md:flex items-center justify-between text-sm lg:text-xl ">
              <Link href="/" className="transition py-2">
                <Image
                  src="/tumblr.png"
                  alt="tumblr"
                  width={250}
                  height={250}
                />
              </Link>
              <div className="items-center space-x-8">
                <Link
                  href="/"
                  className={`hover:text-white transition relative rounded-lg ${
                    pathname === "/"
                      ? "text-white before:content-[''] before:absolute before:bottom-[-35px] lg:before:bottom-[-30px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#21334d] before:z-10"
                      : "text-gray-400"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/bianca"
                  className={`hover:text-white transition relative rounded-lg ${
                    pathname === "/bianca"
                      ? "before:content-[''] before:absolute before:bottom-[-35px] lg:before:bottom-[-30px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#21334d] before:z-10"
                      : "text-gray-400"
                  }`}
                >
                  Bianca Takamori
                </Link>
                <Icons />
              </div>
            </div>
            <div className="flex md:hidden justify-between px-4">
              <Link href="/" className="transition py-2">
                <Image
                  src="/tumblr.png"
                  alt="tumblr"
                  width={150}
                  height={150}
                />
              </Link>
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon className="text-xl" />
              </button>
            </div>
            {isOpen && (
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
            )}
            <div
              className={`fixed top-0 right-0 w-64 h-full bg-[#21334d] shadow-lg p-5 z-50 transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <MenuIcon className="text-sm text-white" />
              </button>
              <ul className="mt-10 space-y-4">
                <li>
                  <Link
                    href="/"
                    className="block text-white hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bianca"
                    className="block text-white hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Bianca Takamori
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="container m-auto">
          <div className="lg:flex md:rounded-xl mx-auto px-4 py-2 md:py-5 bg-white md:bg-[#21334d]">
            <div className="w-[80%] hidden md:inline">
              <Post
                src="/eu.jpg"
                alt="Bianca Takamori"
                width={100}
                height={100}
                isPost={false}
              >
                <div>
                  <h1> oie</h1>
                </div>
              </Post>
              {children}
            </div>
            <div className="w-[20%] hidden md:inline">
              <Infos />
            </div>
            <div className="md:hidden">{children}</div>
          </div>
        </div>
        <footer className="fixed bottom-0 md:hidden">
          <div className="w-screen bg-[#21334d] p-3 rounded-t-md border border-[#2b405e] flex items-center justify-around">
            <Icons />
          </div>
        </footer>
      </body>
    </html>
  );
}
