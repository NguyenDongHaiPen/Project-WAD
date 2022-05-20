var hideFeed=document.getElementById('badFeedBack');
hideFeed.style.display='none';

var Form = document.getElementById('signForm');
Form.addEventListener('submit', validateForm);

function validateForm(l)
{
    l.preventDefault()
   
    let Username = document.getElementById('Username').value;
    let Password = document.getElementById('Password').value;

    if(Username==null||Username=='' && Password==null||Password=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').value='Make sure you filled all Fields';
        return false;
    }

    if(Username.length<4)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').value='Username should have between 5 to 9 characters';
        return false;
    }


    if(Username.length>10)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').value='Username should have between 5 to 9 characters';
        return false;
    }

    else
    {
        let Username = document.getElementById('Username').value;       
        let Password = document.getElementById('Password').value;
        sessionStorage.setItem('Username', Username);
        sessionStorage.setItem('Password', Password);
        
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
                    window.location='/home.html';
                    sessionStorage.setItem('Access_Token', data.Access_Token);
                }

                else
                {
                    $(function()
                        {
                            $('#badFeedBack').show(500);
                        }
                    )
                }
            })
           
            return true
    }
}

var clickWordSign=document.getElementById('signUpWord');
clickWordSign.addEventListener('click', displayLogin)

function displayLogin()
{
    window.location='/phoneSignUp.html'
}