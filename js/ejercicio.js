function calculateAge(){
    let date =  document.getElementById("ejercicio1date");
    let name =  document.getElementById("ejercicio1name");

    date = Date.parse(date);
    const today = new Date(getDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 0 || (month === 0 && day < 0)) {
        age--;
    }
    //falta mostrarlo
}