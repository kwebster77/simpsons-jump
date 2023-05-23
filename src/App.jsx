import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";
import { data } from "../data";

class App extends Component {
  state = {};

  async componentDidMount() {
    const mockData = data
    // const { data } = await axios.get(
    //   `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    //   );
      console.log(mockData)
    this.setState({ simpsons: mockData });
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1>Total no of liked chars #</h1>
        <Simpsons simpsons={simpsons} />
      </>
    );
  }
}

export default App;
