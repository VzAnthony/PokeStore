import { useState } from "react";
import useSetLocalStorage from "../hooks/useSetLocalStorage";

function useLocalStorage(key, initialValue) {
  const [storeValue, setValue] = useState(() => {
    try {
      const favList = JSON.parse(window.localStorage.getItem("favList"));
      if (!favList || !favList[key]) {
        return initialValue;
      }
      return favList[key] !== null ? favList[key].fav : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  const setLocalStorage = (value, data) => {
    try {
      const list = window.localStorage.getItem("favList");
      !list && useSetLocalStorage();
      const favList = JSON.parse(window.localStorage.getItem("favList"));
      if (!favList[key]) {
        setValue(value);
        const dataStorage = {
          name: data.name,
          image: data.image,
          fav: storeValue,
        };
        favList[key] = dataStorage;
        window.localStorage.setItem("favList", JSON.stringify(favList));
      } else {
        setValue(value);
        favList[key] = { ...favList[key], fav: storeValue };
        window.localStorage.setItem("favList", JSON.stringify(favList));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return [storeValue, setLocalStorage];
}

export default useLocalStorage;
