var args = process.argv.slice(2);
var n = args[0];
var e = args[1];
var sum = 0.0;
for (i=1; i<=n; i++) {
   sum = sum + Math.pow(i, e);
}
console.log(sum);