//https://jsfiddle.net/1fk5fyLc/7/
// 1. Pon tu nombre al atributo value del campo first name
$("input[name=firstname]").val("Alex pacheco");

// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
$("select[name=fav_day]").val("Monday");

// 3. Cambia la etiqueta de First name a 'Tu nombre'
$("label[name='first_name_label']").text("Tu nombre");

// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
alert($("select[name=fav_day]").prop("name"));

// 5. Escoge la opción Female de la pregunta de género.
$("input[value=male]").prop("checked","false");
$("input[value=female]").prop("checked","true");

// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
$("form:first").prop("name", "personal_info");

// 7. Encuentra la primera form del documento y pon el atributo name = job_info
$("form:first").siblings().prop("name", "job_info");

// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
$("form:first").prepend("<h1>Entrevista personal</h1>").siblings().prepend("<h1>Entrevista de trabajo</h1>")

// 9. Agrega un título a la pregunta Male/Female 'Gender'
$("input[type=radio]:first").before("<label>Gender:</label><br>");

// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
$("input[name=lastname]").after("<br><label name='email_label'>Email:</label><br><input type='text' name='email'>");

// 11. Agrega la clase form a ambas formas
$("form").addClass("form");
