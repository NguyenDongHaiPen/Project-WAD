document.getElementById('theRealMenu').style.display='none'


document.getElementById('menuIcon').addEventListener('click', showMenu);

function showMenu()
{
    document.getElementById('cartPage').style.display='none';
    document.getElementById('cartHistory').style.display='none';
    $(function()
        {
            $('#theRealMenu').slideDown(1000)
        }
    );
}

document.getElementById('realMenuClear').addEventListener('click', hideMenu);

function hideMenu()
{

    $(function()
        {
            $('#theRealMenu').slideUp(500);
            $('#cartPage').slideDown(1000);
            $('#cartHistory').slideDown(1000);
        }
    );
}

document.getElementsByClassName('realMenuTagText')[0].addEventListener('click', tokfc);
document.getElementsByClassName('realMenuTagText')[1].addEventListener('click', toPizza);
document.getElementsByClassName('realMenuTagText')[2].addEventListener('click', toJavas);
document.getElementsByClassName('realMenuTagText')[3].addEventListener('click', toMenu);
document.getElementsByClassName('realMenuTagText')[4].addEventListener('click', toHome);

function tokfc()
{
    window.location='/kfc.html'
}

function toPizza()
{
    window.location='/pizza.html'
}

function toJavas()
{
    window.location='/javas.html'
}

function toMenu()
{
    window.location='/menu.html'
}

function toHome()
{
    window.location='/menu.html'
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

           output+=`<h2>${order.Name}</h2>
           <h2>${order.Status}</h2>
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
