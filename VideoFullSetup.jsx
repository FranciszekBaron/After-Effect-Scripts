
//global final indexes of items, you have to find your own 
var photo = findIndexByName("PHOTO");
var song = findIndexByName("SONG");
var song2 = findIndexByName("SONG2");
var precomp = findIndexByName("Pre-comp 2");
var graphic = findIndexByName("Graphic 1")
var text = findIndexByName("TEXT");
var instagram = findIndexByName("Pre-comp 3")
var website = findIndexByName("Pre-comp 4")
var expressionAmplitude1 = "ease(value,20,55,0,random(10,50))";
var expressionAmplitude2 = "ease(value,20,56,0,8)";
var expressionGraphicScale = "temp = thisComp.layer(\"Audio Amplitude 3\").effect(\"Both Channels\")(\"Slider\")[temp, temp] + [100,100]";
var expressionBrightnessScale = "thisComp.layer(\"Audio Amplitude 2\").effect(\"Both Channels\")(\"Slider\")";
// var expressionMoveValue = app.project.item(precomp).layer(9).effect(1).property("Slider").expression
// var expression

//global final indexes of items, you have to find your own


//change color and background image
//this should be the only things u are changing when using this script
var color = "#F74747";
var photoFile = "C:/Users/Franczi/Downloads/iStock-1372999941.jpg"
var songFile = "C:/Users/Franczi/OneDrive - Polsko-Japońska Akademia Technik Komputerowych/Desktop/Beats/Cornerz/CORNERZ.mp3";


replacePhoto(photoFile,photo);
replaceSong(songFile,song,song2);
changeColorPallette(precomp,graphic,text,instagram,website,color);
var stringson = "[Audios";


deselectAll();
//createAudioKeyFrames(precomp,app.project.item(precomp).numLayers);


alert(app.project.item(precomp).layer(1).effect(1).property("Slider").valueAtTime(9,false));
app.project.item(precomp).layer(1).effect(1).property("Slider").setValueAtTime(9,1000);

// for(var i = 0 ; i<150 ; i++){
//      var x = app.project.item(precomp).layer(1).effect(1).property("Slider").valueAtTime(i,false);
//      app.project.item(precomp).layer(9).effect(1).property("Slider").setValueAtTime(i,x);
//  }






alert("end");





//replace photo
function replacePhoto(photoFile,previousPhotoIndex){
    var io = new File (photoFile);
    app.project.item(previousPhotoIndex).replace(io);
}

//replace song
function replaceSong(songFile,previousSongIndex,previousSongIndex2){
    var io2 = new File(songFile);
    app.project.item(previousSongIndex).replace(io2);
    app.project.item(previousSongIndex2).replace(io2);
}



//function to deselect all Items of the project, and also every layer of every composition
function deselectAll(){
    for(var i = 1; i<=app.project.numItems;i++){
        for(var j = 1; j<=app.project.item(i).numLayers ; j++){
            app.project.item(i).layer(j).selected = false;
        }
    }

    for(var i = 1; i<=app.project.numItems;i++){
        app.project.item(i).selected=false;
    }
}


function createAudioKeyFrames(compIndex,audioItemIndex){
    deselectAll();
    selectItem(compIndex,audioItemIndex);
     if(app.project.item(compIndex).layer(1).name=="Audio Amplitude"){
        app.project.item(compIndex).layer(1).remove();
        deselectAll();
        selectItem(compIndex,audioItemIndex-1);
        app.executeCommand(app.findMenuCommandId("Convert Audio to Keyframes"));
     }else{
        deselectAll();
        selectItem(compIndex,audioItemIndex);
        app.executeCommand(app.findMenuCommandId("Convert Audio to Keyframes"));
     }
}

function copyAudioKeyframesToProjectKeyframes(){

}

//funtion to select layer you want to work with
function selectItem(compIndex,layerIndex)
{
    
    if(app.project.item(compIndex).layer(layerIndex).selected==false){
       app.project.item(compIndex).layer(layerIndex).selected = true;
    }
}

function findIndexByName(name){
    
    for(var i =1 ; i<=app.project.numItems;i++){
        if(app.project.item(i).name == name){
            
            return i;
        }
        
    }
    alert("there is no such item as" + name)
}

function changeColorPallette(precomp,graphic,text,instagram,website,color){

    app.project.item(precomp).layer(2).effect(1).property(3).setValue([(hexToRgb(color).r)/255,(hexToRgb(color).g)/255,(hexToRgb(color).b)/255]);
    app.project.item(graphic).layer(1).effect(1).property(3).setValue([(hexToRgb(color).r)/255,(hexToRgb(color).g)/255,(hexToRgb(color).b)/255]);
    app.project.item(text).layer(1).effect(1).property(3).setValue([(hexToRgb(color).r)/255,(hexToRgb(color).g)/255,(hexToRgb(color).b)/255]);
    app.project.item(instagram).layer(1).effect(1).property(3).setValue([(hexToRgb(color).r)/255,(hexToRgb(color).g)/255,(hexToRgb(color).b)/255]);
    app.project.item(website).layer(1).effect(1).property(3).setValue([(hexToRgb(color).r)/255,(hexToRgb(color).g)/255,(hexToRgb(color).b)/255]);
}


//convert Hex to rgb color
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }








