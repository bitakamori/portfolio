import Link from "next/link";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LinkIcon from "@mui/icons-material/Link";
import TextsmsIcon from "@mui/icons-material/Textsms";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import VideocamIcon from "@mui/icons-material/Videocam";
export function Creation() {
  return (
    <>
      <div className="flex justify-around">
        <Link
          href={"https://poets.org/poem/do-not-go-gentle-good-night"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontDownloadIcon
            className="text-[#21334d] transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Texto</p>
        </Link>
        <Link
          href={
            "https://i.pinimg.com/736x/66/78/0e/66780e3e47dc78482c3ad1ec57b165da.jpg"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhotoCameraIcon
            className="text-red-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Foto</p>
        </Link>
        <Link
          href={
            "https://i.pinimg.com/736x/1d/4e/f5/1d4ef51867826e82cbd536726b4df649.jpg"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormatQuoteIcon
            className="text-orange-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Citação</p>
        </Link>
        <Link
          href={
            "https://www.linkedin.com/in/bianca-helena-takamori-ribeiro-877593268/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkIcon
            className="text-green-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Link</p>
        </Link>
        <Link
          href={"https://www.youtube.com/shorts/HQ8RU15xki4"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TextsmsIcon
            className="text-blue-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Dialago</p>
        </Link>
        <Link
          href={
            "https://open.spotify.com/episode/0bZ3xvSyxe2sMCgyDpvW6Z?si=f1bb7fbe3f324c12"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <HeadphonesIcon
            className="text-purple-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Audio</p>
        </Link>
        <Link
          href={"https://www.youtube.com/watch?v=tWFIIuZNqg4"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <VideocamIcon
            className="text-pink-400 transition-transform duration-200 ease-out hover:-translate-y-1"
            sx={{ fontSize: 60 }}
          />
          <p className="text-black text-center">Video</p>
        </Link>
      </div>
    </>
  );
}
