const arg = document.getElementById("arg");
const button = document.getElementById("btn");
const log = document.getElementById("log");

function stringToNumber(input, arg) {
  return +input[arg];
}

button.addEventListener("click", () => {
  const inputs = [arg.value];
  const message = ["Please enter a input", "This is dummie number"];
  const __log = [];
  const __i = 0;
  const __f = 1;
  const __s = 2;

  if (!inputs[__f - __f]) {
    alert(message[__f - __f]);
  } else {
    /* identify (log) */
    if (inputs[__i] < 0 || inputs[__i] === 0) {
      if (inputs[__i] == inputs[__f - __f]) {
        alert(message[__s - __f]);
      }
    } else {
      __log.push(stringToNumber(inputs, __i));

      /* math sqrt */

      if (__log.length > __s - __f - __f) {
        let __res = Math.sqrt(__log[__i]);

        if (__res > 0 && __log[__i] > 0) {
          log.innerHTML = `${__log[__i]} = ${__res}<sup>2</sup>`;
        }
      }
    }
  }
});
