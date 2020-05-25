///// CARDIO PARTY /////

///// ROUND 1 /////
function start() {
    var intro = 5;
    var elem = document.getElementById('on');
    var timerOut = setInterval(preCount, 1000);
    var whistle = new Audio(src = 'https://raw.githubusercontent.com/danielescate/cardio-party/master/Whistle.mp3');


    function preCount () {
        if (intro == 0) {
            clearInterval(timerOut);
            document.getElementById('on').innerHTML = "GO!";
            whistle.play();
            countdown();
            preview1();
        } else {
            elem.innerHTML = intro;
            intro--;
        }
    }
    
    function countdown() {
        var timeLeft = 50;
        var timeId = setInterval(start, 1000);

        function start() {
            if (timeLeft == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Rest!";
                whistle.play();
                timeRest();
            } else {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }


    function timeRest() {
        var rest = 10;
        var timeId = setInterval(breakTime, 1000);
       
        function breakTime() {
            if (rest == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Next move!";
                preview2();
                startTime2();
            } else {
                elem.innerHTML = rest;
                rest--;
            }
        }
    }

    function startTime2() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview3();
                    startTime3();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime3() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next Move!";
                    preview4();
                    startTime4();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime4() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview5();
                    startTime5();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime5() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    roundBreak();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }

        function roundBreak() {
            var timeLeft = 30;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Round 2!";
                    whistle.play();
                    startTimeRound2();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }
}

///// ROUND 2 /////
function startTimeRound2() {
    document.getElementById('round').innerHTML = "Round 2";
    var intro = 5;
    var elem = document.getElementById('on');
    var sec = document.getElementById('sec');
    var timerOut = setInterval(preCount, 1000);
    var whistle = new Audio(src = 'audio/Whistle.mp3');


    function preCount () {
        if (intro == 0) {
            clearInterval(timerOut);
            document.getElementById('on').innerHTML = "GO!";
            whistle.play();
            countdown();
            preview1();
        } else {
            elem.innerHTML = intro;
            intro--;
        }
    }
    
    function countdown() {
        var timeLeft = 50;
        var timeId = setInterval(start, 1000);

        function start() {
            if (timeLeft == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Rest!";
                whistle.play();
                timeRest();
            } else {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }


    function timeRest() {
        var rest = 10;
        var timeId = setInterval(breakTime, 1000);
       
        function breakTime() {
            if (rest == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Next move!";
                preview2();
                startTime2();
            } else {
                elem.innerHTML = rest;
                rest--;
            }
        }
    }

    function startTime2() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview3();
                    startTime3();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime3() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview4();
                    startTime4();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime4() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview5();
                    startTime5();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime5() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    roundBreak()
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }

        function roundBreak() {
            var timeLeft = 30;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Round 3!";
                    whistle.play();
                    startTimeRound3();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }
}

///// ROUND 3 /////
function startTimeRound3() {
    document.getElementById('round').innerHTML = "Round 3";
    var intro = 5;
    var elem = document.getElementById('on');
    var sec = document.getElementById('sec');
    var timerOut = setInterval(preCount, 1000);
    var whistle = new Audio(src = 'audio/Whistle.mp3');


    function preCount () {
        if (intro == 0) {
            clearInterval(timerOut);
            document.getElementById('on').innerHTML = "GO!";
            whistle.play();
            countdown();
            preview1();
        } else {
            elem.innerHTML = intro;
            intro--;
        }
    }
    
    function countdown() {
        var timeLeft = 50;
        var timeId = setInterval(start, 1000);

        function start() {
            if (timeLeft == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Rest!";
                whistle.play();
                timeRest();
            } else {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }


    function timeRest() {
        var rest = 10;
        var timeId = setInterval(breakTime, 1000);
       
        function breakTime() {
            if (rest == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Next move!";
                preview2();
                startTime2();
            } else {
                elem.innerHTML = rest;
                rest--;
            }
        }
    }

    function startTime2() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview3();
                    startTime3();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime3() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview4();
                    startTime4();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime4() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview5();
                    startTime5();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime5() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    roundBreak();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }

        function roundBreak() {
            var timeLeft = 30;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Round 4!";
                    whistle.play();
                    startTimeRound4();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }
}

///// ROUND 4 /////
function startTimeRound4() {
    document.getElementById('round').innerHTML = "Round 4";
    var intro = 5;
    var elem = document.getElementById('on');
    var sec = document.getElementById('sec');
    var timerOut = setInterval(preCount, 1000);
    var whistle = new Audio(src = 'audio/Whistle.mp3');


    function preCount () {
        if (intro == 0) {
            clearInterval(timerOut);
            document.getElementById('on').innerHTML = "GO!";
            whistle.play();
            countdown();
            preview1();
        } else {
            elem.innerHTML = intro;
            intro--;
        }
    }
    
    function countdown() {
        var timeLeft = 50;
        var timeId = setInterval(start, 1000);

        function start() {
            if (timeLeft == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Rest!";
                whistle.play();
                timeRest();
            } else {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }


    function timeRest() {
        var rest = 10;
        var timeId = setInterval(breakTime, 1000);
       
        function breakTime() {
            if (rest == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Next!";
                preview2();
                startTime2();
            } else {
                elem.innerHTML = rest;
                rest--;
            }
        }
    }

    function startTime2() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview3();
                    startTime3();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime3() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview4();
                    startTime4();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime4() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview5();
                    startTime5();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime5() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }

        function roundBreak() {
            var timeLeft = 30;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Round 5!";
                    whistle.play();
                    startTimeRound5();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }
}

///// ROUND 5 /////
function startTimeRound5() {
    document.getElementById('round').innerHTML = "Round 5";
    var intro = 5;
    var elem = document.getElementById('on');
    var sec = document.getElementById('sec');
    var timerOut = setInterval(preCount, 1000);
    var whistle = new Audio(src = 'audio/Whistle.mp3');


    function preCount () {
        if (intro == 0) {
            clearInterval(timerOut);
            document.getElementById('on').innerHTML = "GO!";
            whistle.play();
            countdown();
            preview1();
        } else {
            elem.innerHTML = intro;
            intro--;
        }
    }
    
    function countdown() {
        var timeLeft = 50;
        var timeId = setInterval(start, 1000);

        function start() {
            if (timeLeft == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Rest!";
                whistle.play();
                timeRest();
            } else {
                elem.innerHTML = timeLeft;
                timeLeft--;
            }
        }
    }


    function timeRest() {
        var rest = 10;
        var timeId = setInterval(breakTime, 1000);
       
        function breakTime() {
            if (rest == -1) {
                clearInterval(timeId);
                document.getElementById('on').innerHTML = "Next move!";
                preview2();
                startTime2();
            } else {
                elem.innerHTML = rest;
                rest--;
            }
        }
    }

    function startTime2() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview3();
                    startTime3();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime3() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview4();
                    startTime4();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime4() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Rest!";
                    whistle.play();
                    timeRest();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    
    
        function timeRest() {
            var rest = 10;
            var timeId = setInterval(breakTime, 1000);
           
            function breakTime() {
                if (rest == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Next move!";
                    preview5();
                    startTime5();
                } else {
                    elem.innerHTML = rest;
                    rest--;
                }
            }
        }
    }
    
    function startTime5() {
        var intro = 5;
        var elem = document.getElementById('on');
        var sec = document.getElementById('sec');
        var timerOut = setInterval(preCount, 1000);
        var whistle = new Audio(src = 'audio/Whistle.mp3');
    
    
        function preCount () {
            if (intro == 0) {
                clearInterval(timerOut);
                document.getElementById('on').innerHTML = "GO!";
                whistle.play();
                countdown();
            } else {
                elem.innerHTML = intro;
                intro--;
            }
        }
        
        function countdown() {
            var timeLeft = 50;
            var timeId = setInterval(start, 1000);
    
            function start() {
                if (timeLeft == -1) {
                    clearInterval(timeId);
                    document.getElementById('on').innerHTML = "Done!";
                    whistle.play();
                } else {
                    elem.innerHTML = timeLeft;
                    timeLeft--;
                }
            }
        }
    }
}
