require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var Hbutton = new Camera({
       position: [
           -71.060217,
          42.382655,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })

     var camera = new Camera({
       position: [
           -71.0942,
          42.3601,
          400// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
       position: [
           -71.0494,
          42.3515,
          400// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
            var camera3 = new Camera({
       position: [
           -71.0589,
          42.3601,
          400// elevation in meters
        ],
        tilt: 0,
        heading: 0
      })

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: Hbutton,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              
              // The clock widget
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner 
    view.ui.add(homeBtn, "top-left");
    
    [uni,park,v3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });

    uni.addEventListener('click', function() {
      // reusing the default camera position 
      view.goTo({
        target:camera
      });
    });
    
    park.addEventListener('click', function() {
      // reusing the default camera position 
      view.goTo({
        target:camera2
      });
    });
    
   
   v3.addEventListener('click', function() {
      // downtown Boston area 
      view.goTo({
        target:camera3
      });
    });


    });