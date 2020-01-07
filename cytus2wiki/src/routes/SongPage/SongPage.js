import React, { Component } from 'react';
import SongInfo from '../../components/SongInfo/SongInfo';
import SongInfoSide from '../../components/SongInfoSide/SongInfoSide';

class SongPage extends Component {
	render(){
		const songID = this.props.songID;
		return (
			<div className="background">
				<div className="content-box">
					<div id="top"></div>
					<br/><br/>
					<div className="container song-container">
						<div className="row" >
							<div className="col-md-8 col-sm-12">
								<SongInfo songID={songID} />
							</div>
							<div className="col-md-4 col-sm-12">
								<SongInfoSide songID={songID} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SongPage;
