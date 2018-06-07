import React, { Component } from "react";
import FlipMove from "react-flip-move";


class TodoItems extends Component {

  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
  }

  render() {
    var todoTasks = this.props.tasks;
    var listItems = todoTasks.map(this.createTasks);

    return (
      <ul className="theList">
        <FlipMove duration={350} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
