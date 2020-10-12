import React, { Component } from "react";
import "./App.css";
import Word from "./Word.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [], //zadanie AJAX
      isLoading: false,
    };
  }

  componentDidMount() {
    setTimeout(this.fetchData, 2000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ words: data.words, isLoaded: true });
      });
  };

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return <ul>{this.state.isLoaded ? words : "Wczytuję dane."}</ul>;
  }
}

export default App;
