

let myName = localStorage.getItem("myName");
window.addEventListener('load' ,()=>{

     let desig = localStorage.getItem("desig");
   let phone = localStorage.getItem("phone");
   let email = localStorage.getItem("email");
   let add = localStorage.getItem("add");
   let pass1 = localStorage.getItem("pass1");
   let deg1 = localStorage.getItem("deg1");
   let uni = localStorage.getItem("uni");
   let pass2 = localStorage.getItem("pass2");
   let deg2 = localStorage.getItem("deg2");
   let uni2 = localStorage.getItem("uni2");
   let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
  let skill3 =  localStorage.getItem("skill3");
  let lang =  localStorage.getItem("lang");
  let  lang2=  localStorage.getItem("lang2");
   let styear = localStorage.getItem("styear");
   let endyear = localStorage.getItem("endyear");
   let company = localStorage.getItem("company");
  let comlocation =  localStorage.getItem("comlocation");
  let jobtitle =  localStorage.getItem("jobtitle");
  let achv1 =  localStorage.getItem("achv1");
  let achv2 =  localStorage.getItem("achv2");
   let achv3 = localStorage.getItem("achv3");

let picture = localStorage.getItem("Profile_pic")

   let resname :any = document.getElementById('resname')
  resname.textContent = myName

  
  let resDesig :any = document.getElementById('resDesig')
  resDesig.textContent = desig

  let resphone :any = document.getElementById('resphone')
  resphone.textContent = phone
  
  
  let resemail :any = document.getElementById('resemail')
  resemail .textContent = email

  let resadd :any = document.getElementById('resadd')
  resadd.textContent = add

  let respass :any = document.getElementById('respass')
  respass.textContent = pass1

  let resdeg1 :any = document.getElementById('resdeg1')
  resdeg1.textContent = deg1


  let  resuni:any = document.getElementById('resuni')
  resuni.textContent = uni

  let respass2 :any = document.getElementById('respass2')
  respass2.textContent = pass2

  let resdeg2 :any = document.getElementById('resdeg2')
  resdeg2.textContent = deg2


  let  resuni2:any = document.getElementById('resuni2')
  resuni2.textContent = uni2

  let resskill1:any = document.getElementById('resskill1')
  resskill1.textContent =skill1 

  let resskill2:any = document.getElementById('resskill2')
  resskill2.textContent =skill2 

  let  resskill3:any = document.getElementById('resskill3')
  resskill3.textContent = skill3

  let  reslang:any = document.getElementById('reslang')
  reslang.textContent = lang

  let  reslang2:any = document.getElementById('reslang2')
  reslang2.textContent = lang2


  
  let  resstyear:any = document.getElementById('resstyear')
  resstyear.textContent = styear

  let  resendyear:any = document.getElementById('resendyear')
  resendyear.textContent = endyear

  let  rescompany:any = document.getElementById('rescompany')
  rescompany.textContent = company 

  let  rescomlocation:any = document.getElementById('rescomlocation')
  rescomlocation.textContent = comlocation

  let  resjobtitle:any = document.getElementById('resjobtitle')
  resjobtitle.textContent = jobtitle

  let resach1 :any = document.getElementById('resach1')
  resach1.textContent = achv1

  let  resach2 :any = document.getElementById('resach2')
  resach2.textContent = achv2

  let  resach3 :any = document.getElementById('resach3')
  resach3.textContent = achv3

  let  resimg :any = document.getElementById('resimg')
  resimg.textContent = picture



})

let editbtn = document.getElementById("editbtn");
editbtn?.addEventListener("click" , ()=>{
  window.history.back()
})

let sharebtn = document.getElementById("sharebtn");
let anc = document.getElementById("anc")
let userName;
if(myName){
  userName = myName.toLowerCase().replace(/\s+/g , "-")
}else{
  userName = "user"
}

let baseUrl = "http://127.0.0.1:5500/resume/resume.html"
let uniqueUrl = `${baseUrl}?/${myName}`


sharebtn?.addEventListener("click" , ()=>{
anc?.setAttribute("href" , uniqueUrl)
});

let copybtn = document.getElementById("copybtn")
copybtn?.addEventListener("click" ,()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert("copy done")
  })
})