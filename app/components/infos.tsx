import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Person3Icon from "@mui/icons-material/Person3";
import CodeIcon from "@mui/icons-material/Code";
import Image from "next/image";

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
        <div className="bg-[#6b8f48] p-3 rounded-t-md border border-[#2b405e] flex items-start">
          <Person3Icon className="text-zinc-950" />
          <p className="text-zinc-950 ml-2">Following 14 people</p>
        </div>
        <div className="bg-[#324c65] p-3 rounded-b-md border border-[#2b405e] flex items-start">
          <PersonAddIcon className="text-gray-400" />
          <p className="text-gray-400 ml-2">Add and remove</p>
        </div>
      </div>
      <div className="bg-[#324c65] p-3 mb-5 rounded-md border border-[#2b405e] flex items-start">
        <FavoriteIcon className="text-gray-400" />
        <p className="text-gray-400 ml-2">Liked 20 posts</p>
      </div>
      <div className="bg-[#324c65] p-3 rounded-md border border-[#2b405e] flex flex-col gap-2">
        <div className="flex items-center">
          <CodeIcon className="text-gray-400" aria-hidden="true" />
          <p className="ml-2 text-gray-400">Skills</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
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
