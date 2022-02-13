(() => {
    const check = document.querySelector(".check");
    check.addEventListener('click',language);
    
    const id = check.checked;
    if (id == true){
        document.getElementById('es-button').style.display = 'none';
        document.getElementById('en-button').style.display = 'block';
    }else{
        document.getElementById('en-button').style.display = 'none';
        document.getElementById('es-button').style.display = 'block';
    }

    function language() {
        let id = check.checked;
        if (id === true){
            location.href="es/index.html";
        }else{
            location.href="../index.html"
        }
    }
})();