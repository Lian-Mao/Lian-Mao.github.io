var typed= new Typed(".typing",{

    strings:["","navigate data landscapes to innovate tomorrow","craft solutions where technology meets strategy","decode complexities to simplify digital frontiers","bridge insights and technology for impactful change","architect tomorrow's systems today"],
    typeSpeed:60,
    BackSpeed:90,
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
