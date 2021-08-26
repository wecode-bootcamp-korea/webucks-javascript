window.addEventListener("DOMContentLoaded", function () {
  const loginUser = new CommonData("users").findMany();

  const detailRepository = new CommonData("detail");
  const painter = new Paint([
    "detail__title",
    "detail__img",
    "detail__1-heart-0",
    "detail__2-heart-0",
    "comment__form",
    "detail__comment-input",
    "detail__comments",
  ]);

  const { index, img, title, isGetHeart } = detailRepository.initData[0];

  painter.detailPainter(
    { img, title, index },
    "detail__title",
    "detail__img",
    "detail__1-heart-0",
    "detail__2-heart-0",
    isGetHeart,
    "comment__form",
    "detail__comment-input",
    loginUser
  );
});
