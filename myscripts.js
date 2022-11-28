
//USD, EURO, POUND, WON, YEN,  YAN
//captchaArray = ['4+9', '4*8', '7-3', '5*9', '8/2', '11-5'];
//exchangeArray = [2870, 3120, 3500, 2.3, 123, 11];

var btn = document.querySelectorAll(".r > div");
var inp = document.querySelector("input");
btn.forEach(val=>{
    val.addEventListener("click", ()=>{
        inp.value+=val.innerText;
    })
})


function myFunction(){
    var pic;
    var form = parseInt(document.getElementById('myInput').value);
    var city = document.getElementById('number_select').value;
    if(city == 'USD'){
        parseFloat(document.getElementById('total_price').value = form * 2870+" MNT");
    }
    else if(city == 'EURO'){
        parseInt(document.getElementById('total_price').value = form * 3120+" MNT");
    }
    else if(city == 'POUND'){
        parseInt(document.getElementById('total_price').value = form * 3500+" MNT");
    }
    else if(city == 'WON'){
        parseInt(document.getElementById('total_price').value = form * 2.3+" MNT");
    }
    else if(city == 'YEN'){
        parseInt(document.getElementById('total_price').value = form * 123+" MNT");
    } 
    else if(city == 'YAN'){
        parseInt(document.getElementById('total_price').value = form * 11+" MNT");
    }
}
    var allValue = ["4+9", "4*8", "7-3", "5*9", "8/2", "11-5"];
    var cVal1 = allValue[Math.floor(Math.random() * allValue.length)];
    //alert(cVal1)
    
    captchaValue.innerHTML = cVal1
    /*thisValue = "";
    inputCaptcha.addEventListener('change', function(){
        thisValue = inputCaptcha.value;
        //alert(thisValue);
    })

    submitBtn.addEventListener('click', function(){
        if(cVal1 == parseInt(document.getElementById('inputCaptcha').value)){
            alert('Valid');
            document.logForm.submitBtn();
        }
        else if(cVal1 != parseInt(document.getElementById('inputCaptcha').value)){
            alert('Invalid');
        }
    })*/
