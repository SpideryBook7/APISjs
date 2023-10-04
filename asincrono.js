const teams = ["Chelsie", "Bayern", "Cruz azul"]

console.log(teams);

function getTeams(){
    return teams;
}

console.log('Console 2');
console.log(getTeams());

function asyncGetTeams(){
    setTimeout(() => teams, 2000);
}

console.log('Console 3');
console.log(asyncGetTeams());
console.log('Termina script');