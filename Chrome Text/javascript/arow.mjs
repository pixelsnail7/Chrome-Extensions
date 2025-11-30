// Arow JS
// Version 0.0.1
// Author: Akash Kumar Shil
// License: Self-Proprietary
// Copyright (c) 2023 Akash Kumar Shil

// 
// Get Element by ID
// 
export function $id(id) {
    return document.getElementById(id);
}

// 
// Get Element by Class
// 
export function $class(className) {
    return document.getElementsByClassName(className);
}

//
// Get Element by Tag Name
// 
export function $tag(tagName) {
    return document.getElementsByTagName(tagName);
}

//
// Get Element by Query Selector
// 
export function $query(query) {
    return document.querySelector(query);
}

// 
// Get Element by Query Selector All
// 
export function $all(query) {
    return document.querySelectorAll(query);
}

//
// USE_STATE
//
export function useState(initialState = null) {
  // State
  let state = initialState;
  // Getter
  function getState() {
    return state;
  }
  // Setter
  function setState(newState) {
    state = newState;
  }
  return [getState, setState];
}

//
// USE_MEMORY
//
export function useMemory(key) {
  // Initialize if missing
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, "0"); // or "0", up to you
  }

  function setter(value) {
    localStorage.setItem(key, value);
    return value;
  }

  function getter() {
    return localStorage.getItem(key);
  }

  return [getter, setter];
}

