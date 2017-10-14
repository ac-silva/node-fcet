

(async function(){

    var sleep = (time) => { 
        return new Promise((resolve) => {
            setTimeout(resolve, time);
        });
   }

   console.log("teste");
   await sleep(3000);
   console.log("teste1");
   await sleep(3000);
   console.log("teste3");
})();