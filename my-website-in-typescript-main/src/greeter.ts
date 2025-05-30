/*import {Animation} from './ej2-quickstart/node_modules/@syncfusion/ej2-base';
import { GlobalAnimationMode, setGlobalAnimation } from './ej2-quickstart/node_modules/@syncfusion/ej2-base';
setGlobalAnimation(GlobalAnimationMode.Disable);*/


/*if (typeof document !== "undefined") 
{*/

const divHeadingTag = document.getElementById('heading_2') as HTMLDivElement;

interface Person
{
    firstName: string;
    lastName: string;
}

function greeters(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let users = { firstName: "Jane", lastName: "User"};

document.getElementById('heading_1').textContent = greeters(users).toString();


function greetings(name: string, values: number[])
{
    return 'Hello, ' +  "'"  + name +'-'+ values.slice(0,3).join('') + "'";
}

let [use, val]= ['Jane User', [0, 1, 2]];

divHeadingTag.textContent = greetings(use, val).toString();

const atag = document.getElementById('anchortag') as HTMLAnchorElement;

function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("https://www.linkedin.com/in/alexanderoluwaseunkwesi");
}

atag.addEventListener('click', copyText);

/*const ani_img_container = document.getElementById('img_container') as HTMLDivElement;*/


/*let animation: Animation = new Animation({ delay: 2000, duration: 5000 });*/
/*animation.animate('#img_container', { name: 'FadeOut'});*/
/*animation.animate('#img_container', { name : 'Zoom'});*/
    

const imgsrcs = document.getElementById('imgsrc') as HTMLDivElement;
imgsrcs.style.backgroundImage = "/we\ are\ under\ cconstruction.gif";
imgsrcs.style.width = '1000px';
imgsrcs.style.height = '700px';

function getdate_now()
{
    let date:Date = new Date();
    const daet = document.getElementById('dated') as HTMLDivElement;
    daet.style.color = "black";
    daet.style.fontSize = "12px";
    daet.innerText = date.getDate().toPrecision();

    

}

window.addEventListener('load', getdate_now);


//const one = document.querySelector('.one') as HTMLDivElement;

//one.addEventListener('click', (e:Event) => {
//e.preventDefault();

//const first = document.querySelector('#section-div-middle-my-corner') as HTMLElement;
//const third = document.querySelector('#middle-container-section') as HTMLElement;
  //  first.style.display = 'inline-flex';
    //third.style.zIndex = '13';
    
//});



/*}*/


/*document.querySelector('h2').textContent = greeters(users).toString();*/


/*document.body.append(h2Tag);*/
/* document.body.textContext = greeter(users,values)*/



/*divTag.innerText = greeter(user, values).toString();*/



/*document.getElementById('h1').textContent = greeter(user,values).toString();*/


/*const h1Tag = document.getElementsByTagName('h1') as HTMLHeadingElement;*/


/*const node = document.createElement("li");*/
/*const textnode = document.createTextNode('water');*/
/*node.appendChild(textnode);*/

/*document.getElementById('h2').append(liTag)*/

/*document.body.append(h1Tag);*/