import React, { Component } from 'react';
import './form.css';
import axios from 'axios';


class Form extends Component {

    state = {
        path:'',
        description:'',
    }//end state
    
    handleChange = (event, key) => {
       // console.log('in handleChange:', key);
       // console.log(event.target.value)
        this.setState({
            ...this.state,
            [key]: event.target.value
        })//end this setState
    }//handleChange

    handleSubmit = (event) => {
        event.preventDefault();
       // console.log('in handleSubmit');
        console.log('current state:', this.state)
        //call axios POST to send data from state to server as a new item
        //indclude this.props.getGallery() call upon response
        axios({
            method: 'POST' ,
            url: '/gallery',
            data: this.state
        }).then((response) => {
            //run get request to update changes on DOM
            this.props.getGallery();
            console.log('back from server POST with', response.statusText);
            //set state back to empty strings to clear inputs
            this.setState({
                path: '',
                description: ''
            })//end setState
        }).catch((error) => {
            alert('error on POST');
            console.log(error);
        }) //end axios POST
    }//end handleSubmit


    render() {
        return (
            <div className="Form">
                <h2>Add a new photo: </h2>
                <form>
                    <input placeholder = "Image URL"
                        onChange = {event =>this.handleChange(event, 'path')}
                        value = {this.state.path}/>
                    <input placeholder = "Image description"
                        onChange = {event =>this.handleChange(event, 'description')}
                        value = {this.state.description}/>
                    <button className="submit" onClick = {this.handleSubmit}>submit</button>
                </form>
            </div>
        );
     }
}
    
export default Form;
    