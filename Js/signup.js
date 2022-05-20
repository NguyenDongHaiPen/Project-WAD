function displayNone()
{
    document.getElementById('feedBack').style.display='none';
    document.getElementById('goodFeedBack').style.display='none';
}

displayNone()

$(function() {
    $("#changethewords").changeWords({
      time: 4500,
      animate: "wobble",
      selector: "span",
      repeat: true
    });
});

var Form = document.getElementById('formForm');
Form.addEventListener('submit', validateForm)

function validateForm(f)
{
    f.preventDefault()
    var regex = /\d/;
    let Name = document.getElementById('Name').value;
    let Username = document.getElementById('Username').value;
    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value;
    let Country = document.getElementById('Country').value;
    let City = document.getElementById('City').value;
    let Address = document.getElementById('Address').value;

    if(Name==null||Name=='' && Username==null||Username=='' && Email==null||Email=='' && Password==null||Password=='' && City==null||City=='' && Address==null||Address=='')
    {
        $(function()
            {
               
                $('#feedBack').show(500);
            }
        )
        document.getElementById('feedBack').innerHTML='Make sure you filled all Fields';
        return false;
    }

    if(regex.test(Name)==true)
        {
            $(function()
            {
               
                $('#feedBack').show(500);
            }
         )

            document.getElementById('feedBack').innerHTML='Name Cannot Be Numeric';
            return false;
        
        }
    
    if(regex.test(City)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='City Cannot Be Numeric';
        return false;
    
    }


    if(regex.test(Country)==true)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Country Cannot Be Numeric';
        return false;
    
    }

    if(Username.length<4)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }


    if(Username.length>10)
    {
        $(function()
        {
            
            $('#feedBack').show(500);
        }
        )

        document.getElementById('feedBack').innerHTML='Username should have between 5 to 9 characters';
        return false;
    }

    else
    {
        
        let Name = document.getElementById('Name').value;
        let Username = document.getElementById('Username').value;
        let Email = document.getElementById('Email').value;
        let Password = document.getElementById('Password').value;
        let Country = document.getElementById('Country').value;
        let City = document.getElementById('City').value;
        let Address = document.getElementById('Address').value;
    
        fetch('https://foodhub-delivery.herokuapp.com/auth/user/Register',{
            method:'POST',
            headers:{
                'Accept':'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
              
            body:JSON.stringify({Name:Name, Username:Username, Email:Email, Password:Password, Country:Country, City:City, Address:Address})
    
            })
            .then((response)=> response.json())
            .then((data)=> {
                if(data.Message=='You have successfully Created a User account')
                {
                    document.getElementById('feedBack').style.display='none';
                    $(function()
                    {
    
                        $('#goodFeedBack').show(500);
                        document.getElementById('goodFeedBack').innerHTML='Successfully Signed Up'
                    }
                    )
                    
                    window.location='/login.html';
                }
            })
           
            return true
    }
}

var toMenu=document.getElementById('toHomePage');
toMenu.addEventListener('click', backMenu)

function backMenu()
{
    window.location='/index.html';
}


