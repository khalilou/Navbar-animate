window.addEventListener("load", function() {
    var target = "#"+this.document.querySelector("[id]").getAttribute("id");
    console.log(target);
    window.addEventListener("popstate", function(){
        if(target != "" && target != window.location.hash){
            var node = document.querySelector('[data-previous]');
            console.log(node);
            if(node != null) 
                node.removeAttribute("data-previous");
                document.querySelector(target).setAttribute("data-previous","");
            
        }
        target = window.location.hash;
    })
})