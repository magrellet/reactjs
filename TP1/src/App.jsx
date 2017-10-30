import React, {Component} from 'react';
import newClass from './ES6/ejemplos';
import NotacionClase from './componentes/notacion-clase/NotacionClase';
import NotacionFuncion from './componentes/notacion-funcion';
import SinJsx from './componentes/componente-sin-jsx/SinJsx';
import PersonaCard from './componentes/componente-persona/PersonaCard';

class App extends Component {

  getH3(){
     return <h3> otro tag</h3>
  }
  render() {
    newClass();

    let personaData = {
      nombre:'martin',
      direccion:'calle',
      telefono:'435-5555',
      email:'mail@sovos.com',
      dni:'31666666'
    };
    return (
      <div>
      <NotacionClase />
      <NotacionFuncion />
      <SinJsx />
      <PersonaCard data = {personaData}/>
      { this.getH3() } 
      <h1>Curso sovos reactivo :)</h1>
      </div>
    );
  }
}
export default App;
