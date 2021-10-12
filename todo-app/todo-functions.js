// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const summaryDOM = generateSummaryDOM(incompleteTodos);
  document.querySelector("#todos").appendChild(summaryDOM);

  filteredTodos.forEach((todo) => {
    const todoItem = generateTodoDOM(todo);
    document.querySelector("#todos").appendChild(todoItem);
  });
};

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const p = document.createElement("p");
  p.textContent = todo.text;
  return p;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h4");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
