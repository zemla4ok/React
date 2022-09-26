class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = ::this.onChangeHandler;
  }

  onChangeHandler(e) {
    console.log("value:", e.target.value);
  }

  render() {
    return (
      <input type='text' onChange={this.onChange}/>
    );
  }
}