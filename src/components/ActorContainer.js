import React from 'react';
import ShowList from './ShowList';

class ActorContainer extends React.Component{

  render(props) {
    return (
      <div id="actor-container"   >
       <div id="actor-info">
        <h1>{this.props.actor.name}</h1>
       {this.props.actor.image &&
        <img src={this.props.actor.image.medium} alt=''/>
        }

        {this.props.actor.country &&
        <p> Country: {this.props.actor.country.name} </p>
         }
         {this.props.actor.birthday &&
        <p> Birthday: {this.props.actor.birthday} </p>
         }
        </div>
        <ShowList showList={this.props.showList}/>
      </div>
    )
  }
}

export default ActorContainer;
