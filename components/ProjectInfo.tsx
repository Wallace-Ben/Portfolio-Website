import { Project } from "@/assets/types";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

type ProjectPageProps = {
  data: Project;
};

export default function ProjectInfo({ data }: ProjectPageProps) {
  return (
    <div className="pr-15">
      <div className="flex items-center max-w-40 gap-2 text-lg text-emerald-deep hover:text-emerald cursor-pointer">
        <IoArrowBack size={20} />
        <Link href="/projects">Back to projects</Link>
      </div>

      <h1 className="xl:text-4xl text-2xl font-semibold text-emerald mt-8">
        {data.title} Project
      </h1>
      <div className="flex flex-col gap-7 mt-5">
        {data.content.map((item) => (
          <div key={item.id}>
            {item.type === "text" && <p>{item.text}</p>}
            {item.type === "textWithImage" && (
              <div className="flex items-center gap-10">
                <p className="max-w-[350px] ">{item.text}</p>
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center gap-1 border-2 border-emerald rounded-xl overflow-hidden">
                    <Image
                      alt={item.alt ? item.alt : ""}
                      src={item.src ? item.src : ""}
                      width={500}
                      height={500}
                    />
                  </div>
                  <p className="italic">{item.alt}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
