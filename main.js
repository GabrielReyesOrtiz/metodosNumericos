function interpolacion() {
  // num1, num2 variables will manipulate the values entered by the user
  let x = parseFloat(document.getElementById("numberX").value);
  let xcero = parseFloat(document.getElementById("numberXcero").value);
  let xuno = parseFloat(document.getElementById("numberXuno").value);
  let fx0 = parseFloat(document.getElementById("numberFx0").value);
  let fx1 = parseFloat(document.getElementById("numberFx1").value);
  let xdos = parseFloat(document.getElementById("numberXdos").value);
  let fx2 = parseFloat(document.getElementById("numberFx2").value);
  let fx = parseFloat(document.getElementById("fdex").value);

  // Aquí seleccionamos que tipo de interpolación queremos
  let operation = document.getElementById("operators").value;
  let i1 = 0;

  if (operation === "interLineal") {
    if (fx === null) {
      i1 = fx0 + ((fx1 - fx0) / (xuno - xcero)) * (x - xcero);
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = "No ingresó F(x)";
    } else {
      i1 = fx0 + ((fx1 - fx0) / (xuno - xcero)) * (x - xcero);
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = (
        ((fx - i1) / fx) *
        100
      ).toFixed(3);
    }
  }
  if (operation === "interCuadratica") {
    if (fx === null) {
      let b0 = fx0;
      let b1 = (fx1 - fx0) / (xuno - xcero);
      let b2 = ((fx2 - fx1) / (xdos - xuno) - b1) / (xdos - xcero);
      i1 = b0 + b1 * (x - xcero) + b2 * ((x - xcero) * (x - xuno));
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = "No ingresó F(x)";
    } else {
      let b0 = fx0;
      let b1 = (fx1 - fx0) / (xuno - xcero);
      let b2 = ((fx2 - fx1) / (xdos - xuno) - b1) / (xdos - xcero);
      i1 = b0 + b1 * (x - xcero) + b2 * ((x - xcero) * (x - xuno));
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = (
        ((fx - i1) / fx) *
        100
      ).toFixed(3);
    }
  }

  if (operation === "lagrange1") {
    if (fx === null) {
      i1 =
        ((x - xuno) / (xcero - xuno)) * fx0 +
        ((x - xcero) / (xuno - xcero)) * fx1;
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = "No ingresó F(x)";
    } else {
      i1 =
        ((x - xuno) / (xcero - xuno)) * fx0 +
        ((x - xcero) / (xuno - xcero)) * fx1;
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = (
        ((fx - i1) / fx) *
        100
      ).toFixed(3);
    }
  }

  if (operation === "lagrange2") {
    if (fx === null) {
      i1 =
        ((x - xuno) / (xcero - xuno)) * ((x - xdos) / (xcero - xdos)) * fx0 +
        ((x - xcero) / (xuno - xcero)) * ((x - xdos) / (xuno - xdos)) * fx1 +
        ((x - xcero) / (xdos - xcero)) * ((x - xuno) / (xdos - xuno)) * fx2;
      document.getElementById("result").value = i1.toFixed(3);
    } else {
      i1 =
        ((x - xuno) / (xcero - xuno)) * ((x - xdos) / (xcero - xdos)) * fx0 +
        ((x - xcero) / (xuno - xcero)) * ((x - xdos) / (xuno - xdos)) * fx1 +
        ((x - xcero) / (xdos - xcero)) * ((x - xuno) / (xdos - xuno)) * fx2;
      document.getElementById("result").value = i1.toFixed(3);
      document.getElementById("perror").value = (
        ((fx - i1) / fx) *
        100
      ).toFixed(3);
    }
  }
}
