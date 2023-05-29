const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let array1 = [];
let htmlButton = '';
let htmlCharacter = '';
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
  console.log(option.charAt(index))
  if (array1.includes(option.charAt(index))) {
    console.log(option.charAt(index), 'ya fue escrito');
  }
  else {
    console.log('Array LETTERS: ', LETTERS[flag[index]], 'caracter ingresado: ', option.charAt(index))
    if (LETTERS[flag[index]] == option.charAt(index) || flag[index] == option.charAt(index)) {
      array1[flag[index]] = option.charAt(index);
      if (flag[index] == array1[flag[index]])
        htmlCharacter += (parseInt(array1[flag[index]]) + index);
      else
        htmlCharacter += (array1[flag[index]]);
      document.getElementById('letrasId').innerHTML = htmlCharacter;
      flag[index] += 1;
    } else { console.log('Siga el orden por favor') }
  }
  if (array1[size] == LETTERS[size]) {
    index = 1;
  }
}