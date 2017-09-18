import React, { Component } from 'react';
import Usuarios from './Componentes/Usuarios';
import Titulo from './Componentes/Titulo';
import Footer from './Componentes/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="App">
            <Titulo />
            <Usuarios />
            <Footer />
          </div>
        )
    }
}

export default App;
