import React, { Component } from 'react';
import axios from  'axios';
import './App.css';



class BuzzF extends Component {
  constructor() {
    super();
    this.state = {
        articles:[],
 
  
       
     
      }
}
componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=36fa97415dff4392a5613249d0217990').then(response =>{
        this.setState({
            articles:response.data.articles,
        
        })
        console.log('response from news', response.data.article)
    }).catch(error => console.log(error));


}
  
render() {
    let articles=this.state.articles.map( (e,i) => {
     
      return (
   
      <div key={i}>
   
  
      <figure className="snip1360">
        <img src={e.urlToImage} alt="sample88" />
        <figcaption>
          <h2 >{e.title}</h2>
           <h3>{e.author}</h3>
          <p>{e.description}</p><a href={e.url} className="read-more">Read More</a>
        </figcaption>
      </figure>
     
    </div>

      )

  })
    return (
  
      
      <div>
         {articles} 
    
       
      </div>
  );
}
}

export default BuzzF