class Score{
  constructor(startScore){
    this.currentScore = startScore;
    this.top = [];
  }

  drawScore(_ctx, currentScore){
    _ctx.font = "16px Arial";
    _ctx.fillStyle = "#0095DD";
    _ctx.fillText(`Score: ${currentScore}`, 8, 20);
  }

  score(){
    this.currentScore;
  }

  topFive(newScore){
    let newTop = this.top;
    for (let i = 0; i < this.top.length; i++) {
      if(this.top[i] < newScore){
        newTop = (this.top.slice(0,i) + newScore + this.top.slice(i));
        while(newTop.length > 5){
          newTop.pop();
        }
        this.top = newTop;
        break;
      }
    }
    this.top = newTop;
  }

  postScore(){
    debugger

    // document.getElementById('scores').removeChild('li');
    for (let i = 0; i < this.top.length; i++) {
      let li = document.createElement('li');
      li.className += '' + 'control-instruction-styling';
      li.setAttribute("id", `score ${i}`);
      li.innerHTML = this.top[i];
      document.getElementById(`score ${i}`).replaceWith(li);
    }
  }




}
