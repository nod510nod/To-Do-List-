var searchBx = document.querySelector('input');

function search(){
  var filter = searchBx.value.toUpperCase();
  var getUl = document.querySelector('ul');
  var getli = document.querySelectorAll('.list-group-item');



  for(var i = 0; i < getli.length; i++){
  var searchText = (getli[i].innerText).toUpperCase().indexOf(filter);
  //console.log(search);
  if(searchText > -1){
    getli[i].style.display ="";
  }
  else{
    getli[i].style.display ="none";
  }
  };
};

searchBx.addEventListener('keyup',search,false);
