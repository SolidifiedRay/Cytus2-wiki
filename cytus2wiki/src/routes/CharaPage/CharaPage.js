import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Data from '../../db/db';
import CharaInfoMarkdown from '../../components/CharaInfoMarkdown/CharaInfoMarkdown';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class SongPage extends Component {

	render(){

		const chara = ""+this.props.chara;
		var charaUrl = chara;
		if(charaUrl==="NEKO#ΦωΦ"){
			charaUrl = "NEKO0";
		}
		if(charaUrl==="ROBO_Head"){
			charaUrl = "ROBOHead";
		}

        const charaSong = Data.filter(info => {if(info.character === chara) return info;});
        const charaSongList = charaSong.map((song) =>
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
        var songColor = chara +'-color';
        if(songColor === 'NEKO#ΦωΦ-color'){
        	songColor = 'neko-color';
        }
        console.log(songColor);

		return (
		<Router>
	    	<div className="background">
				<div className="content-box">
					<div id="top"></div>
		        	<br/><br/><br/>
		        	<div className="chara-container container">
		                <div className="row">
		                    <div className="col-md-12 col-sm-12">
		                        <font className="font-title">{ chara }</font><br/>
		                        <hr/>
		                    </div>
		                </div>
		                <br/>

		        		<div className="row">
		        			<div className="col-md-7 col-sm-12">
		            			<font className="font-subtitle">基本信息</font>
		                        <hr/>
		                        <div className="chara-info-box">
		                            <font className="font-subtitle">
		                                <CharaInfoMarkdown url={"./CharaInfoMarkdown/"+charaUrl+"Info.md"}/>
		                            </font>
		                        </div>
		                        <br/><br/>
		                        <font className="font-subtitle">官方人物介绍</font>
		                        <hr/>
		                        <div className="chara-info-box">
		                            <font className="font-subtitle">
		                                <CharaInfoMarkdown url={"./CharaInfoMarkdown/"+charaUrl+"Intro.md"}/>
		                            </font>
		                        </div><br/><br/>
		        			</div>
		                    <div className="col-md-1 col-sm-12" >
		                    </div>
		        			<div className="col-md-4 col-sm-12">
		            			<table>
		            				<tbody>
		                            <tr>
		                                <th className={songColor + " round-box-top font-center"}>
		                                    <font className="chara-box-font">Paff</font>
		                                </th>
		                            </tr>
		                            <tr>
		                                <td className="chara-page-box">
		                                    <br/><br/>
		                                    <img src={require("./img/chara/"+charaUrl+".png")} width="90%"/>
		                                    <br/><br/>
		                                </td>
		                            </tr>
		                            <tr>
		                                <th className={songColor + " font-center"}>
		                                    <font className="chara-box-font">Logo</font>
		                                </th>
		                            </tr>
		                            <tr>
		                                <td className="chara-page-box">
		                                    <br/><br/>
		                                    <img src={require("./img/logo/"+charaUrl+".png")} width="50%"/>
		                                    <br/><br/>
		                                </td>
		                            </tr>
		                            </tbody>        
		                        </table>
		        			</div>
		    			</div>
		                <br/>

		                <div className="row">
							<div className="col-md-12 col-sm-12">
								<div>
									<br/>
			                        <font className="font-subtitle">曲目一览</font><br/>
			                        <hr/>
			                        <div>
			                            <br/>
			                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
			                            <div className="table-responsive">
			                                <table className="table song-list-table">
			                                	<tbody>
				                                    <tr>
				                                        <th className={songColor + " song-list-th song-list-song-name-th"}>
				                                            <font className="song-table-font">曲名</font>
				                                        </th>
				                                        <th className={songColor + " song-list-th song-list-artists-th"}>
				                                            <font className="song-table-font">作者</font>
				                                        </th>
				                                        <th className={songColor + " song-list-th song-list-difficulty-th"}>
				                                            <font className="song-table-font">难度</font>
				                                        </th>
				                                        <th className={songColor +" song-list-th song-list-unlock-th"}>
				                                            <font className="song-table-font">解锁</font>
				                                        </th>
				                                    </tr>
				                                    { charaSongList }
			                                    </tbody>
			                                </table>
			                            </div>
			                            <br/><br/>
			                        </div>
			                    </div>
							</div>
						</div>

		                <div className="row">
		                    <div className="col-md-12 col-sm-12">
		                        <font className="song-subtitle">角色简要经历（OS）</font>
		                        <hr/>
		                        <font className="font-os">
		                            *感谢NoHearter梳理的剧情 qq3207414592 
		                            <a href="http://space.bilibili.com/17435569?share_medium=android&share_source=copy_link&bbid=LxstGCpOeBkuHSxINEg0UWMCMVJgUginfoc&ts=1548688570647">
		                                <font className="font-os">b站链接</font>
		                            </a><br/>
		                            <br/>
		                            
		                                <CharaInfoMarkdown url={"./CharaInfoMarkdown/"+charaUrl+"Story.md"}/>
		                            <br/>
		                        </font>
		                    </div>
		                </div>
		        	</div>
		        	<br/><br/><br/><br/>
		   		</div>
	   		</div>
   		</Router>
		);
	}
}

export default SongPage;
