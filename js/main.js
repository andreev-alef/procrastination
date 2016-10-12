/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    var A = parseInt($('#A').html());
    var B = parseInt($('#B').html());
    $('#C').val(A + B);
});