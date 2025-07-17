
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("都市名: " + data.name);
  console.log("緯度: " + data.coord.lat);
  console.log("経度: " + data.coord.lon);
  console.log("天気: " + data.weather[0].description);
  console.log("最低気温: " + data.main.temp_min + "℃");
  console.log("最高気温: " + data.main.temp_max + "℃");
  console.log("湿度: " + data.main.humidity + "%");
  console.log("風速: " + data.wind.speed + " m/s");
  console.log("風向: " + data.wind.deg + "°");
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const resultDiv = document.createElement('div');
  resultDiv.id = 'result'; 
  document.body.appendChild(resultDiv);

  const p1 = document.createElement('p');
  p1.textContent = "都市名: " + data.name;
  resultDiv.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = "緯度: " + data.coord.lat;
  resultDiv.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = "経度: " + data.coord.lon;
  resultDiv.appendChild(p3);

  const p4 = document.createElement('p');
  p4.textContent = "天気: " + data.weather[0].description;
  resultDiv.appendChild(p4);

  const p5 = document.createElement('p');
  p5.textContent = "最低気温: " + data.main.temp_min + "℃";
  resultDiv.appendChild(p5);

  const p6 = document.createElement('p');
  p6.textContent = "最高気温: " + data.main.temp_max + "℃";
  resultDiv.appendChild(p6);

  const p7 = document.createElement('p');
  p7.textContent = "湿度: " + data.main.humidity + "%";
  resultDiv.appendChild(p7);

  const p8 = document.createElement('p');
  p8.textContent = "風速: " + data.wind.speed + " m/s";
  resultDiv.appendChild(p8);

  const p9 = document.createElement('p');
  p9.textContent = "風向: " + data.wind.deg + "°";
  resultDiv.appendChild(p9);
}


// 課題6-1 のイベントハンドラ登録処理は以下に記述
document.getElementById('print').addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  const oldResults = document.querySelectorAll('#result');
  oldResults.forEach(el => el.remove());

  const checked = document.querySelectorAll('.map-container input[type="checkbox"]:checked');
  const selectedIDs = Array.from(checked).map(cb => cb.value);

  selectedIDs.forEach(id => {
  const url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${id}.json`;
  fetch(url)
      .then(response => response.json())
      .then(showResult)
      .catch(showError)
      .finally(finish);
  });
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data;
  if (typeof resp === "string") {
    data = JSON.parse(resp);
  } else {
    data = resp;
  }

  print(data);     
  printDom(data);  

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

