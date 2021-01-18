function setListLocalStorage() {
  const favList = {};
  window.localStorage.setItem("favList", JSON.stringify(favList));
}
export default setListLocalStorage;
