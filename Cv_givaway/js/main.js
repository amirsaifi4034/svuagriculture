var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("steps");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("steps");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("stepByStepForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("steps");
  y = x[currentTab].getElementsByTagName("input");

  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let pincode = document.getElementById("pincode");
  let emailV = document.getElementById("email");
  let emailVal = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  

  for (i = 0; i < y.length; i++) {
    if (y[i].value.length < 2) {
      y[i].className += " invalid";
      valid = false;
    }else if (name.value.length < 3 ){
      name.className += " invalid";
      valid = false;
    }else if (phone.value.length <=9 || phone.value.length >=11) {
      phone.className += " invalid";
      valid = false;
    }else if (!emailV.value.match(emailVal)) {
      emailV.className += " invalid";
      valid = false;
    }else if (pincode.value.length <=5 || pincode.value.length >=7) {
      pincode.className += " invalid";
      valid = false;
    }
    y[i].addEventListener("change", function () {
      this.classList.remove("invalid");
      console.log(this.className.replaceAll("invalid", ""));
      });
  }
  if (valid) {
    document.getElementsByClassName("progressbar")[currentTab].className += " full";
  }

  return valid;


}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("progressbar");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}



    // -----------2 steps show input feild----------- //

        function workingOne() {
            let checkBtn = document.getElementById("working1").checked;
            let showInput = document.getElementById("organization");
            
            if (checkBtn === true) {
                showInput.innerHTML = `
                <label class="mb-1 mt-4"><small>Organization name</small></label>
                <input type="text" name="organization" class="form-control" placeholder="Organization name">`;
            }
        }
        function workingTwo() {
            let checkBtn2 = document.getElementById("working2").checked;
            let showInput = document.getElementById("organization");
            
            if (checkBtn2 === true) {
              showInput.innerHTML = ``;
            } 
        }

        function redirectFun() {
          let review = document.getElementById("satisfied1").checked;
          var link = document.getElementById("link");

          if (review === true) {
                link.click();
          }
        }
        // ----------select other steps5--------- //

        function Others() {
            let select = document.getElementById("cvHelp").value;
            let showField = document.getElementById("letKnow");
            if(select === "others"){
                showField.innerHTML = `<input required type="text" class="form-control mt-3" id="letKnow" placeholder="Write your answer" style="display: none;">`;
            } else if(select !== "others"){
                showField.innerHTML = "";
            }
        }