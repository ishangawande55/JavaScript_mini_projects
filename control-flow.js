let userRole="admin";
let acessLevel;

let isLoggedIn = true;
let userMeassage;

let userType="subscriber";
let userCategory;


if(userRole==="admin"){
    acessLevel="Full acess granted"
}else if(userRole==="manager"){
    acessLevel="limited acess granted";
}else{
    acessLevel="Now acess granted"
}
console.log("Acess Level:",acessLevel);

if(isLoggedIn){
    if(userRole==="admin"){
        userMeassage ="Welcome, Admin!";
    }else{
        userMeassage="welcome, User!";
    }

}else{
    userMeassage="Please log in to acess the ssystem.";
}

switch(userType){
    case "admin":
        userCategory="Administrator";
        break;
    case "manager":
        userCategory="Manager";
        break;
    case "subscriber":
        userCategory="Subscriber";
        break;
    default:
        userCategory="Unknown";    
}
console.log("User Category:", userCategory);
