document.getElementsByClassName('footerIcons')[0].addEventListener('click', toHome)
document.getElementsByClassName('footerIcons')[1].addEventListener('click', toInns)
document.getElementsByClassName('footerIcons')[3].addEventListener('click', toCart)

function toHome()
{
    window.location='/home.html';
}

function toInns()
{
    window.location='/phoneRest.html';
}

function toCart()
{
    window.location='/phoneCart.html';
}


document.getElementsByClassName('cartBtns')[0].addEventListener('click', addToCart);
function addToCart()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[0].innerHTML;
    document.getElementsByClassName('cartBtns')[0].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[1].addEventListener('click', addToCart1);
function addToCart1()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[1].innerHTML;
    document.getElementsByClassName('cartBtns')[1].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[2].addEventListener('click', addToCart2);
function addToCart2()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[2].innerHTML;
    document.getElementsByClassName('cartBtns')[2].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[3].addEventListener('click', addToCart3);
function addToCart3()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[3].innerHTML;
    document.getElementsByClassName('cartBtns')[3].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[4].addEventListener('click', addToCart4);
function addToCart4()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[4].innerHTML;
    document.getElementsByClassName('cartBtns')[4].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}

document.getElementsByClassName('cartBtns')[5].addEventListener('click', addToCart5);
function addToCart5()
{
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    var getName=document.getElementsByClassName('mF')[5].innerHTML;
    document.getElementsByClassName('cartBtns')[5].innerHTML="Added";
    fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+getUsername+'?token='+getToken, {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            
        body:JSON.stringify({Name:getName})
        })
}