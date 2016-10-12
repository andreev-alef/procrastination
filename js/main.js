/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    var font_family = ['Allegretto',
        'Cuprum',
        'Exo2',
        'Exo2 Light',
        'Noto Serif',
        'Open Sans',
        'Open Sans Light',
        'Oswald',
        'Oswald Italic',
        'PT Mono',
        'PT Sans',
        'PT Serif'];
    var A = parseInt($('#A').html());
    var B = parseInt($('#B').html());
    $('#C').val(A + B);
});
