export const getTodosFromLocalStorage = () => {
  const items = localStorage.getItem("todos");
  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};
