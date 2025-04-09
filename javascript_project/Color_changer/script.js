const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click",function(event){
    console.log(event);
    console.log(event.target);
     
    switch(event.target.id){
      case "grey":
        body.style.backgroundColor=event.target.id ;
        break;
      // case "white":
      //   body.style.backgroundColor=event.target.id;
      //   break;
      case "blue":
        body.style.backgroundColor=event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor=event.target.id;
        break; 
      case "pink":
        body.style.backgroundColor=event.target.id;
        break;
      case "purple":
        body.style.backgroundColor=event.target.id;
        break;
      case "orange":
        body.style.backgroundColor=event.target.id;
        break;
      case "magenta":
        body.style.backgroundColor=event.target.id;
        break;
      case "green":
        body.style.backgroundColor=event.target.id;
        break;
      case "red":
        body.style.backgroundColor=event.target.id;
        break;
       
      case "rgba(149, 121, 241, 0.8)":
        body.style.backgroundColor=event.target.id;
        break;
      default :
        body.style.backgroundColor="white";

    }
  });

});


