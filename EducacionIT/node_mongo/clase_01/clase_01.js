// Patron Modulo
// IIFE

(function(window, document){ //
    var a = 1;
    var b = 2;
    document.addEventListener("click", function(){
        console.log(a);
    })

    //export
    window.a = a;//digo especificamente que esta no va a ser privada como las demas
})(window, document)