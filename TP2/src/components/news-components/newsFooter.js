import React from 'react';
import './news.scss';

class NewsFooter extends React.Component{
    render(){
        var info = this.props.info;
        var date = info[0].date;
        var createdBy = info[1].createdBy;
        var comment='';
        if(info[2].comments === 0){
            comment = 'Sin';
        }
        else{
            comment = info[2].comments;
        }
        comment +=' Comentarios';
        return(  
            <div>
                <div className="post_info">{date} | Posted by <a href="#">{createdBy}</a> | <a href="#">{comment}</a></div>
            </div>
        );
    }
}
export default NewsFooter;