import React from 'react';
import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsFooter from './NewsFooter';

import './news.scss';

class News extends React.Component{
    render(){
        var listOfNews=this.props.new;

        var title = listOfNews.titulo;
        var content = listOfNews.contenido;
        var date = listOfNews.fecha;
        var createdBy = listOfNews.creador;
        var comments = listOfNews.cantidadComentarios;
               
        return(            
            <div className="content">
                <NewsHeader title = {title}/>
                <NewsContent content = {content}/>
                <NewsFooter date = {date} 
                            createdBy = {createdBy} 
                            comments = {comments}/>
            </div>
        );
    }
}

export default News;