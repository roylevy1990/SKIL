
$( function() {
    var dateFormat = "dd/mm/yy",

        from = $( "#from" )
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1,
                dateFormat:'dd/mm/yy',
                minDate:0
            })
            .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
            }),
        to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1,
            dateFormat:'dd/mm/yy',
            minDate: getDate(this) + 1
        })
            .on( "change", function() {
                from.datepicker( "option", "minDate", getDate( this ) );
            });

    function getDate( element ) {
        var date;
        try {
            date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
            date = null;
        }

        return date;
    }
} );
$(document).ready(function getDate() {
    var date = new Date();
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = (day)+"/"+(month)+"/"+now.getFullYear();
    $('#from').val(today);
    date.setDate(date.getDate()+7);
    var nextWeek = ("0"+date.getDate()).slice(-2)+'/'+ ("0"+(date.getMonth()+1)).slice(-2) +'/'+date.getFullYear();
    $('#to').val(nextWeek);

});
( function( factory ) {
    if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "../widgets/datepicker" ], factory );
    } else {

        // Browser globals
        factory( jQuery.datepicker );
    }
}( function( datepicker ) {

    datepicker.regional.he = {
        closeText: "סגור",
        prevText: "&#x3C;הקודם",
        nextText: "הבא&#x3E;",
        currentText: "היום",
        monthNames: [ "ינואר","פברואר","מרץ","אפריל","מאי","יוני",
            "יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר" ],
        monthNamesShort: [ "ינו","פבר","מרץ","אפר","מאי","יוני",
            "יולי","אוג","ספט","אוק","נוב","דצמ" ],
        dayNames: [ "ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת" ],
        dayNamesShort: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
        dayNamesMin: [ "א'","ב'","ג'","ד'","ה'","ו'","שבת" ],
        weekHeader: "Wk",
        dateFormat: "dd/mm/yy",
        firstDay: 0,
        isRTL: true,
        showMonthAfterYear: false,
        yearSuffix: "" };
    datepicker.setDefaults( datepicker.regional.he );

    return datepicker.regional.he;

} ) );