export type ProjectContent =
  | {
      id: string;
      type: "text";
      text: string;
    }
  | {
      id: string;
      type: "textWithImage";
      text: string;
      src: string;
      alt: string;
    };

export type Project = {
  id: string;
  title: string;
  recent_project_summary: string;
  project_card_summary: string;
  key_skills: string[];
  keywords: string[];
  url: string;
  image: string;
  date: string;
  completed: boolean;
  type: string;
  focus: string;
  context: string;
  content: ProjectContent[];
};
