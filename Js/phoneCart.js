document.getElementsByClassName('homeIcon')[0].addEventListener('click', toHome)
document.getElementsByClassName('footerIcons')[0].addEventListener('click', toInns)
document.getElementsByClassName('footerIcons')[1].addEventListener('click', toMenu)

function toHome()
{
    window.location='/home.html';
}

function toInns()
{
    window.location='/phoneRest.html';
}

function toMenu()
{
    window.location='/phoneMenu.html';
}

function getAllOrders()
{
    let output='';
    var getToken=sessionStorage.getItem('Access_Token');
    var getUsername=sessionStorage.getItem('Username');
    fetch('https://foodhub-delivery.herokuapp.com/user/'+getUsername+'/orders?'+'token='+getToken,{
        method: 'GET'
    })
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach(order =>{

           output+=`<h3>${order.Name}</h2>
           <h3>${order.Status}</h2>
           `;
        })
        document.getElementById('cartItems').innerHTML=output;
    });

}

getAllOrders()

document.getElementById('btnClick').addEventListener('click', changeText)

function changeText()
{
    document.getElementById('btnClick').innerHTML='Successfully Processed'
}