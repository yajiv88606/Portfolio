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


// // default light theme
// --primary-background: #bbbbbb;
// --secondary-background: #e1e1e1;
// --primary-header-color: #000000;
// --about-details-color: #1b1b1b;
// --nav-color: rgb(47 47 47);
// --nav-on-hover: black;
// --empty-background-color: #rgb(29 29 29);
// --text-header-color: black;


document.getElementById("theme").addEventListener('click',(event)=>{
    if(dark){
        variables.style.setProperty('--primary-background','#1b1b1b')
        variables.style.setProperty('--secondary-background','#222222')
        variables.style.setProperty('--primary-header-color','#e7562e')
        variables.style.setProperty('-secondary-header-color','#21e9db')
        variables.style.setProperty('--about-details-color','#4acac2')
        variables.style.setProperty('--nav-color','rgb(216, 216, 216)')
        variables.style.setProperty('--empty-background-color','#252525;')
        variables.style.setProperty('--nav-on-hover','white')
        themeSelector.style.setProperty('color','white')   
    }else{      
        variables.style.setProperty('--primary-background','#bbbbbb')
        variables.style.setProperty('--secondary-background','#e1e1e1')
        variables.style.setProperty('--primary-header-color','#000000')
        variables.style.setProperty('-secondary-header-color','#2c2a2a')
        variables.style.setProperty('--about-details-color','#1b1b1b')
        variables.style.setProperty('--nav-color','rgb(47 47 47)')
        variables.style.setProperty('--nav-on-hover','black')
        variables.style.setProperty('--empty-background-color','rgb(29 29 29)')
        variables.style.setProperty('--text-header-color','black')
        themeSelector.style.setProperty('color','black')
    }
    dark = !dark;
})
