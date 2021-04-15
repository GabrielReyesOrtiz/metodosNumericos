function interpolacion() {
  // num1, num2 variables will manipulate the values entered by the user
  let x = parseFloat(document.getElementById("numberX").value);
  let xcero = parseFloat(document.getElementById("numberXcero").value);
  let xuno = parseFloat(document.getElementById("numberXuno").value);
  let fx0 = parseFloat(document.getElementById("numberFx0").value);
  let fx1 = parseFloat(document.getElementById("numberFx1").value);
  let xdos = parseFloat(document.getElementById("numberXdos").value);
  let fx2 = parseFloat(document.getElementById("numberFx2").value);
  // Let's define what type of operation we have to do
  let operation = document.getElementById("operators").value;

  if (operation === "interLineal") {
    document.getElementById("result").value = (
      fx0 +
      ((fx1 - fx0) / (xuno - xcero)) * (x - xcero)
    ).toFixed(3);
  }
  if (operation === "interCuadratica") {
    let b0 = fx0;
    let b1 = (fx1 - fx0) / (xuno - xcero);
    let b2 = ((fx2 - fx1) / (xdos - xuno) - b1) / (xdos - xcero);

    document.getElementById("result").value = (
      b0 +
      b1 * (x - xcero) +
      b2 * ((x - xcero) * (x - xuno))
    ).toFixed(3);
  }

  if (operation === "lagrange1") {
    document.getElementById("result").value = (
      ((x - xuno) / (xcero - xuno)) * fx0 +
      ((x - xcero) / (xuno - xcero)) * fx1
    ).toFixed(3);
  }

  if (operation === "lagrange2") {
    document.getElementById("result").value = (
      ((x - xuno) / (xcero - xuno)) * ((x - xdos) / (xcero - xdos)) * fx0 +
      ((x - xcero) / (xuno - xcero)) * ((x - xdos) / (xuno - xdos)) * fx1 +
      ((x - xcero) / (xdos - xcero)) * ((x - xuno) / (xdos - xuno)) * fx2
    ).toFixed(3);
  }
}
