var priceMulti = 3;
var lobsters = 0;
var multi = 1;
var x2Price = 30;

//funcs
function click_lobster() {
  
  lobsters = lobsters + 1*multi;
	console.log(lobsters);
	setText("lobsterCountPlayScreen", lobsters);
	setText("lobsterCount", lobsters);
	setProperty("lobsterBtn", "background-color", rgb(randomNumber(200, 255),randomNumber(0, 150), randomNumber(0, 150)));
  playSound("sound://default.mp3", false);
  var rand = randomNumber(0, 50);
  if(rand==42){
    setImageURL("AD", "https://i.redd.it/vgh4ufjroho21.jpg");
    showElement("AD");
    showElement("xoutAd");
    playSound("sound://category_alerts/retro_game_powerup_7.mp3", false);
  }
  if(rand==43){
    setImageURL("AD", "https://i.ytimg.com/vi/9iEOdIV-OhI/maxresdefault.jpg");
    showElement("AD");
    showElement("xoutAd");
    playSound("sound://category_alerts/retro_game_powerup_7.mp3", false);
  }
  rand = 0;
}

playSound("sound://default.mp3", false);

//ad


//start screen btns

onEvent("startBtn", "click", function( ) {
	setScreen("clickScreen");
	playSound("sound://category_app/app_button_4.mp3", false);
});

onEvent("settingsBtn", "click", function( ) {
	setScreen("settings");
	playSound("sound://category_app/app_button_4.mp3", false);
});

onEvent("shopBtn", "click", function( ) {
	setScreen("shop");
	playSound("sound://category_app/app_button_4.mp3", false);
});

onEvent("startBtn", "click", function( ) {
	setScreen("clickScreen");
	playSound("sound://category_app/app_button_4.mp3", false);
});


// home buttons

onEvent("homBtn", "click", function( ) {
	setScreen("startScreen");
	playSound("sound://category_app/app_button_4.mp3", false);
});

onEvent("homeBtn", "click", function( ) {
	setScreen("startScreen");
	playSound("sound://category_app/app_button_4.mp3", false);
});

onEvent("home", "click", function( ) {
	setScreen("startScreen");
	playSound("sound://category_app/app_button_4.mp3", false);
});


//settigns

onEvent("setBg", "click", function( ) {
  var BG = rgb(getProperty("red", "value"), getProperty("green", "value"), getProperty("blue", "value"));
  setProperty("clickScreen", "background-color", BG);
  setProperty("settings", "background-color", BG);
  setProperty("shop", "background-color", BG);
  playSound("sound://category_app/app_button_4.mp3", false);
});

//clicker
onEvent("lobsterBtn", "click", click_lobster);

onEvent("xoutAd", "click", function( ) {
  hideElement("AD");
  hideElement("xoutAd");
});


//shop
onEvent("2xlobsters", "click", function( ) {
  if (lobsters>=x2Price) {
    lobsters = lobsters - x2Price;
    setText("lobsterCount", lobsters);
    setText("lobsterCountPlayScreen", lobsters);
    x2Price = x2Price*priceMulti;
    multi = multi*2;
    //point multi doubles while price triples
    setText("2xlobsters", x2Price+": 2x lobsters");
    playSound("sound://category_achievements/bubbly_game_achievement_sound.mp3", false);
    
  }
  else {
    playSound("sound://category_digital/error_3.mp3", false);
  }
});
  

//sources
//https://pngimg.com/uploads/lobster/lobster_PNG14234.png
//https://i.redd.it/vgh4ufjroho21.jpg
