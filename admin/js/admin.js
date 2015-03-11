/**
 * WPshed Theme Options Framework jQuery Functions
 *
 */

jQuery(document).ready(function($){

    /** The Option Tabs */


    /** Add "checked" class to image radio fields  */
    $(".image-radio").click(function(){
        $(".image-radio").removeClass("checked");
        $(this).addClass("checked");
    });


});