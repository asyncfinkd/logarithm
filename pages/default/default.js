const button = document.getElementById("btn");
const arg = document.getElementById("arg");
const ind = document.getElementById("ind");
const stem = document.getElementById("stem");
const log = document.getElementById("log");

function stringToNumber(input, arg) {
  return +input[arg];
}

button.addEventListener("click", () => {
  const message = [
    "Please enter a inputs",
    "This is dummie number",
    "incorrect",
  ];
  const __log = [];
  const __i = 0;
  const __f = 1;
  const __s = 2;
  const inputs = [stem.value, arg.value, ind.value];
  if (!inputs[__i] || !inputs[__s - __f] || !inputs[__s]) {
    alert(message[__i]);
  } else {
    /* identify */

    if (inputs[__i] < 0 || inputs[__s - __f] < 0 || inputs[__s] < 0) {
      if (__s - __f == __s - __f) {
        alert(message[__s - __f]);
      }
    } else {
      /* 1 = stem; 2 = argument; 3 = indicator */
      __log.push(
        stringToNumber(inputs, __i),
        stringToNumber(inputs, __s - __f),
        stringToNumber(inputs, __s)
      );

      /* Math.pow (method) */

      if (__log.length > __s - __f + __f) {
        let __res = Math.pow(inputs[__i], inputs[__s]);

        if (inputs[__s - __f] == __res) {
          log.innerHTML = `log<sub>${stem.value}</sub>(${arg.value}) = ${__res}`;
        } else {
          alert(message[__s - __f + __f]);
          log.innerHTML = "";
        }
      }
    }
  }
});
