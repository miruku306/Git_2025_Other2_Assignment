document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quizForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // フォームの送信を防ぐ

    const selected = document.querySelector('input[name="model"]:checked');

    if (selected && selected.value === "プロトタイピング") {
      alert("正解です！");
    } else {
      alert("不正解です。");
    }
  });
});