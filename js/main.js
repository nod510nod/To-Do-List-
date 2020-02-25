function userInput(e){
//prevent the submit button from going the next page.
e.preventDefault();
//get the vlaue from the front end
var inputBox = document.querySelector('input[type="text"]').value;
//create new element
  var newli = document.createElement('li');
  var newSpan = document.createElement('span');
  //add class
  newli.className = 'list-group-item';
  //create node
  var liNode = document.createTextNode(inputBox);
  //add node to element
  newli.appendChild(newSpan).appendChild(liNode);
  //create button
  var redButton = document.createElement('button');
  redButton.className = "btn btn-danger btn-sm float-right";
  redButton.setAttribute('type','button');
  redButton.setAttribute('name','button');
  var redButtonText = document.createTextNode('X');
  //add text to button
  redButton.appendChild(redButtonText);
  // //get UL
   var getUL = document.getElementById('items');
  // //add to last element
  getUL.appendChild(newli);
  //add button to last list item
  getUL.appendChild(newli).appendChild(redButton);
  //clear text input
  if(inputBox.length > 0){
    document.querySelector('input[type="text"]').value = "";
  }

  //function to hide line item
function deleteLine() {
  this.parentElement.style.display = "none";
};

var closeBtn = document.getElementsByClassName("btn btn-danger btn-sm float-right");
//loop through each ul element
for(var i = 0; i < getUL.children.length; i++){
  closeBtn[i].addEventListener('click',deleteLine,false);
};

};
  //get the submit button from the frontend
  var submitButton = document.querySelector('button[type="submit"]');
  //onclick the userInput function fires
  submitButton.addEventListener('click',userInput,false);

  //function to hide line item
function deleteLine() {
  this.parentElement.style.display = "none";
};
  //grab the close button from front end
  var closeBtn = document.getElementsByClassName("btn btn-danger btn-sm float-right");
  var getUL = document.getElementById('items');
  //loop through each ul element
  for(var i = 0; i < getUL.children.length; i++){
    closeBtn[i].addEventListener('click',deleteLine,false);
  };

  var searchBx = document.querySelector('input');

  function search(){
    var filter = searchBx.value.toUpperCase();
    var getUl = document.querySelector('ul');
    var getli = document.getElementsByTagName('span');
    var getli2 = document.querySelectorAll('.list-group-item');



    for(var i = 0; i < getli.length; i++){
    var searchText = (getli[i].innerText).toUpperCase().indexOf(filter);
    //console.log(search);
    if(searchText > -1){
      getli2[i].style.display ="";
    }
    else{
      getli2[i].style.display ="none";
    }
    };
  };

  searchBx.addEventListener('keyup',search,false);
