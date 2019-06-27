window.addEventListener('DOMContentLoaded', (event) => {
    for (var i=0; i<17; i++) {
        var row = document.querySelector("table").insertRow(-1);
        row.insertCell(0).innerHTML = 'hi';
        var letter = String.fromCharCode("A".charCodeAt(0)+i-1);
        row.insertCell(1).innerHTML = "<input type='text' value='do' id='"+ letter+i +"'>";

    //    for (var j=0; j<3; j++) {
    //         var letter = String.fromCharCode("A".charCodeAt(0)+j-1);
    //         row.insertCell(-1).innerHTML = i&&j ? "<input id='"+ letter+i +"'/>" : i||letter;
    //         if (j == 1) {
    //             row.insertCell(j).innerHTML = 'hi'
    //         }
    //     }
    }

    // var DATA={}, INPUTS=[].slice.call(document.querySelectorAll("input"));
    // INPUTS.forEach(function(elm) {
    //     elm.onfocus = function(e) {
    //         e.target.value = localStorage[e.target.id] || "";
    //     };
    //     elm.onblur = function(e) {
    //         localStorage[e.target.id] = e.target.value;
    //         computeAll();
    //     };
    //     var getter = function() {
    //         var value = localStorage[elm.id] || "";
    //         if (value.charAt(0) == "=") {
    //             with (DATA) return eval(value.substring(1));
    //         } else { return isNaN(parseFloat(value)) ? value : parseFloat(value); }
    //     };
    //     Object.defineProperty(DATA, elm.id, {get:getter});
    //     Object.defineProperty(DATA, elm.id.toLowerCase(), {get:getter});
    // });
    // (window.computeAll = function() {
    //     INPUTS.forEach(function(elm) { try { elm.value = DATA[elm.id]; } catch(e) {} });
    // })();
});
