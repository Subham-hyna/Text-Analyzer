//Function foe keeping a count ont he changes in the textbox area
var initial=[];
var deleted=[];

$("#colorChange").click(function(){
    $("body").css("background-color",color.value);
});

function sequence(){
    initial.push(inputText.value);
}

function textCount(){
    $("#characterCount").text(inputText.value.length);
    $("#wordCount").text(inputText.value.trim().split(" ").length);
    
}
//Functionality for the uppercase button
$("#uppercase").click(function(){
    if(initial.length>0){
    inputText.value=inputText.value.toUpperCase();
    textCount();
    sequence();
}
});

//Functionality for the lowercase button
$("#lowercase").click(function(){
    if(initial.length>0){
    inputText.value=inputText.value.toLowerCase();
    sequence();
    textCount();
}
});

$("#left").click(function(){
    if(initial.length>0){
    $("#inputText").css("text-align","left");
    textCount();
}
});
$("#right").click(function(){
    if(initial.length>0){
    $("#inputText").css("text-align","right");
    textCount();
}
});
$("#center").click(function(){
    if(initial.length>0){
    $("#inputText").css("text-align","center");
    textCount();
}
});
$("#justify").click(function(){
    if(initial.length>0){
    $("#inputText").css("text-align","justify");
    textCount();
}
});


//Console.log for keeping the count of changed in the textarea
$("#inputText").keyup(function(event){
    if(restrictedKeys(event.keyCode)){
    sequence();
    textCount();
    }
});

function restrictedKeys(key){
    if(key===18){
        return 0;
    }
    else if(key===40){
        return 0;
    }
    else if(key===37){
        return 0;
    }
    else if(key===38){
        return 0;
    }
    else if(key===39){
        return 0;
    }
    else if(key===20){
        return 0;
    }
    else if(key===17){
        return 0;
    }
    else if(key===35){
        return 0;
    }
    else if(key===27){
        return 0;
    }
    else if(key===112){
        return 0;
    }
    else if(key===113){
        return 0;
    }
    else if(key===114){
        return 0;
    }
    else if(key===115){
        return 0;
    }
    else if(key===116){
        return 0;
    }
    else if(key===117){
        return 0;
    }
    else if(key===118){
        return 0;
    }
    else if(key===119){
        return 0;
    }
    else if(key===120){
        return 0;
    }
    else if(key===121){
        return 0;
    }
    else if(key===122){
        return 0;
    }
    else if(key===123){
        return 0;
    }
    else if(key===36){
        return 0;
    }
    else if(key===45){
        return 0;
    }
    else if(key===144){
        return 0;
    }
    else if(key===34){
        return 0;
    }
    else if(key===33){
        return 0;
    }
    else if(key===19){
        return 0;
    }
    else if(key===44){
        return 0;
    }
    else if(key===145){
        return 0;
    }
    else if(key===16){
        return 0;
    }
    else if(key===9){
        return 0;
    }
    else{
        return 1;
    }
}



//Function to remove the extra spaces between the characters
$("#rmExSpaces").click(function(){
    if(initial.length>0){
    inputText.value=inputText.value.replace(/\s+/g," ").trim();
    textCount();
    sequence();
}
});

//Function to remove the extra spaces between the lines
$("#rmExLines").click(function(){
    if(initial.length>0){
    inputText.value=inputText.value.replace(/\n+/g,"\n").trim();
    sequence();
    textCount();
}
});

//Function for Capitalized Each word
$("#capitalizedEachWord").click(function(){
    if(initial.length>0){
    var title=inputText.value.trim().split(" ");
    for(var i=0;i<title.length;i++){
        if(title[i]===''){
            continue;
        }
        else{
           title[i]=title[i].slice(0,1).toUpperCase()+title[i].slice(1,title[i].length).toLowerCase();
        }
    }
    inputText.value='';
    for(var i=0;i<title.length;i++){
        inputText.value+=title[i]+" ";
    }
    sequence();
    textCount();
}
})
$("#tooglecase").click(function(){
    if(initial.length>0){
    var title=inputText.value.trim().split(" ");
    for(var i=0;i<title.length;i++){
        if(title[i]===''){
            continue;
        }
        else{
           title[i]=title[i].slice(0,1).toLowerCase()+title[i].slice(1,title[i].length).toUpperCase();
        }
    }
    inputText.value='';
    for(var i=0;i<title.length;i++){
        inputText.value+=title[i]+" ";
    }
    sequence();
    textCount();
}
})
$("#sentencecase").click(function(){
    if(initial.length>0){
    var title=inputText.value.trim().split(".");
    for(var i=0;i<title.length;i++){
        title[i]=title[i].trim();
            title[i]=title[i].trim().slice(0,1).toUpperCase()+title[i].slice(1,title[i].length).toLowerCase();
    }
    inputText.value=' ';
    for(var i=0;i<title.length;i++){
        if(i!==title.length-1){
        inputText.value+=title[i]+". ";
    }
    else{
            inputText.value+=title[i];

        }
    }
    sequence();
    textCount();
}
})



var len=0;
let undoCount=0;
$("#undo").click(function(){
    if(initial.length>0){
    var pop=initial.pop();
    deleted.push(pop);
    len=initial.length;
    inputText.value=initial[len-1];
    if(len===0){
        alert("No input");
    }
    if(inputText.value==="undefined"){
        inputText.value="";
    }
    textCount();
    undoCount++;
}
});

$("#redo").click(function(){
    if(undoCount>0){
    if(deleted.length!==1){
        
        var pop=deleted.pop();
        initial.push(pop);
        len=deleted.length;
        
        inputText.value=deleted[len-1];
        
    }
    if(inputText.value==="undefined"){
        inputText.value="";
    }
    
    
    textCount();
}
});



