const moneyLabel = document.querySelector(".money-label");
const planetImg = document.getElementById('planet');
const SRButton = document.querySelector('.upgrade1');
const RMButton = document.querySelector('.upgrade2');
const PButton = document.querySelector('.upgrade3');
const VButton = document.querySelector('.upgrade4');
const planet = document.getElementById('planet');
const nextPlanet = document.querySelector('.next-planet');
let SRInitial = 50;
let RMInitial = 1000;
let PInitial = 7500;
let VInitial = 100000;
let RMAmount =0
let PAmount = 0;
let PReductionAmount = 50;
let VAmount = 0;
let moneyValue = parseInt(moneyLabel.innerHTML.substring(1));

let overallMultipliers = {
    GMultiplier: 1,
    scientificResearch: 1.5,
    resourceMines: 3,
    probes: 5,
    visit: 1,
}
let upgradeExponential={
    SRM: 3,
    RMM: 5,
    PM: 7,
    VM: 10
}



scientificResearchClick();
resourceMinesClick();
visitClick();
prodeClick();
planetclick();

function planetclick(){

    planetImg.addEventListener('click',()=>{
        moneyValue+=1*overallMultipliers.GMultiplier;
        moneyLabel.innerHTML = "$" + moneyValue;
    });
    

}
function scientificResearchClick(){
    SRButton.innerHTML = "Scientific Research $"+ SRInitial;
    
    SRButton.addEventListener('click', ()=>{
        if(moneyValue>= SRInitial){
            moneyValue-=SRInitial;
            SRInitial = SRInitial* upgradeExponential.SRM;
            SRButton.innerHTML = "Scientific Research $"+ SRInitial;
            moneyLabel.innerHTML = "$"+moneyValue;
            overallMultipliers.GMultiplier = overallMultipliers.GMultiplier*overallMultipliers.scientificResearch;            
        }
    });
}

function resourceMinesClick(){
    RMButton.innerHTML = "Resource Mines $"+ RMInitial;

    RMButton.addEventListener('click',()=>{
        if(moneyValue>= RMInitial){
            moneyValue-=RMInitial;
            RMInitial = RMInitial* upgradeExponential.RMM;
            RMButton.innerHTML = "Resource Mines $"+ RMInitial;
            moneyLabel.innerHTML = "$" + moneyValue;
            overallMultipliers.GMultiplier = overallMultipliers.GMultiplier*overallMultipliers.resourceMines;
            RMAmount++;
            moneyOverTime();
        }
    });
}

function prodeClick(){
    PButton.innerHTML = "Probes <br />$" + PInitial;

    PButton.addEventListener('click',()=>{
        if(moneyValue>=PInitial){
            moneyValue-=PInitial;
            PInitial = PInitial*upgradeExponential.PM;
            PButton.innerHTML = "Probes <br />$" + PInitial;
            moneyLabel.innerHTML = "$"+moneyLabel;
            overallMultipliers.GMultiplier = overallMultipliers.GMultiplier*overallMultipliers.probes;
            PAmount++;
        }
    });
}


function visitClick(){
    VButton.innerHTML = "VISIT <br />$" +VInitial;

    VButton.addEventListener('click',()=>{
        if(moneyValue>=VInitial){
            moneyValue-=VInitial;
            VInitial = VInitial*upgradeExponential.VM;
            VButton.innerHTML = "VISIT <br />$" +VInitial;
            moneyLabel.innerHTML = "$"+moneyValue;
            overallMultipliers.GMultiplier = overallMultipliers.GMultiplier*overallMultipliers.visit;
            VAmount++;
            switch(VAmount){
                case 1: 
                        planet.src = "./planetFolder/Moon.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/mars.png)";
                        break;
                case 2:
                        planet.src = "./planetFolder/mars.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/jupiter.png)";
                        break;
                case 3:
                        planet.src = "./planetFolder/jupiter.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/europa.png)";
                        break;
                case 4:
                        planet.src = "./planetFolder/europa.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/saturn.png)";
                        break;
                case 5:
                        planet.src = "./planetFolder/saturn.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/uranus.png)";
                        break;
                case 6:
                        planet.src = "./planetFolder/uranus.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/neptune.png)";
                        break;
                case 7:
                        planet.src = "./planetFolder/neptune.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/pluto.png)";
                        break;
                case 8:
                        planet.src = "./planetFolder/pluto.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/beetlejuice.png)";
                        break;
                case 9:
                        planet.src = "./planetFolder/beetlejuice.png";
                        nextPlanet.style.backgroundImage = "url(./planetFolder/keppler22.png)";
                        break;
                case 10:
                    planet.src = "./planetFolder/keppler22.png";
                    nextPlanet.style.backgroundImage = 'url()';
                    alert("You Win");
                    break;
                

            }
        }
    });
}

function moneyOverTime(){
    for(let i=0; i<100000; i++){
        setTimeout(function(){
            moneyValue += RMAmount*overallMultipliers.GMultiplier;
            moneyLabel.innerHTML = "$" +moneyValue;
        },i*(1000-PAmount*PReductionAmount))
    }
}