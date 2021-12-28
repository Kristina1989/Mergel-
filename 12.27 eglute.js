const button = document.querySelectorAll("button")
const input = document.querySelector("input")
const main = document.querySelector(".main")
const container = document.querySelector(".container")
const toyDiv = document.querySelector(".toyDiv")
const giftDiv = document.querySelector(".giftDiv")

const arr = [
    "https://www.scottishbamboo.com/images/christmas%20tree%20image2.jpg",
    "http://cdn.christmaswarehouse.com.au/cache/22bda2090337c58e85747998216e3d05_thumb.png",
    "https://www.dressityourself.co.uk/wp-content/uploads/2020/09/Pre-Lit-Christmas-Tree-Holstens-F4993-%C2%A395-plus-Vat.png"
]


button[0].onclick = () => {

    main.style.backgroundColor = String(input.value)

}

button[1].onclick = () => {
    treeDiv = document.createElement('div')
    main.innerHTML = ""
    const i = Math.floor(Math.random() * arr.length)
    treeDiv.innerHTML += `<img alt = ""  src ="${arr[i]}">`
    main.appendChild(treeDiv)



}

// button[2].onclick = () => {
//
//
//     toyDiv = document.createElement('div')
//     toyDiv.style.width = "150px"
//     toyDiv.style.height = "400px"
//     // toyDiv.style.backgroundColor = "red"
//     toyDiv.style.position = "absolute"
//     toyDiv.style.left = "270px"
//     toyDiv.style.top = "200px"
//
//
//     main.appendChild(toyDiv)
//
//
//     toyPosition = document.createElement('div')
//     toyPosition.style.position = "absolute"
//
//     let left = Math.floor(Math.random() * 150)) + "px"
//     let top = Math.floor(Math.random() * 400)) + "px"
//
//     const toy = "https://www.dubingiai.lt/25311-large_default/burbulas-dekoratyvinis-8cm-kaledine-52527.jpg"
//
//     toyPosition.innerHTML += `<img alt="" class = "size" style="left: ${left}; top: ${top}" src ="${toy}">`
//
//     toyDiv.appendChild(toyPosition)
//
//     console.log(aaaa)
// }


button[2].onclick = () => {

    toyDiv.style.width = "270px"
    toyDiv.style.height = "270px"
    toyDiv.style.position = "absolute"
    // toyDiv.style.backgroundColor = "red"
    toyDiv.style.left = "200px"
    toyDiv.style.top = "300px"
    main.appendChild(toyDiv)

    let toy = document.createElement('img')
    toy.style.position = "absolute"
    toy.src = "https://www.dubingiai.lt/25311-large_default/burbulas-dekoratyvinis-8cm-kaledine-52527.jpg"
    toy.style.left = String(Math.floor(Math.random() * 270)) + "px"
    toy.style.top = String(Math.floor(Math.random() * 270)) + "px"
    toy.classList.add('size')
    toyDiv.appendChild(toy)
}


button[3].onclick = () => {

    giftDiv.style.width = "400px"
    giftDiv.style.height = "100px"
    giftDiv.style.position = "absolute"

    giftDiv.style.left = "250px"
    giftDiv.style.top = "600px"
    // giftDiv.style.overflow = "hidden"
    main.appendChild(giftDiv)


    let gift = document.createElement('img')
    gift.style.position = "absolute"
    gift.src = "https://yallpolitics.com/wp-content/uploads/2018/05/present-150291_960_720-696x712.png"
    gift.style.left = String(Math.floor(Math.random() * 400)) + "px"
    gift.style.top = String(Math.floor(Math.random() * 100)) + "px"
    gift.style.width = String(Math.floor(Math.random() * 100)) + "px"
    gift.style.height = "auto"
    giftDiv.appendChild(gift)
}




