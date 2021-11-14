(function () {
    $(document).ready(function(e){
        $(document).on("click", "#1stpick", function (e) {
            add_color();
        });
        $(document).on("click", "#2ndpick", function (e) {
            add_color();
        });
        $(document).on('click', "#copyColor", function (e) {
            copyColor();
        });
        
        $(document).on('click','#color_reset',function (){
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = "white";
                    document.getElementById("color_2").style.background = "white";
                    document.getElementById("color_3").style.background = "white";
                }
            });
        });
        $(document).on("click", "#1", function (e) {
            var result = "SAFETY ORANGE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#FF6600";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#FF6600";
                }
            });
        });
        $(document).on("click", "#2", function (e) {
            var result = "HADDOCK'S SWEATER";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#2980b9";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#2980b9";
                }
            });
        });
        $(document).on("click", "#3", function (e) {
            var result = "ISLAND GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#27ae60";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#27ae60";
                }
            });
        });
        $(document).on("click", "#4", function (e) {
            var result = "CARMINE PINK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#e74c3c";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#e74c3c";
                }
            });
        });
        $(document).on("click", "#5", function (e) {
            var result = "MOONSHADOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#8e44ad";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#8e44ad";
                }
            });
        });
        $(document).on("click", "#6", function (e) {
            var result = "FIERY FUCHSIA";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#B33771";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#B33771";
                }
            });
        });
        $(document).on("click", "#7", function (e) {
            var result = "TURQUOISE TOPAZ";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#0fb9b1";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#0fb9b1";
                }
            });
        });
        $(document).on("click", "#8", function (e) {
            var result = "RADIANT YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff9f1a";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ff9f1a";
                }
            });
        });
        $(document).on("click", "#9", function (e) {
            var result = "SCHIAPARELLI PINK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#e84393";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#e84393";
                }
            });
        });
    });


    function copyColor()
    {
        var colorHex = String(document.getElementById("color_hexcode").value);
        var colorName = String(document.getElementById("color_result").value);
        var color_price = String(document.getElementById("color_price").value);

        var text = 'Hex Color Code: ' + colorHex + '\r\n' +
        'Color Name: ' + colorName + '\r\n' +
        'Price: ' + color_price + '\r\n';
    
        // console.log(colorName);
        
        navigator.clipboard.writeText(text)
        .then(function (){
            // Success!
            Swal.fire({
                title: 'Copied!',
                text: '',
                icon: 'success',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        })
        .catch(function () {
            Swal.fire({
                title: 'Oh no!',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#2691d9',
            });
        });
    }
    
    function add_color() {

        var first_number = String(document.getElementById("1stpick").value);
        var second_number = String(document.getElementById("2ndpick").value);

        if (first_number == first_number) {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '1p') {
                    document.getElementById("color_1").style.background = first_number;
                }
            });
       
        }
        if (second_number == second_number) {
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '2p') {
                    document.getElementById("color_2").style.background = second_number;
                }
            });
  
        }


        if (first_number == "blue" && second_number == "blue")
        {
            var result = "BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#0000ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "blue";
                }
            });
        }
        if (first_number == "blue" && second_number == "red" || first_number == "red" && second_number == "blue")
        {
            var result = "PURPLE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#800080";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "purple";
                }
            });
        }
        if (first_number == "blue" && second_number == "yellow" || first_number == "yellow" && second_number == "blue")
        {
            var result = "GREEN";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#008000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "green";
                }
            });
        }
        if (first_number == "blue" && second_number == "ghostwhite" || first_number == "ghostwhite" && second_number == "blue")
        {
            var result = "LIGHT BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#add8e6";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "lightblue";
                }
            });
        }
        if (first_number == "blue" && second_number == "black" || first_number == "black" && second_number == "blue")
        {
            var result = "YVES KLEIN BLUE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#00008b";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkblue";
                }
            });
        }

        if (first_number == "yellow" && second_number == "yellow")
        {
            var result = "YELLOW";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffff00";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "yellow";
                }
            });
        }
        if (first_number == "yellow" && second_number == "red" || first_number == "red" && second_number == "yellow")
        {
            var result = "ORANGE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffa500";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "orange";
                }
            });
        }
        if (first_number == "yellow" && second_number == "ghostwhite" || first_number == "ghostwhite" && second_number == "yellow")
        {
            var result = "WINTER DUVET";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffffe0";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#ffffe0";
                }
            });
        }
        if (first_number == "yellow" && second_number == "black" || first_number == "black" && second_number == "yellow")
        {
            var result = "HEART GOLD";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#808000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "#808000";
                }
            });
        }

        if (first_number == "red" && second_number == "red")
        {
            var result = "RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ff0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "red";
                }
            });
        }

        if (first_number == "red" && second_number == "ghostwhite" || first_number == "ghostwhite" && second_number == "red")
        {
            var result = "PINK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#ffc0cb";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "pink";
                }
            });
        }

        if (first_number == "red" && second_number == "black" || first_number == "black" && second_number == "red")
        {
            var result = "SCAB RED";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#8b0000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "darkred";
                }
            });
        }

        if (first_number == "ghostwhite" && second_number == "ghostwhite")
        {
            var result = "GHOST WHITE";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#f8f8ff";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "ghostwhite";
                }
            });
        }
        if (first_number == "ghostwhite" && second_number == "black" || first_number == "black" && second_number == "ghostwhite")
        {
            var result = "GREY";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#808080";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "grey";
                }
            });
        }

        if (first_number == "black" && second_number == "black")
        {
            var result = "BLACK";
            var price = "PHP 100.00";
            document.getElementById("color_result").value = result;
            document.getElementById("color_price").value = price;
            document.getElementById("color_hexcode").value = "#000000";
            $(".colors").children().each(function(item) {
                if ($(this).attr("data-color") == '3p') {
                    document.getElementById("color_3").style.background = "black";
                }
            });
        }
        



        
    }
})();