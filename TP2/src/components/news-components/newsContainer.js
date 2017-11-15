import React from 'react';
import Header from './header-component/Header';
import Menu from './header-component/Menu';
import News from './news-component/News';
import LeftMenu from './left-menu-component/LeftMenu';
import LatestNews from './left-menu-component/LatestNews';
import './newsContainer.scss';
import './left-menu-component/leftMenu.scss';
import './header-component/menu.scss';

class NewsContainer extends React.Component{
    render(){
        var alumnosList = this.props.alumnos;
        var newsList = this.props.news;
        var menuList = this.props.menu;
        var latest = this.props.latest;

        const menuTittle = 'Menu';
        const menuLatestTittle = 'Ultimos Puterios';

        return(
                <div className="container">
                    <Header title = {this.props.headerTitle}/>

                    <div className="menu">
                        <span className="search">
                            <input type="text"  name="search" />
                            <input type="submit" className="button" value="Buscar" />
                        </span>
                        { menuList.map( (item, i) => <Menu key={i} menuItem={ item } /> )}
                    </div>

                    <div className="main_nav">

                        <div className="sub_menu">
                            <div>{menuTittle}</div>
                            { alumnosList.map( (item, i) => <LeftMenu key={i} nombre={ item.nombre } /> )}
                        </div>

                        <div className="sub_menu">
                            <div>{menuLatestTittle}</div>
                            { latest.map((item, i) => <LatestNews key={i} date = {item.date}/>)}
                            
                        </div>
                    </div>

                    { newsList.map( (item, i) => <News key={i} new={ item } /> )}
                </div>
        );
    }
}

export default NewsContainer;