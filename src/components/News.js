import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d69b841e4c44733abe77a38177d592d";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }


  render() {

    return (
      <div>

        <div className="container">
          <div class="row">
            {this.state.articles.map((item) => {
              return <div class="col-md-4"  key={item.url}>
                {console.log(item)}
               <NewsItem tittle={item.title.slice(0,45)} description={item.description.slice(0,88)} image={item.urlToImage} newUrl={item.url}/>
               </div>
            })}
          </div>
        </div>
      </div>

    )
  }
}

export default News