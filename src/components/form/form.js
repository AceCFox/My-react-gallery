import React, { Component } from 'react';
import './form.css'


class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handleSubmit');
    }


    render() {
        return (
            <div className="Form">
                <h2>Add a new Image:</h2>
                <form>
                    <input placeholder = "Image URL"/>
                    <input placeholder = "Image description"/>
                    <button className="submit" onClick = {this.handleSubmit}>submit</button>
                </form>
            </div>
        );
     }
}
    
export default Form;
    