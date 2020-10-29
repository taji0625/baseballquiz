'use strict';

const question = document.getElementById('question');
const choices = document.getElementById('choices');
const btn = document.getElementById('btn');
const result  = document.getElementById('result');
const scoreLabel = document.querySelector('#result > p');
const warning = document.getElementById('warning');

const choice = [
  {name:'松井秀喜', img: "image/matsui.jpg"},
  {name:'大谷翔平', img: "image/ohtani.jpg"},
  {name:'佐々木主浩', img: "image/sasaki.jpg"},
  {name:'イチロー', img: "image/ichiro.jpg"},
  {name:'柳田悠岐', img: "image/yanagita.jpg"},
   {name:'坂本勇人', img: "image/sakamoto.jpg"},
  {name:'山田哲人', img: "image/yamada.jpg"},
  {name:'鈴木誠也', img: "image/suzuki.jpg"},
  {name:'中田翔', img: "image/nakata.jpg"},
  {name:'田中将大', img: "image/tanaka_rakuten.jpg"},
  {name:'秋山翔吾', img: "image/akiyama.jpg"},
  {name:'前田健太', img: "image/maeda.jpg"},
  {name:'清原和博', img: "image/kiyoharakazuhiro.jpg"},
  {name:'金本知憲', img: "image/kanemoto.jpg"},
  {name:'落合博満', img: "image/ochiai.jpg"},
  {name:'中村剛也', img: "image/nakamura.jpg"},
  {name:'鳥谷敬', img: "image/toritani.jpg"},
  {name:'糸井嘉男', img: "image/itoi.jpg"},
  {name:'青木宣親', img: "image/aoki.jpg"},
  {name:'丸佳浩', img: "image/maru.jpg"},
  {name:'マイク・トラウト', img: "image/trout.jpg"},
  {name:'ジャスティン・バーランダー', img: "image/verlander.jpg"},
  {name:'コディ・ベリンジャー', img: "image/berinja.jpg"},
  {name:'クレイトン・カーショー', img: "image/kershow.jpg"},
  {name:'田中将大', img: "image/tanaka.jpeg"},
  {name:'ダルビッシュ有', img: "image/darvish.jpg"},
  {name:'岩隈久志', img: "image/iwakuma.jpg"},
  {name:'松坂大輔', img: "image/matsuzaka.jpg"},
  {name:'ダルビッシュ有', img: "image/darvish.jpg"},
  {name:'田中将大', img: "image/tanaka.jpg"},
  {name:'菅野智之', img: "image/sugano.jpg"},
  {name:'斉藤和己', img: "image/saitou.jpg"},
  {name:'イチロー', img: "image/ichiro2.jpg"},
  {name:'大谷翔平', img: "image/ohtani_bat.jpg"},
  {name:'福留孝介', img: "image/fukudome.jpg"},
  {name:'松井稼頭央', img: "image/matsuikazuo.jpg"},
  {name:'ローズ', img: "image/rozu.jpg"},
  {name:'カブレラ', img: "image/cubrera.jpg"},
  {name:'ラミレス', img: "image/ramirez.jpg"},
  {name:'バレンティン', img: "image/varentin.jpg"},
];

const quizSet = shuffle([
  {q: 'MLBで新人王をとっていないのは？', c: [choice[0], choice[1], choice[2], choice[3]]},
  {q: 'この中で最も年俸が高いのは？', c: [choice[4], choice[5], choice[6], choice[7]]},
  {q: '一人だけ学年が違うのは？', c: [choice[8], choice[9], choice[10], choice[11]]},
  {q: 'この中で通算ホームラン数が最も多いのは？', c: [choice[12], choice[13], choice[14], choice[15]]},
  {q: '盗塁王を取ったことがないのは？', c: [choice[16], choice[17], choice[18], choice[19]]},
  {q: 'MLBで最も年俸が高いのは？', c: [choice[20], choice[21], choice[22], choice[23]]},
  {q: '現在、通算勝利数が最も多いのは？', c: [choice[24], choice[25], choice[26], choice[27]]},
  {q: '沢村賞を１回しか取ったことがないのは？', c: [choice[28], choice[29], choice[30], choice[31]]},
  {q: 'サイクルヒットを達成したことがないのは？', c: [choice[32], choice[33], choice[34], choice[35]]},
  {q: 'この中で通算ホームラン数が最も多いのは？', c: [choice[36], choice[37], choice[38], choice[39]]},
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
