import React from 'react';
import './news.scss';

class NewsContent extends React.Component{
    render(){
        return(                
           <p dangerouslySetInnerHTML={{__html: this.props.content}}/>			    
        );
    }
}

export default NewsContent;