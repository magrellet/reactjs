import React, {Component} from 'react';
import NewsContainer from './components/news-components/NewsContainer';
import './components/news-components/newsContainer.scss';

class App extends Component {
  render() {
    let noticiasList = [
      {
        titulo: 'Porque MariaSol no usa un editor como la gente',
		    contenido: 'Los compas del curso</strong> se preguntan que pasa con el editor que usa esta alumna, el cual no posee ni siquiera color en las fuentes. No es novedad que esta un poco mal de la cabeza pero les parece demasiado que llegue a este tipo de acciones como las de usar un editor solo en gris y negro.',
		    fecha: 'Octubre 18, 2017',
		    creador: 'usuario anonimo',
		    cantidadComentarios: 0
      },
      {
        titulo: 'Comentarios sobre el profe JPG',
		    contenido: 'Muchos alumnos se llegaron por SRN para elogiar al profesor de ese curso, segun cuentan al parecer el joven es muy bueno enseniando, ayudando y desarrollando aplicaciones en React.',
		    fecha: 'Octubre 18, 2017',
		    creador: 'usuario anonimo',
		    cantidadComentarios: 10
      },
      {
        titulo: 'Que paso en el After-Rafting',
		    contenido: 'Algunos alumnos del curso se quedaron en salta luego del rafting, SRN (sovos reactivo news) pudo hablar con algunos de ellos sobre lo que hicieron el finde largo en <b>Salta</b> la Linda. </p><p>Segun uno de los entrevistados, algunos fueron a la iglesia el sabado a la maniana otros a visitar museos y comprar articulos regionales. <b>Un aplauso</b> para los reactivos que saben vivir la vida!</p>',
		    fecha: 'Octubre 15, 2017',
		    creador: 'usuario anonimo',
		    cantidadComentarios: 300
      }
    ];
    return (       
        <NewsContainer/>        
    );
  }
}
export default App;
