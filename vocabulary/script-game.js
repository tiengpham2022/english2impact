'use strict';

/*

 */
//data correct
const correct = ['Correct!', 'Congratulation!', 'Exactly!', 'Perfect!'];
const wrong = ['Wrong!', 'Sai rồi!', 'Làm lại đi!', 'Nghe lại đi!'];

//data choose-cours
const chooseCours = ['bai1', 'bai2', 'bai3'];

//data mp3

const dataMp3s = {
  w1: 'http://docs.google.com/uc?export=open&id=1Tkf7Fh6sMhAtMxG7fRpIch7sk23haDL9',
  w2: 'http://docs.google.com/uc?export=open&id=1Tnr9bf9Y0nLFTR0wNHrIhwSRP1ZcRbnN',
  w3: 'http://docs.google.com/uc?export=open&id=1TlxrHz_bzjGMz37C652Su_GYdM8yYHpD',
  w4: 'http://docs.google.com/uc?export=open&id=1TiqCSYljVQNkK_11RHFNPf5dxl60dSBq',
  w5: 'http://docs.google.com/uc?export=open&id=1TPpPEpGb8Rvoj0fNHFsbVfUs2LhsQMLM',
  w6: 'http://docs.google.com/uc?export=open&id=1Tcp_Ci_X-Nv8A517IhT-qajQBSJxZt24',
  w7: 'http://docs.google.com/uc?export=open&id=1TliaVbNsIFgUfBWrY7i_THjsX4OvcclL',
  w8: 'http://docs.google.com/uc?export=open&id=1TiRxL8FxPBFIplqLFi6ETZn_F6Vb1AJ0',
  w9: 'http://docs.google.com/uc?export=open&id=1TVRpuui0Rws9BAW6MyiU6VP1qOlLj7jf',
  w10: 'http://docs.google.com/uc?export=open&id=1TX2Ij8k6rM_gL-TfQa5_WSPDVEJ4v8SP',
  w11: 'http://docs.google.com/uc?export=open&id=1TixdUQDk8oRErpbnYlPal84_XVvIRh24',
  w12: 'http://docs.google.com/uc?export=open&id=1TSduIPZQbrz5DP6XEFRtfsGyMRxzMAd0',
  w13: 'http://docs.google.com/uc?export=open&id=1Ta9mp-qjN5pIpf6rUHx4BMdWs7si_pGo',
  w14: 'http://docs.google.com/uc?export=open&id=1TbMJDqUnx9wZqtj15MB39lhVsU7fflLE',
  w15: 'http://docs.google.com/uc?export=open&id=1TRh0edKqRamOb7Dv3mPQZAE_A_3fRxIQ',
  w16: 'http://docs.google.com/uc?export=open&id=1TUxaEu2JjfiF_pv-bTRfM9NaZKjOID6L',
  w17: 'http://docs.google.com/uc?export=open&id=1TgMBre8PMaHZWmz3Rtf4Y3mwkJ-Sb-gu',
  w18: 'http://docs.google.com/uc?export=open&id=1TRLrNPkiQSYbGo4C6RfwpsFsIib3HzXs',
  w19: 'http://docs.google.com/uc?export=open&id=1TkT3-1_UA2dCf7OV_cx2UipUUWnCdFWA',
  w20: 'http://docs.google.com/uc?export=open&id=1TpTLMmiAY274hz1hEKsODQ87XE_mom8h',
};
//data question
const dataWords = {
  w1: 'Aaron often preached about living an honest life',
  w2: 'Brad was filled with satisfaction when he saw what was for dinner',
  w3: 'Canada is divided into several different provinces',
  w4: 'Derek is very modest for someone who is so rich',
  w5: 'Difficulty arose with his computer because it was old',
  w6: 'Even though Bob is the smartest boy in his class, he is humble',
  w7: "Frank's new business finally prospered after many years o f hard work",
  w8: 'He used a ladder to climb to the top o f his tree house',
  w9: 'Her boss compensated her for the extra work she did last week',
  w10: 'I encountered the sea turtle when I was swimming',
  w11: 'Kevin and Alice occupied the chairs and had a long discussion',
  w12: 'My sister was charitable enough to help me buy my first house',
  w13: 'Since I exceeded my limit, I decided to get rid of my credit cards',
  w14: 'Stacy and Heather forged their friendship when they were teenagers',
  w15: 'The blacksmith pounded the piece of metal until it was flat',
  w16: 'The cat was on the roof sitting next to the chimney',
  w17: 'The horse had shoes made o f iron',
  w18: 'The student benefactor gave him money to spend on his studies',
  w19: 'U.S. President Abraham Lincoln is on the penny',
  w20: 'Wind power is a clean way to sustain a city with energy',
};
let option;
let question;
document.querySelector('.select').addEventListener('click', function () {
  document.querySelector('.ready').textContent =
    'Bộ từ vựng của bạn đã sẵn sàng';
  option = document.getElementById('chooseCours').value;
  let minCrit = chooseCours.indexOf(option) * 20 + 0;
  let maxCrit = chooseCours.indexOf(option) * 20 + 20;
  let stt = minCrit;
  let sttPrev = minCrit;
  let x;
  document.querySelector('.nextword').addEventListener('click', function () {
    document.querySelector('.game-mp3').textContent = '';
    document.querySelector('.question').textContent = '???';
    //next button
    //lặp lại nếu click đến cuối data
    if (stt < maxCrit) {
      stt++;
    } else {
      stt -= 20;
      stt++;
    }
    //thêm thẻ mp3
    x = document.createElement('AUDIO');
    x.setAttribute('src', dataMp3s[`w${stt}`]);

    x.setAttribute('controls', '');
    document.querySelector('.game-mp3').appendChild(x);

    question = dataWords[`w${stt}`];
    console.log(question);
  });

  //prev button
  document.querySelector('.prevword').addEventListener('click', function () {
    document.querySelector('.game-mp3').textContent = '';
    document.querySelector('.question').textContent = '???';
    //next button
    //lặp lại nếu click đến cuối data
    if (stt > minCrit + 1) {
      stt--;
    } else {
      stt += 20;
      stt--;
    }

    //thêm thẻ mp3
    x = document.createElement('AUDIO');
    x.setAttribute('src', dataMp3s[`w${stt}`]);

    x.setAttribute('controls', '');
    document.querySelector('.game-mp3').appendChild(x);

    question = dataWords[`w${stt}`];
    console.log(question);
  });

  document.querySelector('.check').addEventListener('click', function () {
    let guess = document.querySelector('.guess').value;
    if (!guess) {
      document.querySelector('.message').textContent = 'điền vào đi!';
    } else if (guess === question) {
      //lấy ngẫu nhiên correct
      let randomnumber = Math.trunc(Math.random() * correct.length);
      document.querySelector('.message').textContent = correct[randomnumber];
    } else {
      let randomnumber = Math.trunc(Math.random() * wrong.length);
      document.querySelector('.message').textContent = wrong[randomnumber];
    }
  });
  document.querySelector('.hide').addEventListener('click', function () {
    document.querySelector('.question').textContent = question;
    console.log(question);
  });
});
