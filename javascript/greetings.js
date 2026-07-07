function formatname(Nombre, Apellido) {
    return `${Nombre} ${Apellido}`;
}

function getGreeting(hora) {
    if (hora === `morning`) {
        return `Good morning!`
    }

    if (hora === `afternoon`) {
        return `Good afternoon`
    }

    return `Good evenign`
}

function createGreeting(Nombre, Apellido, hora) {
    let greeting = getGreeting(hora);
    let name = formatname(Nombre, Apellido);

    return `${greeting}, ${name}`;
}

console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));

let resultado1 = createGreeting('Ava', 'Stone', 'morning')
console.log(resultado1);
console.log(resultado1 === `Good morning, Ava Stone`);