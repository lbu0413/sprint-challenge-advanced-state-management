import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions/index'

const SmurfList = ({ fetchSmurfs, isFetching, smurfs, error }) => {
    useEffect(() => {
        fetchSmurfs()
    }, [fetchSmurfs])


    if (isFetching){
        return <h2> Fetching Smurfs ... </h2>
    }


    return (
        <div>
            <h2>Smurf List</h2>
            {smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapState = state => {
    return {
      isFetching: state.smurfListReducer.isFetching,
      smurfs: state.smurfListReducer.smurfs,
      error: state.smurfListReducer.error
    };
  };
  
  
  export default connect(mapState, { fetchSmurfs } )(SmurfList)