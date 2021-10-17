"use strict";

// fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Remove a todo from the list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
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
  const todoEl = document.createElement("div");
  const checkEl = document.createElement("input");
  const textEl = document.createElement("span");
  const removeButton = document.createElement("button");

  // setup todo checkbox
  checkEl.setAttribute("type", "checkbox");
  checkEl.checked = todo.completed;
  todoEl.appendChild(checkEl);
  checkEl.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // setup the todo text
  textEl.textContent = todo.text;
  todoEl.appendChild(textEl);

  // setup the remove button
  removeButton.textContent = "x";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h4");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
