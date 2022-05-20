function smoothScroll(target, duration)
{
    var target=document.querySelector(target);
    var targetPosition=target.getBoundingClientRect()
    
    
    console.log(targetPosition)
}

smoothScroll('#howItWorks', 1000);