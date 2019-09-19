import React from "react";
import AddTodo from "containers/AddTodo";
import Footer from "components/Footer";

import VisibleTodoList from "containers/VisibleTodoList";

import Style from "components/App.m.scss";

const App = () => (
  <div className={Style.App}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
