import { Project } from "@/assets/types";

export function NumOfPages(numPerPage: number, data: Project[]) {
  const numOfPages = Math.ceil(data.length / numPerPage);

  return numOfPages;
}

export function PaginationArray(
  currentPage: number,
  numPerPage: number,
  data: Project[]
) {
  const numPages = NumOfPages(numPerPage, data);

  if (numPages < 7) {
    return Array.from({ length: numPages }, (_, i) => String(i + 1));
  }

  const pageSet = new Set([
    1,
    numPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);
  const sortedPages = Array.from(pageSet)
    .filter((p) => p > 0 && p <= numPages)
    .sort((a, b) => a - b);

  const result: (string | number)[] = [];
  sortedPages.forEach((page, index) => {
    if (index > 0 && sortedPages[index - 1] < page - 1) {
      result.push("...");
    }
    result.push(String(page));
  });

  return result;
}
