const useGetListLocalStorage = () => {
  try {
    const favList = JSON.parse(window.localStorage.getItem("favList"));
    return favList;
  } catch (err) {
    console.error(err);
  }
};

export default useGetListLocalStorage;
