"use client";
import "./globals.css";
import { Post } from "./components/post";
import { Infos } from "./components/infos";
import Link from "next/link";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container mx-auto px- py-2">
            <div className="flex items-center justify-between">
              <Link href="/" className="transition py-2">
                <Image
                  src="/tumblr.png"
                  alt="tumblr"
                  width="180"
                  height="180"
                />
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  href="/"
                  className={`hover:text-white transition relative rounded-lg ${
                    pathname === "/"
                      ? "text-white before:content-[''] before:absolute before:bottom-[-24px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#21334d] before:z-10"
                      : "text-gray-400"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/bianca"
                  className={`hover:text-white transition relative rounded-lg ${
                    pathname === "/bianca"
                      ? "before:content-[''] before:absolute before:bottom-[-24px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#21334d] before:z-10"
                      : "text-gray-400"
                  }`}
                >
                  Bianca Takamori
                </Link>
                <Link
                  href="https://github.com/bitakamori"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="text-gray-400 hover:text-white transition" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/bianca-helena-takamori-ribeiro-877593268/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="text-gray-400 hover:text-white transition" />
                </Link>
                <Link
                  href="https://www.instagram.com/bitakamori/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="text-gray-400 hover:text-white transition" />
                </Link>
                <Link href="">
                  <InfoIcon className="text-gray-400 hover:text-white transition" />
                </Link>
                <Link
                  href="https://www.tumblr.com/login?language=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PowerSettingsNewIcon className="text-gray-400 hover:text-white transition" />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="container m-auto">
          <div className="rounded-xl mx-auto px-4 py-5 bg-[#21334d] dashboard">
            <div className="w-[80%]">
              <Post>
                <div>
                  {" "}
                  <h1> oie</h1>
                </div>
              </Post>
              {children}
            </div>
            <div className="w-[20%]">
              <Infos />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
