// class App extends React.Component {
//   state = {
//     availableProducts: 7,
//     shoppingCard: 1,
//   };

//   handleRemoveFromCart = () => {
//     this.setState({
//       shoppingCard: this.state.shoppingCard - 1,
//     });
//   };

//   handleAddToCart = () => {
//     this.setState({
//       shoppingCard: this.state.shoppingCard + 1,
//     });
//   };

//   handleBuy = () => {
//     this.setState({
//       availableProducts: this.state.availableProducts - this.state.shoppingCard,
//       shoppingCard: 0,
//     });
//   };

//   render() {
//     const { shoppingCard, availableProducts } = this.state;
//     const style = shoppingCard === 0 ? { opacity: 0.3 } : {};
//     return (
//       <div>
//         <button
//           disabled={shoppingCard ? false : true}
//           onClick={this.handleRemoveFromCart}>
//           -
//         </button>
//         <span style={style}>{shoppingCard}</span>
//         <button
//           disabled={shoppingCard == availableProducts ? true : false}
//           onClick={this.handleAddToCart}>
//           +
//         </button>
//         {shoppingCard > 0 && <button onClick={this.handleBuy}>Kup</button>}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
