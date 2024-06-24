document.body.style.fontFamily="LenskartSans-Regular"
let eyeWear = document.querySelector("#eyeWear");

let eyeWearArr= [{
    image: "1.png",
    heading: "From our place to your face",
    data: "We cut the middleman by designing, producing and delivering our own eyewear. Bottom line, quality and price always stay in our control."
},
{
    image: "2.png",
    heading: "Powered by tech",
    data: "As eyewear geeks, we bring you glasses that are 100% robo-made, lenses accurate up to 3 decimal places, experiences like 3D try-on and much more."
},
{
    image: "3.png",
    heading: "Eyewear for every pocket",
    data: "We ensure that eyewear is an affordable affair and every product delivers the highest quality at all costs."
},
{
    image: "4.png",
    heading: "Full service optometry",
    data: "All our stores offer free eye-tests from our specially trained optometrists."
}]

eyeWearArr.forEach((ele,i)=>{
    eyeWearCarts(ele)
})

function eyeWearCarts(value) {
    let div=document.createElement("div");
    div.setAttribute("class","cart")
    div.innerHTML=`<img  src="${value.image}" alt="" class="img1"/>
                   <h2>${value.heading}</h2> 
                   <p>${value.data}</p>`  
  eyeWear.append(div);
}

let eyeWear1 = document.querySelector("#eyeWear1");

let eyeWearArr1= [{
    image: "5.png",
    heading: "Online",
    data: "Try over 10,000 styles and know how every pair looks on you even when you buy online!."
},
{
    image: "6.png",
    heading: "In Stores",
    data: "900+ stores across India, and globally in Singapore and Dubai."
},
{
    image: "7.png",
    heading: "At Home",
    data: "Lenskart@home offers FREE eye test ard trial with 150+ frames!"
}]

eyeWearArr1.forEach((ele,i)=>{
    eyeWearCarts1(ele)
})

function eyeWearCarts1(value) {
    let div1=document.createElement("div");
    div1.setAttribute("class","cart1")
    div1.innerHTML=`<img  src="${value.image}" alt="" class="img2"/>
                   <h2>${value.heading}</h2> 
                   <p>${value.data}</p>`  
  eyeWear1.append(div1);
}