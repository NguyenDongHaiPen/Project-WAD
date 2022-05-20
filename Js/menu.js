$(function()
{
    $('#specialTwo').hide();
    $('#specialImgTwo').hide();
}
);

var img=document.getElementsByClassName('foodMenuPiece');
img[1].style.display='none';
img[2].style.display='none';
img[3].style.display='none';
img[4].style.display='none';
img[5].style.display='none';

var hideMenu=document.getElementById('viewMenu');
hideMenu.style.display='none';

var showForm=document.getElementsByClassName('orderFoodMenu');
showForm[0].addEventListener('click', showOrderForm)
showForm[1].addEventListener('click', showOrderForm)
showForm[2].addEventListener('click', showOrderForm)
showForm[3].addEventListener('click', showOrderForm)
showForm[4].addEventListener('click', showOrderForm)
showForm[5].addEventListener('click', showOrderForm)

function showOrderForm()
{
    window.location='/order.html'
}



var clickImgTwo=document.getElementById('sauceTwoName');
clickImgTwo.addEventListener('click', changeImg);

function changeImg()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodTwo').show(500);

        }
    )
}

var onMouseLeave=document.getElementById('sauceTwoName');
onMouseLeave.addEventListener('mouseleave', changeBackImg);

function changeBackImg()
{
    $(function()
        {
            $('#menuFoodTwo').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgThree=document.getElementById('sauceThreeName');
clickImgThree.addEventListener('click', changeImg2);

function changeImg2()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodThree').show(500);

        }
    )
}

var onMouseLeave2=document.getElementById('sauceThreeName');
onMouseLeave2.addEventListener('mouseleave', changeBackImg2);

function changeBackImg2()
{
    $(function()
        {
            $('#menuFoodThree').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgFour=document.getElementById('sauceFourName');
clickImgFour.addEventListener('click', changeImg3);

function changeImg3()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodFour').show(500);

        }
    )
}

var onMouseLeave3=document.getElementById('sauceFourName');
onMouseLeave3.addEventListener('mouseleave', changeBackImg3);

function changeBackImg3()
{
    $(function()
        {
            $('#menuFoodFour').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgFive=document.getElementById('sauceFiveName');
clickImgFive.addEventListener('click', changeImg4);

function changeImg4()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodFive').show(500);

        }
    )
}

var onMouseLeave4=document.getElementById('sauceFiveName');
onMouseLeave4.addEventListener('mouseleave', changeBackImg4);

function changeBackImg4()
{
    $(function()
        {
            $('#menuFoodFive').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

var clickImgSix=document.getElementById('sauceSixName');
clickImgSix.addEventListener('click', changeImg5);

function changeImg5()
{
    $(function()
        {
            $('#menuFoodOne').hide(500);
            $('#menuFoodSix').show(500);

        }
    )
}

var onMouseLeave5= document.getElementById('sauceSixName');
onMouseLeave5.addEventListener('mouseleave', changeBackImg5);

function changeBackImg5()
{
    $(function()
        {
            $('#menuFoodSix').hide(500);
            $('#menuFoodOne').show(500);

        }
    )
}

