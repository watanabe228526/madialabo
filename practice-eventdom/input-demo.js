function greeting() {
    const i = document.querySelector('input[name="shimei"]'); // 入力ボックス取得
    const shimei = i.value;                                   // 入力された名前
    const aisatsu = "こんにちは、" + shimei + "さん";         // 挨拶文を作成
    const p = document.getElementById("message");             // p要素を取得
    p.textContent = aisatsu;                                  // 挨拶文を表示
  }
  
  const b = document.querySelector('button#print');           // ボタンを取得
  b.addEventListener('click', greeting);                      // クリック時にgreeting実行
  