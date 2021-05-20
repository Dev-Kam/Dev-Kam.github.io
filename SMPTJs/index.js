const btn = document.querySelector('button');
const inputs = document.querySelector('form');
btn.addEventListener('click', () => {
	Email.send({
		SecureToken: "db7c3ecc-ccdb-41b9-9a14-5c14ee6cf334",

		//Host: "smtp.mailtrap.io",
		//Username: "6158a9ca83ab26",
		//Password: "9b7f90e7c14048",
		//SecureToken: "eb0ca7be-3287-48cd-a3ca-02403f487133",
		To: "kmilodesigner@gmail.com",
		From: inputs.elements["email"].value,
		Subject: "Contact Us Query By the Custoner",
		Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value 
	}).then(msg => alert("The email succesfully sent"))
})


