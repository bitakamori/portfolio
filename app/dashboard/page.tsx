import { Post } from "@/app/components/post";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "../components/carousel";

export default function Dashboard() {
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
            <Carousel />
          </div>
          <p className="text-gray-400 text-sm pl-5 pb-2">
            #pets #tesla #thor #ox
          </p>
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
          <div className="px-3">
            <Carousel />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm my-3">#pets #tesla #thor #ox</p>
            <div className="flex justify-end">
              <RepeatIcon className="text-gray-400" />
              <FavoriteIcon className="text-red-900 ml-3 mr-2" />
            </div>
          </div>
        </Post>
      </div>
    </>
  );
}
