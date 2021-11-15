var activityList = new Array()
var textDisplaying = false

function onSubmit() {
    var activity = document.getElementById("activityInput").value
    document.getElementById("activityInput").value = ""
    activityList.push(activity)
    console.log(activityList)
}

function onReset() {
    activityList = new Array()
}

function displayList() {
    var text = document.createElement("P")
    text.setAttribute("id", "displayedText")
    text.innerHTML = ""
    for (let i = 0; i < activityList.length; i++) {
        text.innerHTML += activityList[i]+'<br>'
    }
    if (textDisplaying == false) {
        document.body.append(text)
        textDisplaying = true
    } else {
        document.getElementById("displayedText").remove()
        textDisplaying = false
    }
}

