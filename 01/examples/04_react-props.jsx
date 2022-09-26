import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {img, title} = this.props;
    return (
      <div>
        <img src={img} alt={title}/>
      </div>
    );
  }
}