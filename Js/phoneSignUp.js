var hideFeed=document.getElementById('badFeedBack');
hideFeed.style.display='none';

var Form = document.getElementById('signForm');
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
               
                $('#badFeedBack').show(500);
            }
        )
        document.getElementById('badFeedBack').value='Make sure you filled all Fields.';
        return false;
    }

    if(regex.test(Name)==true)
        {
            $(function()
            {
               
                $('#badFeedBack').show(500);
            }
         )

            document.getElementById('badFeedBack').value='Name Cannot Be Numeric';
            return false;
        
        }
    
    if(regex.test(City)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').value='City Cannot Be Numeric';
        return false;
    
    }


    if(regex.test(Country)==true)
    {
        $(function()
        {
            
            $('#badFeedBack').show(500);
        }
        )

        document.getElementById('badFeedBack').value='Country Cannot Be Numeric';
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
                    window.location='/phoneLogin.html';
                }
            })
           
            return true
    }
}

var clickWordSign=document.getElementById('loginWord');
clickWordSign.addEventListener('click', displayLogin)

function displayLogin()
{
    window.location='/phoneLogin.html';
}