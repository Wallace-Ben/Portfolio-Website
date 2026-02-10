import { Project } from "@/assets/types";

type builtWithCardProps = {
  data: Project;
};

export default function BuiltWithCard({ data }: builtWithCardProps) {
  return (
    <div className="border-3 bg-mist-air border-emerald rounded-xl p-5 flex flex-col items-center max-w-[350px] overflow-hidden">
      <h2 className="font-semibold text-xl text-emerald mb-4">Built with:</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {data.keywords.map((keyword: string) => (
          <p
            key={data.id + " - " + keyword}
            className="font-semibold text-emerald"
          >
            {keyword}
          </p>
        ))}
      </div>
    </div>
  );
}
