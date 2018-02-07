import React from 'react';
import Search from './Search';
import ActorContainer from './ActorContainer';

const SEARCH_URL = 'http://api.tvmaze.com/search/people?q='
const ACTOR_URL_PART1 = 'http://api.tvmaze.com/people/'
const ACTOR_URL_PART2 = '?embed=castcredits'
const SHOW_URL = ' http://api.tvmaze.com/shows/'

class PageContainer extends React.Component {

  state = {
    searchTerm: '',
    actor: [],
    showList: []
  }

  searchForName = () => {
    this.setState({
      showList: []
    })
    fetch(`${SEARCH_URL}${this.state.searchTerm}`)
    .then(resp=> resp.json())
    .then(res=> this.setState({
      actor: res[0].person
    }))
    .then(res =>
    fetch(`${ACTOR_URL_PART1}${this.state.actor.id}${ACTOR_URL_PART2}`))
    .then(resp=> resp.json())
    .then(res=> this.getShowLinks(res._embedded.castcredits))
  }

  getShowLinks = (data) => {
    let links = []
    for (let i=0; i < data.length; i++) {
      let fulllink = data[i]._links.show.href
      let linkarray = fulllink.split("/")
      let lastitem = linkarray[linkarray.length-1]
      links.push(lastitem)
    }
    this.returnAllShowData(links)
  }

   returnAllShowData = (links) => {
     for (let i=0; i < links.length; i++) {
       let oneLink = links[i]
      fetch(`${SHOW_URL}${oneLink}`).then(resp=> resp.json()).then(res =>
       this.setState ({
         showList: this.state.showList.concat([res])
       }))
     }
   }

  handleInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.searchForName()
    this.setState({
      searchTerm: ''
    })
  }


  render () {
    console.log(this.state)
    return (
      <div id="page-container">
        <h1>Less Good TV IMDB</h1>
        <Search
           handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}
           searchTerm={this.state.searchTerm}
        />
        <ActorContainer actor={this.state.actor} showList={this.state.showList}/>
      </div>
    )
  }
}

export default PageContainer;
