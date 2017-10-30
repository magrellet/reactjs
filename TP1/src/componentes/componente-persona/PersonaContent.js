import React from 'react';

class PersonaContent extends React.Component {
    render(){
        return(
            <div>Persona content => {this.props.data.direccion} - {this.props.data.email}</div>
        );
    }
}

export default PersonaContent;