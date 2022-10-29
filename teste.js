

const invertString = (str) =>  {

    let newString = '';
    let tam = str.length - 1;

    //laço repetição
    for (let i = tam; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

invertString('bolha')
