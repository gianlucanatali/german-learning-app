var arr;
var pos=0;

var praepList=["auf","über","bei","mit","gegenüber","als","für","vor","an","gegen","nach"];


var testJson;

var answerJson={"adj_praepos": []};

var currAnswer={"infinitiv": "", "praep": "", "casus": ""};
var currElem={"infinitiv": "", "praep": "", "casus": ""};

$(document).ready(function(){
    init();

    $( "div.col3" ).on('click', selectCasus);
    $( "div.col1" ).on('click', selectPraep);
    $( "div.check" ).on('click', submitAnswer);
    $( "div.next" ).on('click', next);
    createPraep();
});

function createPraep(){
    var arrayLength = praepList.length;
    var html='';
    for (var i = 0; i < arrayLength; i++) {
        html += "<div class='box selector col1 row"+(i+2)+"'>"+ praepList[i] +"</div>"
    }

    $('.wrapper2').append(html);
}



var json = {"adj_praepos": [
    {"infinitiv": "aufgeschlossen sein", "praep": "gegenüber", "casus": "DAT","beispiel": "Der Kollege ist auch Kritik gegenüber aufgeschlossen"},
    {"infinitiv": "bekannt sein", "praep": "als", "casus": "NOM","beispiel": "Der Autor ist als Kämpfer für den Frieden überall bekannt"},
    {"infinitiv": "bekannt sein", "praep": "für", "casus": "AKK","beispiel": "Der Millionär ist für seine Großzügigkeit bekannt"},
    {"infinitiv": "(un)beliebt sein", "praep": "bei", "casus": "DAT","beispiel": "Bruno ist bei seinen Fans sehr beliebt"},
    {"infinitiv": "blass sein", "praep": "vor", "casus": "DAT","beispiel": "Sie war ganz blass vor Angst"},
    {"infinitiv": "dankbar sein", "praep": "für", "casus": "AKK","beispiel": "Die Polizei ist für jeden Hinweis dankbar"},
    {"infinitiv": "gespannt sein", "praep": "auf", "casus": "AKK","beispiel": "Wir sind auf das Ergebnis sehr gespannt"},
    {"infinitiv": "gewöhnt sein", "praep": "an", "casus": "AKK","beispiel": "Ich bin an diese Hitze nicht gewöhnt"},
    {"infinitiv": "immun sein", "praep": "gegen", "casus": "AKK","beispiel": "Er ist jetz gegen die Krankheit immun"},
    {"infinitiv": "interessiert sein", "praep": "an", "casus": "DAT","beispiel": "Die Konkurrenz ist an unseren Arbeitsergebnissen interessiert"},
    {"infinitiv": "neugierig sein", "praep": "auf", "casus": "AKK","beispiel": "Auf die Resultate der Auslosung bin ich richtig neugierig"},
    {"infinitiv": "nützlich sein", "praep": "für", "casus": "AKK","beispiel": "Benno übernimmt nur Projekte, die für seine Karriere nützlich sind"},
    {"infinitiv": "(un)schädlich sein", "praep": "für", "casus": "AKK","beispiel": "Autoabgase sind schädlich für die Umwelt"},
    {"infinitiv": "traurig sein", "praep": "über", "casus": "AKK","beispiel": "Über deinen Weggang sind wir alle sehr traurig"},
    {"infinitiv": "verärgert sein", "praep": "über", "casus": "AKK","beispiel": "Die Organisatoren waren über die Absage des Künstlers verärgert"},
    {"infinitiv": "verrückt sein", "praep": "nach", "casus": "DAT","beispiel": "Sie ist verrückt nach Schokolade"},
    {"infinitiv": "verwundert sein", "praep": "über", "casus": "AKK","beispiel": "Über diese Einschätzung sind wir sehr verwundert"},
    {"infinitiv": "(un)zufrieden sein", "praep": "mit", "casus": "DAT","beispiel": "Mit meinem Gehalt bin ich sehr zufrieden"},
    {"infinitiv": "behilflich sein", "praep": "bei", "casus": "DAT","beispiel": "Er ist bei dem Praktikanten behilflich"},
    {"infinitiv": "erfreut sein", "praep": "über", "casus": "DAT","beispiel": "Über meine Bewerbung bin ich erfreut"}
]
};


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function printArr(a){
    var str="";
    for(var i = 0; i < a.length; i++) {
        str=str+""+a[i].infinitiv
            +"-> "+a[i].praep
            +" + "+a[i].casus
            +", beispiel: "+a[i].beispiel
            +"</br>"
    }
    return str;
}

function refreshElem(){
    $('#infinitiv').html(currAnswer.infinitiv);
    $('#praep').html(currAnswer.praep);
    $('#casus').html(currAnswer.casus);
    $('#beispiel').html(currAnswer.beispiel);
}

function init(){
    testJson=shuffle(json.adj_praepos);
    getNext();
    refreshElem();
    praepList.sort()
}

function getNext(){
    currAnswer={"infinitiv": "", "praep": "", "casus": "", "beispiel":""};
    currElem=testJson[pos];
    currAnswer.infinitiv=currElem.infinitiv;
    pos=pos+1;
}



function selectCasus() {
    currAnswer.casus=this.innerHTML;
    refreshElem();
}

function selectPraep() {
    currAnswer.praep=this.innerHTML;
    refreshElem();
}

function submitAnswer(){
    if(!checkAnswer()){
        alert("Wrong answer!");
    }else{
       currAnswer.beispiel=currElem.beispiel;
        refreshElem();
    }
    
    
}

function next(){

    getNext();
    refreshElem();
    
}

function checkAnswer(){
    var testA=currAnswer.infinitiv===currElem.infinitiv;
    var testB=currAnswer.casus===currElem.casus;
    var testC=currAnswer.praep===currElem.praep;
    return testA&&testB&&testC;
}