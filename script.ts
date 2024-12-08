let myName: HTMLInputElement = document.getElementById('myName') as HTMLInputElement;
let desig: HTMLInputElement = document.getElementById('desig') as HTMLInputElement;
let phone: HTMLInputElement = document.getElementById('phone') as HTMLInputElement;
let email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
let add: HTMLInputElement = document.getElementById('add') as HTMLInputElement;
let pass1: HTMLInputElement = document.getElementById('pass1') as HTMLInputElement;
let deg1: HTMLInputElement = document.getElementById('deg1') as HTMLInputElement;
let uni: HTMLInputElement = document.getElementById('uni') as HTMLInputElement;
let pass2: HTMLInputElement = document.getElementById('pass2') as HTMLInputElement;
let deg2: HTMLInputElement = document.getElementById('deg2') as HTMLInputElement;
let uni2: HTMLInputElement = document.getElementById('uni2') as HTMLInputElement;
let skill1: HTMLInputElement = document.getElementById('skill1') as HTMLInputElement;
let skill2: HTMLInputElement = document.getElementById('skill2') as HTMLInputElement;
let skill3: HTMLInputElement = document.getElementById('skill3') as HTMLInputElement;
let lang: HTMLInputElement = document.getElementById('lang') as HTMLInputElement;
let lang2: HTMLInputElement = document.getElementById('lang2') as HTMLInputElement;
let styear: HTMLInputElement = document.getElementById('styear') as HTMLInputElement;
let endyear: HTMLInputElement = document.getElementById('endyear') as HTMLInputElement;
let company: HTMLInputElement = document.getElementById('company') as HTMLInputElement;
let comlocation: HTMLInputElement = document.getElementById('comlocation') as HTMLInputElement;
let jobtitle: HTMLInputElement = document.getElementById('jobtitle') as HTMLInputElement;
let achv1: HTMLInputElement = document.getElementById('achv1') as HTMLInputElement;
let achv2: HTMLInputElement = document.getElementById('achv2') as HTMLInputElement;
let achv3: HTMLInputElement = document.getElementById('achv3') as HTMLInputElement;
let pic: HTMLInputElement = document.getElementById('pic') as HTMLInputElement;


let submitbtn = document.getElementById('submitbtn') as HTMLInputElement;
let form = document.getElementById('form') as HTMLFormElement;

form?.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Store all form data in localStorage
  localStorage.setItem("myName", myName.value);
  localStorage.setItem("desig", desig.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("add", add.value);
  localStorage.setItem("pass1", pass1.value);
  localStorage.setItem("deg1", deg1.value);
  localStorage.setItem("uni", uni.value);
  localStorage.setItem("pass2", pass2.value);
  localStorage.setItem("deg2", deg2.value);
  localStorage.setItem("uni2", uni2.value);
  localStorage.setItem("skill1", skill1.value);
  localStorage.setItem("skill2", skill2.value);
  localStorage.setItem("skill3", skill3.value);
  localStorage.setItem("lang", lang.value);
  localStorage.setItem("lang2", lang2.value);
  localStorage.setItem("styear", styear.value);
  localStorage.setItem("endyear", endyear.value);
  localStorage.setItem("company", company.value);
  localStorage.setItem("comlocation", comlocation.value);
  localStorage.setItem("jobtitle", jobtitle.value);
  localStorage.setItem("achv1", achv1.value);
  localStorage.setItem("achv2", achv2.value);
  localStorage.setItem("achv3", achv3.value);



  if(pic.files && pic.files[0]) {
    let reader = new FileReader()
    reader.addEventListener("load" ,()=>{
      let textImg :any = reader.result
      localStorage.setItem("Profile_pic" , textImg)
      
    })
    reader.readAsDataURL(pic.files[0])
  }
  
 window.location.href = "./resume/resume.html"

});
