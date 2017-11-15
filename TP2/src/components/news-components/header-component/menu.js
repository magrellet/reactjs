import React from 'react';
import './menu.scss';

class Menu extends React.Component{
    render(){
        var item=this.props.menuItem;        
        var title = item.titulo;
        var classStyle = item.tituloClass;
        return(
               <span className={classStyle}><a href="#">{title}</a></span>                 				
               
        );

    }
}
export default Menu;