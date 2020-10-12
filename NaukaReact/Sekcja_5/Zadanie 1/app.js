class App extends React.Component {
  state = {
    options: ["1", "2", "3"],
    option: null,
    value: "",
  };

  handleShowMagicTrick = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("wpisz coś, nie może być puste!");
    const options = [...this.state.options];
    options.push(this.state.value);
    this.setState({
      options,
      value: "",
    });
    alert(`Wróżba dodana, aktualne wróżby: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowMagicTrick}>Zobacz wróżbę</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
