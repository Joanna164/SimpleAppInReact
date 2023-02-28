class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
    // result: 0,
  };

  handleMathClick = (type, number = 1) => {
    // debugger;
    if (type === "subtraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: 0,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton name="reset" type="reset" click={this.handleMathClick} />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Licznik kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>Przciązenie procesora!</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};

ReactDOM.render(<Counter result={10} />, document.getElementById("root"));
