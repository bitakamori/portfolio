import { Post } from "@/app/components/post";

export default function Bianca() {
  return (
    <Post
      src="/eu.jpg"
      alt="Bianca Takamori"
      width={100}
      height={100}
      isPost={true}
    >
      <div>
        <p className="text-red-950">teste nojokyll</p>
      </div>
    </Post>
  );
}
