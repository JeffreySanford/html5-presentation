/*global $ */
(function IFEE() {
    'use strict';
    function loadMainPage() {
        var videoWrapper = document.getElementById("video-wrapper");
        var audioWrapper = document.getElementById("audio-wrapper");

        $("#replay-the-video").on("click", function () {
            console.log('clciked the play button');
            playTheVideo();
        });

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

        // play the udio track from the beginnning
        audioWrapper.currentTime = 0;
        audioWrapper.play();
    }

    function playTheVideo() {
        var audioWrapper = document.getElementById("audio-wrapper");
        var videoWrapper = document.getElementById("video-wrapper");

        //allow for skipping the video
        $("#skip-video").on("click", function () {
            loadMainPage();
        });

        // try fullscreen
        if (videoWrapper.requestFullscreen) {
            videoWrapper.requestFullscreen();
        } else if (videoWrapper.webkitRequestFullscreen) {
            videoWrapper.webkitRequestFullscreen();
        } else if (videoWrapper.mozRequestFullScreen) {
            videoWrapper.mozRequestFullScreen();
        } else if (videoWrapper.msRequestFullscreen) {
            videoWrapper.msRequestFullscreen();
        }

        // remove the video elements and hide the page now
        $("#video-wrapper").removeClass('hidden');
        $("#skip-video").removeClass('hidden');
        $("#mainpage-container").addClass('hidden');
        $("#navigation").addClass('hidden');

        audioWrapper.pause();

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

        $("#replay-the-video").on("click", function () {
            console.log('clciked the play button');
            playTheVideo();
        });
    });
}());