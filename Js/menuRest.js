var hideRealMenu = document.getElementById('theRealMenu');
hideRealMenu.style.display="none";


var clickIconMenu = document.getElementById('restMenu');
clickIconMenu.addEventListener('click', showRealMenu);

function showRealMenu()
{
   $(function()
        {
            $('#beginning').fadeOut(800);
            $('#howItWorks').fadeOut(800);
            $('#restaurants').fadeOut(800);
            $('#footer').fadeOut(800);
            $('#theRealMenu').slideDown(1000);
        }
   );
}

var clickIconHow = document.getElementById('howMenu');
clickIconHow.addEventListener('click', showRealMenu2);

function showRealMenu2()
{
   $(function()
        {
            $('#beginning').fadeOut(800);
            $('#howItWorks').fadeOut(800);
            $('#restaurants').fadeOut(800);
            $('#footer').fadeOut(800);
            $('#theRealMenu').slideDown(1000);
        }
   );
}

var clickIconDis = document.getElementById('displayMenuIcon');
clickIconDis.addEventListener('click', showRealMenu3);

function showRealMenu3()
{
   $(function()
        {
            $('#beginning').fadeOut(800);
            $('#howItWorks').fadeOut(800);
            $('#restaurants').fadeOut(800);
            $('#footer').fadeOut(800);
            $('#theRealMenu').slideDown(1000);
        }
   );
}

var clearRealIcon = document.getElementById('realMenuClear');
clearRealIcon.addEventListener('click', hideRealMenu1);

function hideRealMenu1()
{
   $(function()
        {
            $('#theRealMenu').slideUp(1000);
            $('#beginning').fadeIn(1500);
            $('#howItWorks').fadeIn(1500);
            $('#restaurants').fadeIn(1500);
            $('#footer').fadeIn(1500);
           
        }
   );
}



var showOrderMenu = document.getElementById('orderFoods');
showOrderMenu.addEventListener('click', showOrderFoods);

function showOrderFoods()
{
   $(function()
        {
            $('#theRealMenu').slideUp(1000);
            $('#viewMenu').fadeIn(1500);
           
        }
   );
}

var hideOrderMenu = document.getElementById('sauceMenuIcon');
hideOrderMenu.addEventListener('click',hideOrderFoods);

function hideOrderFoods()
{
   $(function()
        {
            $('#viewMenu').fadeOut(1000);
            $('#theRealMenu').slideDown(1500)
           
        }
   );
}

var clickfooterMenu = document.getElementById('footerMenu');
clickfooterMenu.addEventListener('click', showRealMenu5);

function showRealMenu5()
{
   $(function()
        {
            $('#beginning').fadeOut(800);
            $('#howItWorks').fadeOut(800);
            $('#restaurants').fadeOut(800);
            $('#footer').fadeOut(800);
            $('#theRealMenu').slideDown(1000);
        }
   );
}

var toRestKfc=document.getElementById('toKfc');
toRestKfc.addEventListener('click', toKfcRest);

function toKfcRest()
{
    window.location='/kfc.html';
}

var toCart=document.getElementById('toCart');
toCart.addEventListener('click', toCartProfile);

function toCartProfile()
{
    window.location='/cart.html';
}


var toRestJavas=document.getElementById('toJavas');
toRestJavas.addEventListener('click', toJavasRest);

function toJavasRest()
{
    window.location='/javas.html';
}

var toRestHut=document.getElementById('toPizza');
toRestHut.addEventListener('click', toPizzaRest);

function toPizzaRest()
{
    window.location='/pizza.html';
}

var toFoodPages=document.getElementsByClassName('toPages');
toFoodPages[0].addEventListener('click', toPageKfc);
toFoodPages[1].addEventListener('click', toPagesPizaaHut);
toFoodPages[2].addEventListener('click', toPageJavas);


function toPageKfc()
{
    window.location='/kfc.html';
}

function toPagesPizaaHut()
{
    window.location='/pizza.html';
}

function toPageJavas()
{
    window.location='/javas.html';
}

document.getElementById('carter').addEventListener('click', toCarter);
function toCarter()
{
    window.location='/cart.html'
}