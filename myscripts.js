function toggleForm(){
	var e = document.getElementById('contact_form');
	if(e.style.display == "" || e.style.display == "none"){
		document.getElementById('contact_form').style.display="block";
	}else{
		e.style.display = "none";
	}
	// console.log(document.getElementById('contact_form').style.display);
}

function contactForm(){
	var x = document.getElementById('name');
	var y = document.getElementById('email');
	var z = document.getElementById('message');
	if((x.length) && (y.length > 0) && (z.length > 0)){
		return true;
	}else{
		alert("Please fill in all fields");
		return false;
	}
}

//Create the dropdown base
$("<select />").appendTo("#navi>.navbar>ul");

//Create default option "Go to..."
$("<option />", {
  "selected": "selected",
  "value"	: "",
  "text"	: "Go to..."
}).appendTo("#navi>select");

//Populate dropdown with menu items
$("#navi>.navbar>a").each(function() {
	var el = $(this);
	$("<option />", {
		"value"	: el.attr("href"),
		"text"	: el.text()
	}).appendTo("#navi>select");
});

//To make the dropdown menu actually work
$("#navi>select").change(function() {
	window.location = $(this).find("option:selected").val();
});