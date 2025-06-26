function calcTashizan() {
    const leftInput = document.getElementById('left');
    const rightInput = document.getElementById('right');
  
    // 入力値を取得して整数に変換
    const left = parseInt(leftInput.value, 10);
    const right = parseInt(rightInput.value, 10);
  
    // 計算（NaN 対策もするとより良い）
    const sum = left + right;
  
    // 結果を表示
    const answerSpan = document.getElementById('answer');
    answerSpan.textContent = isNaN(sum) ? 'エラー' : sum;
  }
  
  // ボタンにイベントリスナーを設定
  const calcButton = document.getElementById('calc');
  calcButton.addEventListener('click', calcTashizan);
  