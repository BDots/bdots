import * as React from "react";

export class BlogList extends React.Component<any, any>{

    render(){
        return (
           <acticle className="blog-list">
               <header>
                   <span className="blog-type">
                       <i className="fa fa-flag"></i>
                       <a href={this.props.bloglist.typeLink}>{this.props.bloglist.type}</a>
                   </span>
                   <h2><a href={this.props.bloglist.link}>{this.props.bloglist.title}</a></h2>
               </header>
               <div className="blog-body">{this.props.bloglist.body}</div>
               <footer>
                   <span className="blog-muted">
                       <i className="fa fa-user"></i>
                       <a href={this.props.bloglist.userLink}>{this.props.bloglist.anthor}</a>
                   </span>
                   <span className="blog-muted">
                       <i className="fa fa-clock-o"></i>
                       {this.props.bloglist.date}
                   </span>
                   <span className="blog-muted">
                       <i className="fa fa-eye"></i>
                       {this.props.bloglist.viewCount}
                       阅读
                   </span>
                   <span className="blog-muted">
                       <i className="fa fa-comment-o"></i>
                       {this.props.bloglist.commentCount}
                       评论
                   </span>
               </footer>
           </acticle>
        );
    }
}

