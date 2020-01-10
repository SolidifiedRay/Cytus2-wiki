import React, { Component } from 'react';
import BPMUrl from '../BPMUrl/BPMUrl';
import GlitchLevel from '../GlitchLevel/GlitchLevel';
import Video from '../Video/Video';
import Lyric from '../Lyric/Lyric';
import Intro from '../Intro/Intro';
import Notes from '../Notes/Notes';
import CoverArt from '../CoverArt/CoverArt';
import Data from '../../db/db';

class SongInfo extends Component {
  
    render(){
        const id = this.props.songID;
        const songInfo = Data.filter(info => {if(info.id === id) return info;});
        const songColor = ""+songInfo.map((info) => (info.color));
        const songTitle = songInfo.map((info) => (info.title));
        const songArtist = songInfo.map((info) => (info.artist));
        const songImgUrl = songInfo.map((info) => (info.imgUrl));
        const songIllustrator = songInfo.map((info) => (info.illustrator));
        const songVer = songInfo.map((info) => (info.Ver));
        const songBPM = songInfo.map((info) => (info.BPM));
        const songBPMUrl = ""+songInfo.map((info) => (info.BPMUrl));
        const songDuration = songInfo.map((info) => (info.duration));
        const songEasyLevel = songInfo.map((info) => (info.EasyLevel));
        const songEasyNote = songInfo.map((info) => (info.EasyNote));
        const songEasyLock = songInfo.map((info) => (info.EasyLock));
        const songHardLevel = songInfo.map((info) => (info.HardLevel));
        const songHardNote = songInfo.map((info) => (info.HardNote));
        const songHardLock = songInfo.map((info) => (info.HardLock));
        const songChaosLevel = songInfo.map((info) => (info.ChaosLevel));
        const songChaosNote = songInfo.map((info) => (info.ChaosNote));
        const songChaosLock = songInfo.map((info) => (info.ChaosLock));
        const songGlitchLevel = songInfo.map((info) => (info.GlitchLevel));
        const hasGlitchLevel = ""+songGlitchLevel;
        const videos = songInfo.map((info) => (info.videos));
        const hasVideos = ""+videos;
        const lyric = ""+songInfo.map((info) => (info.lyricUrl));
        const intro = ""+songInfo.map((info) => (info.IntroUrl));
        const notes = ""+songInfo.map((info) => (info.notesUrl));
        const coverArt = ""+songInfo.map((info) => (info.coverArtUrl));


        var BPMSource;
        if(songBPMUrl !== ""){
            BPMSource = <BPMUrl songID={id}/>
        }

        var Glitch;
        if(hasGlitchLevel !== ""){
            Glitch = <GlitchLevel songID={id}/>
        }

        var PlayerVideos;
        if(hasVideos !== ""){
            PlayerVideos = <Video songID={id}/>
        }

        var SongLyric;
        if(lyric !== ""){
            SongLyric = <Lyric songID={id}/>
        }

        var SongIntro;
        if(intro !== ""){
            SongIntro = <Intro songID={id}/>
        }

        var SongNotes;
        if(notes !== ""){
            SongNotes = <Notes songID={id}/>
        }

        var SongCoverArt;
        if(coverArt !== ""){
            SongCoverArt = <CoverArt songID={id}/>
        }



        return (
            <div>
                <br/>
        		<font className="song-title">{ songTitle }</font><br/>
        		<font className="song-subtitle">{ songArtist }</font><br/><br/>

        		<div className="song-info-box-left">
                    <img src={'http://cytus2wiki-x-com.img.abc188.com/' + songImgUrl} width="100%" alt="" />
        			<table className="song-info-table">
                        <tbody>
            				<tr>
            					<td className={"song-table-cover-art " + songColor} >
                                    <font className="song-table-font">曲绘：{ songIllustrator }</font>
            					</td>
            					<td></td>
            					<td className={"song-table-ver " + songColor}>
            						<font className="song-table-font">Ver { songVer }</font>
            					</td>
            				</tr>
                        </tbody>
        			</table>
        		</div>
        		<div className="song-table-padding">
        			<table className="song-info-table">
                        <tbody>
            				<tr>
            					<td className={"song-table-content " + songColor}>
            						<font className="song-table-font">BPM</font>
            					</td>
            					<td className="song-table-content">
            						<font className="song-table-font">{ songBPM }</font>
            					</td>
            					<td className={"song-table-content " + songColor}>
            						<font className="song-table-font">时长</font>
            					</td>
            					<td className="song-table-content">
            						<font className="song-table-font">{ songDuration }</font>
            					</td>
            				</tr>
                        </tbody>
        			</table>
        	    </div>          
                
        		<div className="song-table-level-box">
                    <br/>
                    <table className="song-level-table" align="center">
                        <tbody>
                            <tr>
                                <td className="song-table-content">
                                    <font className="song-table-font"></font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">等级</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">Note数量</font>
                                </td>
                                <td className={"song-table-content " + songColor}>
                                    <font className="song-table-font">解锁</font>
                                </td>
                            </tr>
                            <tr><td colSpan="4"><div className="level-table-padding"></div></td></tr>
                            <tr>
                                <td className={"song-table-content " + songColor}>
                                   <font className="song-table-font">简单</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songEasyLevel }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songEasyNote }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songEasyLock }</font>
                                </td>
                            </tr>
                            <tr><td colSpan="4"><div className="level-table-padding"></div></td></tr>
                            <tr>
                                <td className={"song-table-content " + songColor}>
                                    <font className="song-table-font">困难</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songHardLevel }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songHardNote }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songHardLock }</font>
                                </td>
                            </tr>
                            <tr><td colSpan="4"><div className="level-table-padding"></div></td></tr>
                            <tr>
                                <td className={"song-table-content " + songColor}>
                                    <font className="song-table-font">混沌</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songChaosLevel }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songChaosNote }</font>
                                </td>
                                <td className="song-table-content">
                                    <font className="song-table-font">{ songChaosLock }</font>
                                </td>
                            </tr>
                            <tr><td colSpan="4"><div className="level-table-padding"></div></td></tr>
                            {Glitch}
                        </tbody>
                    </table>
                    <br/>
        		</div>
                { BPMSource }
                { SongIntro }
                { SongNotes }
                { PlayerVideos }
                { SongCoverArt }
                { SongLyric }
                
                <br/><br/>
        	</div>
        );
    }
}

export default SongInfo;
