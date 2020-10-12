const ValidationMsg = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const displayMsg = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted) {
    if (isConfirmed) {
      return <ValidationMsg txt="Możesz obejrzeć ten film." />;
    } else {
      return <ValidationMsg txt="Nie możesz obejrzeć tego filmu." />;
    }
  } else {
    return null;
  }
};

const OrderForm = (props) => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age"> Mam więcej niż 16 lat. </label> <br />
      <button type="submit"> Kup bilet </button> {/* <PositiveMsg/> */}
    </form>
  );
};

// const PositiveMsg = () => <p> Możesz obejrzeć ten film. </p>;

// const NegativeMsg = () => <p> Nie możesz obejrzeć tego filmu. </p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  // displayMsg = () => {
  //   if (this.state.isFormSubmitted) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMsg txt="Możesz obejrzeć ten film." />;
  //     } else {
  //       return <ValidationMsg txt="Nie możesz obejrzeć tego filmu." />;
  //     }
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;
    console.log(isConfirmed);
    return (
      <>
        <h1> Kup bilet na horror! </h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {displayMsg(isConfirmed, isFormSubmitted)}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
