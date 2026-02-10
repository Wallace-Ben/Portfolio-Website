import { Project } from "@/assets/types";

type ProjectDetailsProp = {
  data: Project;
};

export default function ProjectDetailsCard({ data }: ProjectDetailsProp) {
  return (
    <div className="border-3 bg-mist-air border-emerald rounded-xl py-5 px-7 flex flex-col w-[300px] overflow-hidden">
      <h2 className="font-semibold text-xl text-emerald mb-4 m-auto">
        Project details:
      </h2>
      <dl className="flex flex-col gap-4">
        <div className="flex gap-2">
          <dt className="font-semibold text-emerald">Status:</dt>
          <dd>{data.completed ? "Completed" : "Ongoing"}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-emerald">Type:</dt>
          <dd>{data.type}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-emerald">Date:</dt>
          <dd>{data.date.slice(0, 4)}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-emerald">Focus:</dt>
          <dd>{data.focus}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-emerald">Context:</dt>
          <dd>{data.context}</dd>
        </div>
      </dl>
    </div>
  );
}
