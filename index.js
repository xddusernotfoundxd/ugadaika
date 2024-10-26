let sex = prompt('введите пол: м / ж')

let a = document.querySelector('input')

let b = document.querySelector('button')

let c = document.querySelector('.display')

let d

for (let i = 0; i < 5; i++){
	d = Math.round(Math.random() * 5)
	b.addEventListener('click', () => {
		setTimeout(() => {
			a.value = ''
		}, 200)
		if (a.value !== d && sex == "ж"){
			c.innerHTML = 'Ты не угадала!'
			setTimeout(() => {
				location.reload()
			}, 2000)
		}
		if (a.value !== d && sex == 'м'){
			c.innerHTML = 'Ты не угадал!'
			setTimeout(() => {
				location.reload()
			}, 2000)
		}
		if (a.value == d && sex == 'м'){
			c.innerHTML = "Ты угадал! Молодец."
			setTimeout(() => {
				location.reload()
			}, 2000)
		}
		if (a.value == d && sex == 'ж'){
			c.innerHTML = "Ты угадала! Молодец."
			setTimeout(() => {
				location.reload()
			}, 2000)
		}
	})
}