class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.avatar = React.createRef();
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.textInput}/>
        <Avatar ref={this.avatar}/>
      </div>
    );
  }
}