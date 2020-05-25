var btnContainer = document.getElementsByClassName("controler");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("show");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


function preview1() {
    document.getElementById('position').innerHTML = 'Jump squats';
    document.getElementById('one').click();
}

function preview2() {
    document.getElementById('position').innerHTML = 'Plank toe taps';
    document.getElementById('two').click();
}

function preview3() {
    document.getElementById('position').innerHTML = 'Burpees';
    document.getElementById('three').click();
}

function preview4() {
    document.getElementById('position').innerHTML = 'Narrow Squats';
    document.getElementById('four').click();
}

function preview5() {
    document.getElementById('position').innerHTML = 'Mountain climbers';
    document.getElementById('five').click();
}



///// CARDIO PARTY /////

///// ROUND 1 /////
function startTime() {
    var intro = 5;
    var elem = document.getElementsByClassName('on');
    var sec = document.getElementById('sec');
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
    document.getElementById('round').innerHTML = "2";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Round 2!";
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
    document.getElementById('round').innerHTML = "3";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
    document.getElementById('round').innerHTML = "4";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
    document.getElementById('round').innerHTML = "5";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
                    document.getElementById('on').innerHTML = "Next!";
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
