const scrollTo = (element: HTMLElement | null) => {
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
export default scrollTo;
