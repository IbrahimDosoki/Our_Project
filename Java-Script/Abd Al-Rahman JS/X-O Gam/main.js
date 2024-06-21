let turn = 'X';
let title = document.querySelector('.title');
let squres = [];
function done (num1, num2, num3) {
    title.innerHTML = `${squres[num1]} Winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';


    setInterval(function () {title.innerHTML += '.'}, 1000)
    setTimeout(function () {location.reload()} , 4000)
}
function winner () {
  for (let i = 1; i < 10; i++) {
   squres[i] = document.getElementById('item' + i).innerHTML;
  }
// ################################### Rows
  if (squres[1] == squres[2] && squres[1] == squres[3] && squres[1] != '') {
   done(1,2,3);
  }
  else if (squres[4] == squres[5] && squres[4] == squres[6] && squres[4] != '') {
    done(4,5,6);
  }
  else if (squres[7] == squres[8] && squres[7] == squres[9] && squres[7] != '') {
    done(7,8,9);
  }
//   ###########################
  else if (squres[1] == squres[5] && squres[1] == squres[9] && squres[1] != '') {
    done(1,5,9);
  }
  else if (squres[3] == squres[5] && squres[3] == squres[7] && squres[3] != '') {
    done(3,5,7);
  }

//   ######################################## Columns
else if (squres[1] == squres[4] && squres[1] == squres[7] && squres[1] != '') {
    done(1,4,7);
  }
  else if (squres[2] == squres[5] && squres[2] == squres[8] && squres[2] != '') {
    done(2,5,8);
  }
  else if (squres[3] == squres[6] && squres[3] == squres[9] && squres[3] != '') {
    done(3,6,9);
  }
}

function game (id) {
    let ele = document.getElementById(id);
    if (turn === 'X' && ele.innerHTML === '' ) {
        ele.innerHTML = 'X';
        turn = 'O'
        title.innerHTML ='O'
    }
    else if (turn === 'O' && ele.innerHTML === '') {
        ele.innerHTML = 'O';
        turn = 'X';
        title.innerHTML ='X';
    }
    winner ();
}