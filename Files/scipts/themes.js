 
          const themeSelect = document.getElementById("themeSelect");
          const themeStylesheet = document.getElementById("themeStylesheet");

          themeSelect.addEventListener("change", function(){
            themeStylesheet.setAttribute("href","css/" + this.value + ".css");

          });  

          function BlackTheme(){

            themeStylesheet.setAttribute("href", "css/black.css");
            setCookie("Theme","Black",365);
          }

          function DefaultTheme(){

          themeStylesheet.setAttribute("href", "css/default.css");
          setCookie("Theme","Default",365);
          };

          function PurpleTheme(){

            themeStylesheet.setAttribute("href", "css/purple.css");
            setCookie("Theme","Purple",365);
          };





          function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
          }
          
          function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
          
          function checkCookie() {
            var user = getCookie("Theme");
            
            switch(user){

              case 'Black':
                BlackTheme();
                break;            
              
              case 'Purple':
                PurpleTheme();
                break;

                Default
                DefaultTheme();
            }
              
          }

          