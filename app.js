//init Github
const github = new Github;
//init UI
ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//Event Listeners
searchUser.addEventListener('keyup',(e)=>{
    const userText = e.target.value;

    if(userText !==''){
        //make http call
        github.getUser(userText)
        .then(data => {
             //console.log(data);
             
           if(data.profile.message==='Not Found'){
               //alert not found
               
           }
           else{
               //show profile
               ui.showProfile(data.profile);
                
          }
        })
    }else{
        console.clear();
        ui.clearProfile();
    }
});