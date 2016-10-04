$(document).ready(function() {
    var addElement = function(mytext) {
        if (mytext) {
            var bought = false;
            var summaryElement = $('<div/>')
                .addClass('summary-element')
                .append($('<span/>')
                    .addClass('summary-element-name')
                    .append(mytext))
                .append($('<div/>')
                    .addClass('summary-element-count')
                    .append('1'));
            var listelement = $('<div/>')
                .addClass('list-element')
                .append($('<div/>')
                    .addClass('list-element-float')
                    .append($('<div/>')
                        .addClass('list-element-float-container')
                        .append($('<span/>')
                            .addClass('list-element-name')
                            .append(mytext))
                        .append($('<div/>')
                            .addClass('list-element-right-area')
                            .append($('<div/>')
                                .addClass('buy-button')
                                .append('BUY')
                                .click(function() {
                                    if (bought){
                                        listelement.find('.minus-button,.plus-button').css('visibility', 'hidden');
                                         listelement.find('.buy-button')
                                         .text('UNBUY');
                                        summaryElement.detach();
                                        summaryElement.appendTo($('.summary-content.bought'));
                                    }else{
                                        listelement.find('.minus-button,.plus-button').css('visibility', 'visible');
                                         listelement.find('.buy-button')
                                         .text('BUY');
                                        summaryElement.detach();
                                        summaryElement.appendTo($('.summary-content:not(.bought)'));
                                    }
                                    bought=!bought;
                                }))
                            .append($('<div/>')
                                .addClass('delete-button')
                                .append('×')
                                .click(function() {
                                    summaryElement.remove();
                                    listelement.remove();
                                })))))
                .append($('<div/>')
                    .addClass('list-element-nonfloat')
                    .append($('<div/>')
                        .addClass('list-element-center-area')
                        .append($('<div/>')
                            .addClass('minus-button')
                            .append('-')
                            .click(function() {
                                var count1 = listelement.find('.list-element-count');
                                var count2 = summaryElement.find('.summary-element-count');
                                var button = listelement.find('.minus-button');
                                var count = parseInt(count1.text());
                                if (count > 1) count--;
                                if (count > 1) {
                                    button.removeClass('minus-button-enabled');
                                }
                                count1.text(count);
                                count2.text(count);
                            }))
                        .append($('<div/>')
                            .addClass('list-element-count')
                            .append('1'))
                        .append($('<div/>')
                            .addClass('plus-button')
                            .addClass('plus-button-enabled')
                            .append('+')
                            .click(function() {
                                var count1 = listelement.find('.list-element-count');
                                var count2 = summaryElement.find('.summary-element-count');
                                var button = listelement.find('.minus-button');
                                var count = parseInt(count1.text());
                                count++;
                                if (count == 2) {
                                    button.addClass('minus-button-enabled');
                                }
                                count1.text(count);
                                count2.text(count);
                            }))));
            listelement.appendTo($('.list'));
            summaryElement.appendTo($('.summary-content:not(.bought)'))
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