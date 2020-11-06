import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurf, fetchSmrufs } from '../actions/index'

const SmurfForm = props => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        height: ""
    })

    const changeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        props.postSmurf({ ...formData, id: props.smrufs.length })
        setFormData({
            name: "",
            age: "",
            height: ""
        })
        props.fetchSmrufs()
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={changeHandler}
                    placeholder="name"
                />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={changeHandler}
                    placeholder="age"
                />
                <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={changeHandler}
                    placeholder="height"
                />
                <button>Add Smurf</button>
            </form>
        </div>
    )
}

const mapState = state => {
    return {
        smrufs: state.smurfListReducer.smrufs,
        isPosting: state.smurfFormReducer.isPosting,
        error: state.smurfFormReducer.error
    }
}

export default connect(mapState, {postSmurf,fetchSmrufs})(SmurfForm)