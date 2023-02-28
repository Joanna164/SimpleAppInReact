// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageIsActive: false,
//     };
//     this.handleMessageButton = this.handleMessageButton.bind(this);
//   }

//   handleMessageButton() {
//     this.setState((prevState) => ({
//       messageIsActive: !prevState.messageIsActive,
//     }));
//     // this.setState({
//     //   messageIsActive: !this.state.messageIsActive,
//     // });
//   }

//   render() {
//     const text =
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//     return (
//       <>
//         <button onClick={this.handleMessageButton}>
//           {this.state.messageIsActive ? "Ukryj" : "Pokaz"}
//         </button>
//         {this.state.messageIsActive && <p>{text}</p>}
//       </>
//     );
//   }
// }

// ReactDOM.render(<Message />, document.getElementById("root"));

// {
//   /* <p>{this.state.messageIsActive && text}</p> */
//   {
//     this.state.messageIsActive ? <p>{text}</p> : null;
//   }
// }
