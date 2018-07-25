function setup(){
  const canvas = document.getElementsByTagName('canvas');
  const ctx = canvas.getContext('2d');
}

function draw(){
  let img = new Image();
  img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
  img.onload = () => (
    this._ctx.drawImage(img, 0, 0, 800, 400)
  );
  
}

function handleKeys(){

}
