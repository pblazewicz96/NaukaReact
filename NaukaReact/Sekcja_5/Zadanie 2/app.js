const Person = (props) => {
  return (
    <li>
      <span>{props.name} </span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};

class App extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan" },
      { id: 2, name: "Piotr" },
      { id: 3, name: "Jas" },
      { id: 4, name: "Ola" },
      { id: 5, name: "Przemek" },
      { id: 6, name: "Olek" },
      { id: 7, name: "Olaf" },
      { id: 8, name: "Okoń" },
      { id: 9, name: "Pstrąg" },
      { id: 10, name: "Grzyb" },
    ],
  };

  handleDelete(id) {
    // console.log(this, id);
    const people = [...this.state.people];
    const index = people.findIndex((person) => person.id === id);
    console.log(index);
    console.log(people);
    people.splice(index, 1);
    console.log(people);
    this.setState({
      people,
    });
  }

  render() {
    const people = this.state.people.map((person) => (
      <Person
        key={person.id}
        name={person.name}
        delete={this.handleDelete.bind(this, person.id)}
      />
    ));

    return <ul>{people}</ul>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
