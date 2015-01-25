function drawClouds(cloudNum){
  var cloudCanvas = document.getElementById('clouds');
  var cloudContext = cloudCanvas.getContext('2d');
  cloudCanvas.width = window.innerWidth;
  cloudCanvas.height = (window.innerHeight);
  var height = cloudCanvas.height;
  var width = cloudCanvas.width;  
  cloudContext.globalAlpha = .3;

  for (var i = 0; i < cloudNum; i++) {  
    var startX = Math.random() * width;
    var startY = Math.random() * height;
    var radius = Math.random() * ((100 - 50) + 50);
    cloudContext.beginPath();
    cloudContext.arc(startX, startY, radius, Math.PI, 0, false);
    cloudContext.fillStyle = 'whitesmoke';
    cloudContext.fill(); 

    cloudContext.beginPath();
    cloudContext.arc(startX+50, startY, radius/3, Math.PI, 0, false);
    cloudContext.fillStyle = 'whitesmoke';
    cloudContext.fill(); 
  }  
};  


