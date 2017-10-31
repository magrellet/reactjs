import React from 'react';
import Header from './Header';
import Menu from './Menu';
import News from './News';
import LeftMenu from './LeftMenu';
import LatestNews from './LatestNews';
import './newsContainer.scss';
import './leftMenu.scss';

class NewsContainer extends React.Component{
    render(){
        var alumnosList = this.props.data[0].alumnos;
        var newsList = this.props.data[1].news;

        return(
                <div className="container">
                    <Header/>

                    <Menu />

                    <div className="main_nav">
                        <div className="sub_menu">
                            <div>Menu</div>
                            { alumnosList.map( (item, i) => <LeftMenu key={i} nombre={ item.nombre } /> )}
                        </div>
                        <LatestNews />
                    </div>

                    { newsList.map( (item, i) => <News key={i} new={ item } /> )}
                </div>
        );
    }
}

export default NewsContainer;