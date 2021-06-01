import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UserDetails extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            open: false,
            email: props.location.state.email,
            dogName: props.location.state.dogName,
            userDetailId: props.location.state.userDetailId,
            age: 0,
            interests: "",
            bio: ""
        }
    }

    handleAgeUpdate = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleInterestsUpdate = (event) => {
        this.setState({
            interests: event.target.value
        })
    }

    handleBioUpdate = (event) => {
        this.setState({
            bio: event.target.value
        })
    }

    handleFinishSignUp = () => {
        console.log(this.state)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                id: this.state.userDetailId,
                email: this.state.email,
                dogName: this.state.dogName,
                age: this.state.age,
                interests: this.state.interests,
                bio: this.state.bio
            })
        };
        fetch("http://localhost:3001/userDetails/", requestOptions)
    }

  render() {
    return (
        <div className="dog-details">
            <h1>Welcome {this.state.dogName}!</h1>
            <TextField id="standard-basic" label="Age" onBlur={this.handleAgeUpdate} />
            <br></br>
            <TextField id="standard-basic" label="Interests"  onBlur={this.handleInterestsUpdate}/>
            <br></br>
            <TextField id="standard-basic" label="Bio" onBlur={this.handleBioUpdate} />
            <Link to="/findLove">
                <Button className="button" onClick={this.handleFinishSignUp} color="primary" variant="contained">
                    Find Love!
                </Button>
            </Link>
        </div>
    );
  }
}
 
export default UserDetails;