window.addEventListener("load", function(){

    const btn = document.querySelector(".share-button");

    btn.addEventListener('click', function(){
        
        var mssg = document.querySelector(".share-box");

        this.classList.toggle("active");
        mssg.classList.toggle("visible");

    });
});