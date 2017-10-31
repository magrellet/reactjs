import React from 'react';
import './news.scss';

class NewsContent extends React.Component{
    render(){
        return(
                <div>
                    <p>{this.props.content}</p>
			    </div>
        );
    }
}

export default NewsContent;