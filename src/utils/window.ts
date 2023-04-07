export const scrollTo = (id: string, offset?: number) => {
  const top = document.getElementById(id)?.offsetTop as number;

  window.scrollTo({
    top: offset ? top - offset : top,
    behavior: 'smooth',
  });
};
