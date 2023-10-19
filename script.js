function toggleMode() {
	// pegar o html
	const html = document.documentElement
	// trocar de light para dark
	html.classList.toggle("light")

	// pegar a img
	const img = document.querySelector("#profile img")
	// trocar a imagem qundo trocar de light para dark
	if (html.classList.contains("light")) {
		img.setAttribute("src", "./assets/avatar-light.png")
		img.setAttribute(
			"alt",
			"Foto de Moisés Santos, sorrindo, com barba, usando camisa amarela com gola verde e fundo azul."
		)
	} else {
		img.setAttribute("src", "./assets/avatar.png")
		img.setAttribute(
			"alt",
			"Foto de Moisés Santos, sorrindo, com barba, usando camisa azul e fundo morrom."
		)
	}
}
