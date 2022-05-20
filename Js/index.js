$(function()
    {
        $('#menuPage').hide(100);
        $('#feedBack').hide(100);
        $('#signInPage').hide(100);
        $('#loginFeedBack').hide(100);
        $('#goodFeedBack').hide(100);
        $('#loginPage').hide(100);
    }
)

var firstClick = document.getElementById('menuIcon');
firstClick.addEventListener('click', runEventOne)

function runEventOne()
{
    $(function()
     {
        $('header').slideUp(800);
        $('#menuPage').slideDown(2000);
     }
    )
}

var secondClick = document.getElementById('menuclear');
secondClick.addEventListener('click', runEventTwo)

function runEventTwo()
{
    $(function()
     {
        $('#menuPage').slideUp(500);
        $('header').slideDown(2000);
     }
    )
}
