    var checkbox = document.getElementById('usebuff'), 
        buffcalc = document.getElementById('buffcalculation');
    checkbox.addEventListener('change', function() {
        if(this.checked){
            buffcalc.classList.remove('hide');
        }else{
            buffcalc.classList.add('hide');
        }
        var element = document.getElementById("tomatoes");
        element.innerHTML = "pomidor";
        
    }, false);