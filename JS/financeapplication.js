$(document).ready(function () {
    $("#province1").change(function () {
        var val = $(this).val();
        if (val == "punjab") {
            $("#city1").html("<option value='test'>Lahore</option><option value='test2'>Islamabad</option><option value='test'>Rawalpindi</option><option value='test2'>Multan</option><option value='test'>Sialkot</option><option value='test2'>Faisalabad</option>");
        } else if (val == "balochistan") {
            $("#city1").html("<option value='test'>Quetta</option><option value='test2'>Gwadar</option><option value='test'>Khuzdar</option><option value='test2'>Hub</option><option value='test'>Chaman</option><option value='test2'>Turbat</option>");
        } else if (val == "kpk") {
            $("#city1").html("<option value='test'>Peshawar</option><option value='test2'>Abbottabad</option><option value='test'>Mardan</option><option value='test2'>Mingora</option><option value='test'>Kohat</option><option value='test2'>Dera Ismail Khan</option>");
        } else if (val == "sindh") {
            $("#city1").html("<option value=''>Karachi</option><option value=''>Hyderabad</option><option value=''>Sukkur</option><option value=''>Mirpur Khas</option><option value=''>Nawabshah</option>");
        }
    });
});

$(document).ready(function () {
    $("#province2").change(function () {
        var val = $(this).val();
        if (val == "punjab") {
            $("#city2").html("<option value='test'>Lahore</option><option value='test2'>Islamabad</option><option value='test'>Rawalpindi</option><option value='test2'>Multan</option><option value='test'>Sialkot</option><option value='test2'>Faisalabad</option>");
        } else if (val == "balochistan") {
            $("#city2").html("<option value='test'>Quetta</option><option value='test2'>Gwadar</option><option value='test'>Khuzdar</option><option value='test2'>Hub</option><option value='test'>Chaman</option><option value='test2'>Turbat</option>");
        } else if (val == "kpk") {
            $("#city2").html("<option value='test'>Peshawar</option><option value='test2'>Abbottabad</option><option value='test'>Mardan</option><option value='test2'>Mingora</option><option value='test'>Kohat</option><option value='test2'>Dera Ismail Khan</option>");
        } else if (val == "sindh") {
            $("#city2").html("<option value=''>Karachi</option><option value=''>Hyderabad</option><option value=''>Sukkur</option><option value=''>Mirpur Khas</option><option value=''>Nawabshah</option>");
        }
    });
});


$(document).ready(function () {
    $("#province3").change(function () {
        var val = $(this).val();
        if (val == "punjab") {
            $("#city3").html("<option value='test'>Lahore</option><option value='test2'>Islamabad</option><option value='test'>Rawalpindi</option><option value='test2'>Multan</option><option value='test'>Sialkot</option><option value='test2'>Faisalabad</option>");
        } else if (val == "balochistan") {
            $("#city3").html("<option value='test'>Quetta</option><option value='test2'>Gwadar</option><option value='test'>Khuzdar</option><option value='test2'>Hub</option><option value='test'>Chaman</option><option value='test2'>Turbat</option>");
        } else if (val == "kpk") {
            $("#city3").html("<option value='test'>Peshawar</option><option value='test2'>Abbottabad</option><option value='test'>Mardan</option><option value='test2'>Mingora</option><option value='test'>Kohat</option><option value='test2'>Dera Ismail Khan</option>");
        } else if (val == "sindh") {
            $("#city3").html("<option value=''>Karachi</option><option value=''>Hyderabad</option><option value=''>Sukkur</option><option value=''>Mirpur Khas</option><option value=''>Nawabshah</option>");
        }
    });
});


$(document).ready(function () {
    $("#province4").change(function () {
        var val = $(this).val();
        if (val == "punjab") {
            $("#city4").html("<option value='test'>Lahore</option><option value='test2'>Islamabad</option><option value='test'>Rawalpindi</option><option value='test2'>Multan</option><option value='test'>Sialkot</option><option value='test2'>Faisalabad</option>");
        } else if (val == "balochistan") {
            $("#city4").html("<option value='test'>Quetta</option><option value='test2'>Gwadar</option><option value='test'>Khuzdar</option><option value='test2'>Hub</option><option value='test'>Chaman</option><option value='test2'>Turbat</option>");
        } else if (val == "kpk") {
            $("#city4").html("<option value='test'>Peshawar</option><option value='test2'>Abbottabad</option><option value='test'>Mardan</option><option value='test2'>Mingora</option><option value='test'>Kohat</option><option value='test2'>Dera Ismail Khan</option>");
        } else if (val == "sindh") {
            $("#city4").html("<option value=''>Karachi</option><option value=''>Hyderabad</option><option value=''>Sukkur</option><option value=''>Mirpur Khas</option><option value=''>Nawabshah</option>");
        }
    });
});


$(document).ready(function(){
    $('input[type="radio"]').click(function(){
    	var demovalue = $(this).val(); 
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});


