import React, { Component } from 'react';
import Data from '../../db/db';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class SongList extends Component {
	handleSubmit = (path) =>{
		window.location.href = path;
	}

	render(){

        const paffSong = Data.filter(info => {if(info.character === "PAFF") return info;});
        const paffSongList = paffSong.map((song) =>
	            <tr key={song.id} className="song-list-tr">
	                <td className="song-list-th">
	                    <HashLink to={'/'+song.id+'/#top'}><font className="song-table-font song-table-link">{ song.title }</font></HashLink>
	                </td>
	                <td className="song-list-th">
	                    <font className="song-table-font">{ song.artist }</font>
	                </td>
	                <td className="song-list-th">
	                    <font className="song-table-font">{ song.levelList }</font>
	                </td>
	                <td className="song-list-th">
	                    <font className="song-table-font">{ song.unlockList }</font>
	                </td>
	            </tr>
        );

		return (
			<div className="background">
				<Router>
				<div className="content-box">
					<div id="top"></div>
					<br/><br/>
					<div className="container song-container">
						<div className="row">
							<div className="col-md-10 col-sm-12">
								<div className="song-list-title">
									<br/>
			                        <font className="font-title">曲目一览</font><br/>
			                        <hr/>
			                        <div id="PAFF"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Paff_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> PAFF</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Aroma-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Aroma-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Aroma-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Aroma-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { paffSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                            <br/><br/>
			                        </div>
			                    </div>
							</div>
							<div className="col-md-2 col-sm-12">
			                    <br/><br/>
			                    <div className="song-list-nav">
									<b><font className="song-list-link">免费角色曲包</font><br/></b>
									<HashLink to="/songlist/#PAFF"><font className="song-list-link">PAFF</font></HashLink><br/>
									<a href="/#/songlist/#NEKO#ΦωΦ"><font className="song-list-link">NEKO#ΦωΦ</font></a><br/>
									<a href="/#/songlist/#ROBO_Head"><font className="song-list-link">ROBO_Head</font></a><br/>
									<a href="/#/songlist/#Ivy"><font className="song-list-link">Ivy</font></a><br/>
									<a href="/#/songlist/#Crystal_PuNK"><font className="song-list-link">Crystal PuNK</font></a><br/>
									<br/>
									<b><font className="song-list-link">付费角色曲包</font><br/></b>
									<a href="/#/songlist/#Miku"><font className="song-list-link">Miku</font></a><br/>
									<a href="/#/songlist/#Xenon"><font className="song-list-link">Xenon</font></a><br/>
									<a href="/#/songlist/#ConneR"><font className="song-list-link">ConneR</font></a><br/>
									<a href="/#/songlist/#Cherry"><font className="song-list-link">Cherry</font></a><br/>
									<a href="/#/songlist/#Joe"><font className="song-list-link">JOE</font></a><br/>
									<a href="/#/songlist/#Aroma"><font className="song-list-link">Aroma</font></a><br/>
									<a href="/#/songlist/#Nora"><font className="song-list-link">Nora</font></a><br/>
									<a href="/#/songlist/#Neko"><font className="song-list-link">Neko</font></a><br/>
									<br/>
									<b>
									<a href="">
									<font className="song-list-link">黑市（付费曲包）</font>
									</a><br/></b>
			                    </div>
							</div>	
						</div>
					</div>
				</div>
				</Router>
			</div>
		);
	}
}

export default SongList;
