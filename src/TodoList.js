
  import React, { Component } from "react";
  import TodoItems from "./TodoItems";
  import "./TodoList.css";
  import 'semantic-ui-css/semantic.min.css';
  import { Button } from 'semantic-ui-react';
  import './index.css';

  import SimpleSnackbar from './components/Snackbar.js'

  import ButtonExampleLabeled from './button.js';




  class TodoList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: []
      };

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }


    addItem(e) {
      if(this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };

        this.setState((prevState) => {
          return {
            items: prevState.items.concat(newItem)

          };
        });

          this._inputElement.value = "";
      }
      else {
        //TODO: print message
      }
      console.log(this.state.items);

      e.preventDefault();
    }

    deleteItem(key) {
      var filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });

      this.setState({
        items: filteredItems
      })
    }

    render() {

      var counter = this.state.items.length

        return <div>

          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a}
                placeholder="Enter task..."/>
                <button type="submit">add</button>
                <br/>
                <h2>You have <label id="counter">{counter}</label> tasks to do!</h2>
                    </form>
                </div>
                <TodoItems tasks={this.state.items}
                           delete={this.deleteItem}/>

            </div>
        </div>;
    }
  }


export default TodoList;
