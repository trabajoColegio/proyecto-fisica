import comprobarInputs from "./comprobarInputs.js"

const d = document,
$btn = d.querySelector("button"),
$errorMsg = d.querySelector(".valor-invalido"),
$resultado = d.querySelector(".resultado")


const comprobarVariablesFisica = () => {
  let pi = d.querySelector(".pi").value,
  pf = d.querySelector(".pf").value,
  vi = d.querySelector(".vi").value,
  vf = d.querySelector(".vf").value,
  ti = d.querySelector(".ti").value,
  tf = d.querySelector(".tf").value

  let temperatura = true,
  presion = true,
  volumen = true,
  resultado = 0,
  contador = 0,
  simplificado = 0,
  justificacion = ""

  /*Comprobaciones para simplificar*/

  if (pi == "" && pf == ""){
    pi = 1
    pf = 1
    presion = false
    console.log("presión simplificada");
    simplificado ++
  }
  if (ti == "" && tf == ""){
    ti = 1
    tf = 1
    temperatura = false
    console.log("temperatura simplificada");
    simplificado ++
  }
  if (vi == "" && vf == ""){
    vi = 1
    vf = 1
    volumen = false
    console.log("volumen simplificado");
    simplificado ++
  }

  /*Operaciones*/

  pi = parseFloat(pi),
  vi = parseFloat(vi),
  ti = parseFloat(ti),
  tf = parseFloat(tf),
  pf = parseFloat(pf),
  vf = parseFloat(vf)

  if (isNaN(pi)){
    resultado = (pf * vf * ti)/(vi * tf)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando la presión inicial (pi), debemos utilizar la ecuación pi = (pf * vf * ti)/(vi * tf), lo cual sería: pi = (${pf} * ${vf} * ${ti})/(${vi} * ${tf}). El resultado es ${resultado.toFixed(2)}`
  }
  if (isNaN(vi)){
    resultado = (pf * vf * ti)/(pi * tf)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando el volumen inicial (vi), debemos utilizar la ecuación vi = (pf * vf * ti)/(pi * tf), lo cual sería: vi = (${pf} * ${vf} * ${ti})/(${pi} * ${tf}). El resultado es ${resultado.toFixed(2)}`
  }
  if (isNaN(tf)){
    resultado = (pf * vf * ti)/(pi * vi)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando la temperatura final (tf), debemos utilizar la ecuación tf = (pf * vf * ti)/(pi * vi), lo cual sería: tf = (${pf} * ${vf} * ${ti})/(${pi} * ${vi}). El resultado es ${resultado.toFixed(2)}`
  }
  if (isNaN(pf)){
    resultado = (pi * vi * tf)/(vf * ti)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando la presión final (pf), debemos utilizar la ecuación pf = (pi * vi * tf)/(vf * ti), lo cual sería: pf = (${pi} * ${vi} * ${tf})/(${vf} * ${ti}). El resultado es ${resultado.toFixed(2)}`
  }
  if (isNaN(vf)){
    resultado = (pi * vi * tf)/(pf * ti)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando el volumen final (vf), debemos utilizar la ecuación vf = (pi * vi * tf)/(pf * ti), lo cual sería: vf = (${pi} * ${vi} * ${tf})/(${pf} * ${ti}). El resultado es ${resultado.toFixed(2)}`
  }
  if (isNaN(ti)){
    resultado = (pi * vi * tf)/(pf * vf)
    contador ++
    justificacion = `Teniendo en cuenta que se está buscando la temperatura inicial (ti), debemos utilizar la ecuación ti = (pi * vi * tf)/(pf * vf), lo cual sería: ti = (${pi} * ${vi} * ${tf})/(${pf} * ${vf}). El resultado es ${resultado.toFixed(2)}`
  }

  if(contador !== 1 || simplificado > 1){
    $errorMsg.textContent = "Falta algun valor"
    $errorMsg.classList.remove("hidden")
  }

  if(simplificado == 0){
    $resultado.textContent = justificacion
  }
  else if(simplificado == 1){
    $resultado.textContent = `${justificacion} (aclaración: hay 2 valores que se encuentran en 1. Están puestos ya que no se encuentra el valor inicial ni final (volumen, presión o temperatura), por lo que suponemos que es constante)`
  }
}


$btn.addEventListener("click", e => {
  if (!comprobarInputs(".dato input")) {
   $errorMsg.classList.remove("hidden")
   $resultado.textContent = "no se puede realizar la operación"
  }  
  else {
    $errorMsg.classList.add("hidden")
    comprobarVariablesFisica()
  }
})
