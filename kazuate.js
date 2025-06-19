// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 正解したかどうかを記録する変数
let seikai = false;

// 予想を4回実行する（将来削除）
hantei();
hantei();
hantei();
hantei();

function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = 4;

  // 回数をカウント
  kaisu++;

  // 予想回数と予想値を表示
  console.log(`${kaisu}回目の予想: ${yoso}`);

  // 回答回数が4回以上またはすでに正解していたら
  if (kaisu >= 4 || seikai) {
    console.log(`答えは ${kotae} でした．すでにゲームは終わっています`);
    return;
  }

  // 正解かどうかの判定
  if (yoso === kotae) {
    console.log("正解です．おめでとう!");
    seikai = true; // 正解フラグを立てる（以降のhanteiでは終了メッセージを出す）
  } else if (kaisu === 3) {
    console.log(`まちがい．残念でした答えは ${kotae} です．`);
  } else if (yoso < kotae) {
    console.log("まちがい．答えはもっと大きいですよ");
  } else {
    console.log("まちがい．答えはもっと小さいですよ");
  }
}
