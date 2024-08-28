let url = "http://universities.hipolabs.com/search?name=";


let btnAccess = document.querySelector("#btn");

btnAccess.addEventListener("click",async ()=>{
    let country = document.querySelector("#inp").value;
    if (country == ""){
        alert("Sorry ! Enter a valid value")
    }else{
        let CollegeArry = await FindCollege(country);
        AccessCollegeName(CollegeArry);
        document.querySelector("#inp").value = "";
    }
});

function AccessCollegeName(CollegeArry){
    let ULAccess = document.querySelector(".results");
    ULAccess.innerText = "";

    if(CollegeArry.length === 0){
        let Createli = document.createElement("li");
        Createli.innerText ="Sorry No result found.";
        ULAccess.appendChild(Createli);
    }else{
        for(collegename of CollegeArry){
            let Createli = document.createElement("li");
            Createli.innerText = collegename.name;
            ULAccess.appendChild(Createli);
        }
    }
}

async function FindCollege(country){
    try{
        let apicall = await axios.get(url+country);
        return (apicall.data);
    }catch(error){
        console.log("An error occoured",error);
        return [];
    }
}



















































