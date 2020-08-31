import React, { Component } from 'react';

class ChampList extends Component {
  constructor(props){
    super(props);
    this.squareURL = 'http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/';
    this.state = {
      champions:[
        {name_en:'Garen', name_ko:'가렌'},
        {name_en:'Galio', name_ko:'갈리오'},
        {name_en:'Gangplank', name_ko:'갱플랭크'},
        {name_en:'Gragas', name_ko:'그라가스'},
        {name_en:'Graves', name_ko:'그레이브즈'},
        {name_en:'Gnar', name_ko:'나르'},
        {name_en:'Nami', name_ko:'나미'},
        {name_en:'Nasus', name_ko:'나서스'},
        {name_en:'Nautilus', name_ko:'노틸러스'},
        {name_en:'Nocturne', name_ko:'녹턴'},
        {name_en:'Nunu', name_ko:'누누와 윌럼프'},
        {name_en:'Nidalee', name_ko:'니달리'},
        {name_en:'Neeko', name_ko:'니코'},
        {name_en:'Darius', name_ko:'다리우스'},
        {name_en:'Diana', name_ko:'다이애나'},
        {name_en:'Draven', name_ko:'드레이븐'},
        {name_en:'Ryze', name_ko:'라이즈'},
        {name_en:'Rakan', name_ko:'라칸'},
        {name_en:'Rammus', name_ko:'람머스'},
        {name_en:'Lux', name_ko:'럭스'},
        {name_en:'Rumble', name_ko:'럼블'},
        {name_en:'Renekton', name_ko:'레넥톤'},
        {name_en:'Leona', name_ko:'레오나'},
        {name_en:'RekSai', name_ko:'렉사이'},
        {name_en:'Rengar', name_ko:'렝가'},
        {name_en:'Lucian', name_ko:'루시안'},
        {name_en:'Lulu', name_ko:'룰루'},
        {name_en:'Leblanc', name_ko:'르블랑'},
        {name_en:'LeeSin', name_ko:'리신'},
        {name_en:'Riven', name_ko:'리븐'},
        {name_en:'Lissandra', name_ko:'리산드라'},
        {name_en:'MasterYi', name_ko:'마스터 이'},
        {name_en:'Maokai', name_ko:'마오카이'},
        {name_en:'Malzahar', name_ko:'말자하'},
        {name_en:'Malphite', name_ko:'말파이트'},
        {name_en:'Mordekaiser', name_ko:'모데카이저'},
        {name_en:'Morgana', name_ko:'모르가나'},
        {name_en:'DrMundo', name_ko:'문도 박사'},
        {name_en:'MissFortune', name_ko:'미스 포츈'},
        {name_en:'Bard', name_ko:'바드'},
        {name_en:'Varus', name_ko:'바루스'},
        {name_en:'Vi', name_ko:'바이'},
        {name_en:'Veigar', name_ko:'베이가'},
        {name_en:'Vayne', name_ko:'베인'},
        {name_en:'Velkoz', name_ko:'벨코즈'},
        {name_en:'Volibear', name_ko:'볼리베어'},
        {name_en:'Braum', name_ko:'브라움'},
        {name_en:'Brand', name_ko:'브랜드'},
        {name_en:'Vladimir', name_ko:'블라디미르'},
        {name_en:'Blitzcrank', name_ko:'블리츠크랭크'},
        {name_en:'Viktor', name_ko:'빅토르'},
        {name_en:'Poppy', name_ko:'뽀삐'},
        {name_en:'Sion', name_ko:'사이온'},
        {name_en:'Sylas', name_ko:'사일러스'},
        {name_en:'Shaco', name_ko:'샤코'},
        {name_en:'Senna', name_ko:'세나'},
        {name_en:'Sejuani', name_ko:'세주아니'},
        {name_en:'Sett', name_ko:'세트'},
        {name_en:'Sona', name_ko:'소나'},
        {name_en:'Soraka', name_ko:'소라카'},
        {name_en:'Shen', name_ko:'쉔'},
        {name_en:'Shyvana', name_ko:'쉬바나'},
        {name_en:'Swain', name_ko:'스웨인'},
        {name_en:'Skarner', name_ko:'스카너'},
        {name_en:'Sivir', name_ko:'시비르'},
        {name_en:'XinZhao', name_ko:'신짜오'},
        {name_en:'Syndra', name_ko:'신드라'},
        {name_en:'Singed', name_ko:'신지드'},
        {name_en:'Thresh', name_ko:'쓰레쉬'},
        {name_en:'Ahri', name_ko:'아리'},
        {name_en:'Amumu', name_ko:'아무무'},
        {name_en:'AurelionSol', name_ko:'아우렐리온 솔'},
        {name_en:'Ivern', name_ko:'아이번'},
        {name_en:'Azir', name_ko:'아지르'},
        {name_en:'Akali', name_ko:'아칼리'},
        {name_en:'Aatrox', name_ko:'아트록스'},
        {name_en:'Aphelios', name_ko:'아펠리오스'},
        {name_en:'Alistar', name_ko:'알리스타'},
        {name_en:'Annie', name_ko:'애니'},
        {name_en:'Anivia', name_ko:'애니비아'},
        {name_en:'Ashe', name_ko:'애쉬'},
        {name_en:'Yasuo', name_ko:'야스오'},
        {name_en:'Ekko', name_ko:'에코'},
        {name_en:'Elise', name_ko:'엘리스'},
        {name_en:'MonkeyKing', name_ko:'오공'},
        {name_en:'Ornn', name_ko:'오른'},
        {name_en:'Orianna', name_ko:'오리아나'},
        {name_en:'Olaf', name_ko:'올라프'},
        {name_en:'Yorick', name_ko:'요릭'},
        {name_en:'Udyr', name_ko:'우디르'},
        {name_en:'Urgot', name_ko:'우르곳'},
        {name_en:'Warwick', name_ko:'워윅'},
        {name_en:'Yuumi', name_ko:'유미'},
        {name_en:'Irelia', name_ko:'이렐리아'},
        {name_en:'Evelynn', name_ko:'이블린'},
        {name_en:'Ezreal', name_ko:'이즈리얼'},
        {name_en:'Illaoi', name_ko:'일라오이'},
        {name_en:'JarvanIV', name_ko:'자르반 4세'},
        {name_en:'Xayah', name_ko:'자야'},
        {name_en:'Zyra', name_ko:'자이라'},
        {name_en:'Zac', name_ko:'자크'},
        {name_en:'Janna', name_ko:'잔나'},
        {name_en:'Jax', name_ko:'잭스'},
        {name_en:'Zed', name_ko:'제드'},
        {name_en:'Xerath', name_ko:'제라스'},
        {name_en:'Jayce', name_ko:'제이스'},
        {name_en:'Zoe', name_ko:'조이'},
        {name_en:'Ziggs', name_ko:'직스'},
        {name_en:'Jhin', name_ko:'진'},
        {name_en:'Zilean', name_ko:'질리언'},
        {name_en:'Jinx', name_ko:'징크스'},
        {name_en:'Chogath', name_ko:'초가스'},
        {name_en:'Karma', name_ko:'카르마'},
        {name_en:'Camille', name_ko:'카밀'},
        {name_en:'Kassadin', name_ko:'카사딘'},
        {name_en:'Karthus', name_ko:'카서스'},
        {name_en:'Cassiopeia', name_ko:'카시오페아'},
        {name_en:'Kaisa', name_ko:'카이사'},
        {name_en:'Khazix', name_ko:'카직스'},
        {name_en:'Katarina', name_ko:'카타리나'},
        {name_en:'Kalista', name_ko:'칼리스타'},
        {name_en:'Kennen', name_ko:'케넨'},
        {name_en:'Caitlyn', name_ko:'케이틀린'},
        {name_en:'Kayn', name_ko:'케인'},
        {name_en:'Kayle', name_ko:'케일'},
        {name_en:'KogMaw', name_ko:'코그모'},
        {name_en:'Corki', name_ko:'코르키'},
        {name_en:'Quinn', name_ko:'퀸'},
        {name_en:'Kled', name_ko:'클레드'},
        {name_en:'Qiyana', name_ko:'키아나'},
        {name_en:'Kindred', name_ko:'킨드레드'},
        {name_en:'Taric', name_ko:'타릭'},
        {name_en:'Talon', name_ko:'탈론'},
        {name_en:'Taliyah', name_ko:'탈리야'},
        {name_en:'TahmKench', name_ko:'탐 켄치'},
        {name_en:'Trundle', name_ko:'트런들'},
        {name_en:'Tristana', name_ko:'트리스타나'},
        {name_en:'Tryndamere', name_ko:'트린다미어'},
        {name_en:'TwistedFate', name_ko:'트위스티드 페이트'},
        {name_en:'Twitch', name_ko:'트위치'},
        {name_en:'Teemo', name_ko:'티모'},
        {name_en:'Pyke', name_ko:'파이크'},
        {name_en:'Pantheon', name_ko:'판테온'},
        {name_en:'Fiddlesticks', name_ko:'피들스틱'},
        {name_en:'Fiora', name_ko:'피오라'},
        {name_en:'Fizz', name_ko:'피즈'},
        {name_en:'Heimerdinger', name_ko:'하이머딩거'},
        {name_en:'Hecarim', name_ko:'헤카림'}
      ]
    }
  }
  view() {
    
  }
  render() {
    var list = [];
    var i=0;
    const divStyle = {
      width: '490px',
      height: '490px',
      overflow: 'hidden',
      border: '1px solid black'
    }
    const scrollStyle = {
      overflowY: 'scroll',
      width: '560px',
      height: '500px',
      margin: 'auto'
    }
    const imgStyle = {
      width: '50px',
      height: '50px',
      margin: '10px'
    };

    while(i < this.state.champions.length){
      list.push(
        <img 
          src={this.squareURL + this.state.champions[i].name_en + '.png'} 
          alt={this.state.champions[i].name_en}
          style={imgStyle}
          align='left'
        ></img>
      );
      i=i+1;
    }

    return (
      <div class='view' style={divStyle}>
        <div class='scrollBox' style={scrollStyle}>
          {list}
        </div>
      </div>
    );
  }
}

export default ChampList;