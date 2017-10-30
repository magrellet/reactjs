import React from 'react';
import Header from './Header';
import Menu from './Menu';
import News from './News';
import LeftMenu from './LeftMenu';
import LatestNews from './LatestNews';
import './newsContainer.scss';

class NewsContainer extends React.Component{
    render(){
        return(
            
                <div className="container">
                    <Header/>
                    <Menu />
                    <div className="main_nav">
                        <LeftMenu />
                        <LatestNews />
                    </div>
                    <News />                
                </div>
            
        );
    }
}

export default NewsContainer;