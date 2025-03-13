import Image from "next/image";

interface postProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPost: boolean;
  nick?: string;
  children: React.ReactNode;
}

export function Post({
  src,
  alt,
  width,
  height,
  isPost,
  nick,
  children,
}: postProps) {
  return (
    <>
      <div
        className="hidden md:flex container mx-auto px-4 py-2"
        style={{ marginTop: isPost ? "10px" : "0" }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-[100px] flex-none rounded-xl shadow-xl"
        />
        <div className="relative bg-[#ffffff] shadow-xl ml-6 px-4 py-2 flex-1 rounded-xl before:content-[''] before:absolute before:-left-2 before:top-4 before:w-0 before:h-0 before:border-t-8 before:border-b-8 before:border-r-8 before:border-t-transparent before:border-b-transparent before:border-r-white">
          {children}
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex items-center w-full pb-2 border-b-2 border-gray-300">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="flex-none rounded-xl shadow-xl"
          />
          <p className="text-zinc-900 text-lg font-medium pl-3">{nick}</p>
        </div>
        <div className="relative bg-[#ffffff] shadow-xl p-3 flex-1 rounded-xl before:content-[''] before:absolute before:-left-2 before:top-4 before:w-0 before:h-0 before:border-t-8 before:border-b-8 before:border-r-8 before:border-t-transparent before:border-b-transparent before:border-r-white">
          {children}
        </div>
      </div>
    </>
  );
}
