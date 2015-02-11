function drawClouds(cloudDensity, color, opacity){
  var cloudsDiv = $('#clouds')
  cloudsDiv.empty();
  function makeClouds(i){
    var newCanvas = $('<canvas/>').addClass('cloud')
    .attr({
      id: 'cloud'+i,
      width: '400',
      height: '200'
    })
    .css({
      position: 'absolute',
      top: (Math.random( $('#clouds').width() ) * 55 )  + '%',
      left: ((Math.random( $('#clouds').width() ) * 110 ))-20   + '%'
    });;
    newCanvas.appendTo(cloudsDiv)

    var cloudCanvas = document.getElementById('cloud'+i);
    var cloudContext = cloudCanvas.getContext('2d');

    var height = (cloudCanvas.height)/2;
    var width = (cloudCanvas.width)/2;  
    cloudContext.globalAlpha = opacity;
    
    var startX = width/2;
    var startY = height;
    var radius = Math.random() * ((100 - 50) + 50);
    
    cloudContext.beginPath();
    cloudContext.arc(startX, startY, radius, Math.PI, 0, false);
    cloudContext.fillStyle = color;
    cloudContext.fill(); 

    cloudContext.beginPath();
    cloudContext.arc(startX+100, startY, radius/2.5, Math.PI, 0, false);
    cloudContext.fillStyle = color;
    cloudContext.fill();
  }
  for (var i = 0; i < (Math.floor(cloudDensity)); i++) {  
    makeClouds(i) 
  }  
};  


