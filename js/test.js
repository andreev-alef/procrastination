/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getNum() {
    var ran = 0;
    while (ran < 10) {
        ran = Math.floor(Math.random() * 100);
    }
    return ran;
}

$(document).ready(function () {

    var exams = [
        {"a": getNum(), "b": getNum()},
        {"a": getNum(), "b": getNum()},
        {"a": getNum(), "b": getNum()},
        {"a": getNum(), "b": getNum()},
        {"a": getNum(), "b": getNum()}
    ]

    var N = exams.length;

    var i = 0;
    $('#step').html(i + 1);
    $('#A').html(exams[i].a);
    $('#B').html(exams[i].b);
    $('#btn_pre').animate({'opacity': 0}, 'fast');
    $('#btn_pre').css({'cursor': 'default'});

    $('#btn_next').click(function () {
        i++;
        if (i < N) {
            $('#step').html(i + 1);
            $('#A').html(exams[i].a);
            $('#B').html(exams[i].b);
            $('#btn_pre').animate({'opacity': 1}, 'fast');
            $('#btn_pre').css({'cursor': 'pointer'});
        }
        if (i === (N - 1)) {
            $('#btn_next').animate({'opacity': 0}, 'fast');
            $('#btn_next').css({'cursor': 'default'});
        }
        if (i > N) {
            i = N - 1;
        }
    });
    $('#btn_pre').click(function () {
        i--;
        if (i >= 0) {
            $('#step').html(i + 1);
            $('#A').html(exams[i].a);
            $('#B').html(exams[i].b);
            $('#btn_next').animate({'opacity': 1}, 'fast');
        }
        if (i === 0) {
            $('#btn_pre').animate({'opacity': 0}, 'fast');
            $('#btn_pre').css({'cursor': 'default'});

        }
        if (i < 0) {
            i = 0;
        }
    });
});

