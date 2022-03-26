     let colorsRef = document.getElementsByClassName("colors");

      let canvas = document.getElementById("canvas");

      let backgroundButton = document.getElementById("color-background");

      let colorButton = document.getElementById("color-input");

      let clearButton = document.getElementById("button-clear");

      let eraseButton = document.getElementById("button-erase");

      let penButton = document.getElementById("button-pen");

      let penSize = document.getElementById("pen-slider");

      let toolType = document.getElementById("tool-type");

      //eraser=false and drawing=false initially as user hasn't started using both

      let erase_bool = false;

      let draw_bool = false;

      //context for canvas

      let context = canvas.getContext("2d");

      //initially mouse X and Y positions are 0

      let mouseX = 0;

      let mouseY = 0;

      //get left and top of canvas

      let rectLeft = canvas.getBoundingClientRect().left;

      let rectTop = canvas.getBoundingClientRect().top;

      // Initial Features

      const init = () => {

        context.strokeStyle = "black";

        context.lineWidth = 1;

        // Set Canvas height to parent div height

        canvas.style.width = "100%";

        canvas.style.height = "100%";

        canvas.width = canvas.offsetWidth;

        canvas.height = canvas.offsetHeight;

        // set range title to Pen Size

        toolType.innerHTML = "Pen";

        //set background and color inputs initially

        canvas.style.backgroundColor = "#FFFFFF";

        backgroundButton.value = "#FFFFFF";

        penButton.value = context.strokeStyle;

      };

      //Detect touch device

      const is_touch_device = () => {

        try {

          //We try to create TouchEvent (it would fail for desktops and throw error)

          document.createEvent("TouchEvent");

          return true;

        } catch (e) {

          return false;

        }

      };

      //exact x and y position of mouse/touch

      const getXY = (e) => {

        mouseX =

          (!is_touch_device() ? e.pageX : e.touches?.[0].pageX) - rectLeft;

        mouseY =

          (!is_touch_device() ? e.pageY : e.touches?.[0].pageY) - rectTop;

      };

      //user has started drawing(pressed mouse)

      const startDrawing = (e) => {

        //drawing=true

        draw_bool = true;

        getXY(e);

        // Start Drawing

        context.beginPath();

        context.moveTo(mouseX, mouseY);

      };

      //draw function

      const drawOnCanvas = (e) => {

        if (!is_touch_device()) {

          e.preventDefault();

        }

        getXY(e);

        //if user is drawing(mouse pressed and moving)

        if (draw_bool) {

          //create a line to x position and y position of cursor

          context.lineTo(mouseX, mouseY);

          context.stroke();

          if (erase_bool) {

            // destination-out draws new shapes behind the existing canvas content. (for eraser)

            context.globalCompositeOperation = "destination-out";

          } else {

            /*

      source-over draws new shapes on top of exisitng content */

            context.globalCompositeOperation = "source-over";

          }

        }

      };

      const stopDrawing = () => {

        context.beginPath();

        draw_bool = false;

      };

      //Mouse down/touch start inside canvas

      canvas.addEventListener("mousedown", startDrawing);

      canvas.addEventListener("touchstart", startDrawing);

      // start drawing when mouse/touch moves

      canvas.addEventListener("mousemove", drawOnCanvas);

      canvas.addEventListener("touchmove", drawOnCanvas);

      //when mouse click stops/touch stops stop drawing and begin a new path

      canvas.addEventListener("mouseup", stopDrawing);

      canvas.addEventListener("touchend", stopDrawing);

      //When mouse leaves the canvas

      canvas.addEventListener("mouseleave", stopDrawing);

      // Button for Pen Mode

      penButton.addEventListener("click", () => {

        // set range title to Pen Size

        toolType.innerHTML = "Pen";

        erase_bool = false;

      });

      // Button for Eraser Mode

      eraseButton.addEventListener("click", () => {

        erase_bool = true;

        // set range title to Eraser Size

        toolType.innerHTML = "Eraser";

      });

      // Adjust Pen Size

      penSize.addEventListener("input", () => {

        //set width to range value

        context.lineWidth = penSize.value;

      });

      // Change Color

      colorButton.addEventListener("change", () => {

        //set stroke color

        context.strokeStyle = colorButton.value;

      });

      // Change Background

      backgroundButton.addEventListener("change", () => {

        canvas.style.backgroundColor = backgroundButton.value;

      });

      //Clear

      clearButton.addEventListener("click", () => {

        context.clearRect(0, 0, canvas.width, canvas.height);

        canvas.style.backgroundColor = "#FFF";

        backgroundButton.value = "#FFF";

      });

      //initial settings

      window.onload = init();
