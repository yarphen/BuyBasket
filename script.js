$(document).ready(function() {
    var addElement = function(mytext) {
        if (mytext) {
            var bought = false;
            var count = 1;
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
                            .addClass('list-element-name selectable tooltip')
                            .attr('data-tooltip', 'Edit it!')
                            .append(mytext)
                            .click(function(){
                                if(!bought){
                                    listelement.find('.list-element-name')
                                    .attr('contenteditable', 'true');
                                }                 
                            })
                            .blur(function(){
                                mytext=listelement.find('.list-element-name')
                                .attr('contenteditable', 'false').removeClass('tooltip').text();
                                summaryElement.find('.summary-element-name').text(mytext);
                            })
                            .keydown(function(evt){
                                if (evt.keyCode==13){
                                    listelement.find('.list-element-name').blur();
                                }
                            }))
                        .append($('<div/>')
                            .addClass('list-element-right-area')
                            .append($('<div/>')
                                .addClass('buy-button button-shadow tooltip')
                                .append('BUY')
                                .attr('data-tooltip', 'Press to buy element')
                                .click(function() {
                                    if (!bought){
                                        listelement.find('.minus-button,.plus-button').fadeTo(500, 0);
                                        listelement.find('.buy-button')
                                            .text('UNBUY').attr('data-tooltip', 'Press to unbuy element');
                                        summaryElement.fadeOut(function(){
                                            summaryElement.detach().appendTo($('.summary-content.bought')).fadeIn();
                                        });
                                        listelement.addClass('bought');
                                        listelement.find('.list-element-name')
                                            .removeClass('tooltip');
                                        listelement.find('.delete-button').fadeOut();
                                    }else{
                                        listelement.find('.minus-button,.plus-button').fadeTo(500, 1);
                                        listelement.find('.buy-button')
                                            .text('BUY').attr('data-tooltip', 'Press to buy element');
                                        summaryElement.fadeOut(function(){
                                            summaryElement.detach().appendTo($('.summary-content:not(.bought)')).fadeIn();
                                        });
                                        listelement.removeClass('bought');
                                        listelement.find('.list-element-name')
                                            .addClass('tooltip');
                                        listelement.find('.delete-button').fadeIn();
                                    }
                                    bought=!bought;
                                }))
                            .append($('<div/>')
                                .addClass('delete-button button-shadow tooltip')
                                .append('×')
                                .attr('data-tooltip', 'Press to delete element')
                                .click(function() {
                                    summaryElement.fadeOut(function(){
                                        summaryElement.remove();
                                    });
                                    listelement.fadeOut(function(){
                                        listelement.remove();
                                    });
                                })))))
                .append($('<div/>')
                    .addClass('list-element-nonfloat')
                    .append($('<div/>')
                        .addClass('list-element-center-area')
                        .append($('<div/>')
                            .addClass('minus-button button-shadow tooltip')
                            .attr('data-tooltip', 'Press to decrease count')
                            .append('-')
                            .click(function() {
                                var count1 = listelement.find('.list-element-count');
                                var count2 = summaryElement.find('.summary-element-count');
                                var button = listelement.find('.minus-button');
                                if (count > 1) count--;
                                if (count == 1) {
                                    button.removeClass('minus-button-enabled');
                                }
                                count1.fadeOut(function(){
                                    count1.text(count);
                                    count1.fadeIn();
                                })
                                count2.fadeOut(function(){
                                    count2.text(count);
                                    count2.fadeIn();
                                })
                            }))
                        .append($('<div/>')
                            .addClass('list-element-count')
                            .append('1'))
                        .append($('<div/>')
                            .addClass('plus-button button-shadow tooltip plus-button-enabled')
                            .attr('data-tooltip', 'Press to increase count')
                            .append('+')
                            .click(function() {
                                var count1 = listelement.find('.list-element-count');
                                var count2 = summaryElement.find('.summary-element-count');
                                var button = listelement.find('.minus-button');
                                count++;
                                if (count == 2) {
                                    button.addClass('minus-button-enabled');
                                }
                                count1.fadeOut(function(){
                                    count1.text(count);
                                    count1.fadeIn();
                                })
                                count2.fadeOut(function(){
                                    count2.text(count);
                                    count2.fadeIn();
                                })
                            }))));
            listelement.fadeIn().appendTo($('.list'));
            summaryElement.fadeIn().appendTo($('.summary-content:not(.bought)'));
        }
    }
    $('.add-button').click(function() {
        var text = $('.input-field').val();
        $('.input-field').val('');
        addElement(text);
    });
    $('.badge').mouseenter(function(){
        $('.badge').animate({
            backgroundColor:"#00008B",
            bottom:"0px"
        });
    });
    $('.badge').mouseleave(function(){
        $('.badge').animate({
            bottom:"-50px",
            backgroundColor:"#808080"
        });
    });
    addElement('Potatoes');
    addElement('Tomatoes');
    addElement('Cucumbers');
});