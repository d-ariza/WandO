$(document).ready(main);

function main(){
    $("#counter").hide();
    $("#start").click(clck);

    function tc(time){ // tc is Time conversor
        // divide el valor del tiempo en un array usando split(':') y devolviendo el array
        let t = time.split(':');
        let tc = [t[0],t[1]]
        return tc
    };

    function clck(){
        var time1 = $("#time1").val();//obtiene el valor de id="time1"
        var time2 = $("#time2").val();//obtiene el valor de id="time1"
        $("#counter").show();
        $("#init").hide();
        let timeA = new Date(0,0,0,0,tc(time1)[0],tc(time1)[1],0);
        let timeB = new Date(0,0,0,0,tc(time2)[0],tc(time2)[1],0);
        let totalTime = parseInt((timeB - timeA )/1000);
        var sec = totalTime;
        var text = $("#count");

        setInterval(function(){
            if (sec >=6){
                text.html(sec);
                sec-=1;
            }
            else if (sec >= 0 && sec<=5){
                text.html(sec+' alert, prepare your army').css('color','red');
                sec-=1;
            }
            else if (sec==0){
                text.html('attack').css('font-size','21');
            }
        },1000);
    }
}
