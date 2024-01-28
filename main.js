

$(document).ready(function () {
    let start, temp_times = 0;
    let timerId;
    let pushButton = "reset";


    function calculateTimes() {
        let times;
        let hours, minutes, seconds, mseconds;
        let diff;

        times = temp_times + Date.now() - start;

        hours = Math.trunc(times / 1000 / 60 / 60);
        diff = times - hours * 1000 * 60 * 60;
        minutes = Math.trunc(diff / 1000 / 60);
        diff -= minutes * 1000 * 60;
        seconds = Math.trunc(diff / 1000);
        diff -= seconds * 1000;
        mseconds = Math.trunc(diff / 100);

        $(".times").text(hours + ":" + minutes + ":" + seconds + ":" + mseconds);
    }

    $(".start").click(function () {
        /*ボタンの制御*/
        if (pushButton === "start") return;
        pushButton = "start";

        /*ボタンの表示 */
        $(".start").addClass("no-function");
        $(".stop").removeClass("no-function");
        $(".reset").removeClass("no-function");

        start = Date.now();

        timerId = setInterval(calculateTimes, 100);
    });

    $(".stop").click(function () {
        /*ボタンの制御*/
        if (pushButton === "stop" || pushButton === "reset") return;
        pushButton = "stop";

        /*ボタンの表示 */
        $(".stop").addClass("no-function");
        $(".start").removeClass("no-function");

        clearInterval(timerId);
        temp_times += Date.now() - start;
    });

    $(".reset").click(function () {
        if (pushButton === "reset") return;
        pushButton = "reset";

        /*ボタンの表示 */
        $(".reset").addClass("no-function");
        $(".stop").addClass("no-function");
        $(".start").removeClass("no-function");

        start = temp_times = 0;
        clearInterval(timerId);
        $(".times").text("0:0:0:0");
    });


});