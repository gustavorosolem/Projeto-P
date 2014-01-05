$(document).on("click", ".alert", function(e) {
	bootbox.alert("Hello world!", function() {
		console.log("Alert Callback");
	});
});

$('.nav-tabs a').click(function (e) {
	e.preventDefault()
	$(this).tab('show')
});

$(".sabor-select").each(function(i) {
	$(this).chosen({
		no_results_text: "Sabor não encontrado!",
		placeholder_text_single: "Selecione uma opção",
		placeholder_text_multiple: "Selecione uma opção",
		width: "95%"
	});
});