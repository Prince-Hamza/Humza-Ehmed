import React, { Component } from 'react';
import Navbar from '../NavBar/Navbar'
import gradient from '../../images/purple-red-gradient.png'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { styles } from './Styles.js'
import info from './Projects.json'
import './Styles.css'

export default class Main extends Component {

	constructor() {
		super()
		this.state = { Info: info }
	}

	render() {
		return (
			<div className="Main">

				<Navbar />

				<img style={styles.banner} src={gradient} />

				<div style={styles.headingContainer} >

					<p style={{ ...styles.Heading, ...styles.niceFont }} > I am Humza Ehmed </p>

				</div>


				{/* <div style={styles.buttonWrap} >
			   <div className="Button" style={styles.Button} >
			        <p style={{font:'italic 16px times new roman'}} > LETS TALK ! </p>
			   </div>
		   </div>
			    */}


				<svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,32L48,53.3C96,75,192,117,288,133.3C384,149,480,139,576,112C672,85,768,43,864,74.7C960,107,1056,213,1152,245.3C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

				<p style={{ ...styles.whatWeDo }} > What We Develop</p>


				<Grid style={styles.Material} container justifyContent="center" alignItems='center' >


					{this.state.Info.map(Item => {
						return (
							<Grid style={styles.Margin} item sm={6} xs={12} md={3}>
								<Paper style={styles.materialItem} elevation={3} >
								<img style={styles.cardImage} src={`${process.env.PUBLIC_URL}/images/${Item.Image}`} />
									<Grid item>
										<p style={styles.cardHeading} > {Item.Heading} </p>
										<p style={styles.cardDescription} > {Item.Description} </p>
										<Button style={styles.cardButton} variant="contained">
											View Projects
										</Button>
									</Grid>
								</Paper>
							</Grid>
						)
					})}


					

				</Grid>

				<p style={styles.margin} > ... </p>



			</div>
		);
	}
}


