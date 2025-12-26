/* La Garda Ahlen — Logo Motion initializer
   Sets correct stroke-dash values and triggers the animation.
*/
(function(){
  function initLogo(root){
    const path = root.querySelector('.lagarda-logo__path');
    if(!path) return;

    // Ensure the SVG is in the DOM so getTotalLength works
    const len = Math.ceil(path.getTotalLength());
    path.style.setProperty('--dash', len);
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    // Trigger CSS animations
    requestAnimationFrame(() => root.classList.add('is-anim'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lagarda-logo').forEach(initLogo);
  });
})();
