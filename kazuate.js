let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え(デバッグ用): ' + kotae);

let kaisu = 0;
let isGameOver = false; // ゲームが終了したかどうか

let s = document.querySelector('button#print');
s.addEventListener('click', hantei);

function hantei() {
  kaisu++;

  // ユーザーの入力を取得
  let yoso = Math.floor(document.querySelector('input[name="seisu"]').value);

  // 回数と予想を表示
  let x = document.querySelector('p#result');
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  let z = document.querySelector('span#kaisu');
  z.textContent = kaisu;

  console.log(kaisu + '回目の予想 ' + yoso);

  if (isGameOver) {
    x.textContent = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    return;
  }

  if (kotae === yoso) {
    x.textContent = '正解です．おめでとう!';
    isGameOver = true;
  } else {
    if (kaisu === 3) {
      x.textContent = 'まちがい．残念でした答えは ' + kotae + ' です．';
      isGameOver = true;
    } else if (kotae > yoso) {
      x.textContent = 'まちがい．答えはもっと大きいですよ';
    } else {
      x.textContent = 'まちがい．答えはもっと小さいですよ';
    }
  }
}
