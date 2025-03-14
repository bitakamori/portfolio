import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { usePathname } from "next/navigation";

export default function Icons() {
  const pathname = usePathname();
  return (
    <>
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
      <Link href="/info">
        <InfoIcon
          className={`hover:text-white transition relative rounded-lg ${
            pathname === "/info"
              ? "before:content-[''] before:absolute before:bottom-[-35px] lg:before:bottom-[-30px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-0 before:h-0 before:border-l-[10px] before:border-r-[10px] before:border-b-[10px] before:border-l-transparent before:border-r-transparent before:border-b-[#21334d] before:z-10"
              : "text-gray-400"
          }`}
        />
      </Link>
      <Link
        href="https://www.tumblr.com/login?language=pt_BR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PowerSettingsNewIcon className="text-gray-400 hover:text-white transition" />
      </Link>
    </>
  );
}
