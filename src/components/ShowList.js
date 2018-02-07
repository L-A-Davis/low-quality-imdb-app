import React from 'react';
import ShowItem from './ShowItem';
import Sort from './Sort';
import Checkbox from './Checkbox';

class ShowList extends React.Component {

  state = {
    currentSort: null,
    runningOnly: false
  }

  handleSortChange = (event) => {
    this.setState({
      currentSort: event.target.value
    })
  }

  handleRunningChange = (event) => {
    this.setState({
      runningOnly: !this.state.runningOnly
    })
  }

  handleFilter = () => {
    if (this.state.runningOnly) {return this.props.showList.filter(item => item.status === 'Running')
  } else {
      return this.props.showList
    }
  }

  handleShowSort = () => {
    let filtered = this.handleFilter()
    if (!this.state.currentSort || this.state.currentSort === 'mostRecent')
    { return filtered.sort(this.compareByDate)
    } else {
    return filtered.sort(this.compareByName) }
  }

  compareByName = (a,b) => {

    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  compareByDate = (b,a) => {
    if (a.premiered && b.premiered) {
    let aparts = a.premiered.split('-')
    let bparts = b.premiered.split('-')
    let aNewDate = new Date(aparts[0], aparts[1] - 1, aparts[2])
    let bNewDate = new Date(bparts[0], bparts[1] - 1, bparts[2])
    if (aNewDate < bNewDate)
      return -1;
    if (aNewDate > bNewDate)
      return 1;
    return 0;
  } else {
    return 0;
  }

  }

  render (){
    return (
      <div id="all-show-info">
        <h2>Shows</h2>
        <div className="data-refine">
          <Checkbox
            runningOnly={this.state.runningOnly}
            handleRunningChange={this.handleRunningChange}
            />
          <Sort handleSortChange={this.handleSortChange}/>
        </div>
        <div className="show-list">
        {this.handleShowSort().map((show) => {
          return <ShowItem key={show.id} show={show}/>
        }
      )}
      </div>
      </div>
    )
  }
}
export default ShowList;

// {this.props.actorData.map((show) => {
//   return <p key={show._links.show.href}>{show._links.show.href} </p>
// })}
