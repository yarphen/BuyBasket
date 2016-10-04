$(document).ready(function() {
    var addElement = function(mytext){
            if (mytext) {
            $('<div/>')
                .addClass('list-element')
                .append($('<div/>')
                    .addClass('list-element-float')
                    .append($('<div/>')
                        .addClass('list-element-float-container')
                        .append($('\r\n<span/>')
                            .addClass('list-element-name')
                            .append(mytext))
                        .append($('<div/>')
                            .addClass('list-element-right-area')
                            .append($('<div/>')
                                .addClass('buy-button')
                                .append('BUY'))
                            .append($('<div/>')
                                .addClass('delete-button')
                                .append('×')))))
                .append($('<div/>')
                    .addClass('list-element-nonfloat')
                    .append($('<div/>')
                        .addClass('list-element-center-area')
                        .append($('<div/>')
                            .addClass('minus-button')
                            .append('×'))
                        .append($('<div/>')
                            .addClass('list-element-count')
                            .append('1'))
                        .append($('<div/>')
                            .addClass('plus-button')
                            .addClass('plus-button-enabled')
                            .append('+'))))
                .appendTo($('.list'));
        } 
        }
     addElement('Potatoes');
     addElement('Tomatoes');
     addElement('Cucumbers');
    $('.add-button').click(function() {
        var text = $('.input-field').val();
        addElement(text);
    });
});