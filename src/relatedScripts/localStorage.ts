import type { Todo } from "../types";

const localStorageKeyName = "todos";

export const loadTodos = () => {
  try {
    const stored = localStorage.getItem(localStorageKeyName);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem(localStorageKeyName, JSON.stringify(todos));
  } catch {
    console.error("Ошибка при сохранении данных в LS");
  }
};
