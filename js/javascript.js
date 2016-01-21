function skipTheVideo() {
    var videoWrapper = document.getElementById("video-wrapper");
    var audioWrapper = document.getElementById("audio-wrapper");
    
    // turning off the video if not finsihed
    videoWrapper.pause();
    $("#video-content").addClass('hidden');
    $("#skip-video").addClass('hidden');

    // moving to the main page and turning on audio
    $("#page-template").removeClass('hidden');
    audioWrapper.play();
    console.log("transition finished");
}

function playTheVideo() {
    var audioWrapper = document.getElementById("audio-wrapper");
    var videoWrapper = document.getElementById("video-wrapper");
    var pageTemplate = document.getElementById('page-template');
    console.log("play the video fired");

    // remove the video elements and hide the page now
    $("#video-wrapper").removeClass('hidden');
    $("#skip-video").removeClass('hidden');
    $("#page-template").addClass('hidden');

    audioWrapper.pause();

    // play the video from the beginning 
    videoWrapper.currentTime = 0;
    videoWrapper.play();

    // when finsihed, move to the main page
    videoWrapper.onended = function transitionToNewPage() {
        $("#video-wrapper").addClass('hidden');
        $("#page-template").removeClass('hidden');

        // hide the skip video and start the ambience 
        $("#skip-video").addClass('hidden');
        audioWrapper.play();            
    console.log("transition finished");
    };
}  // ends the playTheVideo function    

window.onload = function onLoadFunction () {
    playTheVideo();        
};
