document.addEventListener("DOMContentLoaded", () => {
	//console.log("contact.js loaded")
	emailjs.init("CWIs-pl8fI4aywz29") //public key

	const form = document.getElementById("contact-form")


	form.addEventListener("submit", function(event){
		event.preventDefault()

		emailjs.sendForm("service_8t3dils", "template_u4dr305", this) //service & template key
			.then(() => {
				alert("Message sent successfully")
				form.reset()
			})
			.catch((error) => {
				console.log("Emailjs error: ", error)
				alert("Oops! Something went wrong.")
			})
	})
})