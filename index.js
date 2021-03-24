let turn = 0; 
let chare = "X";
let play = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let position = [];

function check() {
  let result = [];
  let rows = document.getElementsByTagName('table')[0].rows;
  let cells, t;
  
  for (let a = 0, alength = rows.length; a < alength; a++ ){
    cells = rows[a].cells;
    t = [];
  

    for (let b = 0, blength = cells.length; b < blength; b++){
      t.push(cells[b].textContent);
    };
    result.push(t);
  }

  position = [].concat(...result);
  


  console.log(result);
  console.log(position);
}


document.querySelector('.box').onclick = function() {
  let element = event.target

  if(element.innerHTML == ''){
    element.innerHTML = chare
    turn++;
  }


  if(turn%2 != 1){
    chare = "X";
    document.querySelector('span').innerHTML = "X";
  } else {
    chare = 'O'; 
    document.querySelector('span').innerHTML = "O";
  }



  play.forEach((c) => {
    if (position[c[0]]===chare && position[c[1]]===chare && position[c[2]]===chare){
          alert(chare +" WIN!")
          window.location.reload();
        } 
    
  }); 



  if (position.indexOf("") == -1) {
    alert("DRAW");
    window.location.reload();
  }

    check();


}

document.querySelector(".submit").onclick = function(){
  window.location.reload()
}

