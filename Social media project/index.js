// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//messages
const messagesNotifaction=document.querySelector('#Messages-notfication');

const messages =document.querySelector('.messages');
const message =messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');



//Theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');



//remove active class grom all the menu items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id !='notfications')
        {
            document.querySelector('.Notfications-popup').
            style.display='none';
        }
        else{
            document.querySelector('.Notfications-popup').
            style.display='block';
            document.querySelector('#notfications .notfications-count').
            style.display='none';
        }

    });
});


//====================== messages=============
//searcher chart 

const searchMessage= () =>{
    const val= messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name =user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1)
        {
            user.style.display='flex';
        }
        else{
            user.style.display='none';
        }
    })
}



//search chart 
messageSearch.addEventListener('keyup',searchMessage)

//make the messages hightligth when menu item is clicked
messagesNotifaction.addEventListener('click' ,() =>{
messages.style.boxShadow = '0 0 1rem var(--color-primary)';
messagesNotifaction.querySelector('.notfications-count').style.display='none';
setTimeout(() =>{
    messages.style.boxShadow='none'
},2000);

})


//theme
//opens the modal
const openThemeModal = () =>{
    themeModal.style.display='grid';
}
//close the modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}

//close the modal
themeModal.addEventListener('click',closeThemeModal);


theme.addEventListener('click' ,openThemeModal);

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;

        if (color.classList.contains('color-1')) {
            primary = 252;
        } else if (color.classList.contains('color-2')) {
            primary = 52;
        } else if (color.classList.contains('color-3')) {
            primary = 352;
        } else if (color.classList.contains('color-4')) {
            primary = 152;
        } else if (color.classList.contains('color-5')) {
            primary = 202;
        }

        document.documentElement.style.setProperty('--primary-color-hue', primary);
    });
});

/*******************     BACKGROUND    ***********************/
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    document.documentElement.style.setProperty('--light-color-lightness', lightColorLightness);
    document.documentElement.style.setProperty('--white-color-lightness', whiteColorLightness);
    document.documentElement.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');
    
    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        
        // Scroll to the top of the page with smooth scrolling
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const requestLink = document.getElementById('requestLink');
    const friendRequest = document.querySelector('.friend-request');

    requestLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        
        // Scroll to the friend-request div with smooth scrolling
        friendRequest.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
