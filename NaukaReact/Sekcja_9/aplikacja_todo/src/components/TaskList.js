import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  // done.sort((a, b) => b.finishDate - a.finishDate);

  //sortowanie po texcie
  // done.sort((a, b) => {
  //   if (a.text > b.text) {
  //     return 1;
  //   }
  //   if (a.text < b.text) {
  //     return -1;
  //   }
  //   return 0;
  // });

  //sortowanie po finishdate:
  done.sort((a, b) => {
    if (a.finishDate < b.finishDate) {
      return 1;
    }
    if (a.finishDate > b.finishDate) {
      return -1;
    }
    return 0;
  });

  //sortowanie alfabetycznie
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  // console.log(active);
  console.log(done);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań!</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione <em>({done.length})</em>
        </h3>
        {done.length > 4 && (
          <span style={{ fontSize: 10 }}>
            wyświetlone są jedynie 4 ostatnie zadania
          </span>
        )}
        {doneTasks.slice(0, 4)}
      </div>
    </>
  );
};

export default TaskList;
