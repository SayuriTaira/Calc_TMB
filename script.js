const inputMale = document.getElementById('male')
const inputFemale = document.getElementById('female')

const inputSedentary = document.getElementById('sedentary')
const inputSlightly = document.getElementById('slightly')
const inputModerately = document.getElementById('moraderately')
const inputVery = document.getElementById('very')
const inputExtremely = document.getElementById('extremely')

weightInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
})

heightInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
});

yearsInput.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Remove tudo que não for número
});

function tmbCalc() {
    const yearsOld = document.getElementById('years-old').value
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const activityInputs = document.getElementsByName('activity')
    let activityChecked = false

    for (let i = 0; i < activityInputs.length; i++) {
        if (activityInputs[i].checked) {
            activityChecked = true
            break;
        }
    }

    let tmbMale = 66 + (13.7 * weight) + (5 * height) - (6.8 * yearsOld)
    let tmbFemale = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * yearsOld)
    
    let imcMin = 18.5
    let imcMax = 24.9
    
    const minIdealWeight = imcMin * ((height/100) * (height/100))
    const maxIdealWeight = imcMax * ((height/100) * (height/100))
    
    const tmbText = document.querySelector('.tmb-text')
    const tmbResult = document.querySelector('.tmb-result')

    const calText = document.querySelector('.cal-text')
    const calText2 = document.querySelector('.cal-text2')
    const calResult = document.querySelector('.cal-result')

    const idealWeightText = document.querySelector('.ideal-weight')
    const idealWeightResult = document.querySelector('.ideal-result')

    const lostWeight = document.querySelector('.cal-to-lost-weight')
    const lostWeightResult = document.querySelector('.lost-weight-result')

    const gainWeight = document.querySelector('.cal-to-gain-weight')
    const gainWeightResult = document.querySelector('.gain-weight-result')

    const maintainWeight = document.querySelector('.cal-to-maintain-weight')
    const maintainWeightResult = document.querySelector('.maintain-weight-result')

    
    tmbText.innerText = ''
    
    if((weight > 0 && height > 0) && (weight && height && yearsOld) && (inputMale.checked || inputFemale.checked) && activityChecked) {
        if(inputMale.checked) {
            tmbNumber = Math.round(tmbMale)
        } else if (inputFemale.checked) {
            tmbNumber = Math.round(tmbFemale)
        }
        
        if (inputSedentary.checked) {
            tee = tmbNumber * 1.2
        } else if (inputSlightly.checked) {
            tee = tmbNumber * 1.375
        } else if (inputModerately.checked) {
            tee = tmbNumber * 1.55
        } else if (inputVery.checked) {
            tee = tmbNumber * 1.725
        } else if (inputExtremely.checked) {
            tee = tmbNumber * 1.9
        }
        
        const maintainWeightCalc = tmbNumber + tee
    
        const lostWeightCalc = maintainWeightCalc - 500
        
        const gainWeightCalc = maintainWeightCalc + 500

        tmbText.style.color = 'white'
        tmbText.innerText = 'TMB'
        tmbResult.innerText = tmbNumber
        calText.style.display = 'flex'
        calText2.style.display = 'flex'
        calResult.innerText = Math.round(tee)
        idealWeightText.style.display = 'flex'
        idealWeightResult.innerText = Math.round(minIdealWeight) + 'kg' + '-' + Math.round(maxIdealWeight) + 'kg'
        lostWeight.style.display = 'flex'
        lostWeightResult.style.display = 'flex'
        lostWeightResult.innerText = Math.round(lostWeightCalc) + ' Kcal'
        gainWeight.style.display = 'flex'
        gainWeightResult.style.display = 'flex'
        gainWeightResult.innerText = Math.round(gainWeightCalc) + ' Kcal'
        maintainWeight.style.display = 'flex'
        maintainWeightResult.style.display = 'flex'
        maintainWeightResult.innerText = Math.round(maintainWeightCalc) + ' Kcal'
        
    } else {
        idealWeightResult.innerText = ''
        calResult.innerText = ''
        tmbResult.innerText = ''
        tmbText.innerText = 'Por favor, preencha todos os campos'
        tmbText.style.color = 'red'
        calText.style.display = 'none'
        calText2.style.display = 'none'
        idealWeightText.style.display = 'none'
        lostWeight.style.display = 'none'
        lostWeightResult.style.display = 'none'
        gainWeight.style.display = 'none'
        gainWeightResult.style.display = 'none'
        maintainWeight.style.display = 'none'
        maintainWeightResult.style.display = 'none'
    }
    
    let weightInput = document.getElementById('weight')
    let heightInput = document.getElementById('height')
    let yearsInput = document.getElementById('years-old')

    weightInput.value = ''
    heightInput.value = ''
    yearsInput.value = ''
    
    inputFemale.checked = false
    inputMale.checked = false

    inputSedentary.checked = false
    inputSlightly.checked = false
    inputModerately.checked = false
    inputVery.checked = false
    inputExtremely.checked = false
} 