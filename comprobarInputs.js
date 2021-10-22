export default function comprobarInputs (selector) {
  const d = document,
  $inputs = d.querySelectorAll(selector)

  let valido = true

  $inputs.forEach(input => {
    if(isNaN(input.value)){
      valido = false
    }
    
  });
  return valido
}