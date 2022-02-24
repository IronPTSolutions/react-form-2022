import React from "react";

class UserForm extends React.Component {
  state = {
    data: {},
    touch: {},
    errors: {},
  };

  handleSubmit(e) {
    // TODO: use this.props.onAddUser
  }

  handleChange(e) {
    // TODO
  }

  handleBlur(e) {
    // TODO
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
        >
          TODO
        </form>
      </div>
    );
  }
}

export default UserForm;
