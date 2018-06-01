var args = process.argv.slice(2);
var n = parseInt(args[0]);
var e = parseFloat(args[1]);
var sum = 0.0;

for (var i=1; i<=n; i++) {
   sum = sum + Math.pow(i, e);
}

console.log(sum);