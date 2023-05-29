const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let array1 = [];
let htmlButton = '';
let htmlCharacter = [letter = '', number = '']
let flag = [letter = 0, number = 0]
let index = 0;
let size = (LETTERS.length) - 1;
function buttons() {
  for (let i = 0; i < (LETTERS.length); i++) {
    htmlButton += `<button class="col col-4" onclick="btnFunction('${LETTERS[i] + i}')">${LETTERS[i] + (i + 1)}</button>`;
  }
  document.getElementById('table').innerHTML = htmlButton;
}

function btnFunction(option) {
  if (array1.includes(option.charAt(index))) {
    if ((flag[index] - index) == option.charAt(index)) {
      alert('el numero: ', parseInt((option.charAt(index)) + index), ' ya fue escrito');
    } else {
      alert('la letra: ', option.charAt(index), ' ya fue escrita');
    }
  }
  else {
    if (LETTERS[flag[index]] == option.charAt(index) || flag[index] == option.charAt(index)) {
      array1[flag[index]] = option.charAt(index);
      if (flag[index] == array1[flag[index]]) {
        htmlCharacter[index] += (parseInt(array1[flag[index]]) + index);
        document.getElementById('numerosId').innerHTML = htmlCharacter[index];
      }
      else {
        htmlCharacter[index] += (array1[flag[index]]);
        document.getElementById('letrasId').innerHTML = htmlCharacter[index];
      }

      flag[index] += 1;
    } else { alert('Siga el orden por favor') }
  }
  if (array1[size] == LETTERS[size]) {
    index = 1;
  }
}