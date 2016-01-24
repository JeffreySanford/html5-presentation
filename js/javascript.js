/*global $ */
(function IFEE() {
    'use strict';

    var audioWrapper = document.getElementById("audio-wrapper");
    var videoWrapper = document.getElementById("video-wrapper");

    function loadMainPage() {

        //Check for fullscreen
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            // exit full-screen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        // turning off the video if not finsihed
        videoWrapper.pause();
        videoWrapper.currentTime = 0;

        $("video").addClass('hidden');
        $("#skip-video").addClass('hidden');

        // moving to the main page and turning on audio
        $("#mainpage-container").removeClass('hidden');
        $("#navigation").removeClass('hidden');

        //start the audio track from the beginning
        if (audioWrapper.currentTime !== 'undefined') {
            audioWrapper.currentTime = 0;
        }
        
        // play the audio track
        audioWrapper.play();

    }

    function playTheVideo() {

        // remove the video elements and hide the page now
        $("#video-wrapper").removeClass('hidden');
        $("#skip-video").removeClass('hidden');
        $("#mainpage-container").addClass('hidden');
        $("#navigation").addClass('hidden');

        // if this is a video replay, pause and reset the background music
        if (audioWrapper.currentTime !== 'undefined') {
            audioWrapper.pause();
        }


        // play the video from the beginning
        videoWrapper.play();

        // when finsihed, move to the main page
        videoWrapper.onended = function transitionToNewPage() {
            videoWrapper.currentTime = 0;
            loadMainPage();
        };
    }  // ends the playTheVideo function

    $(document).ready(function () {
        //start the video
        playTheVideo();

        //  Register click events

        // allow for skipping the video
        $("#skip-video").click(function fnSkipTheVideo() {
            loadMainPage();
        });

        //  replay the video in fullscreen
        $('#replay-the-video').on("click", function fnReplayTheVideo() {
            var videoContainer = document.getElementById("video-container");
            // try fullscreen
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }
            playTheVideo();
        });
    });  //end the onready event
}());