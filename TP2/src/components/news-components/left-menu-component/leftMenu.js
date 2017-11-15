import React from 'react';
import './leftMenu.scss';

class LeftMenu extends React.Component{

    render(){
       
        var nombre = this.props.nombre;  
        const noticiasDe = 'Ver Noticias de ';
       
        return(
            <a href="#">{noticiasDe}<b>{nombre}</b></a>                                            			    
        );
    }

    
}
            
export default LeftMenu;