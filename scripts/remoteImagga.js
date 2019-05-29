(
  function () {
      let App = window.App || {};

      function RemoteImagga() {}

      let data = (url)=>{
          return {
              url:url,
              token: 'Basic YWNjXzM1YjA5YTVhMGQ0ODhjYjo3MGUzNzgxOGRjYmQ3MzY1YmY3ZDE3MWNmMDA5YTkwMw=='
          };
      };

        let response = (url,val)=>{
            return fetch('http://imaggaservice.herokuapp.com/'+val,{
                method: 'POST',
                body:JSON.stringify(data(url)),
                headers: {
                    "Content-Type": "application/json",
                },

            })
        };
      RemoteImagga.prototype.getDataTags = function(url){
        return  response(url,'tagging');
      };

      RemoteImagga.prototype.getDataColors = function(url){
        return   response(url,'colors');
      };
      App.RemoteImagga = RemoteImagga;
      window.App = App;
  }
)();