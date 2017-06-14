const train = document.getElementById('train');
let marginleft = 0;
let table = [];
let start;

const goRight = () => {
  if(marginleft == 85) {
    clearInterval(start);
    train.style.marginLeft = 0;
    marginleft = 0;
    alert('perdu noob');
    table.forEach(clearInterval);
  } else {
    marginleft += 1;
    train.style.marginLeft = marginleft + '%';

  }
}

const go = () => {
  start = setInterval(goRight, 50);
  table.push(start)
}

const stop = () =>{
  table.forEach(clearInterval);
}
