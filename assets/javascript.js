
function ageInDays() {
    let birthYear = prompt('what year were you born in?');
    let ageInDayzz = (2021 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('you are ' + ageInDayzz + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    console.log(ageInDayzz);
}

function reset() {
    document.getElementById('ageInDays').remove();
}