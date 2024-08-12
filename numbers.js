
let use=JSON.parse(localStorage.getItem("log"))
document.getElementById("name").innerText=use[0].username
function showform(data) {
  document.querySelectorAll('.card').forEach(card => {
      card.style.display = 'none';
  });
  
  document.querySelector(`.${data}`).style.display = "block";
  
  }
const listItems = document.querySelectorAll('.offcanvas-body ul li p');

  // Add a click event listener to each item
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Close the offcanvas after selecting an option
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
      offcanvasInstance.hide();
    });
  });
// second navbar
document.querySelector(".fact .num").addEventListener("click", () => {
     document.querySelector(".staticpics").style.display="none"
  showform("number");
});
document.querySelector(".fact .da").addEventListener("click", () => {
     document.querySelector(".staticpics").style.display="none"
  showform("day");
});
document.querySelector(".fact .tri").addEventListener("click", () => {
     document.querySelector(".staticpics").style.display="none"
  showform("trivia");
});
document.querySelector(".fact .yea").addEventListener("click", () => {
     document.querySelector(".staticpics").style.display="none"
  showform("year");
});
document.querySelector(".fact .ran").addEventListener("click", () => {
  document.querySelector(".staticpics").style.display="none" 
  showform("rand");
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      
      const navbarCollapse = document.getElementById('navbarNavAltMarkup');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    });
  });



// day fact
let date = document.getElementById("data1"); 
let form1 = document.forms[3];
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  let day = date.value;
  fetchDateFact(day);
});
const fetchDateFact = async (day,from) => {
  const url = `https://numbersapi.p.rapidapi.com/${day}/date`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ec1f622464msha411f46caa30f26p1a7c33jsn9215ca03fe87",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();

  
    if(response.ok){
      if(from){
        let c5= document.getElementById("result5");
        c5.innerText = result;
    }
    else{
      let c = document.getElementById("result1");
        c.innerText = result;
    }
    }else{
      let c = document.getElementById("result1");
      c.innerText ="Enter only numbers";
    }
    
  } catch (error) {
    console.log(error)
  }
};

//Numbers
let number = document.getElementById("data2");
let form2 = document.forms[0];


form2.addEventListener("submit", function (e) {
  e.preventDefault();
  let num = number.value;
 console.log(num);
  fetchNumberfact(num);
});
let fetchNumberfact = async (num,from) => {
  let url = `https://numbersapi.p.rapidapi.com/${num}/math`;
 
  
  let options = {
    method: "get",
    headers: {
      "x-rapidapi-key": "ec1f622464msha411f46caa30f26p1a7c33jsn9215ca03fe87",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  };
  try {
    let response = await fetch(url, options);
    let result = await response.text();
    if(response.ok){
      if(from){
        let c5 = document.getElementById("result5");
        c5.innerText = result;
      }else{
        let n = document.getElementById("result2");
        n.innerText = result;
      }
    }
    else{
      let n = document.getElementById("result2");
      n.innerText ="Enter only numbers";
    }
  } catch (error) {
    console.log(error);
  }
};

//trivia fact
let getinput = document.getElementById("data3");
let form3 = document.forms[1];
form3.addEventListener("submit", function (e) {
  e.preventDefault();
  let trivia = getinput.value;
  fetchtriviadata(trivia);
});
let fetchtriviadata = async (trivia,from) => {
  const url = `https://numbersapi.p.rapidapi.com/${trivia}/trivia?min=10&max=20`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ec1f622464msha411f46caa30f26p1a7c33jsn9215ca03fe87",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    if(response.ok){
      if(from){
        let c5 = document.getElementById("result5");
        c5.innerText = result;
      }else{
        let d3 = document.getElementById("result3");
        d3.innerText = result;
      }
    }else{
      let d3 = document.getElementById("result3");
      d3.innerText="Enter only numbers"
    }
    
  } catch (error) {
    console.log(errror);
  }
};

//year fact
let getyear = document.getElementById("data4");
let form4 = document.forms[2];
form4.addEventListener("submit", function (e) {
  e.preventDefault();
  let year = getyear.value;
  fetchyearfact(year);
});
const fetchyearfact = async (year,from) => {
  const url = `https://numbersapi.p.rapidapi.com/${year}/year`;
  const options = {
    method: "get",
    headers: {
      "x-rapidapi-key": "ec1f622464msha411f46caa30f26p1a7c33jsn9215ca03fe87",
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  };
  try {
    let d4 = document.getElementById("result4");
    const response = await fetch(url, options);
    const result = await response.text();
    if (response.ok) {
      if(from){
        let c5=document.getElementById("result5")
        c5.innerText = result;
      }else{
        d4.innerText = result;
      }
    } else {
      d4.innerText = "Enter only numbers";
    }
  } catch (error) {
    console.log(error);
  }
};
let input = document.getElementById("random");
input.addEventListener("input", function () {
  let value = input.value;
  if (value == "Day") {
    let d =
      Math.floor(Math.random() * 10) + "/" + Math.floor(Math.random() * 10);
    console.log(d);
    fetchDateFact(d,true);
  } else if (value == "Math") {
    let n = Math.floor(Math.random() * 10);
    fetchNumberfact(n,true);

  } else if (value == "Trivia") {
    let n = Math.floor(Math.random() * 10);
    fetchtriviadata(n,true)

  } else if (value == "Year") {
    y = "";
    for (i = 0; i < 4; i++) {
      y += Math.floor(Math.random() * 10);
    }
    fetchyearfact(y,true)
  }
});
let math = document.getElementById("mathbut");
let trivia = document.getElementById("triviabut");
let year = document.getElementById("yearbut");
