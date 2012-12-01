var JSC = require('./jscheck').JSC;

JSC.on_report(function(report) {
    console.log(report);
});

JSC.on_fail(function(report) {
    console.log('fail', report.name, report.args);
});
		
function testFunc(a, b, c) {
    return a + b <= c;
}
		
JSC.test('Test Case', function (verdict, a, b, c) {
    return verdict(testFunc(a, b, c));
},[JSC.integer(1, 10), JSC.integer(1, 10), 10]);
