import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Person3Icon from "@mui/icons-material/Person3";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";

export function Infos() {
  const tecs = [
    { name: "Vue.js", src: "/vuejs.svg" },
    { name: "React", src: "/react.svg" },
    { name: "Next.js", src: "/nextjs.svg" },
    { name: "Typescript", src: "/typescript.svg" },
    { name: "Javascript", src: "/javascript.svg" },
    { name: "Sass", src: "/sass.svg" },
    { name: "Bootstrap", src: "/bootstrap.svg" },
    { name: "Tailwind", src: "/tailwind.svg" },
    { name: "Vuetify", src: "/vuetify.svg" },
  ];
  return (
    <div className="container mx-auto px-4 mt-5 lg:mt-0">
      <div className="mb-5">
        <div className="bg-[#6b8f48] p-3 rounded-t-md shadow-xl border border-[#2b405e] flex items-start">
          <Person3Icon className="text-zinc-950" />
          <p className="text-zinc-950 ml-2">Following 14 people</p>
        </div>
        <div className="bg-[#324c65] p-3 rounded-b-md shadow-xl border border-[#2b405e] flex items-start">
          <PersonAddIcon className="text-gray-400" />
          <p className="text-gray-400 ml-2">Add and remove</p>
        </div>
      </div>
      <div className="bg-[#293e5a] p-3 mb-5 rounded-md shadow-xl border border-[#213652] flex items-start">
        <FavoriteIcon className="text-gray-400" />
        <p className="text-gray-400 ml-2">
          Liked
          <Link
            href="https://www.youtube.com/watch?v=d6iQrh2TK98&t=178s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>37</span>
          </Link>
          posts
        </p>
      </div>
      <div className="rounded-lg shadow-xl bg-[#243853]">
        <div className="w-full flex justify-center pt-2">
          <div className="w-[90%] flex justify-between text-sm px-3 py-2 bg-[#1e324d] rounded-xl shadow-sm scale-95 translate-y-1">
            <input placeholder="Skills .." className="w-[50%]" />
            <SearchIcon className="text-gray-400 w-[20%]" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-2 py-3 xl:px-4">
          {tecs.map((tec) => (
            <div key={tec.src || tec.name}>
              <Image src={tec.src} alt={tec.name} width="35" height="35" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
