function myFunction() {
    // Info
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInputInfo');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULInfo");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    // Music
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInputMusic');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULMusic");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    // Premium
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInputPremium');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULPremium");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    // Fun
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInputFun');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULFun");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    // admin
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInputadmin');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myULadmin");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}