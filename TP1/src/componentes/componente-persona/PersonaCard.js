import React from 'react';
import PersonaHeader from './PersonaHeader';
import PersonaContent from './PersonaContent';
import PersonaFooter from './PersonaFooter';
import './personaCard.scss'


class PersonaCard extends React.Component {
    render(){
        return(
            <div className="personaCard">
            <PersonaHeader nombre = {this.props.data.nombre}/>
            <PersonaContent data = {this.props.data}/>
            <PersonaFooter dni = {this.props.data.dni}/>
            </div>
        );
    }
}

export default PersonaCard;