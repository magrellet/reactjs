import React from 'react';
import './news.scss';

class NewsHeader extends React.Component{
    render(){
        return(  
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
export default NewsHeader;