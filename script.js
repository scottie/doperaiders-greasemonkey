// ==UserScript==
// @name        DopeRaider Tools
// @namespace   Console
// @description Consoles DopeRaider Tools
// @match       *://play.doperaider.com/*
// @version     1
// @grant       none
// ==/UserScript==

console.log("[LOADED OK]");


setTimeout(main, 0); // OR just call CheckForZero() if you don't need to defer until processing is complete
function main() {
    try{
    console.log ("CONSOLE WAS HERE 2019!");
    var disctrict = document.getElementById("district-info-card").children[0].children[0].children[0].children[0].children[0].innerText;
    var population = parseInt(document.getElementById("district-info-card").children[0].children[0].children[1].children[0].children[0].innerText.split(":")[1].replace(" ",""));
    var weedSellPrice = parseFloat(document.getElementById("district-info-card").children[0].children[1].children[1].children[0].children[1].innerText.split(" ")[0]);
    var weedBuyPrice = parseFloat(document.getElementById("district-info-card").children[0].children[1].children[1].children[1].children[1].innerText.split(" ")[0]);
    var cokeSellPrice = parseFloat(document.getElementById("district-info-card").children[0].children[1].children[1].children[2].children[1].innerText.split(" ")[0]);
    var cokeBuyPrice = parseFloat(document.getElementById("district-info-card").children[0].children[1].children[1].children[3].children[1].innerText.split(" ")[0]);

    //player stats
    var growSkillLevel = parseInt(document.getElementsByClassName("rightAmount")[0].innerText);
    var cookSkillLevel = parseInt(document.getElementsByClassName("rightAmount")[1].innerText);
    var myWeed = parseInt(document.getElementsByClassName("rightAmount")[2].innerText.split(" ")[0]);
    var myCoke = parseInt(document.getElementsByClassName("rightAmount")[3].innerText.split(" ")[0]);
    var gunLevel = parseInt(document.getElementsByClassName("leftAmount")[0].innerText);
    var armourLevel = parseInt(document.getElementsByClassName("leftAmount")[1].innerText);
    var speed = parseInt(document.getElementsByClassName("leftAmount")[2].innerText);
    var bags = document.getElementsByClassName("leftAmount")[3].innerText

    //so totalNewSupply * (oldSupply/newSupply)
    var areaWeedSuppy =  document.getElementById("district-info-card").children[0].children[1].children[2].children[0].innerText.split(":")[1].split(" ")[1]
    var areaCokeSupply = document.getElementById("district-info-card").children[0].children[1].children[2].children[1].innerText.split(":")[1].split(" ")[1]

    console.log(disctrict);
    console.log("[POPULATION]: " + population.toString());
    console.log("[WEED SELL PRICE]: " + weedSellPrice.toString());
    console.log("[WEED BUY PRICE]: " + weedBuyPrice.toString());
    console.log("[COKE SELL PRICE]: " + cokeSellPrice.toString());
    console.log("[COKE BUY PRICE]: " + cokeBuyPrice.toString());

    console.log("[WEED ON YOU]: " + myWeed.toString())
    console.log("[COKE ON YOU]: " +myCoke.toString())

    console.log("[DISCTRICT WEED SUPPLY]: " + areaWeedSuppy.toString())
    console.log("[DISCTRICT COKE SUPPLY]: " + areaCokeSupply.toString())

    var newWeedSellPrice = (weedSellPrice *  areaWeedSuppy) / (areaWeedSuppy + myWeed)

    //var totalSupplyCoke = "";
    //console.log("[NEW PRICE]: " + )
    console.log("[NEW WEED SELL PRICE]: " + newWeedSellPrice.toString());

    }catch(e){
        console.log("[ERROR]: " + e.message);
    }

    setTimeout(main, 30000);

}
