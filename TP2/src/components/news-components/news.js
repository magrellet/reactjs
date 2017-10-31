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

        let footerInfo = [
            {date: date},
            {createdBy: createdBy},
            {comments: comments}
        ];
       
        return(            
            <div className="content">
                <NewsHeader title = {title}/>
                <NewsContent content = {content}/>
                <NewsFooter info = {footerInfo}/>
            </div>
        );
    }
}

export default News;