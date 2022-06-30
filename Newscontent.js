import React, { Component } from 'react'

export default class Newscontent extends Component {
   
  render(){ 
  let {title , description ,imgURL}= this.props
   
    return (
        <div>
  <div className="card">
  <img src={imgURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/" className="btn btn-sm btn-primary">READ MORE</a>
  </div>
</div>
    </div>
    )
  }
}

