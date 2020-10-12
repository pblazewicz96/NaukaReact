class Form extends React.Component {
  state = {
    city: "Londyn",
    text: "",
    isLoved: true,
    number: "0",
  };

  //   handleCityChange = (e) => {
  //     this.setState({
  //       city: e.target.value,
  //     });
  //   };

  //   handleTextChange = (e) => {
  //     this.setState({
  //       text: e.target.value,
  //     });
  //   };

  //   handleIsLovedChange = (e) => {
  //     this.setState({
  //       isLoved: e.target.checked,
  //     });
  //   };

  //   handleVisitsNumberChange(e) {
  //     this.setState({
  //       number: e.target.value,
  //     });
  //   }

  handleChange = (e) => {
    // console.log(e.target.name);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Podaj imię:
          <input
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
            name="city"
          />
        </label>
        <br />
        <label>
          Opisz to miasto:
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy tu byłeś?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">Więcej</option>
          </select>
        </label>
      </div>
      //   <form>
      //     <label>
      //       Podaj imię:
      //       <input type="text" name="name" />
      //     </label>
      //     <br />
      //     <label>
      //       Podaj email:
      //       <input type="email" name="email" />
      //     </label>
      //     <br />
      //     <button>Zapisz się!</button>
      //   </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
