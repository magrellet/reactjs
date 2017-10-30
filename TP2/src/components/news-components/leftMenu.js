import React from 'react';
import './leftMenu.scss';

class LeftMenu extends React.Component{
    render(){
        return(
                <div className="main_nav">	
                    <div className="sub_menu">
                        <div>Menu</div>
                            <a href="#">Ver Noticias de <b>Peter</b></a>
                            <a href="#">Ver Noticias de <b>Mocho</b></a>
                            <a href="#">Ver Noticias de <b>Perro</b></a>
                            <a href="#">Ver Noticias de <b>Ernesto</b></a>
                            <a href="#">Ver Noticias de <b>Ivan</b></a>
                            <a href="#">Ver Noticias de <b>Facu</b></a>
                            <a href="#">Ver Noticias de <b>Euge</b></a>
                            <a href="#">Ver Noticias de <b>Tincho</b></a>
                            <a href="#">Ver Noticias de <b>MariaSol</b></a>
                    </div>                    				
			    </div>
        );
    }
}
            
export default LeftMenu;