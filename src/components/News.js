import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {

  constructor() {
    super();
    this.state = {
      loading:false,
      articles: [],
      page: 1,
      totalSize:0
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7d69b841e4c44733abe77a38177d592d&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalSize:parsedData.totalResults });

  }
  previousPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7d69b841e4c44733abe77a38177d592d&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    });

  }
  nextPage = async() => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7d69b841e4c44733abe77a38177d592d&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    });
  }

  

  render() {

    return (
      <div>

        <div className="container">
          <div className="row">
            {this.state.articles.map((item) => {
              return <div className="col-md-4" key={item.url}>
                {console.log(item)}
                <NewsItem tittle={item.title} description={item.description} image={item.urlToImage} newUrl={item.url} />
              </div>
            })}
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button disabled={this.state.page <= 1} className="btn btn-primary me-md-2" type="button" onClick={this.previousPage}>Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalSize/20)?true:false}className="btn btn-primary" type="button" onClick={this.nextPage}>Next</button>
        </div>
      </div>

    )
  }

}

export default News