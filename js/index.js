var dark = true;
var variables = document.querySelector(':root')

var themeSelector = document.getElementById('theme')

document.getElementById("theme").addEventListener('click',(event)=>{
    document.getElementById('span').innerHTML=''
    if(dark){
       // variables.style.setProperty('--primary','white')
        variables.style.setProperty('--radiant-color','radial-gradient(#585858, #3f3f3f,black)')
        variables.style.setProperty('--shadow','1px 2px 1px 0px rgb(255 255 255);')
        themeSelector.innerHTML = '<i class="far fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','white')
     
    
    }else{
        variables.style.setProperty('--primary','#ef00ab')
        variables.style.setProperty('--radiant-color','radial-gradient(white, #e7e7e7, #838383)')
        variables.style.setProperty('--shadow','5px 3px 11px 0px rgb(29 29 29)')
        themeSelector.innerHTML = '<i class="fas fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','black')
    }
    dark = !dark;
})

//1px 2px 1px 0px rgb(255 255 255);