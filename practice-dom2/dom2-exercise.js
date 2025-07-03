//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
  };
  
  let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
  ];
  
  //////////////// ここから下にプログラムを書きたそう!
  function show() {
	const addrH2 = document.querySelector('h2#addr');
	const addrP = document.createElement('p');
	addrP.textContent = campus.address; 
	addrH2.after(addrP);
  
	const deptH2 = document.querySelector('h2#dept');
	const ul = document.createElement('ul');
	for (const item of gakka) {
	  const li = document.createElement('li');
	  li.textContent = item.name;
	  ul.appendChild(li);
	}
	deptH2.after(ul);
  }
  
  document.querySelector('button#show').addEventListener('click', show);
  