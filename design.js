// CREDITS : https://www.cssscript.com/image-zoom-pan-hover-detail-view/
var addZoom = (target) => {
    // (A) GET CONTAINER + IMAGE SOURCE
    let container = document.getElementById(target),
        imgsrc = container.currentStyle || window.getComputedStyle(container, false);
        imgsrc = imgsrc.backgroundImage.slice(4, -1).replace(/"/g, "");
   
    // (B) LOAD IMAGE + ATTACH ZOOM
    let img = new Image();
    img.src = imgsrc;
    img.onload = () => {
      // (B1) CALCULATE ZOOM RATIO
      let ratio = img.naturalHeight / img.naturalWidth,
          percentage = ratio * 100 + "%";
   
      // (B2) ATTACH ZOOM ON MOUSE MOVE
      container.onmousemove = (e) => {
        let rect = e.target.getBoundingClientRect(),
            xPos = e.clientX - rect.left,
            yPos = e.clientY - rect.top,
            xPercent = xPos / (container.clientWidth / 100) + "%",
            yPercent = yPos / ((container.clientWidth * ratio) / 100) + "%";
        let i;
        if (target === "garden-mobile"){
          i = .3;
        } else {
          i = .6;
        }
        Object.assign(container.style, {
          backgroundPosition: xPercent + " " + yPercent,
          backgroundSize: i*img.naturalWidth + "px"
        });
      };
   
      // (B3) RESET ZOOM ON MOUSE LEAVE
      container.onmouseleave = (e) => {
        Object.assign(container.style, {
          backgroundPosition: "center",
          backgroundSize: "cover"
        });
      };
    }
  };
   
  // (C) ATTACH FOLLOW ZOOM
  window.onload = () => { addZoom("garden-mobile2"); addZoom("garden-mobile1"); addZoom("garden-design"); addZoom("salmon")};


  //document.getElementById('oikos').onmouseover = document.getElementById('oikos').innerHTML= "OIKOS"




// document.getElementsByTagName('details').onclick = (e) =>{
//   document.getElementById('refresh').style, {
//     display="inline",
//   }
// }

