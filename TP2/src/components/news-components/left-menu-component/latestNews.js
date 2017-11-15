import React from 'react';
import './leftMenu.scss';

class LatestNews extends React.Component{
    render(){
        return(                
            <a href=""><li>{this.props.date}</li></a>                                    
        );
    }
}
            
export default LatestNews;