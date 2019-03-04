import React from 'react';
import {getFunName} from '../helpers'


class StorePicker extends React.Component{
    myInput = React.createRef();

    goToStore = event => {

    	event.preventDefault();

    	const storeName = this.myInput.value.value;

    	this.props.history.push(`/store/${storeName}`);
    };
    render(){
        console.log(this);
		return (
			<form className="store-selector">
			<h2> please enter store</h2>
			<input 
			type="text"  
            ref={this.myInput}
			placeholder="Store name" defaultValue={getFunName()}/>
			<button  type="submit" >Visit Store -></button>
			</form>

			)
	}
}


export default StorePicker;