import React, { Component } from "react";
import {connect} from 'react-redux';

import {getStarWarsCharacters} from '../redux/reducers/starWarsReducer';

class CharacterList extends Component {

  componentDidMount(){
    this.props.getStarWarsCharacters();
  }

  render() {
    console.log(this.props)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <aside>
          <h1>Breaking Bad Characters</h1>
          <div>
            {/* Breaking Bad Characters Here */}
          </div>
        </aside>
        <aside>
          <h1>Star Wars Characters</h1>
          <div>
            {/* Star Wars Characters Here */}
            {this.props.loading ? '...loading'
            : this.props.characters.map(val=>(
            <p>{val.name}</p>))}

          </div>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = reduxState =>{
  return reduxState;
}

export default connect(mapStateToProps, {
  getStarWarsCharacters
})(CharacterList);