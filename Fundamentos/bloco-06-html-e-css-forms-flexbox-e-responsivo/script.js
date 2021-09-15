

const stateSelected = document.getElementById('state');

const statesBr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];

for (let index = 0; index < statesBr.length; index += 1) {
  let createSelected = document.createElement('option');
  createSelected.value = statesBr[index];
  createSelected.innerText = statesBr[index];
  stateSelected.appendChild(createSelected);
}

