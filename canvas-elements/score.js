class Score{
  constructor(startScore, topFive){
    this.currentScore = startScore;
    this.top = topFive;
    this.username = [];
    this.localStorage = false;
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
    debugger
    let added = false;
    if (!this.top.length){
    this.top = [newScore];
    localStorage.topFive = this.top;
    return this.top;
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
    localStorage.topFive = this.top;
  }

  postScore(top, localStorage){
    if(top){
      this.localStorage = localStorage
      this.top = top;
    }
    for (let i = 0; i < this.top.length; i++) {
      let li = document.createElement('li');
      li.className += '' + 'control-instruction-styling';
      li.setAttribute("id", `score ${i}`);
      li.innerHTML = this.top[i];
      document.getElementById(`score ${i}`).replaceWith(li);
    }
  }

  username(){
    document.addEventListener('keydown', this.usernameHandler);
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
      case 84:
        this.username.push('t');
        break;
      case 89:
        this.username.push('y');
        break;
      case 85:
        this.username.push('u');
        break;
      case 73:
        this.username.push('i');
        break;
      case 79:
        this.username.push('o');
        break;
      case 80:
        this.username.push('p');
        break;
      case 65:
        this.username.push('a');
        break;
      case 83:
        this.username.push('s');
        break;
      case 68:
        this.username.push('d');
        break;
      case 70:
        this.username.push('f');
        break;
      case 71:
        this.username.push('g');
        break;
      case 72:
        this.username.push('h');
        break;
      case 74:
        this.username.push('j');
        break;
      case 75:
        this.username.push('k');
        break;
      case 76:
        this.username.push('l');
        break;
      case 90:
        this.username.push('z');
        break;
      case 88:
        this.username.push('x');
        break;
      case 67:
        this.username.push('c');
        break;
      case 86:
        this.username.push('v');
        break;
      case 66:
        this.username.push('b');
        break;
      case 78:
        this.username.push('n');
        break;
      case 77:
        this.username.push('m');
        break;
      case 8:
        this.username.pop();
        break;
      case 13:
        if(this.username.length === 3){
          this.topFive();
        }
        break;
      default:

    }
  }


}
 module.exports = Score;
