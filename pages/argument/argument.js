const button = document.getElementById("btn");
const ind = document.getElementById("ind");
const stem = document.getElementById("stem");
const log = document.getElementById("log");
const log2 = document.getElementById("log2");

function stringToNumber(input, arg) {
  return +input[arg];
}

button.addEventListener("click", () => {
  const message = ["Please enter a inputs", "this is dummie number"];
  const __log = [];
  const __i = 0;
  const __f = 1;
  const __s = 2;
  const inputs = [stem.value, ind.value];
  if (!inputs[__i] || !inputs[__s - __f]) {
    alert(message[__i]);
  } else {
    /* identify numbers */

    if (inputs[__i] < 0 || inputs[__s - __f] < 0) {
      if (__s - __f == __s - __f) {
        alert(message[__s - __f]);
      }
    } else {
      /* 1 = stem; 2 = indicator */
      __log.push(
        stringToNumber(inputs, __i),
        stringToNumber(inputs, __s - __f)
      );

      /* Math pow (method) */

      if (__log.length > __s - __f) {
        let __res = Math.pow(inputs[__i], inputs[__f]);
        if (inputs[__s - __f] != __res) {
          log.innerHTML = `log<sub>${stem.value}</sub>(${__res}) = ${ind.value}`;
          log2.innerHTML = `${__res}`;
        }
      }
    }
  }
  console.log(__log);
});
