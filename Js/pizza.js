var grabMenu=document.getElementById('theRealMenu');
grabMenu.style.display='none'

var onClickMenu=document.getElementById('kfcMenuIcon');
onClickMenu.addEventListener('click', showMenu)

function showMenu()
{
    $(function()
        {
            $('#logo').slideUp(500);
            $('.theFoods').slideUp(500);
            $('#search').slideUp(500);
            $('#theRealMenu').slideDown(1000);

        }
    )

}

var onClickClose=document.getElementById('realMenuClear');
onClickClose.addEventListener('click', hideMenu)

function hideMenu()
{
    $(function()
        {
            $('#theRealMenu').slideUp(500);
            $('#logo').slideDown(1000);
            $('.theFoods').slideDown(1000);
            $('#search').slideDown(500);
        }
    )

}

var OrderBtns=document.getElementsByClassName('foodOrder');
OrderBtns[0].addEventListener('click', showOrderDetails)
OrderBtns[1].addEventListener('click', showOrderDetails)
OrderBtns[2].addEventListener('click', showOrderDetails)
OrderBtns[3].addEventListener('click', showOrderDetails)

function showOrderDetails()
{
    window.location='/order.html'
}
