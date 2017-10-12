function showAlert(){
    console.log('this is in the js file');
}
// $(document).ready(function(){

// $("#firstName").on('click',function(){
//     alert("jquery is working");
// })
// })


$(document).ready(function(){

$('#firstName,#lastName,#emailId,#displayName').on('focus', function(){
    
  $(this).next('span').removeClass('floatingLabel').addClass('floatingLabelUp');
}).on('blur', function(){
    if($(this).val() === ""){
  $(this).next('span').removeClass('floatingLabelUp').addClass('floatingLabel');}

});

$('#gender').on('focus',function(){
    $("#maleFemaleSelector").show(400);
})
$('#gender').on('blur',function(){
    $("#maleFemaleSelector").hide(200);
})

$('.slidingUnorderList li').on('click',function(){
    
    $("#maleFemaleSelector").hide(200);
    
        $('#gender').val($(this).text());
        $(this).parent().next('span').removeClass('staticLabel').addClass('floatingLabelUp');;
    
})



});