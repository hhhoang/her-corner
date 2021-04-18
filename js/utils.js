// Put your custom javascript functions here
    var index = 1;

    function plusIndex(n){
        index = index + n;
        showImage(index);
    }

    showImage(1);

    function showImage(n){
        var i;
        var x = document.getElementsByClassName("slides");
        var y = document.getElementsByClassName("poems");

        if(n > x.length){index = 1};
        if(n < 1){index = x.length};
        for(i = 0; i < x.length; i++)
            {
                x[i].style.display = "none";
                y[i].style.display = "none";
            }
        x[index-1].style.display = "block";
        y[index-1].style.display = "block";
    }



