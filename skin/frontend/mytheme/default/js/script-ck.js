jQuery(document).ready(function(e){if(!Modernizr.input.placeholder){e(this).find("[placeholder]").each(function(){e(this).val()==""&&e(this).val(e(this).attr("placeholder"))});e("[placeholder]").focus(function(){if(e(this).val()==e(this).attr("placeholder")){e(this).val("");e(this).removeClass("placeholder")}}).blur(function(){if(e(this).val()==""||e(this).val()==e(this).attr("placeholder")){e(this).val(e(this).attr("placeholder"));e(this).addClass("placeholder")}});e("[placeholder]").closest("form").submit(function(){e(this).find("[placeholder]").each(function(){e(this).val()==e(this).attr("placeholder")&&e(this).val("")})})}});