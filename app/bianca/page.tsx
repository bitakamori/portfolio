import { Post } from "@/app/components/post";
import Image from "next/image";

export default function Bianca() {
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
    <>
      <div className="hidden md:inline">
        <Post
          src="/eu.jpg"
          alt="Bianca Takamori"
          width={100}
          height={100}
          isPost={true}
          nick="btakamori"
        >
          <div>
            <p className="text-red-950">teste nojokyll</p>
          </div>
        </Post>
      </div>
      <div className="md:hidden">
        <Post
          src="/eu.jpg"
          alt="Bianca Takamori"
          width={50}
          height={50}
          isPost={true}
          nick="btakamori"
        >
          <p className="text-zinc-900 text-lg">Skills</p>
          <div className="flex flex-wrap gap-3 justify-center mt-2 py-3">
            {tecs.map((tec) => (
              <div key={tec.src || tec.name}>
                <Image src={tec.src} alt={tec.name} width="35" height="35" />
              </div>
            ))}
          </div>
        </Post>
      </div>
    </>
  );
}
