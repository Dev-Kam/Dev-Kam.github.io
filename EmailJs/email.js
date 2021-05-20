function sendMail(params){
var tempParams = {
	from_name: document.getElementById("fromName").value,
	to_name: document.getElementById("toName").value,
	message: document.getElementById("msg").value,
};

emailjs.send("email", "template_va2041v", tempParams).then(function(res){
	console.log("success", res.status);
})
}