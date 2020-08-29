import React, { Component } from 'react';
import Data from '../../db/db';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class DLCList extends Component {

	render(){

        const GameDisco1 = Data.filter(info => {if(info.unlockList === "Game Disc vol. 1") return info;});
        const GameDisco1List = GameDisco1.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MemoryUnitA1 = Data.filter(info => {if(info.unlockList === "Memory Unit[A1]") return info;});
        const MemoryUnitA1List = MemoryUnitA1.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MarvelousMixVol1 = Data.filter(info => {if(info.unlockList === "Marvelous Mix vol.1") return info;});
        const MarvelousMixVol1List = MarvelousMixVol1.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const EmotionSamples01 = Data.filter(info => {if(info.unlockList === "Emotion Samples 01") return info;});
        const EmotionSamples01List = EmotionSamples01.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const EmotionSamples02 = Data.filter(info => {if(info.unlockList === "Emotion Samples 02") return info;});
        const EmotionSamples02List = EmotionSamples02.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const EmotionSamples03 = Data.filter(info => {if(info.unlockList === "Emotion Samples 03") return info;});
        const EmotionSamples03List = EmotionSamples03.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const GameDisco2 = Data.filter(info => {if(info.unlockList === "Game Disc vol. 2") return info;});
        const GameDisco2List = GameDisco2.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const FeaturedArticleVol1 = Data.filter(info => {if(info.unlockList === "Featured Article Vol.1") return info;});
        const FeaturedArticleVol1List = FeaturedArticleVol1.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MemoryUnitA2 = Data.filter(info => {if(info.unlockList === "Memory Unit[A2]") return info;});
        const MemoryUnitA2List = MemoryUnitA2.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MarvelousMixVol2 = Data.filter(info => {if(info.unlockList === "Marvelous Mix vol.2") return info;});
        const MarvelousMixVol2List = MarvelousMixVol2.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MarvelousMixVol3 = Data.filter(info => {if(info.unlockList === "Marvelous Mix vol.3") return info;});
        const MarvelousMixVol3List = MarvelousMixVol3.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const MarvelousMixVol4 = Data.filter(info => {if(info.unlockList === "Marvelous Mix vol.4") return info;});
        const MarvelousMixVol4List = MarvelousMixVol4.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const PuNKEP01 = Data.filter(info => {if(info.unlockList === "PuNK EP 01") return info;});
        const PuNKEP01List = PuNKEP01.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const BattleCHAOS2019 = Data.filter(info => {if(info.unlockList === "Battle CHAOS 2019") return info;});
        const BattleCHAOS2019List = BattleCHAOS2019.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const maimaiDX = Data.filter(info => {if(info.unlockList === "maimai DX+") return info;});
        const maimaiDXList = maimaiDX.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const DJMAXVol1 = Data.filter(info => {if(info.unlockList === "DJMAX Vol. 1") return info;});
        const DJMAXVol1List = DJMAXVol1.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
	                </td>
	            </tr>
        );

        const DJMAXVol2 = Data.filter(info => {if(info.unlockList === "DJMAX Vol. 2") return info;});
        const DJMAXVol2List = DJMAXVol2.map((song) =>
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
	                    <font className="song-table-font">{ song.character }</font>
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
							<div className="col-md-9 col-sm-12">
								<div className="song-list-title">
									<br/>
			                        <font className="font-title">曲目一览</font><br/>
			                        <hr/>
			                        <div id="GameDisco1List"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Game Disc vol.1</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { GameDisco1List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MemoryUnitA1"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Memory Unit [A1]</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MemoryUnitA1List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MarvelousMixVol1"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Marvelous Mix vol.1</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MarvelousMixVol1List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="EmotionSamples01"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Emotion Samples 01</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { EmotionSamples01List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="EmotionSamples02"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Emotion Samples 02</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { EmotionSamples02List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="GameDisco2List"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Game Disc vol.2</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { GameDisco2List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="FeaturedArticleVol1"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Featured Article Vol.1</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { FeaturedArticleVol1List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MemoryUnitA2"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Memory Unit [A2]</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MemoryUnitA2List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MarvelousMixVol2"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Marvelous Mix vol.2</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MarvelousMixVol2List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MarvelousMixVol3"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Marvelous Mix vol.3</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MarvelousMixVol3List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="PuNKEP01"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">PuNK EP 01</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { PuNKEP01List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="BattleCHAOS2019"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Battle CHAOS 2019</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { BattleCHAOS2019List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="EmotionSamples03"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Emotion Samples 03</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { EmotionSamples03List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="maimaiDX"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">maimai DX+</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { maimaiDXList }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="DJMAXVol1"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">DJMAX Vol.1</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { DJMAXVol1List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="DJMAXVol2"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">DJMAX Vol.2</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { DJMAXVol2List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>

			                        <div id="MarvelousMixVol4"><br/></div>
			                        <div>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><font className="song-list-chara-title">Marvelous Mix vol.4</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className="background song-list-th song-list-song-name-th">
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-artists-th">
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-difficulty-th">
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className="background song-list-th song-list-unlock-th">
				                                            <font className="song-table-font">角色</font>
				                                        </th>
				                                    </tr>
				                                    { MarvelousMixVol4List }
			                                    </tbody>
			                                </table>
			                            </div>
			                        </div>
			                        <br/><br/>


			                    </div>
							</div>
							<div className="col-md-3 col-sm-12">
			                    <br/><br/>
			                    <div className="song-list-nav">
									<b><font className="song-list-link">黑市（付费曲包)</font><br/></b>
									<HashLink to="/dlclist/#GameDisco1List"><font className="song-list-link">Game Disc vol.1</font></HashLink><br/>
									<HashLink to="/dlclist/#MemoryUnitA1"><font className="song-list-link">Memory Unit [A1]</font></HashLink><br/>
									<HashLink to="/dlclist/#MarvelousMixVol1"><font className="song-list-link">Marvelous Mix vol.1</font></HashLink><br/>
									<HashLink to="/dlclist/#EmotionSamples01List"><font className="song-list-link">Emotion Samples 01</font></HashLink><br/>
									<HashLink to="/dlclist/#EmotionSamples02"><font className="song-list-link">Emotion Samples 02</font></HashLink><br/>
									<HashLink to="/dlclist/#GameDisco2List"><font className="song-list-link">Game Disc vol.2</font></HashLink><br/>
									<HashLink to="/dlclist/#FeaturedArticleVol1"><font className="song-list-link">Featured Article Vol.1</font></HashLink><br/>
									<HashLink to="/dlclist/#MemoryUnitA2"><font className="song-list-link">Memory Unit[A2]</font></HashLink><br/>
									<HashLink to="/dlclist/#MarvelousMixVol2"><font className="song-list-link">Marvelous Mix vol.2</font></HashLink><br/>
									<HashLink to="/dlclist/#MarvelousMixVol3"><font className="song-list-link">Marvelous Mix vol.3</font></HashLink><br/>
									<HashLink to="/dlclist/#PuNKEP01"><font className="song-list-link">PuNK EP 01</font></HashLink><br/>
									<HashLink to="/dlclist/#BattleCHAOS2019"><font className="song-list-link">Battle CHAOS 2019</font></HashLink><br/>
									<HashLink to="/dlclist/#EmotionSamples03"><font className="song-list-link">Emotion Samples 03</font></HashLink><br/>
									<HashLink to="/dlclist/#maimaiDX"><font className="song-list-link">maimai DX+</font></HashLink><br/>
									<HashLink to="/dlclist/#DJMAXVol1"><font className="song-list-link">DJMAX Vol.1</font></HashLink><br/>
									<HashLink to="/dlclist/#DJMAXVol2"><font className="song-list-link">DJMAX Vol.2</font></HashLink><br/>
									<HashLink to="/dlclist/#MarvelousMixVol4"><font className="song-list-link">Marvelous Mix vol.4</font></HashLink><br/>
									<br/>
									<HashLink to="/songlist/#top">
									<font className="song-list-link">角色曲目一览</font>
									</HashLink><br/><br/>
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

export default DLCList;
