import "./styles.css";

const article = document.getElementsByClassName("article-box")[0];
const articleModal = document.getElementsByClassName("article-modal")[0];

article.addEventListener("click", () => {
  // 関数の実行前後の表示結果間でトランジションする
  document.startViewTransition(() => {
    articleModal.classList.add("is-active");
  });
});

const articleModalClose = document.getElementsByClassName("close")[0];
articleModalClose.addEventListener("click", () => {
  // 関数の実行前後の表示結果間でトランジションする
  document.startViewTransition(() => {
    articleModal.classList.remove("is-active");
  });
});
