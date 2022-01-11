import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, date, source, color } = this.props;
        return (
            <div>
                <div className="card" style={{ height: 420, position: 'relative' }}>
                    <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${color}`} style={{ left: '90%', zIndex: '1' }}> {source}
                    </span>
                    <img src={imageUrl ? imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIvAyt56wZnto4FKG5B_HnP_jsqjZeWgPBWA&usqp=CAU'} height='200px' className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>Published on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} style={{ position: 'absolute', bottom: 10 }} target='_blank' rel="noreferrer" className={`btn btn-sm btn-primary`}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
