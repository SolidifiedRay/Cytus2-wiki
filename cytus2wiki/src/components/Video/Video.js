import React, { Component } from 'react';
import Data from '../../db/db';

class Video extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const videos = songInfo.map((info) => (info.videos));
        const listItems = videos.map((video) =>
            (video.map((item) => 
                <li key={item.id} className="content-font">
                    {item.videoTitle} 玩家: {item.player} 难度: {item.level} <a href={item.link} target="_blank">点击该链接打开视频</a>
                </li>)
            )
        );

        return (
            <div>
                <div className={"round-box-top " + songColor }>
                    <font className="song-table-font">手元视频</font>
                </div>
                <div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" 
                                   href="#video">
                                    点击展开 （所有视频皆为授权转载）
                                </a>
                            </h4>
                        </div>
                        <div id="video" className="panel-collapse collapse">
                            <div className="panel-body content-box-background">
                                <ul>{listItems}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        );
    }
}

export default Video;
