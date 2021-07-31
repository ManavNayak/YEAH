
var logo, brand, logoImg, brandImg;
var iql, bwl, mcql, pl, al;
var bar, barImg, sign, icon, iconImg, main, bg, bgImg, app;
var box1, box2;
var iqb, bwb, mcqb, pb, ab;
var gameState = "BRAND";

function preload(){

  logoImg = loadImage("logo.jpg");
  barImg = loadAnimation("00.png", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png");
  iconImg = loadImage("icon.png");
  bgImg = loadImage("bg.png");
  
}

function setup() {
  createCanvas(1080, 1920);

  bg = createSprite(540, 960, 100, 100);
  bg.addImage("bg", bgImg);
  bg.scale = 1.5;
  
  logo = createSprite(510, 760, 100, 100);
  logo.addImage("logo", logoImg);
  logo.scale = 3;
  
  brand = createDiv("04 CREATIONS");
  brand.style('font-size', '120px');
  brand.position(115, 1000);

  app = createDiv("IQ GENIE");
  app.style('font-size', '120px');
  app.style("color","#ffffff");
  app.position(250, 800);

  bar = createSprite(525, 1360, 100, 100);
  bar.addAnimation("bar", barImg);
  bar.scale = 4;

  box1 = createSprite(800, 960, 20, 20);
  box1.visible = false;

  box2 = createSprite(800, 960, 50, 50);
  box2.visible = false;

  sign = createDiv("LOADING.....");
  sign.style('font-size', '85px');
  sign.style("color","#ffffff");
  sign.position(305, 1450);

  icon = createSprite(510, 460, 100, 100);
  icon.addImage("icon", iconImg);
  icon.scale = 3;

  bwl = createImg("bwl.png");
  bwl.position(175, 410);

  mcql = createImg("mcql.png");
  mcql.position(175, 710);

  pl = createImg("pl.png");
  pl.position (175, 1010);

  al = createImg("al.png");
  al.position(175, 1310);

  iql = createImg("iql.png");
  iql.position(175, 1610);

  bwb = createButton("TRICKY WAVES");
  bwb.position(150, 400);
  bwb.size(750, 125);
  bwb.style("font-size","48px");
  bwb.style("background-color","#ffffff");
  bwb.style("color","#000000");
  bwb.style("border-radius", "70px");

  mcqb = createButton("QUICK MCQ'S");
  mcqb.position(150, 700);
  mcqb.size(750, 125);
  mcqb.style("font-size","50px");
  mcqb.style("background-color","#ffffff");
  mcqb.style("color","#000000");
  mcqb.style("border-radius", "70px");

  pb = createButton("PUZZLES");
  pb.position(150, 1000);
  pb.size(750, 125);
  pb.style("font-size","50px");
  pb.style("background-color","#ffffff");
  pb.style("color","#000000");
  pb.style("border-radius", "70px");

  iqb = createButton("IQ ANALYSIS");
  iqb.position(150, 1600);
  iqb.size(750, 125);
  iqb.style("font-size","53px");
  iqb.style("background-color","#ffffff");
  iqb.style("color","#000000");
  iqb.style("border-radius", "70px");

  ab = createButton("DECODING");
  ab.position(150, 1300);
  ab.size(750, 125);
  ab.style("font-size","50px");
  ab.style("background-color","#ffffff");
  ab.style("color","#000000");
  ab.style("border-radius", "70px");

}

function draw() {
  background("white"); 
  
  if(gameState === "BRAND"){

    logo.visible = true;
    
        brand.show();
    
        bar.visible = false;   
        icon.visible = false;
        bg.visible = false;
        al.hide();
        bwl.hide();
        iql.hide();
        pl.hide();
        mcql.hide();
    
        sign.hide();  
        app.hide();
        ab.hide();
        bwb.hide();
        iqb.hide();
        mcqb.hide();
        pb.hide();
    
        box1.velocityY = 1.5;
        box2.velocityY = 0;

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");

    }else if (isPortrait()) {
  
      logo.visible = true;
    
        brand.show();
    
        bar.visible = false;   
        icon.visible = false;
        bg.visible = false;
        al.hide();
        bwl.hide();
        iql.hide();
        pl.hide();
        mcql.hide();
    
        sign.hide();  
        app.hide();
        ab.hide();
        bwb.hide();
        iqb.hide();
        mcqb.hide();
        pb.hide();
    
        box1.velocityY = 1.5;
        box2.velocityY = 0;

    }

  }

  if(box1.y > 1080 && gameState === "BRAND"){

    gameState = "LOAD";
    loadScreen();

  }

  if(box2.y > 1080 && gameState === "LOAD"){

    gameState = "HOME";
    homeScreen();

  }

  al.mousePressed(()=>{
    gameState = "CODE";
    cScreen();
  });

  bwl.mousePressed(()=>{
    gameState = "BUB";
    bScreen();
  });

  iql.mousePressed(()=>{
    gameState = "IQ";
    iqScreen();
  });

  mcql.mousePressed(()=>{
    gameState = "MCQ";
    mcqScreen();
  });

  ab.mousePressed(()=>{
    gameState = "CODE";
    cScreen();
  });

  bwb.mousePressed(()=>{
    gameState = "BUB";
    bScreen();
  });

  iqb.mousePressed(()=>{
    gameState = "IQ";
    iqScreen();
  });

  mcqb.mousePressed(()=>{
    gameState = "MCQ";
    mcqScreen();
  });

  pb.mousePressed(()=>{
    gameState = "PUZZ";
    pScreen();
  });
  
  console.log(gameState);
  drawSprites();
}

function isLandscape() {
  return window.innerWidth > window.innerHeight;
}

function isPortrait() {
  return window.innerHeight > window.innerWidth;
}

function loadScreen(){

  if(gameState === "LOAD"){

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");

    }else if (isPortrait()) {
  
      logo.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
  
      brand.hide();
  
      bar.visible = true;
      icon.visible = true;
      bg.visible = true;
  
      sign.show(); 
      app.show();   
      
      ab.hide();   
      bwb.hide();  
      iqb.hide();    
      mcqb.hide();
      pb.hide();
      
  
      box1.velocityY = 0;
      box2.velocityY = 1.05;

    }

  }

}

function homeScreen(){

  if(gameState === "HOME"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;

      bg.visible = true;
      al.show();
      bwl.show();
      iql.show();
      pl.show();
      mcql.show();

      sign.hide(); 
      brand.hide();
      app.hide();

      ab.show();
      bwb.show();
      iqb.show();
      mcqb.show();
      pb.show();

      box1.velocityY = 0;
      box2.velocityY = 0;

    }

  }

}

function bScreen(){

  if(gameState === "BUB"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
      bg.visible = true;
  
      sign.hide(); 
      brand.hide();
      app.hide();
      sign.hide();  
      app.hide();
      ab.hide();
      bwb.hide();   
      iqb.hide();  
      mcqb.hide(); 
      pb.hide(); 
  
      box1.velocityY = 0;
      box2.velocityY = 0;

    }

  }

}

function mcqScreen(){

  if(gameState === "MCQ"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
      bg.visible = true;
  
      sign.hide(); 
      brand.hide();
      app.hide();
      sign.hide();  
      app.hide();
      ab.hide();
      bwb.hide();   
      iqb.hide();  
      mcqb.hide(); 
      pb.hide(); 
  
      box1.velocityY = 0;
      box2.velocityY = 0;

    }

  }

}

function pScreen(){

  if(gameState === "PUZZ"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
      bg.visible = true;
  
      sign.hide(); 
      brand.hide();
      app.hide();
      sign.hide();  
      app.hide();
      ab.hide();
      bwb.hide();   
      iqb.hide();  
      mcqb.hide(); 
      pb.hide(); 
  
      box1.velocityY = 0;
      box2.velocityY = 0;

    }

  }

}

function iqScreen(){

  if(gameState === "IQ"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
      bg.visible = true;
  
      sign.hide(); 
      brand.hide();
      app.hide();
      sign.hide();  
      app.hide();
      ab.hide();
      bwb.hide();   
      iqb.hide();  
      mcqb.hide(); 
      pb.hide(); 
  
      box1.velocityY = 0;
      box2.velocityY = 0;

    }

  }

}

function cScreen(){

  if(gameState === "CODE"){  

    if (isLandscape()) {

      alert("Kindly rotate your device to portrait mode for the best experience");
      
    }else if (isPortrait()) {
  
      logo.visible = false;
      bar.visible = false;
      icon.visible = false;
      al.hide();
      bwl.hide();
      iql.hide();
      pl.hide();
      mcql.hide();
      bg.visible = true;
  
      sign.hide(); 
      brand.hide();
      app.hide();
      sign.hide();  
      app.hide();
      ab.hide();
      bwb.hide();   
      iqb.hide();  
      mcqb.hide(); 
      pb.hide(); 
  
      box1.velocityY = 0;
      box2.velocityY = 0;

    }
  }

}