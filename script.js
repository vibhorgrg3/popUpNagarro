$('#topbtn').on('click', function (event) {
    event.preventDefault();
    console.log("click");
    $('.mybox').fadeToggle(1000);
})

console.log('fweafwae');

$('#cross').on('click', function () {
    $('.mybox').fadeOut(1000);
})