window.onload = showreel;

function showreel(){
    var thumbnails = document.images;

    for(var i=0; i<thumbnails.length; i++){
        if(thumbnails[i].id.indexOf("embed") > -1){
               thumbnails[i].onclick = imgChanger;
        }
    }
}

function imgChanger(){
     document.getElementById('video').src ="https://www.youtube.com/" + this.id;
}

$(".thumbnail-inner .showreel-thumbnail").click(function(){
    $(this).children().addClass('selected').parent().siblings().find('.selected').removeClass('selected');
});