document.addEventListener("DOMContentLoaded", function (event) {
  let birth = new Date("June 8, 2004 20:22:10");
  let todayDate = new Date();

  // Calcula la diferencia en milisegundos entre las dos fechas
  let differenceInMilliseconds = todayDate - birth;

  // Calcula el número aproximado de milisegundos en un año (365 días)
  const millisecondsInAYear = 31_536_000_000;

  // Calcula la diferencia en años redondeando el resultado
  let differenceInYears = Math.round(
    differenceInMilliseconds / millisecondsInAYear
  );

  // array with texts to type in typewriter
  var dataText = [
    "Arianna Vega",
    differenceInYears.toString() + " years old",
    "From Venezuela",
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector("h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      i = 0;
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
