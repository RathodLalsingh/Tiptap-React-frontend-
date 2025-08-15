
export default function paginateContent(ans) {
  const Page_size = 1000;
  const pages = [];

  let index = 0;
  while (index < ans.length) {
    pages.push(ans.slice(index, index + Page_size));
    index += Page_size;
  }

  return pages;
}