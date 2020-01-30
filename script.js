$(document).ready(function(){

    // Dictionaries per category
    let $family = [{en: "nephew", tr: "/ plémenik /", bg: "племеник"}, {en: "niece", tr: "/ plémenitsa /", bg: "племеница"}, {en: "husband", tr: "/ saprúg /", bg: "съпруг"}, {en: "wife", tr: "/ saprúga /", bg: "съпруга"}, {en: "son in law", tr: "/ zet /", bg: "зет"}, {en: "daughter in law", tr: "/ snahá /", bg: "снаха"}, {en: "brother", tr: "/ brat /", bg: "брат"}, {en: "aunt", tr: "/ lélya /", bg: "леля"}, {en: "mother", tr: "/ máika /", bg: "майка"}, {en: "father", tr: "/ tátko /", bg: "татко"}, {en: "sister", tr: "/ sestrá /", bg: "сестра"}, {en: "grandmother", tr: "/ bába /", bg: "баба"}, {en: "uncle", tr: "/ chícho /", bg: "чичо"}, {en: "grandfather", tr: "/ dyádo /", bg: "дядо"}]
    let $food = [{en: "onion", tr: "/ luk /", bg: "лук"}, {en: "fish", tr: "/ ríba /", bg: "риба"}, {en: "vegetable", tr: "/ zelenchúk /", bg: "зеленчук"}, {en: "fruit", tr: "/ plod /", bg: "плод"}, {en:"bread", tr:"/ hlyab /", bg: "хляб"},{en:"soup", tr:"/ súpa /", bg: "супа"},{en:"cheese", tr:"/ sírene /", bg: "сирене"},{en:"meat", tr:"/ mesó /", bg: "месо"},{en:"tomato", tr:"/ domát /", bg: "домат"},{en:"potato", tr:"/ kartóf /", bg: "картоф"}, {en: "cucumber", tr: "/ krástavitsa /", bg: "краставица"}, {en: "pepper", tr: "/ chúshka /", bg: "чушка"}, {en: "beans", tr: "/ bob /", bg: "боб"}, {en: "lentils", tr: "/ léshta /", bg: "леща"}, {en: "egg", tr: "/ yaicé /", bg: "яйце"},{en: "milk", tr: "/ mlyáko /", bg: "мляко"},{en: "water", tr: "/ vodá /", bg: "вода"}, {en: "juice", tr: "/ sok /", bg: "сок"},{en: "coffee", tr: "/ kafé /", bg: "кафе"}, {en: "tea", tr: "/ chái /", bg: "чай"}]
    let $travel = [{en:"bus", tr:"/ avtobús /", bg: "автобус"}, {en:"plane", tr:"/ samolét /", bg: "самолет"}, {en: "bike", tr: "/ koleló /", bg: "колело"}, {en: "train", tr: "/ vlak /", bg: "влак"}, {en: "ticket", tr: "/ bilét /", bg: "билет"}, {en: "seat", tr: "/ sedálka /", bg: "седалка"}, {en: "ship", tr: "/ kórab /", bg: "кораб"}, {en: "on foot", tr: "/ peshá /", bg: "пеша"}];
    let $directions = [{en:"left", tr:"/ lyavo /", bg: "ляво"}, {en:"right", tr:"/ dyasno /", bg: "дясно"}, {en: "straight", tr: "/ naprávo /", bg: "направо"}, {en: "backwards", tr: "/ nazád /", bg: "назад"}, {en: "where is", tr: "/ kade e /", bg: "къде е"}, {en: "next to", tr: "/ do /", bg: "до"},{en: "near", tr: "/ blízo /", bg: "близо"}, {en: "behind", tr: "/ zad /", bg: "зад"}, {en: "in front of", tr: "/ pred /", bg: "пред"}];
    let $greetings = [{en:"good day", tr:"/ dobar den /", bg: "добър ден"}, {en:"hello", tr:"/ zdravei /", bg: "здравей"}, {en: "good evening", tr: "/ dobar vécher /", bg: "добър вечер"}, {en: "welcome", tr: "/ dobré doshlí /", bg: "добре дошли"}, {en: "goodbye", tr: "/ dovíjdane /", bg: "довиждане"}, {en: "see you soon", tr: "/ do skóro /", bg: "до скоро"}, {en: "see you tomorrow", tr: "/ do útre /", bg: "до утре"}, {en: "bye", tr: "/ chao /", bg: "чао"}, {en: "please", tr: "/ mólya /", bg: "моля"}];
    let $home = [{en:"stove", tr:"/ kotlón /", bg: "котлон"}, {en: "wardrobe", tr: "/ garderób /", bg: "гардероб"}, {en: "lamp", tr: "/ lámpa /", bg: "лампа"}, {en:"oven", tr:"/ pechka /", bg: "печка"}, {en:"cupboard", tr:"/ shkaf /", bg: "шкаф"}, {en: "plate", tr: "/ chiníya /", bg: "чиния"}, {en: "cup", tr: "/ chásha /", bg: "чаша"}, {en: "spoon", tr: "/ lajíca /", bg: "лъжица"},{en: "fork", tr: "/ vilíca /", bg: "вилица"}, {en: "knife", tr: "/ noj /", bg: "нож"}];
    let $numbers = [{en: "three", tr: "/ tri /", bg: "три"}, {en: "six", tr: "/ shest /", bg: "шест"}, {en: "seven", tr: "/ sédem /", bg: "седем"}, {en: "nine", tr: "/ dévet /", bg: "девет"},{en: "ten", tr: "/ déset /", bg: "десет"}, {en: "eight", tr: "/ ósem /", bg: "осем"}, {en: "five", tr: "/ pet /", bg: "пет"}, {en: "four", tr: "/ chétiri /", bg: "четири"}, {en:"one", tr:"/ edno /", bg: "едно"}, {en:"two", tr:"/ dve /", bg: "две"}];
    // Word of the day dictionary
    let $wordOfDay = [{en:"winter", tr:"/ zíma /", bg: "зима"}, {en:"cold", tr:"/ studéno /", bg: "студено"}, {en:"shop", tr:"/ magazín /", bg: "магазин"}, {en:"here", tr:"/ tuk /", bg: "тук"}, {en:"sun", tr:"/ slántse /", bg: "слънце"}, {en:"there", tr:"/ tam /", bg: "там"}, {en:"warm", tr:"/ tóplo /", bg: "топло"}, {en:"house", tr:"/ káshta /", bg: "къща"}, {en:"table", tr:"/ mása /", bg: "маса"}, {en:"day", tr:"/ den /", bg: "ден"}, {en:"night", tr:"/ nosht /", bg: "нощ"}, {en:"dog", tr:"/ kúche /", bg: "куче"}, {en:"money", tr:"/ parí /", bg: "пари"}, {en:"cat", tr:"/ kótka /", bg: "котка"}, {en:"summer", tr:"/ lyato /", bg: "лято"}, {en:"sea", tr:"/ moré /", bg: "море"},{en:"bag", tr:"/ torbá /", bg: "торба"}, {en:"autumn", tr:"/ ésen /", bg: "есен"}, {en:"fridge", tr:"/ hladílnik /", bg: "хладилник"}, {en:"weather, time", tr:"/ vréme /", bg: "време"}, {en:"spring", tr:"/ prólet /", bg: "пролет"}, {en:"cup", tr:"/ chásha /", bg: "чаша"}, {en:"way, road", tr:"/ pat /", bg: "път"}, {en:"inside", tr:"/ vatre /", bg: "вътре"}, {en:"job", tr:"/ rábota /", bg: "работа"}, {en:"music", tr:"/ músika /", bg: "музика"}, {en:"TV", tr:"/ televísia /", bg: "телевизия"}, {en:"outside", tr:"/ naván /", bg: "навън"}, {en:"person", tr:"/ chovék /", bg: "човек"}, {en:"bed", tr:"/ legló /", bg: "легло"}, {en:"chair", tr:"/ stol /", bg: "стол"}, {en:"flower", tr:"/ tsvéte /", bg: "цвете"}, {en:"sky", tr:"/ nebé /", bg: "небе"}];


    let $activeArray; //defines the active category
    let $index; //defines the index of the word being displayed
    let $correctAnswers = 0; //keeps track of the number of corrct answers
    let $totalAnswers = 0; //keeps track of the number of attempted answers
    let $rate = 0; //defines success rate as the total of correct answers divided by total answers

    let audioCorrect = new Audio("sounds/soft_notification.mp3");
    let audioWrong = new Audio("sounds/ops_sound.mp3");
  
    // Word of the day 
    let $currentDate = new Date();
    $("#wordBG").text($wordOfDay[$currentDate.getDate()].bg);
    $("#wordTranscript").text($wordOfDay[$currentDate.getDate()].tr);
    $("#wordEN").text($wordOfDay[$currentDate.getDate()].en);

    // Success rate doughnut chart
    let successChart = new Chart($("#chart"), {
        type: "doughnut",
        data: {
            datasets:[{
                data:[0, 1],
                backgroundColor:['rgb(164,208,196)'],
                borderWidth: "none" }]
        },
        options: {
            tooltips: {enabled:false},  
            cutoutPercentage: 80,   
            aspectRatio: 1.7    
        }
    })

    // This functions loads a new word with index i from the given array
    function showNew(array, i) {
        $("#mainWord").text(array[i].bg); 
        $("#mainTranscript").text(array[i].tr);
    }

    /* This function registers that an answer has been attempted and then compares
    the value that's been entered to the correct answer; if correct, it adds 1 to 
    the correctAnswers variable and updates the success rate of the user */
    function checkAnswer(array, i){
        $totalAnswers++;
        if ($("#input").val().toLowerCase() === array[i].en) {
            $("#result").attr("src", "images/correct.svg");
            $correctAnswers++;
            audioCorrect.play();
        } else {
            $("#result").attr("src", "images/wrong.svg"); 
            $("#mainAnswer").text("Correct answer: " + array[i].en);
            $("#mainAnswer").css("visibility", "visible");
            audioWrong.play();
        }
        $("#result").css("visibility", "visible");
        $rate = Math.round((($correctAnswers/$totalAnswers)*100));
        $("#successRate").text($rate + "%");
        successChart.data.datasets[0].data[0]=$rate; 
        successChart.data.datasets[0].data[1]=100-$rate; 
        successChart.update();   
    }

    // This function cleans the input field 
    function clean(){
        $("#mainAnswer").css("visibility", "hidden");
        $("#result").css("visibility", "hidden");
        $("#input").val("");
    }
    
    // This function activates a selected category by resetting the activeArray variable
    function activate(category, array){
        $("#landingImage").css("display","none");
        $(".questions").css("display", "block");
        $("div.select").removeClass("select");   
        $(category).addClass("select"); // marks the current category as selected
        clean(); 
        $activeArray = array;
        $index = Math.floor(Math.random()*($activeArray.length));
        showNew($activeArray, $index);
    }

    // Event listeners 
    $(".food").on("click", function(){event.preventDefault(); activate(this, $food)});
    $(".travel").on("click", function(){event.preventDefault(); activate(this, $travel)});
    $(".family").on("click", function(){event.preventDefault(); activate(this, $family)});
    $(".directions").on("click", function(){event.preventDefault(); activate(this, $directions)});
    $(".greetings").on("click", function(){event.preventDefault(); activate(this, $greetings)});
    $(".numbers").on("click", function(){event.preventDefault(); activate(this, $numbers)});
    $(".home").on("click", function(){event.preventDefault(); activate(this, $home)});

    $("#check").on("click", function(){
        event.preventDefault();
        checkAnswer($activeArray, $index);
    })
    
    $("#next").on("click", function(){
        event.preventDefault();
        clean();
        $index = Math.floor(Math.random()*($activeArray.length));
        showNew($activeArray, $index);
    })

})