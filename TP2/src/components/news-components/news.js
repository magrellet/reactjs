import React from 'react';
import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsFooter from './NewsFooter';

import './news.scss';

class News extends React.Component{
    render(){
        return(            
            <div className="content">
                <NewsHeader/>
                <NewsContent/>
                <NewsFooter/>
            </div>
        );
    }
}

export default News;