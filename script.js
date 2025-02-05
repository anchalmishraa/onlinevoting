
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const aadhaar = document.getElementById("aadhaar").value;

            if (name && email && aadhaar.length === 12) {
                localStorage.setItem("voterName", name);
                localStorage.setItem("voterEmail", email);
                localStorage.setItem("voterAadhaar", aadhaar);
                localStorage.setItem("hasVoted", "false"); 
                
                alert("Signup Successful! Proceeding to Voting Page.");
                window.location.href = "vote.html";
            } else {
                alert("Please fill all fields correctly.");
            }
        });
    }

    
    if (window.location.pathname.includes("vote.html")) {
        const voterName = localStorage.getItem("voterName");
        const hasVoted = localStorage.getItem("hasVoted");

        if (!voterName) {
            alert("You must sign up first!");
            window.location.href = "signup.html";
        } else {
            document.getElementById("welcomeText").innerText = `Welcome, ${voterName}. Please cast your vote.`;
        }

        if (hasVoted === "true") {
            alert("You have already voted!");
            window.location.href = "signup.html";
        }
    }
});


function castVote(candidate) {
    if (localStorage.getItem("hasVoted") === "true") {
        alert("You have already voted!");
        return;
    }

    localStorage.setItem("vote", candidate);
    localStorage.setItem("hasVoted", "true");
    alert(`You voted for ${candidate}. Thank you for voting!`);
}
