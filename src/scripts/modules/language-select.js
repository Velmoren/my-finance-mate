export const languageSelectModule = () => {
  const select = document.querySelector(".language-select > .language-select__list");
  const listItems = select.querySelectorAll("li");

  if (select) {
    select.addEventListener("click", () => {
      select.classList.toggle("open");
    });
  }

  listItems.forEach((item) => {
    const link = item.querySelector('a')
    
    if (link) {
      link.addEventListener('click', (event) => {
        if (item.classList.contains('active')) {
          event.preventDefault()
        }
      })
    }

    item.addEventListener("click", (event) => {
      const language = item.dataset.language;
      listItems.forEach((i) => {
        i.classList.remove("active");

        if (i.dataset.language === language) {
          i.classList.add("active");
        }
      });
    });
  });
};
