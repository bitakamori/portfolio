import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Icons() {
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
    </>
  );
}
