import Image from "next/image";

interface postProps {
  children: React.ReactNode;
}

export function Post({ children }: postProps) {
  return (
    <div className="container mx-auto px-4 py-2 flex postContent">
      <Image
        src="/eu.jpg"
        alt="Bianca Takamori"
        width="100"
        height="100"
        className="flex-none rounded-xl shadow-xl"
      />
      <div className="relative bg-[#ffffff] shadow-xl ml-6 px-4 py-5 flex-1 rounded-xl before:content-[''] before:absolute before:-left-2 before:top-4 before:w-0 before:h-0 before:border-t-8 before:border-b-8 before:border-r-8 before:border-t-transparent before:border-b-transparent before:border-r-white">
        {children}
      </div>
    </div>
  );
}
