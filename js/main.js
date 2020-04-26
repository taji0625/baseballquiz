'use strict';

const question = document.getElementById('question');
const choices = document.getElementById('choices');
const btn = document.getElementById('btn');
const result  = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p');
const warning = document.getElementById('warning');

const choice = [
  {name:'松井秀喜', img: "https://image.news.livedoor.com/newsimage/stf/b/3/b3400_1397_76181281_7d0010c9.jpg"},
  {name:'大谷翔平', img: "https://the-ans.info/wp-content/uploads/2020/04/20200409_ohtani_gc2-650x433.jpg"},
  {name:'佐々木主浩', img: "https://fuya.site/wp-content/uploads/2019/06/628x474.jpg"},
  {name:'イチロー', img: "https://smile-cathand.com/fwp422/wp-content/uploads/2016/06/20151213_ichiro-560x3711.jpg"},
  {name:'柳田悠岐', img: "https://www.jiji.com/news/handmade/special/feature/v4/photos/201812yanagita/1812yanagita-jpp028744903_310.jpg"},
   {name:'坂本勇人', img: "https://www.nikkansports.com/baseball/news/img/201905080001027-w500_0.jpg"},
  {name:'山田哲人', img: "https://sportiva.shueisha.co.jp/clm/baseball/npb/2020/assets_c/2020/01/ed22e769062c83ea77b2923228e241e3a2810b44-thumb-800xauto-228364.jpg"},
  {name:'鈴木誠也', img: "https://www.zakzak.co.jp/images/news/190927/bas1909270003-p1.jpg"},
  {name:'中田翔', img: "https://i.daily.jp/baseball/2019/07/08/Images/d_12497480.jpg"},
  {name:'田中将大', img: "https://news.jsports.co.jp/image/gw?id=10825"},
  {name:'秋山翔吾', img: "https://www.jiji.com/news/handmade/special/feature/v4/photos/201912akiyama/1912aki-jpp031827529_310.jpg"},
  {name:'前田健太', img: "https://news.jsports.co.jp/image/gw?id=11380"},
  {name:'清原和博', img: "https://amd.c.yimg.jp/amd/20200424-00000003-baseballo-000-8-view.jpg"},
  {name:'金本知憲', img: "https://cdn.images-dot.com/S2000/upload/2012092601829_1.jpg"},
  {name:'落合博満', img: "https://www.benkan.co.jp/wp/wp-content/uploads/2019/11/c9e582a6f26dea0b190ec5d83d97059e.jpg"},
  {name:'中村剛也', img: "https://hochi.news/images/2019/07/19/20190719-OHT1I50216-T.jpg"},
  {name:'鳥谷敬', img: "https://www.asahicom.jp/articles/images/AS20190830002762_comm.jpg"},
  {name:'糸井嘉男', img: "https://column.sp.baseball.findfriends.jp/show_img.php?id=11254&contents_id=p_page_016"},
  {name:'青木宣親', img: "https://i.daily.jp/opinion-d/2018/09/27/Images/d_11681249.jpg"},
  {name:'丸佳浩', img: "https://baseballking.jp/wp-content/uploads/2019/03/GettyImages-1136391902-770x514.jpg"},
  {name:'マイク・トラウト', img: "https://stat.ameba.jp/user_images/20190201/07/kenrickxyz/6e/cb/j/o0460066614348477903.jpg?caw=800"},
  {name:'ジャスティン・バーランダー', img: "https://saitomo0908.com/wp-content/uploads/2018/09/justin-verlander.jpg"},
  {name:'コディ・ベリンジャー', img: "https://image.alba.co.jp/common/images/common/img/cont/l/1200x1200/flexible/2019070915325434635.jpg"},
  {name:'クレイトン・カーショー', img: "https://www.baseballchannel.jp/wp-content/uploads/456865442.jpg"},
  {name:'田中将大', img: "https://sportiva.shueisha.co.jp/clm/baseball/mlb/2017/images/TanakaMasahiro20171013.jpg"},
  {name:'ダルビッシュ有', img: "https://baseballking.jp/wp-content/uploads/2019/04/get20190405_2-770x513.jpg"},
  {name:'岩隈久志', img: "https://sportiva.shueisha.co.jp/clm/baseball/mlb/2014/assets_c/2014/08/Iwakuma140825-thumb-500x387-79908.jpg"},
  {name:'松坂大輔', img: "https://hochi.news/images/2019/10/05/20191005-OHT1I50009-L.jpg"},
  {name:'ダルビッシュ有', img: "https://nanj-short.up.seesaa.net/image/_nanj_short_imgs_1_c_1c994437.jpg"},
  {name:'田中将大', img: "https://www.jiji.com/news/handmade/topic/d4_spo/tma011-jpp016006945.jpg"},
  {name:'菅野智之', img: "https://www.sankei.com/images/news/180602/spo1806020002-p1.jpg"},
  {name:'斉藤和己', img: "https://retro-mo.com/wp-content/uploads/2018/10/__%E6%96%89%E8%97%A4%E5%92%8C%E5%B7%B3-e1539149107432-1024x783.jpg"},
  {name:'イチロー', img: "https://baseballgate.jp/admin/wp-content/uploads/2016/12/04163005/20161203_ichiro-1.jpg"},
  {name:'大谷翔平', img: "https://jp-baseballgeeks.s3.dualstack.ap-northeast-1.amazonaws.com/wp-content/uploads/2018/07/4067d850ec1bbdc8443dc2d83782c156-e1563340191190.jpg"},
  {name:'福留孝介', img: "https://img.topics.smt.news.goo.ne.jp/picture/baseballonline/m_baseballonline-015-20181112-10.jpg"},
  {name:'松井稼頭央', img: "https://cdn.mainichi.jp/vol1/2018/10/03/20181003hpj00m050014000q/9.jpg?1"},
  {name:'ローズ', img: "https://column.sp.baseball.findfriends.jp/show_img.php?id=64472&contents_id=p_page_001"},
  {name:'カブレラ', img: "https://celeby-media.net/file/parts/I0001045/ed6a329bb8e7d412c2b0545750a9bf64.jpg"},
  {name:'ラミレス', img: "https://livedoor.sp.blogimg.jp/baynewsflash/imgs/a/9/a95b7f3d.jpg"},
  {name:'バレンティン', img: "https://baseballking.jp/wp-content/uploads/2017/08/ac3cb76b6b2a3a96bbb3569b7e0b6d9b.jpg"},
];

const quizSet = shuffle([
  {q: 'MLBで新人王をとっていないのは？', c: [choice[0], choice[1], choice[2], choice[3]]},
  {q: 'この中で最も年俸が高いのは？', c: [choice[4], choice[5], choice[6], choice[7]]},
  {q: '一人だけ学年が違うのは？', c: [choice[8], choice[9], choice[10], choice[11]]},
  {q: '通算ホームラン数で最も多いのは？', c: [choice[12], choice[13], choice[14], choice[15]]},
  {q: '盗塁王を取ったことがないのは？', c: [choice[16], choice[17], choice[18], choice[19]]},
  {q: 'MLBで最も年俸が高いのは？', c: [choice[20], choice[21], choice[22], choice[23]]},
  {q: '現在、通算勝利数が最も多いは？', c: [choice[24], choice[25], choice[26], choice[27]]},
  {q: '沢村賞を１回しか取ったがないのは？', c: [choice[28], choice[29], choice[30], choice[31]]},
  {q: 'サイクルヒットを達成したことがないのは？', c: [choice[32], choice[33], choice[34], choice[35]]},
  {q: '通算ホームラン数で最も多いのは？', c: [choice[36], choice[37], choice[38], choice[39]]},
]);

let currentNum = 0;
let isAnswerd;
let score = 0;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i +1));
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
};
 
function cheakAnswer(li) {
  if(isAnswerd === true) {
    return;
  }
  isAnswerd = true;

  if (li.textContent === quizSet[currentNum].c[0].name) {
    console.log('正解！！');
    li.classList.add('correct');
    score++;
  } else {
    console.log('不正解！！');
    li.classList.add('wrong');
  }
  btn.classList.remove('disabled');
};

function setQuiz() {
  isAnswerd = false;
  question.textContent = quizSet[currentNum].q;

  while(choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }


  const shuffledChoices = shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    li.textContent = choice.name;
    img.src = choice.img;
    img.addEventListener('click', () => {
      cheakAnswer(li);
      img.classList.add('active');
    });
    choices.appendChild(li);
    li.appendChild(img);
  });

  if (currentNum === quizSet.length - 1) {
    btn.textContent = 'スコアを見る';
  }
};

setQuiz();


btn.addEventListener('click', ()=> {
  if (btn.classList.contains('disabled')) {
    return;
  }
  btn.classList.add('disabled');

  if (currentNum === quizSet.length - 1) {
    scoreLabel.textContent = `スコア: ${score} / ${quizSet.length}`;
    result.classList.remove('hide');
  } else {
    currentNum++;
    setQuiz();
  }
});
