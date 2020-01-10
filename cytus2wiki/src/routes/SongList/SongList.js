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

        const NEKOSong = Data.filter(info => {if(info.character === "NEKO#ΦωΦ") return info;});
        const NEKOSongList = NEKOSong.map((song) =>
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

        const ROBO_HeadSong = Data.filter(info => {if(info.character === "ROBO_Head") return info;});
        const ROBO_HeadSongList = ROBO_HeadSong.map((song) =>
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

        const IvySong = Data.filter(info => {if(info.character === "Ivy") return info;});
        const IvySongList = IvySong.map((song) =>
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

        const CrystalPuNKSong = Data.filter(info => {if(info.character === "Crystal PuNK") return info;});
        const CrystalPuNKSongList = CrystalPuNKSong.map((song) =>
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

        const MikuSong = Data.filter(info => {if(info.character === "Miku") return info;});
        const MikuSongList = MikuSong.map((song) =>
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

        const XenonSong = Data.filter(info => {if(info.character === "Xenon") return info;});
        const XenonSongList = XenonSong.map((song) =>
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

        const ConneRSong = Data.filter(info => {if(info.character === "ConneR") return info;});
        const ConneRSongList = ConneRSong.map((song) =>
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

        const CherrySong = Data.filter(info => {if(info.character === "Cherry") return info;});
        const CherrySongList = CherrySong.map((song) =>
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

        const JOESong = Data.filter(info => {if(info.character === "JOE") return info;});
        const JOESongList = JOESong.map((song) =>
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

        const AromaSong = Data.filter(info => {if(info.character === "Aroma") return info;});
        const AromaSongList = AromaSong.map((song) =>
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

        const NoraSong = Data.filter(info => {if(info.character === "Nora") return info;});
        const NoraSongList = NoraSong.map((song) =>
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

        const Neko1Song = Data.filter(info => {if(info.character === "Neko") return info;});
        const Neko1SongList = Neko1Song.map((song) =>
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

        const SagarSong = Data.filter(info => {if(info.character === "Sagar") return info;});
        const SagarSongList = SagarSong.map((song) =>
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

        const RinSong = Data.filter(info => {if(info.character === "Rin") return info;});
        const RinSongList = RinSong.map((song) =>
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
			                        </div>
			                        <br/><br/>

			                        <div id="NEKO#ΦωΦ"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Neko0_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> NEKO#ΦωΦ</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="neko-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { NEKOSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="ROBO_Head"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/ROBO_Head_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> ROBO_Head</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="ROBO_Head-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="ROBO_Head-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="ROBO_Head-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="ROBO_Head-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { ROBO_HeadSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Ivy"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Ivy_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Ivy</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Ivy-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Ivy-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Ivy-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Ivy-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { IvySongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Crystal PuNK"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Crystal_PuNK_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Crystal PuNK</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Cherry-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { CrystalPuNKSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Miku"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/miku_logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Miku</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Miku-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Miku-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Miku-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Miku-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { MikuSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Xenon"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Xenon_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Xenon</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Xenon-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Xenon-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Xenon-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Xenon-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { XenonSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="ConneR"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/ConneR_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> ConneR</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="ConneR-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="ConneR-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="ConneR-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="ConneR-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { ConneRSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Cherry"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Cherry_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Cherry</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Cherry-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Cherry-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { CherrySongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="JOE"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Joe_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> JOE</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="JOE-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="JOE-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="JOE-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="JOE-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { JOESongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Aroma"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Aroma_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Aroma</font></th>
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
				                                    { AromaSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Nora"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Nora_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Nora</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Nora-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Nora-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Nora-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Nora-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { NoraSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Neko"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Neko1_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> Neko</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="neko-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="neko-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { Neko1SongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Sagar"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Sagar_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title">&nbsp;Sagar</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Sagar-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Sagar-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Sagar-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Sagar-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { SagarSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="Rin"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Rin_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title">&nbsp;Rin</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="Rin-color song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="Rin-color song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="Rin-color song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="Rin-color song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { RinSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>


			                    </div>
							</div>
							<div className="col-md-2 col-sm-12">
			                    <br/><br/>
			                    <div className="song-list-nav">
									<b><font className="song-list-link">免费角色曲包</font><br/></b>
									<HashLink to="/songlist/#PAFF"><font className="song-list-link">PAFF</font></HashLink><br/>
									<HashLink to="/songlist/#NEKO#ΦωΦ"><font className="song-list-link">NEKO#ΦωΦ</font></HashLink><br/>
									<HashLink to="/songlist/#ROBO_Head"><font className="song-list-link">ROBO_Head</font></HashLink><br/>
									<HashLink to="/songlist/#Ivy"><font className="song-list-link">Ivy</font></HashLink><br/>
									<HashLink to="/songlist/#Crystal PuNK"><font className="song-list-link">Crystal PuNK</font></HashLink><br/>
									<br/>
									<b><font className="song-list-link">付费角色曲包</font><br/></b>
									<HashLink to="/songlist/#Miku"><font className="song-list-link">Miku</font></HashLink><br/>
									<HashLink to="/songlist/#Xenon"><font className="song-list-link">Xenon</font></HashLink><br/>
									<HashLink to="/songlist/#ConneR"><font className="song-list-link">ConneR</font></HashLink><br/>
									<HashLink to="/songlist/#Cherry"><font className="song-list-link">Cherry</font></HashLink><br/>
									<HashLink to="/songlist/#JOE"><font className="song-list-link">JOE</font></HashLink><br/>
									<HashLink to="/songlist/#Sagar"><font className="song-list-link">Sagar</font></HashLink><br/>
									<HashLink to="/songlist/#Rin"><font className="song-list-link">Rin</font></HashLink><br/>
									<HashLink to="/songlist/#Aroma"><font className="song-list-link">Aroma</font></HashLink><br/>
									<HashLink to="/songlist/#Nora"><font className="song-list-link">Nora</font></HashLink><br/>
									<HashLink to="/songlist/#Neko"><font className="song-list-link">Neko</font></HashLink><br/>
									<br/>
									<b>
									<a href="">
									<HashLink to="/dlclist/#top"><font className="song-list-link">黑市（付费曲包）</font></HashLink>
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
