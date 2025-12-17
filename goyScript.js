let slopEaten = 0;
let slopPerClick = 1;
let sloopChanceMultiplier = 1.0;
function eatSlop() {
    slopEaten += slopPerClick;
    document.getElementById("bootyCount").innerText = slopEaten;
}
function slopRarity() {
    let slopRandomizer = Math.floor(Math.random() * 100) + sloopChanceMultiplier;
    let slops=["frozen dinner","tasty frozen dinner","mc donalds","burger king",
        "git hub"];
    let slopValues=[0.4,1.4,4.4,30.4];
    if(slopRandomizer <= 80){
        slopPerClick +=slopValues[0];
        document.getElementById("bootyType").innerHTML = slops[0];
         document.getElementById("bootyType").style.color = "#787878ff";
        return slops[0];
    } else if(slopRandomizer <= 90){
        slopPerClick +=slopValues[1];
        document.getElementById("bootyType").innerHTML = slops[1];
         document.getElementById("bootyType").style.color = "#0d00ffff";
        return slops[1];
    } else if(slopRandomizer >= 80){
        slopPerClick +=slopValues[2];
        document.getElementById("bootyType").innerHTML = slops[2];
         document.getElementById("bootyType").style.color = "#ff0000ff";
        return slops[2];
    } else if(slopRandomizer >= 97){
        slopPerClick +=slopValues[3];
        document.getElementById("bootyType").innerHTML = slops[3];
        document.getElementById("bootyType").style.color = "#FFD700";
        return slops[3];
    }

}
function slopUpgradeButton() {
    if(slopEaten >=40){
    sloopChanceMultiplier + 2;
    } else {
        alert("not enough slop eaten to upgrade slop chance");
    }
}