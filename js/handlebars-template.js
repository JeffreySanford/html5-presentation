/*global $, Handlebars */
(function IFEE() {
    'use strict';
    $.getJSON("data/pageinformation.json", function (json) {
        var pageInformation = json;

        var videoTemplate = Handlebars.compile($("#handlebars-video-wrapper").html());
        var videoSource = videoTemplate(pageInformation);
        $('#video-wrapper').append(videoSource);

        var backgroundTemplate = Handlebars.compile($("#handlebars-background-wrapper").html());
        var backgroundSource = backgroundTemplate(pageInformation);
        $('#mainpage-container').append(backgroundSource);

        var audioTemplate = Handlebars.compile($("#handlebars-audio-wrapper").html());
        var audioSource = audioTemplate(pageInformation);
        $('#audio-wrapper').append(audioSource);

        var titleRow = Handlebars.compile($("#mainpage-title-wrapper").html());
        var titleRowSource = titleRow(pageInformation);
        $('#title-row').append(titleRowSource);

        var textColumns = Handlebars.compile($("#mainpage-content-wrapper").html());
        var textColumnsSource = textColumns(pageInformation);
        $('#text-columns').append(textColumnsSource);

        var modalContentWrapper = Handlebars.compile($("#modal-content-wrapper").html());
        var modalSource = modalContentWrapper(pageInformation);
        $('#modal-container').append(modalSource);
    });
}());