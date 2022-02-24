import React from "react";
import User from "./User";
import UserForm from "./UserForm";

class Users extends React.Component {
  state = {
    users: [
      {
        name: "Julio",
        email: "julio@example.com",
      },
      {
        name: "Edgar",
        email: "edgar@example.com",
      },
    ],
  };

  handleAddUser(user) {
    this.setState({
      users: [...this.state.users, user],
    });
  }

  render() {
    return (
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <UserForm
              onAddUser={(user) => {
                this.handleAddUser(user);
              }}
            />
          </div>
          <div className="col">
            {this.state.users.map((user, i) => (
              <User key={i} {...user} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
