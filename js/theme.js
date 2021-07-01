var dark = false;
var variables = document.querySelector(':root')

var themeSelector = document.getElementById('theme')

// default themes
// --primary-background: #530e8b;
// --secondary-background: #4c1a75;
// --primary-header-color: #e7562e;
// --secondary-header-color: #21e9db;
// --about-details-color:#4acac2;
// --nav-color:rgb(216, 216, 216);
// --nav-on-hover:white;


document.getElementById("theme").addEventListener('click',(event)=>{
    document.getElementById('theme').innerHTML=''
    if(dark){
        variables.style.setProperty('--primary-background','#530e8b')
        variables.style.setProperty('--secondary-background','#4c1a75')
        variables.style.setProperty('--primary-header-color','#e7562e')
        variables.style.setProperty('-secondary-header-color','#21e9db')
        variables.style.setProperty('--about-details-color','#4acac2')
        variables.style.setProperty('--nav-color','rgb(216, 216, 216)')
        variables.style.setProperty('--empty-background-color','#252525;')
        variables.style.setProperty('--nav-on-hover','white')
        themeSelector.innerHTML = '<i class="fas fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','white')   
    }else{      
// // default light theme
// --primary-background: #ffffff;
// --secondary-background: #f1f1f1;
// --primary-header-color: #202020;
// --secondary-header-color: #2c2a2a;
// --about-details-color:#181818;
// --nav-color:rgb(97, 97, 97);
// --nav-on-hover:rgb(97, 97, 97);
// --empty-background-color:#rgb(97, 97, 97);

        variables.style.setProperty('--primary-background','#ffffff')
        variables.style.setProperty('--secondary-background','#f1f1f1')
        variables.style.setProperty('--primary-header-color','#202020')
        variables.style.setProperty('-secondary-header-color','#2c2a2a')
        variables.style.setProperty('--about-details-color','#181818')
        variables.style.setProperty('--nav-color','rgb(97, 97, 97)')
        variables.style.setProperty('--nav-on-hover','rgb(97, 97, 97)')
        variables.style.setProperty('--empty-background-color','#rgb(97, 97, 97)')
        variables.style.setProperty('--text-header-color','black')
        themeSelector.innerHTML = '<i class="fas fa-lightbulb"></i>'
        themeSelector.style.setProperty('color','black')
    }
    dark = !dark;
})

//1px 2px 1px 0px rgb(255 255 255);