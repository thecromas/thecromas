  window.onload = function() {
      if(!window.location.hash) {
          window.location = window.location + '#ready';
          window.location.reload();
      }
      checkCookie();
  }


  