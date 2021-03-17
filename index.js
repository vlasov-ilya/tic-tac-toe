let turn = 1; 
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
let position = ["","","","","","","","",""];



document.querySelector('.box').onclick = function() {
  // let raw = document.querySelector('.raw').value;
  // let colume = document.querySelector('.colume').value;
  // if (play[raw][colume] != "X" && play[raw][colume] != "O"){
  
  // let rowes = document.querySelectorAll('tr');
  // let celes = rowes[raw].querySelectorAll('td');
  // let cell = celes[colume];
  let element = event.target
  element.innerHTML = chare
  let node = element.parentNode
  let i = ([...node.children].indexOf(element));
  position[i] = chare;

  if(turn%2 != 1){
    chare = "X";
    document.querySelector('span').innerHTML = "X";
    // cell.style.backgroundColor = "red";
  } else {
    chare = 'O'; 
    document.querySelector('span').innerHTML = "O";
    // cell.style.backgroundColor = "green";
  }


  
  // play[raw][colume] = chare;
  // cell.innerHTML = chare;

  turn++;

  // if (winer() == 'X'){
  //   alert("Победили Х")
  // }

  


  console.log(play);
  console.log(position);
}


// function winer() {
//   if(play[0][0] == 'X' && play[0][1] == 'X' && play[0][2] == 'X')
//   {return "X"}
//   if(play[1][0] == 'X' && play[1][1] == 'X' && play [1][2] == 'X')
//   {return "X"}
//   if(play[2][0] == 'X' && play[2][1] == 'X' && play [2][2] == 'X')
//   {return "X"}
//   if(play[0][0] == 'X' && play[1][0] == 'X' && play[2][0] == 'X') 
//   {return "X"}
//   if(play[0][1] == 'X' && play[1][1] == 'X' && play [2][1] == 'X')
//   {return "X"}
//   if(play[0][2] == 'X' && play[1][2] == 'X' && play [2][2] == 'X')
//   {return "X"}
//   if(play[0][1] == 'X' && play[1][1] == 'X' && play [2][1] == 'X')
//   {return "X"}
//   if(play[0][2] == 'X'&& play[1][2] == 'X' && play [2][2] == 'X') 
//   {return "X"}
//   if(play[0][0] == 'X' && play[1][1] == 'X' && play [2][2] == 'X')
//   {return "X"}
//   if(play[0][2] == 'X'&& play[1][1] == 'X' && play [2][0] == 'X')
//   {return "X"}
//   // else if (
//   // (play[0][0] == 'O' && play[0][1] == 'O' && play[0][2] == 'O'||
//   // play[1][0] == 'O' && play[1][1] == 'O' && play [1][2] == 'O'||
//   // play[2][0] == 'O' && play[2][1] == 'O' && play [2][2] == 'O'||
//   // play[0][0] == 'O' && play[1][0] == 'O' && play[2][0] == 'O' ||
//   // play[0][1] == 'O' && play[1][1] == 'O' && play [2][1] == 'O'||
//   // play[0][2] == 'O' && play[1][2] == 'O' && play [2][2] == 'O'||
//   // play[0][1] == 'O' && play[1][1] == 'O' && play [2][1] == 'O'||
//   // play[0][2] == 'O'&& play[1][2] == 'O' && play [2][2] == 'O' ||
//   // play[0][0] == 'O' && play[1][1] == 'O' && play [2][2] == 'O'||
//   // play[0][2] == 'O'&& play[1][1] == 'O' && play [2][0] == 'O')
//   // ){
//   //   winer = alert ("O победили!")
//   // };
// }