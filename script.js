var name_list = new Array()

function onSubmit() {
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    document.getElementById("name_form").reset()
    name_list.push(fname+" "+lname)
    console.log(name_list[name_list.length-1])
}

