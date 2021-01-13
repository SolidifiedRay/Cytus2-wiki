import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const min = 0;

class CAPSO extends Component {

	state = {
		item: '',
		capso_list : ["to_further_dream","saika","quantum_labyrinth","masquerade","bloody_purity","liber_me","qualia",
						"to_further_dream_chaos","saika_chaos","quantum_labyrinth_chaos","masquerade_chaos","bloody_purity_chaos","liber_me_chaos","qualia_chaos",
						"chrome_vox_glitch","dasein_glitch","imprinting_glitch","gravity_glitch","phantom_razor_glitch","kanta_glitch","happiness_breeze_glitch","credence_glitch","deadly_shoot_game_glitch",
						"cherry_skin01","cherry_skin02","conner_skin01","ivy_skin01","joe_skin01","neko_skin01","neko_skin02","neko_skin03",
						"nora_skin01","paff_skin01","paff_skin02","paff_skin03","robo_skin01","robo_skin02","xenon_skin01",
						"tap_airhorn","tap_bell","tap_cat","tap_cheers","tap_clap","tap_click","tap_cookie","tap_dog","tap_gunshot","tap_keyboard","tap_synth",
						"alterna_gallery","baptism_of_fire_gallery","blow_my_mind_gallery","body_talk_gallery","bullet_waiting_for_me_gallery", "chrome_vox_gallery",
						"code_name_gama_gallery","fight_another_day_gallery","fireflies_gallery","gravity_gallery","green_hope_gallery","happiness_breeze_gallery",
						"hard_landing_gallery","kanata_gallery","keep_it_up_gallery","one_way_love_gallery","reboost_gallery","resurrection_gallery","survive_gallery",
						"the_spark_gallery","zealous_hearts_gallery","under_the_same_sky_gallery","conflict_glitch","freedom_dive_chaos","freedom_dive","hydrangea_glitch",
						"re_boost_glitch","perspectives_glitch","Halcyon","Halcyon_chaos"],
		note: ''
	}

	draw = (e) => {
		if(this.state.capso_list.length == []){
			this.setState({note:"卡池已经抽空，请刷新页面"});
		}
		var list = this.state.capso_list;
		var rand =  Math.round(min + (Math.random() * (list.length-1-min)));
		var output = list[rand];
		this.setState({item: output})
		var list_left = list.slice(0,rand);
		var list_right = list.slice(rand+1, list.length);
		list = list_left.concat(list_right);
		console.log(output);
		this.setState({capso_list:list});
	}


	render(){
		return (
			<div className="background">
				<Router>
				<div id="top"></div>
				<br/><br/><br/><br/>
		        <div className="content-box">
		            <br/><br/>
		            <div className="row">
		            	<div className="col-md-12 col-sm-12">
		                    <div className="content">
		                        <font className="font-title">CAPSO！抽卡模拟器</font><br/>
		                        <font className="font-subtitle">因为可以无限抽，所以这个模拟器的十连和单抽都是一发一发的抽</font>
		                        <hr/>
		                    </div>
		                </div>
		            </div>
		            <div className = "row">
		            	<div className="col-md-6 col-sm-12">
	                        <div className="capso-box">
                        		<img src={require('./image/capso.png')} width="100%" alt="" />
                        		<br/>
                        		<br/>
                        		<img src={require('./image/capso_num.png')} width="50%" alt="" />
                        		<button type="button" onClick={this.draw} className="capso-one-draw btn btn-primary">
                        			<img src={require('./image/one_draw.png')} width="100%"  alt="" />
		                        </button>
                        		<button type="button" onClick={this.draw} className="capso-ten-draw btn btn-danger">
                        			<img src={require('./image/ten_draw.png')} width="100%" alt="" />
		                        </button>
	                        </div>
                        	<br/>
		                </div>
		            	<div className="col-md-6 col-sm-12">
		            		<div className="capso-result">
		            			<font className="font-subtitle">抽卡结果显示：</font><br/>
		            			*图片加载可能需要一定时间，如果点击按钮没反应的话请稍等一下，请不要过快点击抽卡按钮<br/><br/>
                    			<img src={'http://cytus2server-x-top.img.abc188.com/img/CAPSO/' + this.state.item +".jpg"} width="100%" alt=""/>
                    			<font className="result-name">{this.state.item}</font>
                    			<font className="font-title">{this.state.note}</font>
		            		</div>
		            	</div>
		            </div>
		            <div className = "row">
		            	<div className="col-md-12 col-sm-12">
		            		<div className="content">
				            	<div>
		                            <table>
		                            	<tbody>
				                            <tr>
				                                <th><font className="song-list-chara-title">奖励一览</font></th>
				                            </tr>
				                        </tbody>
		                            </table>
		                            <br/>
		                            *<b>点击曲名查看曲目详情</b> 手机端浏览可以左右滑动查看表格<br/>
		                            <div className="table-responsive">
		                                <table className="table song-list-table">
		                                	<tbody>
			                                    <tr>
			                                        <th className="capso-color song-list-th song-list-song-name-th">
			                                            <font className="song-table-font">奖励</font>
			                                        </th>
			                                        <th className="capso-color song-list-th song-list-artists-th">
			                                            <font className="song-table-font">种类</font>
			                                        </th>
			                                    </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Neko1001/#top'}><font className="song-table-font song-table-link">Chocolate missile</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0013/#top'}><font className="song-table-font song-table-link">extinguisher</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={''}><font className="song-table-font song-table-link">ROBO_HEAD - Maid</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Nora006/#top'}><font className="song-table-font song-table-link">Bastard of Hardcore</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy044/#top'}><font className="song-table-font song-table-link">Pure Powerstomper</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy044/#top'}><font className="song-table-font song-table-link">Halcyon - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy044/#top'}><font className="song-table-font song-table-link">Halcyon - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff009/#top'}><font className="song-table-font song-table-link">Re:Boost</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Aroma008/#top'}><font className="song-table-font song-table-link">Perspectives</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy040/#top'}><font className="song-table-font song-table-link">Hydrangea</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy038/#top'}><font className="song-table-font song-table-link">Conflict</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy039/#top'}><font className="song-table-font song-table-link">FREEDOM DIVE - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy039/#top'}><font className="song-table-font song-table-link">FREEDOM DIVE - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ROBO_Head001/#top'}><font className="song-table-font song-table-link">Deadly Slot Game</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0004/#top'}><font className="song-table-font song-table-link">Happiness Breeze</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy032/#top'}><font className="song-table-font song-table-link">Qualia - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy032/#top'}><font className="song-table-font song-table-link">Qualia - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy033/#top'}><font className="song-table-font song-table-link">Liber Me - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy033/#top'}><font className="song-table-font song-table-link">Liber Me - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff004/#top'}><font className="song-table-font song-table-link">KANTA</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Glitch</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff011/#top'}><font className="song-table-font song-table-link">Under the same sky</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff010/#top'}><font className="song-table-font song-table-link">Green Hope</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff009/#top'}><font className="song-table-font song-table-link">Re:Boost</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff008/#top'}><font className="song-table-font song-table-link">Gravity</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff007/#top'}><font className="song-table-font song-table-link">Fireflies (Funk Fiction remix)</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff006/#top'}><font className="song-table-font song-table-link">Baptism of Fire (CliqTrack remix)</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff005/#top'}><font className="song-table-font song-table-link">Fight Another Day (Andy Tunstall remix)</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff004/#top'}><font className="song-table-font song-table-link">KANATA</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff003/#top'}><font className="song-table-font song-table-link">Bullet Waiting for Me (James Landino remix)</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff002/#top'}><font className="song-table-font song-table-link">Survive</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff001/#top'}><font className="song-table-font song-table-link">Body Talk</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0011/#top'}><font className="song-table-font song-table-link">Hard Landing</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0010/#top'}><font className="song-table-font song-table-link">Chrome VOX</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0009/#top'}><font className="song-table-font song-table-link">Blow my mind</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0008/#top'}><font className="song-table-font song-table-link">CODE NAME : GAMMA</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0007/#top'}><font className="song-table-font song-table-link">Keep it up</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0006/#top'}><font className="song-table-font song-table-link">Zealous Hearts (Rayark Edit)</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0005/#top'}><font className="song-table-font song-table-link">Alterna Pt.1 -Cosmogony-</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0004/#top'}><font className="song-table-font song-table-link">Happiness Breeze</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0003/#top'}><font className="song-table-font song-table-link">One Way Love</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0003/#top'}><font className="song-table-font song-table-link">One Way Love</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0002/#top'}><font className="song-table-font song-table-link">Resurrection</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0001/#top'}><font className="song-table-font song-table-link">The Spark</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Gallery</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy030/#top'}><font className="song-table-font song-table-link">To Further Dream - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy030/#top'}><font className="song-table-font song-table-link">To Further Dream - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy029/#top'}><font className="song-table-font song-table-link">Saika - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy029/#top'}><font className="song-table-font song-table-link">Saika - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy028/#top'}><font className="song-table-font song-table-link">Quantum Labyrinth - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy028/#top'}><font className="song-table-font song-table-link">Quantum Labyrinth - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy027/#top'}><font className="song-table-font song-table-link">Masquerade - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy027/#top'}><font className="song-table-font song-table-link">Masquerade - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy026/#top'}><font className="song-table-font song-table-link">Bloody Purity - Chaos</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy026/#top'}><font className="song-table-font song-table-link">Bloody Purity - Easy/Hard</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ConneR003/#top'}><font className="song-table-font song-table-link">Imprinting - Glitch</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Xenon007/#top'}><font className="song-table-font song-table-link">Phantom Razor - Glitch</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ROBO_Head010/#top'}><font className="song-table-font song-table-link">Dasein - Glitch</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/neko0010/#top'}><font className="song-table-font song-table-link">Chrome VOX - Glitch</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/paff008/#top'}><font className="song-table-font song-table-link">Gravity - Glitch</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Chart</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Keyboard</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Synth</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Gunshot</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Cookie</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Dog</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Click</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Clap</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Cheers</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Cat</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Bell</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <font className="song-table-font song-table-link">Air Horn</font>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Tapfix</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Aroma/#top'}><font className="song-table-font song-table-link">Vivid - Aroma</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Neko/#top'}><font className="song-table-font song-table-link">Vivid - Neko</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/JOE/#top'}><font className="song-table-font song-table-link">Vivid - JOE</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Ivy/#top'}><font className="song-table-font song-table-link">Vivid - Ivy</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Crystal PuNK/#top'}><font className="song-table-font song-table-link">Vivid - Crystal PuNK</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/CherryK/#top'}><font className="song-table-font song-table-link">Vivid - Cherry</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/CherryK/#top'}><font className="song-table-font song-table-link">Vivid - Cherry</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/NEKO#ΦωΦ/#top'}><font className="song-table-font song-table-link">ΦへΦ - NEKO#ΦωΦ</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ROBO_Head/#top'}><font className="song-table-font song-table-link">; ] - ROBO_Head</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/PAFF/#top'}><font className="song-table-font song-table-link">Idol - PAFF</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Nora/#top'}><font className="song-table-font song-table-link">Kyonshi - Nora</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ConneR/#top'}><font className="song-table-font song-table-link">Santa - ConneR</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/Xenon/#top'}><font className="song-table-font song-table-link">Vampire - Xenon</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/ROBO_Head/#top'}><font className="song-table-font song-table-link">Arcade - ROBO_Head</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/NEKO#ΦωΦ/#top'}><font className="song-table-font song-table-link">Chaos - NEKO#ΦωΦ</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>
			                                    <tr className="song-list-tr">
				                                    <td className="song-list-th">
									                    <HashLink to={'/PAFF/#top'}><font className="song-table-font song-table-link">kimono - PAFF</font></HashLink>
									                </td>
									                <td className="song-list-th">
									                    <font className="song-table-font">Skin</font>
									                </td>
								                </tr>

		                                    </tbody>
		                                </table>
		                            </div>
		                        </div>
                        	</div>
                        </div>
		            </div>
		            <br/><br/><br/><br/><br/><br/>
		        </div>
		        </Router>
		   </div>
		);
	}
}

export default CAPSO;
