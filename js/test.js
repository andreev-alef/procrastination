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

    $('#btn_next').click(function () {
        i++;
        if (i < N) {
            $('#step').html(i + 1);
            $('#A').html(exams[i].a);
            $('#B').html(exams[i].b);
        } else {
            i = N - 1;
        }
    });
    $('#btn_pre').click(function () {
        i--;
        if (i >= 0) {
            $('#step').html(i + 1);
            $('#A').html(exams[i].a);
            $('#B').html(exams[i].b);
        } else {
            i = 0;
        }
    });
});

