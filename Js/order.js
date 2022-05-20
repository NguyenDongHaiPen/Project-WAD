$(function() {
    $("#changethewords").changeWords({
      time: 4500,
      animate: "wobble",
      selector: "span",
      repeat: true
    });
});

document.getElementById('badFeedBack').style.display='none';

document.getElementById('goodFeedBack').style.display='none';

var getFormSubmit=document.getElementById('orderForm');
getFormSubmit.addEventListener('submit', runEventOne);

function runEventOne(f)
{
    f.preventDefault();
    var regex = /\d/;
    let Order= document.getElementById('Order').value;
    let Username = document.getElementById('Username').value;
    let locationforOrder = document.getElementById('locationForOrder').value;

    if(Order==null||Order=='' && Username==null||Username=='' && locationforOrder==null||locationforOrder=='')
    {
        $(function()
            {
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').innerHTML='Make sure you filled all Fields';
        return false;
    }

    if(regex.test(Order)==true)
        {
            $(function()
            {
               
                $('#badFeedBack').show(500);
            }
         )

            document.getElementById('badFeedBack').innerHTML='Order Cannot Be Numeric';
            return false;
        
        }
    
    if(Username.length<4)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }


    if(Username.length>10)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }

    else
    {
        
        let Order= document.getElementById('Order').value;
        let Username = document.getElementById('Username').value;
        let locationforOrder = document.getElementById('locationForOrder').value;
    
        fetch('https://foodhub-delivery.herokuapp.com/auth/admin/Login',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({Username:'kodek2000', Password:'mafiaX'})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=="You have successfully Logged In")
                {
                    fetch('https://foodhub-delivery.herokuapp.com/admin/users?token='+data.Access_Token,{
                    method:'GET'
                  })
                  .then((response)=>response.json())
                  .then((users)=>
                    {
                        let thisUser=document.getElementById('Username').value;
                        users.forEach(user =>
                        {
                            if(user.Username==thisUser)
                            {
                                fetch('https://foodhub-delivery.herokuapp.com/auth/user/Login',{
                                    method:'POST',
                                    headers:{
                                        'Accept':'application/json, text/plain, */*',
                                        'Content-type':'application/json'
                                    },
                                      
                                    body:JSON.stringify({Username:user.Username, Password:user.Password})
                                    })
                                    .then((loginRes)=>loginRes.json())
                                    .then((newData)=>
                                        {
                                            if(newData.Message=="You have successfully Logged In")
                                            {
                                                fetch('https://foodhub-delivery.herokuapp.com/user/orders'+'/'+user.Username+'?token='+newData.Access_Token,{
                                                    method:'POST',
                                                    headers:{
                                                        'Accept':'application/json, text/plain, */*',
                                                        'Content-type':'application/json'
                                                    },
                                                      
                                                    body:JSON.stringify({Name:Order})
                                                    })
                                                    .then((orderRes)=>orderRes.json())
                                                    .then((orderData)=>
                                                        {
                                                            if(orderData.Message=="You have successfully made your order.")
                                                            {
                                                                document.getElementById('badFeedBack').style.display='none';
                                                                $(function()
                                                                    {
                                                            
                                                                        $('#goodFeedBack').show(500);
                                                                    
                            
                                                                    }
                                                                )
                                                                document.getElementById('goodFeedBack').innerHTML="Successfully Placed Order"
                                                            }
                                                        }
                                                    )
                                            }

        
                                        }
                                    )
                                    
                            }

                            else
                            {
                                $(function()
                                {
                                    $('#badFeedBack').show(600);
                                }
                            )
                                document.getElementById('badFeedBack').innerHTML="Invalid Username"
                            }
                            
                        });
                    }
                  )
                }
            })
           
            return true
    }

}


var toMenu=document.getElementById('toHomePage');
toMenu.addEventListener('click', backMenu)

function backMenu()
{
    window.location='/menu.html';
}