import React, { Component } from 'react';
import '../App.css';
// import MainContainer from '../MainContainer'


class News extends Component {
  constructor(){
    super();
    this.state = {
      headlines: []
    }
  }


// ============GET YOUR DATA========

  getHeadlines = async () => {

    try {
const headlines = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=56a47f135add4e349c07263259b8f643')
// await fetch is fetching your endpoint (api link). fetch by default makes a get request. it's first argument is the endpoint.


console.log(headlines, ' this is headlines');


//parses the response from json and allows us to read the body of the request. This is where our data is. the .json makes it a js object we use map, filter, etc. on.
const headlinesJson = await headlines.json();

return headlinesJson

//error says unreachable code for the next line.
console.log(headlinesJson, ' this is headlinesJson');

} catch (err) {
  return err
  console.log(err, ' error in code block');
}

}

componentDidMount() { //loads our data. It is a function that is just lik render(). gets called onLoad right after the render().
  this.getHeadlines().then((data) => {
    console.log(data, 'this is data');
    this.setState({headlines:data}); //replaces the empty headlines [] with data.
  });
}

//FILTER THE DATA OUT


//RENDER
render(){
return(
  <div>
<h1>news</h1>

  </div>
)

}
  }

export default News;
