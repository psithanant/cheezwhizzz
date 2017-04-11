import React, { Component} from 'react'
import { Thumbnail, Button } from 'react-bootstrap';
import photo from '../../assets/thumbnaildiv.png'

class SubmitDistanceRating extends Component {
  render(){
    return(
      <Thumbnail src={photo}>
        <h3>Cheese</h3>
        <p>Do you like cheese?</p>
        <p>
          <Button bsStyle="primary">Hit me to search</Button>
        </p>
      </Thumbnail>
  )
  }
}

export default SubmitDistanceRating
