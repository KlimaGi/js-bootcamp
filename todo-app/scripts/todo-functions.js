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
  const todoEl = document.querySelector("#todos");
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  todoEl.innerHTML = "";

  const summaryDOM = generateSummaryDOM(incompleteTodos);
  todoEl.appendChild(summaryDOM);

  if (filteredTodos.length > 0) {
    filteredTodos.forEach((todo) => {
      const todoItem = generateTodoDOM(todo);
      todoEl.appendChild(todoItem);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-message");
    emptyMessage.textContent = "No to-dos to show";
    todoEl.appendChild(emptyMessage);
  }
};

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("label");
  const containerEl = document.createElement("div");
  const checkEl = document.createElement("input");
  const textEl = document.createElement("span");
  const removeButton = document.createElement("button");

  // setup todo checkbox
  checkEl.setAttribute("type", "checkbox");
  checkEl.checked = todo.completed;
  containerEl.appendChild(checkEl);
  checkEl.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text
  textEl.textContent = todo.text;
  containerEl.appendChild(textEl);

  // Setup container
  todoEl.classList.add("list-item");
  containerEl.classList.add("list-item__container");
  todoEl.appendChild(containerEl);

  // Setup the remove button
  removeButton.textContent = "remove";
  removeButton.classList.add("button", "button--text");
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
  summary.classList.add("list-title");
  const plural = incompleteTodos.length === 1 ? "" : "s";
  summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`;
  return summary;
};
