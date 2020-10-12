class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "kompot", active: false },
      { id: 2, name: "rosołek", active: false },
      { id: 3, name: "pomidorowa", active: false },
      { id: 4, name: "schabowe", active: false },
      { id: 5, name: "frytki", active: false },
      { id: 6, name: "ziemniaki pieczone", active: false },
      { id: 7, name: "ciasto", active: false },
      { id: 8, name: "lody", active: false },
      { id: 9, name: "chleb", active: false },
      { id: 10, name: "smalec", active: false },
    ],
  };

  handleChangeStatus = (id) => {
    // console.log(id);

    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      items,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </React.Fragment>
    );
  }
}
