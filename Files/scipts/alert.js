    var nenche = 1;
    var names = [];
    var url="imput.txt";
    var flashInterval;
    var aux=0;
          
    function reqListener () {
      var lines = this.responseText.split('\n');
      for(var line = 0; line < lines.length; line++){
        names[line]="#"+ lines[line];
        console.log(names[line]);
        }}  

      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", url);
      oReq.send();
                       
      function MeLiga ()
      { 
        if (names.length>0)
        {
          while (aux < names.length) 
          {
            $(names[aux]).toggleClass('red-border');
            aux++;
            if(nenche > 0 )
            {
              $('#DeuRuim').modal('show');
              nenche=0;
            }
          }
        }
      }       
