$(()=>{
    
    $('#login').click(()=>{
        $.post(
            '/login',
            {
                email: $('#logEmail').val(),
                password: $('#logPass').val()
                
            },
            (data)=>{
                if(data.success) {
                    $('.container').empty()
                    $('.container').append(`Welcome ${data.name}`)
                } else {
                    alert('incorrect email or password.')
                }
            }
            )
        })
        $('#signUp').click(() => {
            if($('#signPass').val() === $('#conPass').val()) {
                $.post(
                    '/signup',
                    {
                        name: $('#name').val(),
                        email: $('#signEmail').val(),
                        password: $('#signPass').val()
                    },
                    (data) => {
                        if(!data.success) {
                            alert('ID already exist')
                        } else{
                            $(".container").prepend('<p>Successful Sign Up! Please login to continue.</p>')
                        }
                    }
                    )
                }
                else{
                    alert("Password didn't match")
                }
            })
        })