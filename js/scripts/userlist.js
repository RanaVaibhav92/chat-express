$(document).ready(function(){

    $('.classUserUl #getData').on('click',function(){
        alert($(this).text());
    })


    // $('div.deleteEditDiv span:nth-child(1)').on('click',function(){
    //     alert('I am clicked')
    //     alert($(this).parent().siblings('div').html());
    // })

    //  $('div.deleteEditDiv span:nth-child(2)').on('click',function(){
    //     alert('I am clicked')
    //     alert($(this).parent().siblings('div').html());
    // })

//     $('.abc').on('click',function(){
    
//         $(this).children('div.deleteEditDiv').toggle();
//         $(this).children('div:nth-child(2)').toggleClass('col-xs-12 col-xs-8')
//           $(this).children('div:nth-child(2)').toggleClass('classUserUlList classUserUlListClick')


//  $(this).siblings().children('div.deleteEditDiv').hide();

//          $(this).siblings().children('div:nth-child(2)').removeClass('col-xs-8 classUserUlListClick').addClass('col-xs-12 classUserUlList');

//              })

   $('.showingEditDelete').on('click',function(){
    
   //     $(this).children('div.deleteEditDiv').toggle();
    $(this).siblings('div.deleteEditDiv').toggle();
        $(this).toggleClass('col-xs-12 col-xs-8');
          $(this).toggleClass('classUserUlList classUserUlListClick')

          $('.showingEditDelete').not(this).siblings('div.deleteEditDiv').hide();
          $('.showingEditDelete').not(this).removeClass('col-xs-8 classUserUlListClick').addClass('col-xs-12 classUserUlList');
//  $(this).siblings().children('div.deleteEditDiv').hide();

//          $(this).siblings().children('div:nth-child(2)').removeClass('col-xs-8 classUserUlListClick').addClass('col-xs-12 classUserUlList');

             })
             

    
})

function deleteUser(abc){
    alert('delete is clicked;')
    console.log("user data :  "+JSON.stringify(abc));
    $.ajax({
        url:'deleteUser',
        type:'DELETE',
        data : {"emailId":""+abc.emailId+""},
        success:function(result){
            console.log("result of the api  :  "+result);
        
        },
        error : function(err){
            console.log("error of the api   : "+err);
        }
    })
}

function editUser(pqur){
    alert('edit is clicked;')
    console.log("user data :  "+JSON.stringify(pqur));
}


// function abc(){
//             alert('I am here');
//             $('.abc').children('div.deleteEditDiv').toggle();
//       $('.abc').children('div:nth-child(2)').toggleClass('col-xs-12 col-xs-8')
//          $('.abc').children('div:nth-child(2)').toggleClass('classUserUlList classUserUlListClick')
//     }