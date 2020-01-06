import React, { Component } from 'react';
import Data from '../../db/db';

class SongList extends Component {
	handleSubmit = (path) =>{
		window.location.href = path;
	}

	render(){

        const paffSong = Data.filter(info => {if(info.character === "PAFF") return info;});
        const paffSongList = Data.map((song) =>
            <tr key={song.id} onClick={() => this.handleSubmit(""+song.title)}  className="song-list-tr">
                <td className="song-list-th">
                    <font className="song-table-font">{ song.title }</font>
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
				<div className="content-box">
					<br/><br/>
					<div className="container song-container">
						<div className="row">
							<div className="col-md-10 col-sm-12">
								<div className=" song-list-title">
									<br/>
			                        <font className="font-title">曲目一览</font><br/>
			                        <hr/>
			                        <div>
			                            <a name="PAFF"></a><br/>
			                            <table>
			                            	<tbody>
					                            <tr>
					                                <th><img src={require('./images/logos/Paff_Logo.png')} className="song-list-chara-logo"/></th>
					                                <th><font className="song-list-chara-title"> PAFF</font></th>
					                            </tr>
					                        </tbody>
			                            </table>
			                            <br/>
			                            *<b>点击表格查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
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
			                    <div class="song-list-nav">
									<b><font class="song-list-link">免费角色曲包</font><br/></b>
									<a href="#PAFF"><font class="song-list-link">PAFF</font></a><br/>
									<a href="#NEKO#ΦωΦ"><font class="song-list-link">NEKO#ΦωΦ</font></a><br/>
									<a href="#ROBO_Head"><font class="song-list-link">ROBO_Head</font></a><br/>
									<a href="#Ivy"><font class="song-list-link">Ivy</font></a><br/>
									<a href="#Crystal_PuNK"><font class="song-list-link">Crystal PuNK</font></a><br/>
									<br/>
									<b><font class="song-list-link">付费角色曲包</font><br/></b>
									<a href="#Miku"><font class="song-list-link">Miku</font></a><br/>
									<a href="#Xenon"><font class="song-list-link">Xenon</font></a><br/>
									<a href="#ConneR"><font class="song-list-link">ConneR</font></a><br/>
									<a href="#Cherry"><font class="song-list-link">Cherry</font></a><br/>
									<a href="#Joe"><font class="song-list-link">JOE</font></a><br/>
									<a href="#Aroma"><font class="song-list-link">Aroma</font></a><br/>
									<a href="#Nora"><font class="song-list-link">Nora</font></a><br/>
									<a href="#Neko"><font class="song-list-link">Neko</font></a><br/>
									<br/>
									<b>
									<a href="">
									<font class="song-list-link">黑市（付费曲包）</font>
									</a><br/></b>
			                    </div>
							</div>	
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SongList;
