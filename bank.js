let pinGiven= 7856;

let loginBtn=document.getElementById("submit");
if (loginBtn) {

    loginBtn.addEventListener('click', ()=>{
    let formData=document.getElementById("newForm");
    formData.addEventListener("click",(e)=>{
        e.preventDefault();
    })  
    let pinEnter=document.getElementById("Pin").value;
    if(Number(pinEnter)===pinGiven){
        window.location.assign("newpage.html")
    }
    else if(pinEnter.length<=0){
        console.log("Hiii");
        alert("please enter the pin details");
     
    }
    else{
     
        alert("your pin is in correct"); 
        pinEnter="";
    }
});
    
} 

//////Check Balance/////

let balance=50000;
let btn=document.getElementById("check");
if(btn){
    btn.addEventListener("click",()=>{
        let formData1=document.getElementById("form1");
        formData1.addEventListener("click",(e)=>{
            e.preventDefault();
        }) 
         let a=3;
         if(a>0) {
            window.location.assign("checkbal.html");
         } 
    })
}

let checkbal=document.getElementById("chebal");
let text=()=>{
    
    checkbal.innerHTML=`The Current Balance is ${balance}`;

}


////Check Deposit///


let btn1=document.getElementById("dep");
console.log(btn1)
if(btn1){
 btn1.addEventListener("click",()=>{
    let formData1=document.getElementById("form1");
    formData1.addEventListener("click",(e)=>{
        e.preventDefault();
    }) 
     let b=3;
     if(b>0) {
        window.location.assign("deposit.html");
     }    
         
})
}

let depositBtn=document.getElementById("depositCash");

if (depositBtn){
    depositBtn.addEventListener("click",()=>{
        let input=document.getElementById("cashDeposit").value;
        if(input.length<=0){
            alert("Please Enter the amount");
        }
        else{
            let sum =Number(input)+balance;
            let newBal=document.getElementById("res");
            newBal.innerHTML=`Rs.${input} has been deposited and the current balance is ${sum}`; 
            
        }
     
    })}
    let reset1=document.getElementById("reset1");
         if(reset1) {
        reset1.addEventListener("click",()=>{
            let input1=document.getElementById("cashDeposit");
            input1.value=" ";
            let res=document.getElementById("res");
            res.innerHTML=" ";
        })}
    
////withdraw///

let btn2=document.getElementById("draw");
console.log(btn2);
if(btn2){
    btn2.addEventListener("click",()=>{

        let formData1=document.getElementById("form1");
        formData1.addEventListener("click",(e)=>{
            e.preventDefault();
        }) 
         let c=3;
         if(c>0) {
            window.location.assign("withdraw.html");
         }   
    })
}

let withDrawBtn=document.getElementById("withDraw");
if(withDrawBtn){
    withDrawBtn.addEventListener("click",()=>{
        let input=document.getElementById("cashDraw").value;
        if(input.length<=0){
            alert("Please Enter the amount");
        }
        else{

            let newBal=document.getElementById("res");
            let sum =balance-Number(input);
            newBal.innerHTML=`Rs.${input} has been debited and the current balance is ${sum}`; 
            
        }
        
    })
}
let reset2=document.getElementById("reset2");
    if(reset2){
        reset2.addEventListener("click",()=>{
            let input1=document.getElementById("cashDraw");
            input1.value=" ";
            let res=document.getElementById("res");
            res.innerHTML=" ";
        })
       
    }



let btn3=document.getElementById("pinChange");
if(btn3){
    btn3.addEventListener("click",()=>{
        let formData1=document.getElementById("form1");
        formData1.addEventListener("click",(e)=>{
            e.preventDefault();
        }) 
         let d=3;
         if(d>0) {
            window.location.assign("changepin.html");
         }  
    })
   
}
let pinChangeBtn=document.getElementById("pin");
if(pinChangeBtn){
    pinChangeBtn.addEventListener("click",()=>{
        let oldPin =Number(document.getElementById("oldPin").value);
        let newPin=Number(document.getElementById("newPin").value);
    
        if (oldPin===newPin){
            alert("Enter the new pin");  
        }
    
        else if (oldPin!==newPin && isNaN(newPin)){
            alert("Please enter the number");
        }
        else {
    
            newPin=newPin.toString();
                if(newPin.length<4 || newPin.length>4){
                    alert(`The length of the pin should be 4 but the length of the pin that you are given is ${newPin.length}`);
                    console.log(newPin.length);
                }
                else {
                    let res=document.getElementById("res");
                    res.innerHTML=`The new Pin is ${newPin} ,Please notedown`;
                    btn3.style.backgroundColor='red';
                }
            
        }
    })
}








































 



