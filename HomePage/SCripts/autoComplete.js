/**
 * Created by admin on 9/28/2016.
 */

$( function() {
    var availableTags = [
        "פאסו טונלה",
        "סלה רונדה",
        "סקיולט",
        "אבוריאז",
        "ואל טורנס",
        "מאיירהופן",
        "טין",
        "בנסקו",
        "לס ארקס",
        "סן אנטון",
        "אישגיל",
        "ליביניו",
        "אנגלברג",
        "אנדורה",
        "מדונה די קמפיליו",
        "זולדן",
        "פויאנה בראשוב",
        "שפינדלרוב מלין"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags,
        minLength: 0,
        max: 5,
        scroll: true
    }).focus(function () {
        $(this).autocomplete("search", "");
    })
} );


