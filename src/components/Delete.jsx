import React, { Component } from "react";

class Delete extends Component {
  
  
  render() {
    const {handleDelete, id} =this.props
    return (
      <div>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </div>
    );
  }
}

export default Delete;
