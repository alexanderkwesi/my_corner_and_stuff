
let msg: string = "Hello World";
alert(msg);
let heading = document.createElement('h1');
heading.textContent = msg;

document.body.appendChild(heading); 

function greeter(person: string, values: number[])
{
    return 'Hello, ' +  "'"  + person +'-'+ values.slice(0,3).join('') + "'";
}

let [user, values]= ['Jane User', [0, 1, 2]];
const divTag = document.getElementById('heading_1') as HTMLDivElement;
divTag.textContent = greeter(user, values).toString();