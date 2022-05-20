var hideGoodBox=document.getElementById('goodFeedBack');
hideGoodBox.style.display='none'

var hideBadBox=document.getElementById('loginFeedBack');
hideBadBox.style.display='none'

$(function() {
    $("#changethewords-login").changeWords({
      time: 4500,
      animate: "wobble",
      selector: "span",
      repeat: true
    });
});

var type = document.getElementById('goodFeedBack');
type.addEventListener('mouseover', removeGoodFeedBack)

function removeGoodFeedBack()
{
    $(function()
     {
        $("#goodFeedBack").hide(1500)
     }
    )
}

var loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validateLoginForm)

function validateLoginForm(l)
{
    l.preventDefault()
   
    let Username = document.getElementById('Username-login').value;
    let Password = document.getElementById('Password-login').value;
    sessionStorage.setItem('Username', Username);
    sessionStorage.setItem('Password', Password);

    if(Username==null||Username=='' && Password==null||Password=='')
    {
        $(function()
            {
               
                $('#loginFeedBack').show(500);
            }
        )
        document.getElementById('loginFeedBack').innerHTML='Make sure you filled all Fields';
        return false;
    }

    if(Username.length<4)
    {
        $(function()
        {
            
            $('#loginFeedBack').show(500);
        }
        )

        document.getElementById('loginFeedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }


    if(Username.length>10)
    {
        $(function()
        {
            
            $('#loginFeedBack').show(500);
        }
        )

        document.getElementById('loginFeedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }

    else
    {
        let Username = document.getElementById('Username-login').value;       
        let Password = document.getElementById('Password-login').value;
            
        fetch('https://foodhub-delivery.herokuapp.com/auth/user/Login',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({Username:Username, Password:Password})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='You have successfully Logged In')
                {
                    $(function()
                        {
                            $('#goodFeedBack').show(500);
                        }
                    )
                    document.getElementById('goodFeedBack').innerHTML='Successfully Logged In'
                    sessionStorage.setItem('Access_Token', data.Access_Token);
                    window.location='/menu.html';
                }

                else
                {
                    $(function()
                        {
                            $('#loginFeedBack').show(500);
                        }
                    )

                    document.getElementById('loginFeedBack').innerHTML='Invalid Username or Password';
                }
            })
           
            return true
    }
}

var toMenu=document.getElementById('backHome');
toMenu.addEventListener('click', backMenu)

function backMenu()
{
    window.location='/index.html';
}




