$('.speaker:not(.yet)').click(function(src) {
    var session = (src.target.id === "" ? src.target.parentElement : src.target ).id.replace(/speaker-/, '');
    openSession(session);
});
$('.speakers li').click(function(src) {
    var session = (src.target.id === "" ? (src.target.parentElement.id ==="" ? src.target.parentElement.parentElement: src.target.parentElement) : src.target ).id.replace(/img-/, '');
    openSession(session);
});
function openSession(session){
    $('[id=detail-' + session + ']').fadeIn(200);
    $('[id=detail-' + session + ']').css('top', $(window).scrollTop());
    $('#shadow').fadeIn(100);
}
function closeSession(){
   $('[class=overlay]').fadeOut(400);
   $('#shadow').fadeOut(200);
}
$('#shadow').click(function(src) {
  closeSession();
});
$('[class^=overlay]').click(function(src) {
    if(src.target.clasName==="overlay" || $.inArray("cancel",src.target.classList)>=0 ){
      closeSession();
    }
});
$(".h-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 'h-lane-body');
    $(".timetable th:nth-child(2)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(2)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
$(".k-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 'k-lane-body');
    $(".timetable th:nth-child(3)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(3)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
$(".t-lane-btn").click(function() {
    $(".timetable td").css('display', 'none');
    $(".timetable th").css('display', 'none');
    $(".timetable tr").css('display', 'block');
    $(".timetable tbody").attr( 'class', 't-lane-body');
    $(".timetable th:nth-child(4)").css('display', 'block');
    $(".timetable td:nth-child(1)").css('display', 'block');
    $(".timetable td:nth-child(4)").css('display', 'block');
    $(".timetable .row-break td").css('display', 'block');
    $(".timetable .row-break td:empty").css('display', 'none');
    $(this).parent().find("a").css('display', 'block');
    $(this).css('display', 'none');
});
