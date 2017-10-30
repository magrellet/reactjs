import React from 'react';
import './leftMenu.scss';

class LatestNews extends React.Component{
    render(){
        return(
                <div className="main_nav">	                    
                    <div className="sub_menu">
                        <div>Ultimos Puterios</div>
                        <a href=""><li>Octubre 19, 2017</li></a>
                        <a href=""><li>Octubre 18, 2017</li></a>
                        <a href=""><li>Octubre 17, 2017</li></a>
                    </div>				
			    </div>
        );
    }
}
            
export default LatestNews;