!function(){var e,t;function n(){t||requestAnimationFrame(a),t=!0}function a(){t=!1;for(var n=window.innerWidth,a=window.innerHeight,i=0;i<e.length;i++){var l=e[i],r=l.children,s=l.offsetWidth,o=l.offsetHeight,d=l.getBoundingClientRect().left,u=l.getBoundingClientRect().top,f=l.getAttribute("data-unillax-position-x");if(f)var g=f;else g=0;if(l.getAttribute("data-unillax-position-y"))var m=f;else m=0;var c=l.getAttribute("data-unillax-depth");if(c)var x=c;else x=2;for(var v=-d/x+g/2*-(n-s),h=-u/x+m/2*(a-o),p=-d/x,w=-u/x,b=0;b<r.length;b++)"unillax-background"!==r[b].className?r[b].style.transform="translate("+v+"px, "+h+"px)":"unillax-background"===r[b].className&&(r[b].style.transform="translate("+1.5*p+"px, "+1.5*w+"px)")}}e=document.getElementsByClassName("unillax-container"),document.getElementsByClassName("unillax-element"),window.addEventListener("scroll",n),window.addEventListener("resize",n),requestAnimationFrame(a)}();