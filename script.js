const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbw-8uKhjlpCP4orvyAOUmmQTXXN2YJ9NakBtT2jBC8ye_6mry0LMnREwOd4kiD8qOrk-g/exec";
const modal = document.getElementById("modal");

document
.getElementById("rsvpBtn")
.addEventListener("click", () => {
    modal.style.display = "flex";
});
document
.getElementById("submitBtn")
.addEventListener("click", async () => {

    const name =
    document.getElementById("guestName").value.trim();

    const phone =
    document.getElementById("guestPhone").value.trim();

    const email =
    document.getElementById("guestEmail").value.trim();

    const hospital =
    document.getElementById("guestHospital").value.trim();

    if(!name || !phone || !email || !hospital){
        alert("Please fill all the fields");
        return;
    }

    try {

        await fetch(SCRIPT_URL, {

            method: "POST",

            body: JSON.stringify({
                name,
                phone,
                email,
                hospital
            })

        });

        const modalCard =
        document.getElementById("modalCard");

        modalCard.innerHTML = `
            <div class="success">

                <div class="checkmark">✓</div>

                <h2>Attendance Confirmed</h2>

                <p>
                    Thank you,
                    <strong>${name}</strong>.
                </p>

                <p>
                    We look forward to welcoming you
                    to the VitaGuard Corporate Dinner.
                </p>

            </div>
        `;

    } catch(error){

        alert(
            "Something went wrong. Please try again."
        );

        console.error(error);

    }

});
document
.getElementById("closeBtn")
.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {

    if(e.target === modal){
        modal.style.display = "none";
    }

});
