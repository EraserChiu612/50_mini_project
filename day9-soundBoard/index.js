const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
	const btn = document.createElement('button')
	btn.classList.add('btn')

	btn.innerText = sound
	btn.addEventListener('click', () => {
		stopVoices()

		document.querySelector('#' + sound).play()
	})

	document.querySelector('#buttons').appendChild(btn)
})

function stopVoices() {
	sounds.forEach(sound => {
		const voice = document.querySelector('#' + sound)

		voice.pause()
		voice.currentTime = 0
	})
}
