let SPY= 320;
let counter;
//need to make these arrays dynamic to update with last known price?
var stocks = ["SPY", "TSLA", "SNAP"]
var dollars = ["320", "650", "42"]

function getStocks() {
  let x = setInterval(getChange, 2000);
}

function getChange() {
	for (i = 0; i < stocks.length; i++) {
	price = dollars[i]
	name = stocks[i]
	var change = Math.round(Math.random() * (100500-99500) + 99500) / 100000;
	counter = Math.round(Math.random() * 15000);
	if (counter == 12002) {
		change = 1.12;
	}
	if (counter == 8056) {
		change = 0.88;
	}
	price = price * change;
	price = price.toFixed(2);
	document.getElementById(name).innerHTML = price; //
	}
}


/*
let SPY= 320;
let counter;
var stocks = ["SPY", "TSLA", "SNAP"]

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
	document.getElementById("SPY").innerHTML = SPY; //
}

*/
