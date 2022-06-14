
 const colors = Array.from(document.querySelectorAll('.partColor'));

  for(let color of colors){
    color.onclick = function(){
      const belongTo = color.parentNode.getAttribute('data-part');
      const newColor = getComputedStyle(color).getPropertyValue('--color');

      document.documentElement.style.setProperty(belongTo, newColor);

          }
        }
