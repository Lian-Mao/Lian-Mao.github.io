var typed= new Typed(".typing",{

    strings:["","Porn star","Mother fucker","Child molester","sex offender"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
 function sendEmail(){
     var name= document.getElementById("namee").value;
     var email= document.getElementById("emaill").value;
     var subject= document.getElementById("subjectt").value;
     var message= document.getElementById("messagee").value;

     if (name==""|| email==""||subject==""||message=="") {
         alert("Please fill in all the fields");
     }
     else{

        document.location =  `mailto:yomao34@gmail.com?cc= &bcc=&subject=${subject}&body= ${message}`
     }

}
