import React, { Component } from "react";
import "./App.css";

import MyHeader from "./componentes/myHeader";
import ListadoRazas from "./componentes/listadoRazas";
import MyModal from "./componentes/myModal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      razas: [],
      imagen: "",
      modalIsOpen: false,
      razaEnUso: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, imagen: "" });
  }

  showDog = razaStr => {
    this.setState({ razaEnUso: razaStr });
    fetch(`https://dog.ceo/api/breed/${razaStr}/images/random`)
      .then(data => data.json())
      .then(res => {
        this.setState({ imagen: res.message });
        this.openModal();
      });
  };

  componentWillMount() {
    fetch("https://dog.ceo/api/breeds/list")
      .then(data => data.json())
      .then(res => {
        this.setState({ razas: res.message });
      });
  }

  render() {
    return (
      <div className="App">
        <MyModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          razaEnUso={this.state.razaEnUso}
          imagen={this.state.imagen}
          btnCloseHandler={this.closeModal}
        />
        <div className="container">
          <MyHeader />
          <ListadoRazas razas={this.state.razas} showDog={this.showDog} />
        </div>
      </div>
    );
  }
}

export default App;
