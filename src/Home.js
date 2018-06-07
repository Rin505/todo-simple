import React, { Component } from 'react';
import TodoList from './TodoList.js';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              Ты залогинен!{' '}
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Ну нахуй, я ухожу
              </a>.
            </h5>
            <TodoList />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column" id="homesignin">
              <h5 id="greeting">
                Здарова!
              </h5>
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.login}>
                <div class="ui animated button ui orange button" tabindex="0">
                  <div class="visible content" id="buttonsign">Пойти нахуй</div>
                  <div class="hidden content">
                    <i class="right arrow icon"></i>
                  </div>
                </div>
                </a>
            </div>
          )
        }
      </div>
      );
    }
  }

export default Home;
