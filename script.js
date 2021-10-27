var nameList = new Array()
var textDisplaying = false

function onSubmit() {
    var name = document.getElementById("name").value
    document.getElementById("nameForm").reset()
    nameList.push(name)
    console.log(nameList[nameList.length-1])
}

function displayList() {
    var text = document.createElement("P")
    text.setAttribute("id", "displayedText")
    text.innerHTML = "Magic"
    if (textDisplaying == false) {
        document.body.append(text)
        textDisplaying = true
    } else {
        document.getElementById("displayedText").remove()
        textDisplaying = false
    }
}