firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = " Mini Insta "
    }
})


function logout(){
    firebase.auth().signOut()
}