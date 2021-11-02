import React, { Component } from 'react';

export default class Navbar extends Component {

	constructor () {
		super()
		this.state = {Reactive : true}
	}

	render() {
		return (
			<div style={styles.header} > 
			  	<p style={{marginRight:'50px' , cursor: 'pointer'}} > Home </p>
			  	<p style={{marginRight:'50px' , cursor: 'pointer'}} > Contact </p>
			</div> 
		);
	}
}


const styles = ({
	header:{
		position: 'absolute',
        top:'0%',
        left:'0%',
        height:'5%',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '3%',
        color: 'lightgray',
	},
	
})