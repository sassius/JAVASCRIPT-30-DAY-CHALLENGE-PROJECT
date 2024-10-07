window.addEventListener("DOMContentLoaded", () => {
    const ipslider =document.getElementById("ipslider")
    const password = document.getElementById("Password");
    const slidervalue =document.getElementById("slidervalue");
    const generator =document.getElementById("generator");
    const number =document.getElementById("number");
    const lowercase =document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const special = document.getElementById("special");
    const copyicon =document.getElementById("copyicon");
    ipslider.addEventListener("input",()=>{
        slidervalue.textContent=ipslider.value;
    })
    const generatepassword = ()=>{
        const length = parseInt(ipslider.value, 10);
        let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let lowerchar="abcdefghijklmnopqrstuvwxyz";
        let nmbr="0123456789";
        let spl="!@#$%^&*()_+[]{}|;:,.<>?";
        let result="";
        let allchars="";
        allchars+= lowercase.checked ? lowerchar : "";
        allchars+= uppercase.checked ? upperchar : "";
        allchars+= number.checked ? nmbr : "";
        allchars+= special.checked ? spl : "";
        for(let i=0;i<length;i++){
            result +=allchars.charAt(Math.floor(Math.random()*allchars.length))
        }
        password.value= result;

    }
    generator.addEventListener("click",generatepassword);
    copyicon.addEventListener("click",()=>{
        if (password.value) {
        navigator.clipboard.writeText(password.value)
            .then(() => {
                alert("Password copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
                alert("Failed to copy password. Please try again.");
            });
        } 
        else {
            alert("Generate a password first!");
        }
    })
});
