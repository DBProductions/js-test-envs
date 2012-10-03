var myTestDriven = {
	nmae: 'testdriven'
}

var num = 3 + 5;

function doSpecial() {
	var funcVar = 3;
	function innerFunc() {
		funcVar += 1;
	}
}

function doExtras() {
	var secondVar = 3;
}

function specialObject() {
	this.type = 'specialObj';
}

specialObject.prototype.getType = function getType() {
	return this.type;
}