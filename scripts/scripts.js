var firstIcon = document.getElementById("firstIcon"),
    secondIcon = document.getElementById("secondIcon");

setTimeout(function () {
    firstIcon.classList.add("firstVisibleIcon");
    setTimeout(function () {
        secondIcon.classList.add("secondVisibleIcon");
    }, 2000)
}, 3000)
