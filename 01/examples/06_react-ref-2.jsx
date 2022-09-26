class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  handleSubmit() {
    console.log("value:", this.input.current.value);
  }

  render() {
    return (
      <input type='text' ref={this.textInput}/>
    );
  }
}