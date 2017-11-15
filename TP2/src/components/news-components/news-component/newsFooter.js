import React from 'react';
import './news.scss';

class NewsFooter extends React.Component{
    render(){
        const postedBy = 'Posted by '; 
        var date = this.props.date;
        var createdBy = this.props.createdBy;
        var comment='';
        if(this.props.comments === 0){
            comment = 'Sin';
        }
        else{
            comment = this.props.comments;
        }
        comment +=' Comentarios';
        return(  
            <div>
                <div className="post_info">{date} | {postedBy} <a href="#">{createdBy}</a> | <a href="#">{comment}</a></div>
            </div>
        );
    }
}
export default NewsFooter;