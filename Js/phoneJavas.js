document.getElementsByClassName('foodOrder')[0].addEventListener('click', addToCart);
function addToCart()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('orderNames')[0].innerHTML;
    document.getElementsByClassName('foodOrder')[0].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('foodOrder')[1].addEventListener('click', addToCart1);
function addToCart1()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('orderNames')[1].innerHTML;
    document.getElementsByClassName('foodOrder')[1].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('foodOrder')[2].addEventListener('click', addToCart2);
function addToCart2()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('orderNames')[2].innerHTML;
    document.getElementsByClassName('foodOrder')[2].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('foodOrder')[3].addEventListener('click', addToCart3);
function addToCart3()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('orderNames')[3].innerHTML;
    document.getElementsByClassName('foodOrder')[3].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('footerIcons')[0].addEventListener('click', toHome)
document.getElementsByClassName('footerIcons')[2].addEventListener('click', toMenu)
document.getElementsByClassName('footerIcons')[3].addEventListener('click', toCart)
document.getElementsByClassName('homeIcon')[0].addEventListener('click', toRest)

function toHome()
{
    window.location='/home.html';
}

function toMenu()
{
    window.location='/phoneMenu.html';
}

function toRest()
{
    window.location='/phoneRest.html';
}

function toCart()
{
    window.location='/phoneCart.html';
}