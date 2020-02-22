function userInput(e){
e.preventDefault();
var inputBox = document.querySelector('input[type="text"]').value;
  var newli = document.createElement('li');
  //add class
  newli.className = 'list-group-item';
  //create node
  var liNode = document.createTextNode(inputBox);
  //add node to element
  newli.appendChild(liNode);

  //create button
  var redButton = document.createElement('button');
  redButton.className = "btn btn-danger btn-sm float-right";
  redButton.setAttribute('type','button');
  redButton.setAttribute('name','button');
  var redButtonText = document.createTextNode('X');

  redButton.appendChild(redButtonText);

  // //get UL
   var getUL = document.getElementById('items');

  // //add to last element
  getUL.appendChild(newli);


  //add button to last list item
  getUL.appendChild(newli).appendChild(redButton);

  console.log(getUL.appendChild(newli).appendChild(redButton));

  //clear text input
  if(inputBox.length > 0){
    document.querySelector('input[type="text"]').value = "";
  }

};

  var submitButton = document.querySelector('button[type="submit"]');
  //console.log(submitButton);
submitButton.addEventListener('click',userInput,false);

function deleteLine() {
 this.parentElement.style.display = "none";
};


var redX = document.getElementsByClassName("btn btn-danger btn-sm float-right");

 var ulLength = document.getElementsByTagName('li');

for(var i = 0; i < ulLength.length; i++){
redX[i].addEventListener('click',deleteLine,false);

};
