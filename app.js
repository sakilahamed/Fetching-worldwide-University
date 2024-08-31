let url = "http://universities.hipolabs.com/search?name=";

let btnAccess = document.querySelector("#btn");

btnAccess.addEventListener("click", async () => {
    let country = document.querySelector("#inp").value;
    if (country === "") {
        alert("Sorry! Enter a valid value");
    } else {
        let CollegeArry = await FindCollege(country);
        displayColleges(CollegeArry);
        document.querySelector("#inp").value = "";
    }
});

function displayColleges(colleges) {
    let container = document.querySelector(".college-container");
    container.innerHTML = ""; // Clear previous results

    if (colleges.length === 0) {
        container.innerHTML = "<p>Sorry, no results found.</p>";
    } else {
        colleges.forEach(college => {
            let card = document.createElement("div");
            card.className = "college-card";

            card.innerHTML = `
                <h3>${college.name}</h3>
                <p><strong>Country:</strong> ${college.country}</p>
                <p><strong>Domain:</strong> ${college.domains.join(", ")}</p>
                <a href="${college.web_pages[0]}" target="_blank" class="visit-button">Visit Website</a>
            `;

            container.appendChild(card);
        });
    }
}


async function FindCollege(country) {
    try {
        let apicall = await axios.get(url + country);
        return apicall.data;
    } catch (error) {
        console.log("An error occurred", error);
        return [];
    }
}



// JavaScript for mobile navigation toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
