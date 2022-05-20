document.getElementsByClassName('footerIcons')[0].addEventListener('click', toHome)
document.getElementsByClassName('footerIcons')[1].addEventListener('click', toMenu)
document.getElementsByClassName('footerIcons')[3].addEventListener('click', toCart)

function toHome()
{
    window.location='/home.html';
}

function toMenu()
{
    window.location='/phoneMenu.html';
}

function toCart()
{
    window.location='/phoneCart.html';
}