    var checkbox = document.getElementById('usebuff'), 
        buffcalc = document.getElementById('buffcalculation'),
        troopscalc = document.getElementById('troopscalculation'),
        cbButbuff = document.getElementById('cbButbuff'),
        troopRang = document.getElementById('troopRang'),
        troopsCount = document.getElementById('troopsCount'),
        troopspercycle = document.getElementById('troopspercycle'),
        tomatoespercycle = document.getElementById('tomatoespercycle'),
        woodpercycle = document.getElementById('woodpercycle'),
        steelpercycle = document.getElementById('steelpercycle'),
        oilpercycle = document.getElementById('oilpercycle'),
        useeconomybuff = document.getElementById('useeconomybuff');

        
    checkbox.addEventListener('change', function() {
        if(this.checked){
            buffcalc.classList.remove('hide');
            //troopscalc.classList.add('hide');
            troopsCount.disabled = true;
        }else{
            buffcalc.classList.add('hide');
            //troopscalc.classList.remove('hide');
            troopsCount.disabled = false;
        }
    }, false);
    useeconomybuff.addEventListener('change', function() {
        refreshResults();        
    }, false);
    cbButbuff.addEventListener("input", (event) => {
        setTroopsCount();
    });
    troopRang.addEventListener("change", (event) => {
        setTroopsCount();
    });
    troopsCount.addEventListener("input", (event) => {
        refreshResults();        
    });
    troopspercycle.addEventListener("input", (event) => {
        refreshResults();
    });

    tomatoespercycle.addEventListener("input", (event) => {
        setTomatoesCount();
    });
    woodpercycle.addEventListener("input", (event) => {
        setWoodCount();
    });
    steelpercycle.addEventListener("input", (event) => {
        setSteelCount();
    });
    oilpercycle.addEventListener("input", (event) => {
        setOilCount();
    });

    function setTroopsCount(){
        troopsCount.value = Math.round(cbButbuff.value / troopRang.value);
        refreshResults();
    }

    function setResourceCount(element, resValue){
        if(troopspercycle.value>1){
            element.innerHTML = Math.round((troopsCount.value * resValue * getEconomyCoefficient())/ troopspercycle.value);
        }
    }
    function refreshResults(){
        setTomatoesCount();
        setWoodCount();
        setSteelCount();
        setOilCount();
    }
    function setTomatoesCount(){
        setResourceCount(document.getElementById("tomatoes"), tomatoespercycle.value);
    }
    function setWoodCount(){
        setResourceCount(document.getElementById("wood"), woodpercycle.value);
    }
    function setSteelCount(){
        setResourceCount(document.getElementById("steel"), steelpercycle.value);
    }
    function setOilCount(){
        setResourceCount(document.getElementById("oil"), oilpercycle.value);
    }
    function getEconomyCoefficient(){
        return useeconomybuff.checked ? 0.75 : 1;
    }
