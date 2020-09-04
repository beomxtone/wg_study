import React, { Component } from 'react';
import './App.css';
import ChampList from './components/ChampList';
import PickFive from './components/PickFive'

class App extends Component {
  constructor(props){
    super(props);
    this.squareURL = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/';
    this.state = {
      selectedChamp: 'Default',
      pickCount: 0,
      team: 'Default',
      champions:[
        {id: 1, name_en:'Garen', name_ko:'가렌', picked: false},
        {id: 2, name_en:'Galio', name_ko:'갈리오', picked: false},
        {id: 3, name_en:'Gangplank', name_ko:'갱플랭크', picked: false},
        {id: 4, name_en:'Gragas', name_ko:'그라가스', picked: false},
        {id: 5, name_en:'Graves', name_ko:'그레이브즈', picked: false},
        {id: 6, name_en:'Gnar', name_ko:'나르', picked: false},
        {id: 7, name_en:'Nami', name_ko:'나미', picked: false},
        {id: 8, name_en:'Nasus', name_ko:'나서스', picked: false},
        {id: 9, name_en:'Nautilus', name_ko:'노틸러스', picked: false},
        {id: 10, name_en:'Nocturne', name_ko:'녹턴', picked: false},
        {id: 11, name_en:'Nunu', name_ko:'누누와 윌럼프', picked: false},
        {id: 12, name_en:'Nidalee', name_ko:'니달리', picked: false},
        {id: 13, name_en:'Neeko', name_ko:'니코', picked: false},
        {id: 14, name_en:'Darius', name_ko:'다리우스', picked: false},
        {id: 15, name_en:'Diana', name_ko:'다이애나', picked: false},
        {id: 16, name_en:'Draven', name_ko:'드레이븐', picked: false},
        {id: 17, name_en:'Ryze', name_ko:'라이즈', picked: false},
        {id: 18, name_en:'Rakan', name_ko:'라칸', picked: false},
        {id: 19, name_en:'Rammus', name_ko:'람머스', picked: false},
        {id: 20, name_en:'Lux', name_ko:'럭스', picked: false},
        {id: 21, name_en:'Rumble', name_ko:'럼블', picked: false},
        {id: 22, name_en:'Renekton', name_ko:'레넥톤', picked: false},
        {id: 23, name_en:'Leona', name_ko:'레오나', picked: false},
        {id: 24, name_en:'RekSai', name_ko:'렉사이', picked: false},
        {id: 25, name_en:'Rengar', name_ko:'렝가', picked: false},
        {id: 26, name_en:'Lucian', name_ko:'루시안', picked: false},
        {id: 27, name_en:'Lulu', name_ko:'룰루', picked: false},
        {id: 28, name_en:'Leblanc', name_ko:'르블랑', picked: false},
        {id: 29, name_en:'LeeSin', name_ko:'리신', picked: false},
        {id: 30, name_en:'Riven', name_ko:'리븐', picked: false},
        {id: 31, name_en:'Lissandra', name_ko:'리산드라', picked: false},
        {id: 32, name_en:'Lillia', name_ko:'릴리아', picked: false},
        {id: 33, name_en:'MasterYi', name_ko:'마스터 이', picked: false},
        {id: 34, name_en:'Maokai', name_ko:'마오카이', picked: false},
        {id: 35, name_en:'Malzahar', name_ko:'말자하', picked: false},
        {id: 36, name_en:'Malphite', name_ko:'말파이트', picked: false},
        {id: 37, name_en:'Mordekaiser', name_ko:'모데카이저', picked: false},
        {id: 38, name_en:'Morgana', name_ko:'모르가나', picked: false},
        {id: 39, name_en:'DrMundo', name_ko:'문도 박사', picked: false},
        {id: 40, name_en:'MissFortune', name_ko:'미스 포츈', picked: false},
        {id: 41, name_en:'Bard', name_ko:'바드', picked: false},
        {id: 42, name_en:'Varus', name_ko:'바루스', picked: false},
        {id: 43, name_en:'Vi', name_ko:'바이', picked: false},
        {id: 44, name_en:'Veigar', name_ko:'베이가', picked: false},
        {id: 45, name_en:'Vayne', name_ko:'베인', picked: false},
        {id: 46, name_en:'Velkoz', name_ko:'벨코즈', picked: false},
        {id: 47, name_en:'Volibear', name_ko:'볼리베어', picked: false},
        {id: 48, name_en:'Braum', name_ko:'브라움', picked: false},
        {id: 49, name_en:'Brand', name_ko:'브랜드', picked: false},
        {id: 50, name_en:'Vladimir', name_ko:'블라디미르', picked: false},
        {id: 51, name_en:'Blitzcrank', name_ko:'블리츠크랭크', picked: false},
        {id: 52, name_en:'Viktor', name_ko:'빅토르', picked: false},
        {id: 53, name_en:'Poppy', name_ko:'뽀삐', picked: false},
        {id: 54, name_en:'Sion', name_ko:'사이온', picked: false},
        {id: 55, name_en:'Sylas', name_ko:'사일러스', picked: false},
        {id: 56, name_en:'Shaco', name_ko:'샤코', picked: false},
        {id: 57, name_en:'Senna', name_ko:'세나', picked: false},
        {id: 58, name_en:'Sejuani', name_ko:'세주아니', picked: false},
        {id: 59, name_en:'Sett', name_ko:'세트', picked: false},
        {id: 60, name_en:'Sona', name_ko:'소나', picked: false},
        {id: 61, name_en:'Soraka', name_ko:'소라카', picked: false},
        {id: 62, name_en:'Shen', name_ko:'쉔', picked: false},
        {id: 63, name_en:'Shyvana', name_ko:'쉬바나', picked: false},
        {id: 64, name_en:'Swain', name_ko:'스웨인', picked: false},
        {id: 65, name_en:'Skarner', name_ko:'스카너', picked: false},
        {id: 66, name_en:'Sivir', name_ko:'시비르', picked: false},
        {id: 67, name_en:'XinZhao', name_ko:'신짜오', picked: false},
        {id: 68, name_en:'Syndra', name_ko:'신드라', picked: false},
        {id: 69, name_en:'Singed', name_ko:'신지드', picked: false},
        {id: 70, name_en:'Thresh', name_ko:'쓰레쉬', picked: false},
        {id: 71, name_en:'Ahri', name_ko:'아리', picked: false},
        {id: 72, name_en:'Amumu', name_ko:'아무무', picked: false},
        {id: 73, name_en:'AurelionSol', name_ko:'아우렐리온 솔', picked: false},
        {id: 74, name_en:'Ivern', name_ko:'아이번', picked: false},
        {id: 75, name_en:'Azir', name_ko:'아지르', picked: false},
        {id: 76, name_en:'Akali', name_ko:'아칼리', picked: false},
        {id: 77, name_en:'Aatrox', name_ko:'아트록스', picked: false},
        {id: 78, name_en:'Aphelios', name_ko:'아펠리오스', picked: false},
        {id: 79, name_en:'Alistar', name_ko:'알리스타', picked: false},
        {id: 80, name_en:'Annie', name_ko:'애니', picked: false},
        {id: 81, name_en:'Anivia', name_ko:'애니비아', picked: false},
        {id: 82, name_en:'Ashe', name_ko:'애쉬', picked: false},
        {id: 83, name_en:'Yasuo', name_ko:'야스오', picked: false},
        {id: 84, name_en:'Ekko', name_ko:'에코', picked: false},
        {id: 85, name_en:'Elise', name_ko:'엘리스', picked: false},
        {id: 86, name_en:'MonkeyKing', name_ko:'오공', picked: false},
        {id: 87, name_en:'Ornn', name_ko:'오른', picked: false},
        {id: 88, name_en:'Orianna', name_ko:'오리아나', picked: false},
        {id: 89, name_en:'Olaf', name_ko:'올라프', picked: false},
        {id: 90, name_en:'Yone', name_ko:'요네', picked: false},
        {id: 91, name_en:'Yorick', name_ko:'요릭', picked: false},
        {id: 92, name_en:'Udyr', name_ko:'우디르', picked: false},
        {id: 93, name_en:'Urgot', name_ko:'우르곳', picked: false},
        {id: 94, name_en:'Warwick', name_ko:'워윅', picked: false},
        {id: 95, name_en:'Yuumi', name_ko:'유미', picked: false},
        {id: 96, name_en:'Irelia', name_ko:'이렐리아', picked: false},
        {id: 97, name_en:'Evelynn', name_ko:'이블린', picked: false},
        {id: 98, name_en:'Ezreal', name_ko:'이즈리얼', picked: false},
        {id: 99, name_en:'Illaoi', name_ko:'일라오이', picked: false},
        {id: 100, name_en:'JarvanIV', name_ko:'자르반 4세', picked: false},
        {id: 101, name_en:'Xayah', name_ko:'자야', picked: false},
        {id: 102, name_en:'Zyra', name_ko:'자이라', picked: false},
        {id: 103, name_en:'Zac', name_ko:'자크', picked: false},
        {id: 104, name_en:'Janna', name_ko:'잔나', picked: false},
        {id: 105, name_en:'Jax', name_ko:'잭스', picked: false},
        {id: 106, name_en:'Zed', name_ko:'제드', picked: false},
        {id: 107, name_en:'Xerath', name_ko:'제라스', picked: false},
        {id: 108, name_en:'Jayce', name_ko:'제이스', picked: false},
        {id: 109, name_en:'Zoe', name_ko:'조이', picked: false},
        {id: 110, name_en:'Ziggs', name_ko:'직스', picked: false},
        {id: 111, name_en:'Jhin', name_ko:'진', picked: false},
        {id: 112, name_en:'Zilean', name_ko:'질리언', picked: false},
        {id: 113, name_en:'Jinx', name_ko:'징크스', picked: false},
        {id: 114, name_en:'Chogath', name_ko:'초가스', picked: false},
        {id: 115, name_en:'Karma', name_ko:'카르마', picked: false},
        {id: 116, name_en:'Camille', name_ko:'카밀', picked: false},
        {id: 117, name_en:'Kassadin', name_ko:'카사딘', picked: false},
        {id: 118, name_en:'Karthus', name_ko:'카서스', picked: false},
        {id: 119, name_en:'Cassiopeia', name_ko:'카시오페아', picked: false},
        {id: 120, name_en:'Kaisa', name_ko:'카이사', picked: false},
        {id: 121, name_en:'Khazix', name_ko:'카직스', picked: false},
        {id: 122, name_en:'Katarina', name_ko:'카타리나', picked: false},
        {id: 123, name_en:'Kalista', name_ko:'칼리스타', picked: false},
        {id: 124, name_en:'Kennen', name_ko:'케넨', picked: false},
        {id: 125, name_en:'Caitlyn', name_ko:'케이틀린', picked: false},
        {id: 126, name_en:'Kayn', name_ko:'케인', picked: false},
        {id: 127, name_en:'Kayle', name_ko:'케일', picked: false},
        {id: 128, name_en:'KogMaw', name_ko:'코그모', picked: false},
        {id: 129, name_en:'Corki', name_ko:'코르키', picked: false},
        {id: 130, name_en:'Quinn', name_ko:'퀸', picked: false},
        {id: 131, name_en:'Kled', name_ko:'클레드', picked: false},
        {id: 132, name_en:'Qiyana', name_ko:'키아나', picked: false},
        {id: 133, name_en:'Kindred', name_ko:'킨드레드', picked: false},
        {id: 134, name_en:'Taric', name_ko:'타릭', picked: false},
        {id: 135, name_en:'Talon', name_ko:'탈론', picked: false},
        {id: 136, name_en:'Taliyah', name_ko:'탈리야', picked: false},
        {id: 137, name_en:'TahmKench', name_ko:'탐 켄치', picked: false},
        {id: 138, name_en:'Trundle', name_ko:'트런들', picked: false},
        {id: 139, name_en:'Tristana', name_ko:'트리스타나', picked: false},
        {id: 140, name_en:'Tryndamere', name_ko:'트린다미어', picked: false},
        {id: 141, name_en:'TwistedFate', name_ko:'트위스티드 페이트', picked: false},
        {id: 142, name_en:'Twitch', name_ko:'트위치', picked: false},
        {id: 143, name_en:'Teemo', name_ko:'티모', picked: false},
        {id: 144, name_en:'Pyke', name_ko:'파이크', picked: false},
        {id: 145, name_en:'Pantheon', name_ko:'판테온', picked: false},
        {id: 146, name_en:'Fiddlesticks', name_ko:'피들스틱', picked: false},
        {id: 147, name_en:'Fiora', name_ko:'피오라', picked: false},
        {id: 148, name_en:'Fizz', name_ko:'피즈', picked: false},
        {id: 149, name_en:'Heimerdinger', name_ko:'하이머딩거', picked: false},
        {id: 150, name_en:'Hecarim', name_ko:'헤카림', picked: false}
      ]
    }
  }
  getChamp() {
    var i = 0 ;
    while(i < this.state.champions.length){
      var data = this.state.champions[i];
      if(data.name_en === this.state.selectedChamp){
        return data;
      }
      i = i + 1;
    }
  }
  render() {
    return (
      <div className="App">
        <div className="pick1">
        <PickFive
          champName={this.state.selectedChamp}
          url={this.squareURL}
          team={this.state.team}
          pickCount={this.state.pickCount}
        ></PickFive>
        </div>
        <ChampList 
          className="main"
          champions={this.state.champions}
          url={this.squareURL}
          team={this.state.team}
          champ = {this.getChamp()}
          selectChampion={function(name){
            var i = 0;
            while(i < this.state.champions.length){
              if(this.state.champions[i].name_en === name && this.state.champions[i].picked === false){
                this.setState({
                  selectedChamp:name,
                  pickCount:this.state.pickCount+1
                });
              }
              i = i + 1;
            }
            var champs = Array.from(this.state.champions);
            i = 0;
            while(i < champs.length){
              if(champs[i].name_en === name && this.state.pickCount < 10) {
                champs[i] = {id: this.state.champions[i].id, name_en: name, name_ko: this.state.champions[i].name_ko, picked: true};
                break;
              }
              i = i + 1;
            }
            this.setState({
              champions:champs
            });
          }.bind(this)}
        ></ChampList>;.
        <div className="pick2">
        <PickFive 
          champName={this.state.selectedChamp}
          url={this.squareURL}
          team={2}
          pickCount={this.state.pickCount}
        ></PickFive>
        </div>
      </div>
    );
  }
}

export default App;
