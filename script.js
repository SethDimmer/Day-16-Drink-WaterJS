const smallCups = document.querySelectorAll('.cup-small')
// i have 8 small cups and using querySelectorAll will put them in a nodeList of elements with the class of .cup-small.

const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,index) => {
    // i am using forEach to loop through all of the cups
    // the parentheses is what i want to call each item which in this case is cup
    // and just have the index of the cup
    // console.log(index)

    // want to add eventListener to each cup when i click a cup 
                                            //this is a function
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
// if i want to empty the 4th cup then this checks it 
    if(smallCups[index].classList.contains('full') && !smallCups
    [index].nextElementSibling.classList.contains('full')) {
        index--
    }

// console.log(index)
// whenever i click on a cup i it is showing index of what cup i click in console

// this functions purpose is to add the class of full to the cup when i click on a small cup
smallCups.forEach((cup,index2) => {
    // forEach each cup this index is for the index of each cup IN THIS LOOP NOT EACH CUP.
    if(index2 <= index) {
        // if i click the 4th cup on the right i want ALL of the cups to fill not just 1.
        cup.classList.add('full')
    }
    else {
        cup.classList.remove('full')
    }
})

updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    console.log(fullCups)

    const totalCups = smallCups.length

    // console.log(totalCups)

    // i want to hide percentage if there are no full cups 

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups *
    330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}