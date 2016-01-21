function skipTheVideo() {
    var videoWrapper = document.getElementById("video-wrapper");
    videoWrapper.pause();
//    videoWrapper.pause();
    $("#video-content").addClass('hidden');
    $("#skip-video").addClass('hidden');
    $("#page-template").removeClass('hidden');                
    console.log("transition finished");
}

function playTheVideo() {
    console.log("play the video fired");
    // play the video full screen
    $("#video-wrapper").removeClass('hidden');
    $("#skip-video").removeClass('hidden');
    $("#page-template").addClass('hidden');   
    var videoWrapper = document.getElementById("video-wrapper");
    var pageTemplate = document.getElementById('page-template');
    videoWrapper.currentTime = 0;
    videoWrapper.play();
    videoWrapper.onended = function transitionToNewPage() {
        $("#video-wrapper").addClass('hidden');
        $("#page-template").removeClass('hidden');                
    console.log("transition finished");
    };
}  // ends the playTheVideo function    

window.onload = function onLoadFunction () {
    
    // play the video on DOM load
    
    playTheVideo();

    // register click events for buttons
    
    //  Now set the display to none for the video element
        
};
