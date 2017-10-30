import React from 'react';

class NewsHeader extends React.Component{
    render(){
        return(
            <div>
                <div class="header"><span>Sovos Reactivo News</span></div>
                <div class="menu">
                <span class="search"><input type="text"  name="search" /> <input type="submit" class="button" value="Buscar" />
                </span>
                        <span class="home"><a href="#">Noticias</a></span> 
                        <span class="alt"><a href="#">Infragantti</a></span> 
                        <span class="alt"><a href="#">Jarriadas</a></span> 
                        <span class="alt"><a href="#">Cenas de fin de anio</a></span> 
                        <span class="alt"><a href="#">Dia del trabajador</a></span>					
                </div>
            </div>
        );

    }
}

export default NewsHeader;