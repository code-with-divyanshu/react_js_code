# React-Redux, Redux-Toolkit, and Todo App Project

## How to install it

    npm install @reduxjs/toolkit

### If you need React bindings:

    npm install react-redux

## What's Included

### Redux Toolkit includes these APIs:

1- configureStore(): wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.</br>

2-createReducer(): that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.</br>

3-createAction(): generates an action creator function for the given action type string.</br>

4-createSlice(): accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.</br>

5-combineSlices(): combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.</br>

6-createAsyncThunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise</br>

7-createEntityAdapter: generates a set of reusable reducers and selectors to manage normalized data in the store</br>

8-The createSelector utility from the Reselect library, re-exported for ease of use.</br>

## Learn

1- Learn about react-redux and redux-toolkit.<br/>
2- Learn how use react-redux and redux-toolkit in a project.<br/>
