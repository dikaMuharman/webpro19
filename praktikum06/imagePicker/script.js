const img = document.getElementById("image");
const selectImg = document.getElementById("select");

const imgSource = {
  rumah:
    "https://images.unsplash.com/photo-1605063959681-3f84cac3d5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=769&q=80",
  mobil:
    "https://images.unsplash.com/photo-1588127333419-b9d7de223dcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  motor:
    "https://images.unsplash.com/photo-1552306062-29a5560e1c31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  gunung:
    "https://images.unsplash.com/photo-1603393546438-eb03c37b76e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80",
  lautan:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80",
  japan:
    "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
};

selectImg.addEventListener("change", function () {
  img.src = imgSource[this.value];
  img.alt = this.value;
});
