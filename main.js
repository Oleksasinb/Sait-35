let floid = document.querySelector('.floid')
let buttom = document.querySelector('.creat_button')
let delbuttom = document.querySelector('.delete_button')
let miniblock = document.querySelector('.newblock')
function createblock () {
    let inputwidth = document.querySelector('#inputwidth').value
    let inputhidth = document.querySelector('#inputhidth').value
    let inputcolor = document.querySelector('#inputcolor').value
    if(inputwidth<100 || inputhidth<100) {
        alert('Неть')
    }
    else {
        let block = document.createElement('div')
        block.classList = ('newblock')
        block.id = `block_1`
        block.style.width = inputwidth + 'px'
        block.style.height = inputhidth + 'px'
        block.style.backgroundColor = inputcolor 
        floid.append(block)
        document.querySelector('#inputwidth').value = ' '
        document.querySelector('#inputhidth').value = ' '
        buttom.style.display = 'none'
    }
}
delbuttom.addEventListener('click', () => deleteblock ())
function deleteblock () {
    let block = document.querySelector('.newblock')
    block.remove()
    buttom.style.display = 'flex'
}
let divtb = 0
let divrl = 0
function vniz () {
    divtb+=10
    let miniblock = document.querySelector('.newblock')
    let posVis=parseInt(miniblock.style.height)
    if(divtb>400-posVis) {
        alert('Куда?!')
    }
    else {
        miniblock.style.top = divtb + 'px'
    }
}
function verh () {
    divtb-=10
    let miniblock = document.querySelector('.newblock')
    if(divtb<0) {
        alert('далеко собрался?')
    }
    else {
        miniblock.style.top = divtb + 'px'
    } 
}
function vpravo () {
    divrl+=10
    let miniblock = document.querySelector('.newblock')
    let posVis=parseInt(miniblock.style.width)
    if(divrl>700-posVis) {
        alert('айайайаайа')
    }
    else {
        miniblock.style.left = divrl + 'px'
    }
}
function vlevo () {
    divrl-=10
    let miniblock = document.querySelector('.newblock')
    if(divrl<0) {
        alert('зачем?')
    }
    else {
        miniblock.style.left = divrl + 'px'
    }
}