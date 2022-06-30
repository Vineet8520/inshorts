import Newscontent from './Newscontent'
import React, { Component } from 'react'
import Loader from './Loader';

export default class Topnews extends Component {
 constructor(){
    super();
    this.state ={
      articles: [],
      loading:false
    }
  }
async componentDidMount(){
let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d8fb18a741a24b228ee6efbf053e6d34";
this.setState({loading: true});
let data = await fetch(url);
let parsedData = await data.json();
this.setState({articles:parsedData.articles,
               loading:false})
}


  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Top News</h1>
       {this.state.loading && <Loader/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
                return  <div className='col-md-4' key={element.url}>
                  <Newscontent title={element.title} description={element.description} imgURL={element.urlToImage}/>
                </div>
          })} 
          {/* error in slice */}
          </div>
        

      </div>
    )
  }
}
