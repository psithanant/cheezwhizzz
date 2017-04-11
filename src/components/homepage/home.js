import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import Menu from './filterButtonGroup'
import ResultTable from './resultTable'
import { connect } from 'react-redux';

const Home = ({seeAllCheeses, getRandomCheese, seeSubstitutes, results}) => (
  <div className="Home">
    <Grid>
      <Col md={6} >
        <Menu seeAllCheeses={seeAllCheeses}
              getRandomCheese={getRandomCheese}
              seeSubstitutes={seeSubstitutes} />
      </Col>
      <Col md={6} >
        <ResultTable cheeses={results} />
      </Col>
    </Grid>
  </div>
);

const mapStateToPropsHome = (state, ownProps) => {
  return {
    results: state.results,
    query: state.query
  }
}

const mapDispatchToPropsHome = (dispatch, ownProps) => {
  return {
    seeAllCheeses: () => {
      dispatch({type: 'SEE_ALL_CHEESES',
                payload: fetch('http://cheeswhiz.herokuapp.com/api/cheese')
                           .then(function(res) { return res.json(); })
               })
    },
    getRandomCheese: () => {
      dispatch({type: 'GET_RANDOM_CHEESE',
                payload: fetch('http://cheeswhiz.herokuapp.com/api/cheese/random/5/hard')
                           .then(function(res) { return res.json(); })
              })
    },
    seeSubstitutes: () => {
      dispatch({type: 'SEE_SUBSTITUTES',
                payload: fetch('http://cheeswhiz.herokuapp.com/api/cheese/substitute/Brie')
                           .then(function(res) { return res.json(); })
              })
    }
  }
}

const ConnectedHome = connect(mapStateToPropsHome, mapDispatchToPropsHome)(Home);
export default ConnectedHome
