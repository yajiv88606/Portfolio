var dark = true;
var variables = document.querySelector(':root')

var themeSelector = document.getElementById('theme')

document.getElementById("theme").addEventListener('click',(event)=>{
    document.getElementById('span').innerHTML=''
    if(dark){
        variables.style.setProperty('--primary','teal')
        variables.style.setProperty('--radiant-color','radial-gradient(#494949, #323232,#191919)')
        variables.style.setProperty('--shadow','1px 2px 1px 0px rgb(255 255 255);')
        variables.style.setProperty('--card-background','rgb(19, 22, 22)')
        variables.style.setProperty('--secondary','#92b4b4')
        themeSelector.innerHTML = '<i class="far fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','white')
     
    
    }else{
        variables.style.setProperty('--primary','#ef00ab')
        variables.style.setProperty('--secondary','black')
        variables.style.setProperty('--radiant-color','radial-gradient(#b6b6b6, #a7a7a7, #383838)')
        variables.style.setProperty('--shadow','5px 3px 11px 0px rgb(29 29 29)')
        variables.style.setProperty('--card-background','white')
        themeSelector.innerHTML = '<i class="fas fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','black')
    }
    dark = !dark;
})

//1px 2px 1px 0px rgb(255 255 255);