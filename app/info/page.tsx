import { Post } from "@/app/components/post";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Image from "next/image";

export default function Bianca() {
  return (
    <>
      <div className="hidden md:inline">
        <Post
          src="/eu.jpg"
          alt="Bianca Takamori"
          width={80}
          height={80}
          isPost={true}
        >
          <div className="flex justify-between items-center">
            <p className="text-gray-400">btakamori</p>
            <div className="flex justify-end">
              <RepeatIcon className="text-gray-400" />
              <FavoriteIcon className="text-gray-400 ml-3 mr-2" />
            </div>
          </div>
          <div>
            <p className="text-zinc-900 text-lg mt-2">Sobre o projeto</p>
            <p className="text-zinc-500 text-md mt-2">
              Desenvolvi este projeto utilizando Next.js e Tailwind CSS,
              inspirado no visual icônico do Tumblr de 2012. Escolhi essa
              estética porque o Tumblr foi uma rede social que marcou bastante
              minha adolescência, um espaço onde eu podia me expressar
              livremente e compartilhar minhas paixões.
              <br /> Meu Tumblr na época era dedicado ao universo de Harry
              Potter, com foco no Hagrid. Sempre me identifiquei com ele por
              seus valores, principalmente pelo amor e cuidado que ele tem pelos
              animais. <br /> Esse projeto é uma forma de revisitar essa
              nostalgia, trazendo a essência daquele design simples e
              envolvente, mas com uma abordagem moderna. ✨
            </p>
            <p className="text-gray-400 text-sm my-3">
              #tumblr #lovershagrid #2012
            </p>
          </div>
        </Post>
        <Link
          href="https://lovershagrid.tumblr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Post
            src="/hagrid.jpg"
            alt="loversHagrid"
            width={80}
            height={80}
            isPost={true}
          >
            <div className="flex justify-between items-center">
              <p className="text-gray-400">lovershagrid</p>
              <div className="flex justify-end">
                <RepeatIcon className="text-green-700" />
                <FavoriteIcon className="text-red-900 ml-3 mr-2" />
              </div>
            </div>
            <div className="mt-5">
              <Image
                src="/cabana.jpg"
                alt="hagrid's hut"
                width={300}
                height={300}
                className="w-auto h-auto m-auto rounded-sm"
              />
              <p className="text-gray-400 text-sm mt-3">#omaioral</p>
            </div>
          </Post>
        </Link>
      </div>
      <div className="md:hidden bg-white">
        <Post
          src="/eu.jpg"
          alt="Bianca Takamori"
          width={50}
          height={50}
          isPost={true}
          nick="btakamori"
        >
          <div>
            <p className="text-zinc-900 text-lg">Sobre o projeto</p>
            <p className="text-zinc-500 text-md mt-2">
              Desenvolvi este projeto utilizando Next.js e Tailwind CSS,
              inspirado no visual icônico do Tumblr de 2012. Escolhi essa
              estética porque o Tumblr foi uma rede social que marcou bastante
              minha adolescência, um espaço onde eu podia me expressar
              livremente e compartilhar minhas paixões.
              <br /> Meu Tumblr na época era dedicado ao universo de Harry
              Potter, com foco no Hagrid. Sempre me identifiquei com ele por
              seus valores, principalmente pelo amor e cuidado que ele tem pelos
              animais. <br /> Esse projeto é uma forma de revisitar essa
              nostalgia, trazendo a essência daquele design simples e
              envolvente, mas com uma abordagem moderna. ✨
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm my-3">
                #tumblr #loversHagrid #2012
              </p>
              <div className="flex justify-end">
                <RepeatIcon className="text-gray-400" />
                <FavoriteIcon className="text-red-900 ml-3 mr-2" />
              </div>
            </div>
          </div>
        </Post>
        <div className="w-screen h-[10px] absolute left-0 bg-[#21334d]"></div>
        <div className="my-5">
          <Link
            href="https://lovershagrid.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Post
              src="/hagrid.jpg"
              alt="loversHagrid"
              width={50}
              height={50}
              isPost={true}
              nick="lovershagrid"
            >
              <div className="px-3">
                <Image
                  src="/cabana.jpg"
                  alt="hagrid's hut"
                  width={300}
                  height={300}
                  className="w-auto h-auto m-auto rounded-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm my-3">
                  #tumblr #loversHagrid #2012
                </p>
                <div className="flex justify-end">
                  <RepeatIcon className="text-green-700" />
                  <FavoriteIcon className="text-red-900 ml-3 mr-2" />
                </div>
              </div>
            </Post>
          </Link>
        </div>
      </div>
    </>
  );
}
