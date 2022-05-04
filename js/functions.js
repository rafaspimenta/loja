var tbClientes = localStorage.getItem("tbClients");
tbClientes = JSON.parse(tbClientes);
if(tbClientes == null)
    tbClientes = [];

function Adicionar(){
	var cliente = JSON.stringify({
		Email     : $("#email").val(),
		Nome      : $("#name").val(),
		SobreNome : $("#lastname").val(),
		Telefone  : $("#phone").val()
	});

	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Cliente adicionado.");
	return true;
}

function Listar(){
    $("#tblListar").html("");
    $("#tblListar").html(
        "<thead>"+
        "   <tr>"+
        "   <th>Email</th>"+
        "   <th>Nome</th>"+
        "   <th>Sobrenome</th>"+
        "   <th>Telefone</th>"+
        "   </tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );

    for(var i in tbClientes){
        var cli = JSON.parse(tbClientes[i]);
        $("#tblListar tbody").append("<tr>");
        $("#tblListar tbody").append("<td>"+cli.Email+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Nome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.SobreNome+"</td>");
        $("#tblListar tbody").append("<td>"+cli.Telefone+"</td>");
        $("#tblListar tbody").append("</tr>");
    }
}

function submitForm(event){
    event.preventDefault();
    
    console.log("passei");

    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;

    var cliente = JSON.stringify({
		Email     : email,
		Nome      : name,
		SobreNome : lastName,
		Telefone  : phone
	});

	tbClientes.push(cliente);
	localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	alert("Cliente adicionado.");
    Listar();
}