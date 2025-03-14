import { Post } from "@/app/components/post";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Bianca() {
  return (
    <>
      <div className="hidden md:inline">
        <Post
          src="/eu.jpg"
          alt="Bianca Takamori"
          width={100}
          height={100}
          isPost={true}
        >
          <div className="flex justify-between items-center">
            <p className="text-gray-400">btakamori</p>
            <div className="flex justify-end">
              <RepeatIcon className="text-gray-400" />
              <FavoriteIcon className="text-red-900 ml-3 mr-2" />
            </div>
          </div>
          <div className="px-3">
            <p className="text-zinc-900 text-lg mt-2">Quem sou eu</p>
            <p className="text-zinc-500 text-md mt-2">
              Oi! Meu nome é Bianca Takamori e sou desenvolvedora frontend. Sou
              formada em Radiologia pela UTFPR, mas, em 2023, decidi mudar de
              carreira e mergulhar no desenvolvimento, onde descobri minha
              paixão pelo frontend. <br /> Sempre amei arte e criar coisas, e
              vejo cada projeto como uma nova oportunidade de expressão e
              inovação. Minhas habilidades técnicas incluem HTML, CSS,
              JavaScript, TypeScript, Vue.js, React.js, Sass, Bootstrap, Vuetify
              e Tailwind. <br /> Sou movida a desafios e adoro resolver
              problemas. Quando não estou programando, costumo ficar com meus
              gatos, crochetando, assistindo séries e documentários ou lendo.
            </p>
            <p className="text-gray-400 text-sm my-3">
              #maedepet #potterhead #bookLovers #crochetLovers
            </p>
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
          <div>
            <p className="text-zinc-900 text-lg">Quem sou eu</p>
            <p className="text-zinc-500 text-md mt-2">
              Oi! Meu nome é Bianca Takamori e sou desenvolvedora frontend. Sou
              formada em Radiologia pela UTFPR, mas, em 2023, decidi mudar de
              carreira e mergulhar no desenvolvimento, onde descobri minha
              paixão pelo frontend. <br /> Sempre amei arte e criar coisas, e
              vejo cada projeto como uma nova oportunidade de expressão e
              inovação. Minhas habilidades técnicas incluem HTML, CSS,
              JavaScript, TypeScript, Vue.js, React.js, Sass, Bootstrap, Vuetify
              e Tailwind. <br /> Sou movida a desafios e adoro resolver
              problemas. Quando não estou programando, costumo ficar com meus
              gatos, crochetando, assistindo séries e documentários ou lendo.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-sm my-3">
                #maedepet #potterhead #bookLovers #crochetLovers
              </p>
              <div className="flex justify-end">
                <RepeatIcon className="text-gray-400" />
                <FavoriteIcon className="text-red-900 ml-3 mr-2" />
              </div>
            </div>
          </div>
        </Post>
      </div>
    </>
  );
}
