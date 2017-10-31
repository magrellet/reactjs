import React from 'react';
import './leftMenu.scss';

class LeftMenu extends React.Component{

    render(){
        let leftMenu = new LeftMenu();
       
        var nombre = this.props.nombre;        
       
        return(
            <a href="#">Ver Noticias de <b>{nombre}</b></a>                                            			    
        );
    }

    
}
            
export default LeftMenu;