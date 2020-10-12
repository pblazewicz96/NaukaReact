import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 1,
        text: "Zagrać w wiedźmina 2.",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Zagrać w wiedźmina 1.",
        date: "2018-02-11",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Posprzątać",
        date: "2018-10-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Zrobić pranie",
        date: "2018-01-11",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Wygrać w lotto",
        date: "2019-03-16",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // console.log("del  elementu o id" + id);
    // const tasks = [...this.qstate.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });

    //Z użyciem metody filtr V

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    // console.log("delchange w app" + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    console.log("obiekt dodany");
    const task = {
      id: this.counter,
      // text: text,
      text,
      // date: date,
      date,
      // important: important,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
