import React from "react";

class UserForm extends React.Component {
  state = {
    data: {
      name: "",
      email: "",
    },
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddUser(this.state.data);
  }

  handleChange(e) {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.id]: e.target.value,
      },
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          <div className="form-block mb-3">
            <input
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={(e) => this.handleChange(e)}
              placeholder="name"
            />
          </div>

          <div className="form-block mb-3">
            <input
              className="form-control"
              id="email"
              value={this.state.emal}
              onChange={(e) => this.handleChange(e)}
              placeholder="email"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
