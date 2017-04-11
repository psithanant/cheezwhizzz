import React, { Component} from 'react'
import { Thumbnail, Button } from 'react-bootstrap';
import photo from '../../assets/thumbnaildiv.png'

class SubmitDistanceRating extends Component {
  render(){
    return(
      <Thumbnail src={photo}>
        <h3>Cheese</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>
        </p>
      </Thumbnail>
  )
  }
}

export default SubmitDistanceRating
