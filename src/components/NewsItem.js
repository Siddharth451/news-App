import React, { Component } from 'react'

export class NewsItem extends Component {
    

    
     
    render() {
        let {tittle,description,image,newUrl}=this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{tittle}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newUrl} className="btn btn-primary">Visit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem