// Once you notice there is something wrong with your program because it mis-
// behaves or produces errors, the next step is to figure out what the problem
// is

function numberToString(n, base = 10) {
  let result = "",
    sign = "";

  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    debugger
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}

console.log(numberToString(13, 10));

// Not all problems can be prevented by the programmer, unfortunately. If your
// program communicates with the outside world in any way, it is possible to get
// malformed input,