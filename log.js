const base_url = "https://indipl2020.herokuapp.com/ipl2020/team/"




let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
} 

getToken = function(){
    
    var s1=document.getElementById("emailBox");
    var un=s1.value;
    var s2=document.getElementById("passwordBox");
    var pw=s2.value;
    //const url = "https://indipl2020.herokuapp.com/authenticate";
    var myObj={password:pw,username:un};
    var myJSON = JSON.stringify(myObj);
    console.log(myJSON);
    
   

    fetch('https://indipl2020.herokuapp.com/authenticate', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: myJSON,
    })
    .then(response => response.json())
    .then(data => 
    {   
        if(data.error!=null)
        {
            console.log(data.error);
            document.getElementById("wrongIDContainer").style.visibility="visible";
        }
        else
        {
         const tok=data.token;
        console.log(data);
        localStorage.setItem("storedToken",tok);
        window.open("iplPlayer.html","_self");
        }   
        
    })
    .catch((error) => {
    console.error('Error:', error);
    });

    
    
 }