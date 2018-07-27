class Score{
  constructor(startScore){
    this.currentScore = startScore;
  }

  drawScore(_ctx, currentScore){
    _ctx.font = "16px Arial";
    _ctx.fillStyle = "#0095DD";
    _ctx.fillText(`Score: ${currentScore}`, 8, 20);
  }

  score(){
    this.currentScore;
  }




}
