const colors = ['#ffcccc', '#ffe6cc', '#ffffcc', '#e6ffcc', '#ccffcc', '#ccffe6', '#ccffff', '#cce6ff', '#ccccff', '#e6ccff', '#ffccff', '#ffccf9', '#ffccf2', '#ffcced', '#ffccd6', '#ffccc0', '#ffcca9', '#ffcc93', '#ffcc7c', '#ffcc66', '#ffcc4f', '#ffcc39', '#ffcc22'];
const duration = 8000; // duração da transição em milissegundos
let animating = false; // flag para evitar animações concorrentes

function animateBackgroundColor(element, startColor, endColor, duration, callback) {
  const startTime = new Date().getTime();
  function update() {
    const elapsed = new Date().getTime() - startTime;
    if (elapsed < duration) {
      const progress = elapsed / duration;
      const currentColor = lerpColor(startColor, endColor, progress);
      element.style.backgroundColor = currentColor;
      requestAnimationFrame(update);
    } else {
      element.style.backgroundColor = endColor;
      if (typeof callback === 'function') {
        callback();
      }
    }
  }
  requestAnimationFrame(update);
}

function lerpColor(color1, color2, t) {
  const c1 = parseColor(color1);
  const c2 = parseColor(color2);
  const r = Math.round(lerp(c1.r, c2.r, t));
  const g = Math.round(lerp(c1.g, c2.g, t));
  const b = Math.round(lerp(c1.b, c2.b, t));
  return `rgb(${r}, ${g}, ${b})`;
}

function parseColor(color) {
  const matches = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (matches) {
    return { r: parseInt(matches[1], 16), g: parseInt(matches[2

  