import React from 'react';
import './news.scss';

class NewsFooter extends React.Component{
    render(){
        return(  
            <div>
                <div className="post_info">Octubre 18, 2017 | Posted by <a href="#">usuario anonimo</a> | <a href="#">Sin Comentarios</a></div>
            </div>
        );
    }
}
export default NewsFooter;