import React, { Component } from "react";
import Character from "./Character";
import Loading from "./Loading";


class Simpsons extends Component {
  state= {};
  componentDidMount() {
  
    this.setState({filteredSimpsons: this.props.simpsons });
  }
  render() {
    const handleDelete = (id) =>{
     const filteredSimpsons= this.state.filteredSimpsons.filter((simpson)=>
      simpson.quote!=id )
      this.setState({filteredSimpsons:filteredSimpsons})

    }
    if (!this.state.filteredSimpsons) return <Loading />;
    return (
      <>
        {this.state.filteredSimpsons.map((item, index) => {
          return <Character item={item} key={item.quote} handleDelete={handleDelete}/>;
        })}
      </>
    );
  }
}

export default Simpsons;
