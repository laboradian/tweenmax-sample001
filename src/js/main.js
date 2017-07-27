/* global $ TweenMax Bounce TimelineMax */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'babel-polyfill'

//import _ from 'lodash'

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

console.log('%c 🌈 Laboradian.com 🌈 %c http://laboradian.com ',
  'background: #2383BF; color: #fff; font-size: 1.4em;',
  'background: #e3e3e3; color: #000; margin-bottom: 1px; padding-top: 4px; padding-bottom: 1px;');

document.querySelector('#btn1').addEventListener('click', (/*e*/) => {

  // cw: '1', ccw: '2'
  const rd = $('input[name="rotateDirection1"]:checked').val();
  TweenMax.to('#box1', 2, {
    startAt: { rotation: 0 }, // 何度も実行するために必要
    left: 400,
    rotation: (rd === '1') ? '360_cw' : '360_ccw',
    ease: Bounce.easeOut
  });
});

document.querySelector('#btn2').addEventListener('click', (/*e*/) => {
  TweenMax.to('#box2', 1, {
    x: 500,
    opacity: 0,
    startAt: {
      x: 0,
      opacity: 1
    }, // 何度も実行するために必要
  });
});

document.querySelector('#btn3').addEventListener('click', (/*e*/) => {
  TweenMax.set('#box3', {
    x: 200,
    opacity: .5
  });
});

document.querySelector('#btn4').addEventListener('click', (/*e*/) => {
  TweenMax.from('#box4', 1, {
    x: 500
  });
});

document.querySelector('#btn5').addEventListener('click', (/*e*/) => {
  TweenMax.fromTo('#box5', 1, {
    width: '100%',
    x: 500
  }, {
    width: 100,
    x: 0
  });
});

document.querySelector('#btn6').addEventListener('click', (/*e*/) => {
  TweenMax.staggerTo(".box6", 1, {
    rotation: '+=360',
    x: '+=100'
  }, 0.5);
});

document.querySelector('#btn7').addEventListener('click', (/*e*/) => {
  const elm = document.querySelector('#box7');
  (new TimelineMax())
    .to(elm, 1, { x:  200, backgroundColor: 'black', opacity: .5 })
    .to(elm, 2, { y: -200, backgroundColor: 'blue',  opacity: 1  })
    .to(elm, 1, { x:    0, backgroundColor: 'red',   opacity: .5 })
    .to(elm, 2, { y:    0, backgroundColor: 'green', opacity: 1  });
});

