import React, { Component } from 'react';
import { Router } from 'react-router';
import Sidebar from '../components/Sidebar';
import Lyrics from '../components/Lyrics';
import store from '../store';
import axios from 'axios';
import { setLyrics, fetchLyrics } from '../action-creators/lyrics';

export default class LyricsContainer extends Component {

	constructor (props){
		super(props);

		this.state = Object.assign({
			artistQuery: '',
			songQuery: ''
		}, store.getState())

		this.setArtist = this.setArtist.bind(this);
		this.setSong = this.setSong.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setArtist(artist){
		console.log(artist);
		this.setState({
			artistQuery: artist
		});
	}

	setSong(song){
		console.log(song);
		this.setState({
			songQuery: song
		});
	}

	handleSubmit(){
		store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
	}

	componentDidMount(){
		// subscribe to store call set state
		this.unsubscribe = store.subscribe( () => {
			this.setState(store.getState());
		});
	}

	componentWillUnMount(){
		this.unsubscribe();
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<Lyrics 
					text={this.state.lyrics.text}
					setArtist={this.setArtist}
					setSong={this.setSong}
					handleSubmit={this.handleSubmit}
					songQuery={this.state.songQuery}
					artistQuery={this.state.artistQuery}
				/>
			</div>
		)
	}

}