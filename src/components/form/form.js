import React, { Component } from 'react';
import './form.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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
        //call postItem function from props to pass the state object through the axios call
        //the postItme function lives on app.js
        this.props.postItem(this.state);
        //set state back to empty strings to clear inputs
        this.setState({
            path: '',
            description: ''
        })//end setState
    }//end handleSubmit


    render() {
        return (
            <div className="Form">
                <h2>Add a new photo </h2>
                <form>
                    {/* inputs below will update state when changed and respond to changes to state 
                    (they will clear when state is cleared in handleSubmit)*/}
                    <TextField id="path" label="Image URL"
                        onChange = {event =>this.handleChange(event, 'path')}
                        value = {this.state.path}/>
                    <TextField id="description" label= "Image description"
                        onChange = {event =>this.handleChange(event, 'description')}
                        value = {this.state.description}/>
                    <Button variant="contained" size = "large" color = "primary"
                        onClick = {this.handleSubmit}>submit</Button>
                </form>
            </div>
        );
     }
}
    
export default Form;
    