class App extends React.Component {
  state = {
    avaliableProd: 10,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };
  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      avaliableProd: this.state.avaliableProd - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    const { shoppingCart, avaliableProd } = this.state;
    const style =
      this.state.shoppingCart === 0
        ? {
            opacity: 0.3,
          }
        : {};
    return (
      <div>
        <button
          disabled={shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span style={style}>{shoppingCart}</span>

        <button
          disabled={shoppingCart === avaliableProd ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
