/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function getNum() {
    return Math.floor(Math.random() * 100);
}

$(document).ready(function () {

    $('#btn_next').click(function () {
        var exams = {
            exam1: {"a": getNum(), "b": getNum()},
            exam2: {"a": getNum(), "b": getNum()},
            exam3: {"a": getNum(), "b": getNum()},
            exam4: {"a": getNum(), "b": getNum()},
            exam5: {"a": getNum(), "b": getNum()}
        }

        $('#A').html(exams.exam1.a);
        $('#B').html(exams.exam1.b);
    });
});

