const lengthSliderval=document.querySelector("#lengthSlider")
const sliderValueval=document.querySelector('#sliderValue')
const textshown=document.querySelector('#password')
const strength=document.querySelector('.strength')
const image=document.querySelector('.change')
const colorarr=document.querySelectorAll('.color')
const copy=document.querySelector('#copyIcon')
sliderValueval.innerHTML=lengthSliderval.value      //link innerhtml to length slidder value
lengthSliderval.addEventListener('input',()=>{   //update it as its an event added to slider that update the   sliderValueval.innerhtml
    sliderValueval.innerHTML=lengthSliderval.value
})
//The "onchange" event does not fire immediately when a user types in an input field.
//  It only triggers when the input loses focus thats why we use "input" for real time change

const checkbox=document.querySelectorAll('.checkbox')//its not in array form

const uppercase=document.querySelector("#uppercase") //no need use loop to add event listner
const lowercase=document.querySelector("#lowercase")
const symbols=document.querySelector("#symbols")
const numbers=document.querySelector("#numbers")
let getarr=Array.from(checkbox)
getarr.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='radio_button_unchecked'){
            e.target.innerHTML='task_alt'
            e.target.nextElementSibling.nextElementSibling.setAttribute("checked","")
        }
        else{
            e.target.innerHTML='radio_button_unchecked'
            e.target.nextElementSibling.nextElementSibling.removeAttribute("checked","")
        }
    })
})

let includelabel=document.querySelectorAll('.row label')

Array.from(includelabel).forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        if(e.target.previousElementSibling.innerHTML =='radio_button_unchecked'){
            e.target.previousElementSibling.innerHTML='task_alt'
            // e.target.nextElementSibling.setAttribute("checked","")
        }
        else{
            e.target.previousElementSibling.innerHTML='radio_button_unchecked'
            // e.target.nextElementSibling.removeAttribute("checked","")
        }
    })
})

let generate_button=document.querySelector("#generateBtn")
generate_button.addEventListener('click',()=>{
       let checked=generate_password()
       textshown.value=checked
})
function generate_password(){
    let str=""
    let ans=""
    let count=0
    if(uppercase.checked){//its just return true if its checked
        //uppercase.previousElementSibling.previousElementSibling.innerHTML=='task_alt' we can do in this way too
        str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        count++
    }
    if(lowercase.checked){
        str+="abcdefghijklmnopqrstuvwxyz"
        count++
    }
    if(symbols.checked){
        str+="!@#$%^&*()"
        count++
    }
    if(numbers.checked){
        str+="1234567890"
        count++
    }
    let lengthneeded=lengthSliderval.value
    
    for(let i=0;i<lengthneeded;i++){
        let required=str.charAt(Math.floor((Math.random()*str.length)))//formula to select random char from str
        //charAt property is used
        ans+=required
    }
    if(count>2 && ans!="") strength.style.backgroundColor = "green"
    else if(ans!="") strength.style.backgroundColor = "red"
    return ans
}
image.addEventListener('click',()=>{//to change mode
    if(image.alt=="sun"){//we can access atributes as follows
        image.src="/random_password_generator/moon.png"
        image.alt="moon"
        colorarr.forEach(element => {
            element.style.backgroundColor="white"
        });
    }
    else  {
        image.src="/random_password_generator/sun.png"
        image.alt="sun"
        colorarr.forEach(element => {
            element.style.backgroundColor="darkgrey"
        });
    } 
})
copy.addEventListener('click',()=>{//function for copybutton
    if(textshown.value!=''){//if password input is not empty then works
        navigator.clipboard.writeText(textshown.value)
        copy.innerHTML='check'

        setTimeout(()=>{//back it to its real position
            copy.innerHTML='content_copy'

        },2000)
    }
    else return
})