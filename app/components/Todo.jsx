import React from 'react';

let Todo = React.createClass({

  render() {
    let {id, text, completed} = this.props;
    return (
        <div onClick={() => { this.props.onToggle(id) } }>
          <input type="checkbox" defaultChecked={completed} />
          {text}
        </div>
    );
  }

});

export default Todo;
