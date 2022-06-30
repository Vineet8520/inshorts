import React , { Component } from 'react'
import Newscontent from './Newscontent'

export default class Sports extends Component {
    constructor(){
      super();
      this.state ={
        articles: []
      }
    }
  async componentDidMount(){
  let url = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d8fb18a741a24b228ee6efbf053e6d34";
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({articles:parsedData.articles})
  }
  
  
    render() {
      return (
        <div className='container my-3'>
          <h2>Top News</h2>
          <div className='row'>
            {this.state.articles.map((element)=>{
                  return  <div className='col-md-4' key={element.url}>
                    <Newscontent title={element.title.slice(0,85)} description={element.description.slice(0,140)} imgURL={element.urlToImage}/>
                  </div>
            })}
            </div>
          
  
        </div>
      )
          }
}
