const paragRedText = document.createElement('p');
paragRedText.textContent = 'Hey Im red!'
paragRedText.style.color = 'red';

const h3Blue = document.createElement('h3');
h3Blue.textContent = 'Hey Im a blue h3!'
h3Blue.style.color = 'blue';

const parentDiv = document.createElement('div');
parentDiv.style.border = 'solid'
parentDiv.style.borderColor = 'black'
parentDiv.style.backgroundColor = 'pink'

const divChildH1 = document.createElement('h1');
divChildH1.textContent = 'Im in a div'

const divChildP = document.createElement('p');
divChildP.textContent = 'ME TOO!'

parentDiv.appendChild(divChildH1);
parentDiv.appendChild(divChildP);

/* Appending all the nodes to body element which in HTML and then
appending them to index.html document itself this is the final appending*/
document.body.appendChild(paragRedText);
document.body.appendChild(h3Blue);
document.body.appendChild(parentDiv);