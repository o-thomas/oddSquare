let bouton = document.getElementById('go');
let message = "temps ecoulé"
let i = 0;
let colors = ["1abc9c", "16a085",
"2ecc71", "27ae60",
"3498db", "2980b9",
"9b59b6", "8e44ad",
"34495e", "2c3e50",
"f1c40f", "f39c12",
"e67e22", "d35400",
"e74c3c", "c0392b",
"ecf0f1", "bdc3c7",
"95a5a6", "7f8c8d"
];
let score = 0;
let dificult = document.getElementById("nombre").value;
let cont = document.getElementById('carre');
let temps = ""
let scoreCont = document.getElementById('score');

function begin (){
  temps = document.getElementById('seconde').value;
  jeucarre();
}

function jeucarre() {
  
  bouton.disabled = true;
  test = temps*1000;
  dificult = document.getElementById("nombre").value;
  let intrucolor = colors[Math.round(Math.random() * colors.length)];
  let randomcolor = colors[Math.round(Math.random() * colors.length)];
  let randomvalue = Math.floor(Math.random() * dificult);
  if (randomcolor == intrucolor) {
    intrucolor = "8d2e07";
  }
  while (i < dificult) {
    if (i == randomvalue) {
      let intru = document.createElement('div');

      cont.appendChild(intru);
      intru.style.backgroundColor = intrucolor;
      intru.style.border ="thick solid #000000";
      intru.id = "intru";
      intru.onclick = function again() {
        jeucarre();
        gain();
      }

    } else {
      let newCarre = document.createElement('div');
      newCarre.id = 'newCarre';
      cont.appendChild(newCarre);
      newCarre.style.backgroundColor = randomcolor;
      newCarre.style.border ="thick solid #000000";
    }
    i++;
  }
  i = 0;
}
const gain = () => {
  cont.innerHTML = "";
  jeucarre();
  score = score + 1;
  scoreCont.innerHTML = score;
}

function loose(){
  bouton.disabled = false;
  cont.innerHTML = "";
  alert(message);
  score = 0;
  resetTemps();
}

function timer() {
  temps = temps - 1;
  document.getElementById("timer").innerHTML = "Temps restant : " + temps.toString();
  TimerUpdate = setTimeout(function () {
    timer();
  }, 1000);
  if(temps === 0){

    resetTemps();
    loose();
  }
}

function resetTemps(){
  clearTimeout(TimerUpdate);
  temps = document.getElementById('seconde').value;;
}
