class Score{
  constructor(startScore, topFive){
    this.currentScore = startScore;
    this.top = topFive;
  }

  updateScore(newScore){
    this.currentScore = (this.currentScore + newScore);
  }

  resetScore(){
    this.currentScore = 0;
  }

  score(){
    return this.currentScore;
  }

  drawScore(_ctx){
    _ctx.font = "16px Arial";
    _ctx.fillStyle = "rgba(0, 0, 0, 1)";
    _ctx.fillText(`Score: ${this.currentScore}`, 8, 20);
  }

  topFive(newScore){
    // debugger
    let added = false;
    if (!this.top.length){
    return this.top = [newScore];
    }
    let newTop = this.top;
    for (let i = 0; i < this.top.length; i++) {
      if(this.top[i] <= newScore){
        newTop = ([...this.top.slice(0,i), newScore, ...this.top.slice(i)]);
        this.top = newTop;
        added = true;
        break;
      }
    }
    if(!added){
      newTop = [...this.top, newScore];
    }
    while(newTop.length > 5){
      newTop.pop();
    }
    this.top = newTop;
  }

  postScore(){
    // document.getElementById('scores').removeChild('li');
    for (let i = 0; i < this.top.length; i++) {
      let li = document.createElement('li');
      li.className += '' + 'control-instruction-styling';
      li.setAttribute("id", `score ${i}`);
      li.innerHTML = this.top[i];
      document.getElementById(`score ${i}`).replaceWith(li);
    }
    // localStorage['topFive'] = this.top;
  }

  usernameHandler(e){
    switch (e.keycode) {
      case 81:
        this.username.push('q');
        break;
      case 87:
        this.username.push('w');
        break;
      case 69:
        this.username.push('e');
        break;
      case 82:
        this.username.push('r');
        break;
      default:

    }
  }


}
 module.exports = Score;
