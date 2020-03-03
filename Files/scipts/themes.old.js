 
          const themeSelect = document.getElementById("themeSelect");
          const themeStylesheet = document.getElementById("themeStylesheet");

          themeSelect.addEventListener("change", function(){
            themeStylesheet.setAttribute("href","css/" + this.value + ".css");

          });  

          function BlackTheme(){

            themeStylesheet.setAttribute("href", "css/black.css");
          }

          function DefaultTheme(){

          themeStylesheet.setAttribute("href", "css/default.css");
          };

          function PurpleTheme(){

            themeStylesheet.setAttribute("href", "css/purple.css");
          };