let SPY= 320;
let counter;

function getStocks() {
  let x = setInterval(getChange, 1000);
}

function getChange() {
	var change = Math.round(Math.random() * (10050-9950) + 9950) / 10000;
	counter = Math.round(Math.random() * 15000);
	if (counter == 12002) {
		change = 1.2;
	}
	if (counter == 8056) {
		change = 0.8;
	}
	SPY = SPY * change;
	SPY = SPY.toFixed(2);
	console.log(counter);
	document.getElementById("SPY").innerHTML = SPY;
}

