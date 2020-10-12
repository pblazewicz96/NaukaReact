const data = {
  users: [
    {
      id: 1,
      age: 25,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 58,
      name: "Piotrek",
      sex: "male",
    },
    {
      id: 3,
      age: 33,
      name: "Staszek",
      sex: "male",
    },
    {
      id: 4,
      age: 13,
      name: "Ola",
      sex: "female",
    },
    {
      id: 5,
      age: 23,
      name: "Ela",
      sex: "female",
    },
    {
      id: 6,
      age: 63,
      name: "Gosia",
      sex: "female",
    },
    {
      id: 7,
      age: 33,
      name: "Jacek",
      sex: "male",
    },
    {
      id: 8,
      age: 11,
      name: "Bartek",
      sex: "male",
    },
    {
      id: 9,
      age: 53,
      name: "Paweł",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>Użytkownik: {user.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>Wiek użytkownika {user.age}</p>
    <p>Płeć użytkownika {user.sex}</p>
  </div>
);

class ListenItem extends React.Component {
  state = {
    select: "all",
  };

  handleUsersFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        //map zwraca nową tablicę przetwarzając dane i budując item
        return users.map((user) => <Item user={user} key={user.id} />);
      case "female":
        //filter pomniejsza nam tablicę do tych które pasują do warunku, również zwraca nową tablicę
        users = users.filter((user) => user.sex === "female");
        return users.map((user) => <Item user={user} key={user.id} />);
      case "male":
        users = users.filter((user) => user.sex === "male");
        return users.map((user) => <Item user={user} key={user.id} />);
      default:
        return "Brak danych!";
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleUsersFilter.bind(this, "all")}>
          Wszyscy
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "female")}>
          Kobiety
        </button>
        <button onClick={this.handleUsersFilter.bind(this, "male")}>
          Mężczyźni
        </button>
        {this.usersList()}
      </div>
    );
  }
}

ReactDOM.render(<ListenItem data={data} />, document.getElementById("root"));
