import React, { Component } from 'react';
import Data from '../../db/db';
import ReactMarkdown from 'react-markdown';

class CoverArt extends Component {

    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const illustrator = songInfo.map((info) => (info.illustrator));
        const coverArtUrl = songInfo.map((info) => (info.coverArtUrl));
        const coverArtSource = songInfo.map((info) => (info.coverArtSource));
        const coverArtSourceLink = songInfo.map((info) => (info.coverArtSourceLink));
        return (
            <div>
                <div className={"round-box-top " + songColor }>
                    <font className="song-table-font">曲绘: {illustrator} <a href={coverArtSourceLink} target="_blank"><font className="song-table-font">
                        来源: {coverArtSource}</font></a></font>
                </div>
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#coverart">
                                    点击展开
                                </a>
                            </h4>
                        </div>
                        <div id="coverart" className="panel-collapse collapse">
                            <div className="panel-body content-box-background">
                                <img src={require('' + coverArtUrl)} width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default CoverArt;
