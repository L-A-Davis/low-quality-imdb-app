import React from 'react';
import TurnButton from './TurnButton';

class ShowItem extends React.Component {

   state = {
     front: true
   }

  handleTurn = (event) => {
    this.setState({
      front: !this.state.front
    })
  }

  render () {
    return (
      <div className="show-card">
        <div style={this.state.front ? {display: "block"} : {display: "none"}} className="show-card-front">
          <h3>{this.props.show.name}</h3>
           {this.props.show.image &&
          <img src={this.props.show.image.medium} alt=''/>
           }
           <br/>
        </div>
        <div style={this.state.front ? {display: "none"} : {display: "block"}} className="show-card-back" >
          {this.props.show.premiered && <p>Premiered: {this.props.show.premiered}</p>}
           {this.props.show.network &&
           <p>Network: {this.props.show.network.name}</p>}
          <p>{this.props.show.summary}</p>
          <p>Genres:</p>
          <ul>
            {this.props.show.genres.map((genre) => {
              return <li key={`${genre}${this.props.show.name}`}>{genre}</li>
            })}
          </ul>

        </div>
         <TurnButton
            handleTurn={this.handleTurn} value={this.state.front}
          />

      </div>
    )
  }

}


export default ShowItem;
