let myTable = document.querySelector("table");

let startCount = 0;
let countUp = 10;
let showTenProfiles;
let myProfilesContainer = document.querySelector('.data-container');
let searchBox = document.querySelector("input[type='search']");
let searchBoxBtn = document.getElementById("search");

fetch("https://profiles-list.firebaseio.com/Data.json?fbclid=IwAR25prq6sqQ0U5BjwZ2UuVtJ26WRnNLlLDyGz2TT2uF6vmRs81zN5YEJmXg")
.then(
    (result)=>{
        let myResult = result.json();
        return myResult;
    } 
)
.then(
    (profiles)=>{
        console.log(profiles);
        showTenProfiles = profiles.slice(startCount,countUp);
        console.log(showTenProfiles)
        let nextProfBtn = document.createElement("button");
        let nextProfBtnText = document.createTextNode("Next Profiles");
        nextProfBtn.setAttribute("id","nextProfBtn")
        nextProfBtn.appendChild(nextProfBtnText);
        myProfilesContainer.appendChild(nextProfBtn);
        nextProfBtn.addEventListener("click",()=>{
            startCount += 10;
            countUp += 10;
            console.log("startCount is: " + startCount )
            console.log("countUp is: " + countUp)
            //set The Range of The nextTenProfiles 
            showTenProfiles = profiles.slice(startCount,countUp);
            myTable.removeChild(myTable.children[1]);
            let newTableBody = document.createElement("tbody");
            myTable.appendChild(newTableBody);

            if(countUp == 1000){
                showTenProfiles = profiles.slice(startCount,countUp);
                return; 
                
            }else{
                //create Tbody Data
            for(let i =0; i < showTenProfiles.length; i++){
                let newTr = document.createElement("tr");
                myTable.children[1].appendChild(newTr);
                newTr.classList.add("newTrs");
                tableRows = document.querySelectorAll(".newTrs")
                //Create New Table Data "td" To GEt the Profile Image
                let newTdPhoto = document.createElement("td");
                let newImg = document.createElement("img");
                newTdPhoto.appendChild(newImg);
                newImg.setAttribute("src",showTenProfiles[i].photo);
    
                //Create New Table Data "td" To GEt the Profile Id
                let newTdId = document.createElement("td");
                let newIdSpan = document.createElement("span");
                newTdId.appendChild(newIdSpan);
                newIdSpan.textContent = showTenProfiles[i].loyalty_member_id
    
                //Create New Table Data "td" To GEt the Profile Email Address
                let newTdEmail = document.createElement("td");
                let newEmailAddressSpan = document.createElement("span");
                newTdEmail.appendChild(newEmailAddressSpan);
                newEmailAddressSpan.textContent = showTenProfiles[i].email
    
                //Create New Table Data "td" To GEt the Profile Username
                let newTdUsername = document.createElement("td");
                let newUsernameSpan = document.createElement("span");
                newTdUsername.appendChild(newUsernameSpan);
                if(showTenProfiles[i].gender == "Female"){
                    newUsernameSpan.textContent = `Mrs ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
                }else{
                    newUsernameSpan.textContent = `Mr ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
                }
                
                //Create New Table Data "td" To GEt the Profile Phone Number
                let newTdPhonenumber = document.createElement("td");
                let newUserphoneNumberSpan = document.createElement("span");
                newTdPhonenumber.appendChild(newUserphoneNumberSpan);
                newUserphoneNumberSpan.textContent = showTenProfiles[i].phone
    
                //Create New Table Data "td" To GEt the Profile Address
                let newTdAddress = document.createElement("td");
                let newUserAddressSpan = document.createElement("span");
                newTdAddress.appendChild(newUserAddressSpan);
                newUserAddressSpan.textContent = showTenProfiles[i].address
    
                //Create New Table Data "td" To GEt the Profile Modified
                let newTdModified = document.createElement("td");
                let newUserModifiedSpan = document.createElement("span");
                newTdModified.appendChild(newUserModifiedSpan);
                newUserModifiedSpan.textContent = showTenProfiles[i].modified;
                
                //Create New Table Data "td" To GEt the Profile View
                let newTdView = document.createElement("td");
                let newIconSPan = document.createElement("span");
                let newIcon = "&gt;";
                newIconSPan.innerHTML = newIcon;
                newTdView.appendChild(newIconSPan)
    
                newTr.appendChild(newTdPhoto)
                newTr.appendChild(newTdId)
                newTr.appendChild(newTdEmail)
                newTr.appendChild(newTdUsername)
                newTr.appendChild(newTdPhonenumber)
                newTr.appendChild(newTdAddress)
                newTr.appendChild(newTdModified)
                newTr.appendChild(newTdView)
            }
            }
            
        });
        let prevProfBtn = document.createElement("button");
        let prevProfBtnText = document.createTextNode("Previous Profiles");
        prevProfBtn.appendChild(prevProfBtnText);
        myProfilesContainer.appendChild(prevProfBtn);
        prevProfBtn.setAttribute("id","prevProfBtn");
        prevProfBtn.addEventListener("click",()=>{
            if(countUp == 10 && startCount == 0){
                return;
            }else{
                startCount -= 10;
                countUp -= 10;
                //set The Range of The nextTenProfiles 
                showTenProfiles = profiles.slice(startCount,countUp);
                myTable.removeChild(myTable.children[1]);
                let newTableBody = document.createElement("tbody");
                myTable.appendChild(newTableBody);
                //create Tbody Data
                for(let i =0; i < showTenProfiles.length; i++){
                    let newTr = document.createElement("tr");
                    myTable.children[1].appendChild(newTr);
                    newTr.classList.add("newTrs");
                    tableRows = document.querySelectorAll(".newTrs")
                    //Create New Table Data "td" To GEt the Profile Image
                    let newTdPhoto = document.createElement("td");
                    let newImg = document.createElement("img");
                    newTdPhoto.appendChild(newImg);
                    newImg.setAttribute("src",showTenProfiles[i].photo);
        
                    //Create New Table Data "td" To GEt the Profile Id
                    let newTdId = document.createElement("td");
                    let newIdSpan = document.createElement("span");
                    newTdId.appendChild(newIdSpan);
                    newIdSpan.textContent = showTenProfiles[i].loyalty_member_id
        
                    //Create New Table Data "td" To GEt the Profile Email Address
                    let newTdEmail = document.createElement("td");
                    let newEmailAddressSpan = document.createElement("span");
                    newTdEmail.appendChild(newEmailAddressSpan);
                    newEmailAddressSpan.textContent = showTenProfiles[i].email
        
                    //Create New Table Data "td" To GEt the Profile Username
                    let newTdUsername = document.createElement("td");
                    let newUsernameSpan = document.createElement("span");
                    newTdUsername.appendChild(newUsernameSpan);
                    if(showTenProfiles[i].gender == "Female"){
                        newUsernameSpan.textContent = `Mrs ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
                    }else{
                        newUsernameSpan.textContent = `Mr ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
                    }
                    
                    //Create New Table Data "td" To GEt the Profile Phone Number
                    let newTdPhonenumber = document.createElement("td");
                    let newUserphoneNumberSpan = document.createElement("span");
                    newTdPhonenumber.appendChild(newUserphoneNumberSpan);
                    newUserphoneNumberSpan.textContent = showTenProfiles[i].phone
        
                    //Create New Table Data "td" To GEt the Profile Address
                    let newTdAddress = document.createElement("td");
                    let newUserAddressSpan = document.createElement("span");
                    newTdAddress.appendChild(newUserAddressSpan);
                    newUserAddressSpan.textContent = showTenProfiles[i].address
        
                    //Create New Table Data "td" To GEt the Profile Modified
                    let newTdModified = document.createElement("td");
                    let newUserModifiedSpan = document.createElement("span");
                    newTdModified.appendChild(newUserModifiedSpan);
                    newUserModifiedSpan.textContent = showTenProfiles[i].modified;
                    
                    //Create New Table Data "td" To GEt the Profile View
                    let newTdView = document.createElement("td");
                    let newIconSPan = document.createElement("span");
                    let newIcon = "&gt;";
                    newIconSPan.innerHTML = newIcon;
                    newTdView.appendChild(newIconSPan)
        
                    newTr.appendChild(newTdPhoto)
                    newTr.appendChild(newTdId)
                    newTr.appendChild(newTdEmail)
                    newTr.appendChild(newTdUsername)
                    newTr.appendChild(newTdPhonenumber)
                    newTr.appendChild(newTdAddress)
                    newTr.appendChild(newTdModified)
                    newTr.appendChild(newTdView)
                } 
            }
        })
        for(let i =0; i < showTenProfiles.length; i++){
            let newTr = document.createElement("tr");
            myTable.children[1].appendChild(newTr);
            newTr.classList.add("newTrs");
            tableRows = document.querySelectorAll(".newTrs")
            //Create New Table Data "td" To GEt the Profile Image
            let newTdPhoto = document.createElement("td");
            let newImg = document.createElement("img");
            newTdPhoto.appendChild(newImg);
            newImg.setAttribute("src",showTenProfiles[i].photo);

            //Create New Table Data "td" To GEt the Profile Id
            let newTdId = document.createElement("td");
            let newIdSpan = document.createElement("span");
            newTdId.appendChild(newIdSpan);
            newIdSpan.textContent = showTenProfiles[i].loyalty_member_id

            //Create New Table Data "td" To GEt the Profile Email Address
            let newTdEmail = document.createElement("td");
            let newEmailAddressSpan = document.createElement("span");
            newTdEmail.appendChild(newEmailAddressSpan);
            newEmailAddressSpan.textContent = showTenProfiles[i].email

            //Create New Table Data "td" To GEt the Profile Username
            let newTdUsername = document.createElement("td");
            let newUsernameSpan = document.createElement("span");
            newTdUsername.appendChild(newUsernameSpan);
            if(showTenProfiles[i].gender == "Female"){
                newUsernameSpan.textContent = `Mrs ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
            }else{
                newUsernameSpan.textContent = `Mr ${showTenProfiles[i].first_name + " " + showTenProfiles[i].last_name}`
            }
            
            //Create New Table Data "td" To GEt the Profile Phone Number
            let newTdPhonenumber = document.createElement("td");
            let newUserphoneNumberSpan = document.createElement("span");
            newTdPhonenumber.appendChild(newUserphoneNumberSpan);
            newUserphoneNumberSpan.textContent = showTenProfiles[i].phone

            //Create New Table Data "td" To GEt the Profile Address
            let newTdAddress = document.createElement("td");
            let newUserAddressSpan = document.createElement("span");
            newTdAddress.appendChild(newUserAddressSpan);
            newUserAddressSpan.textContent = showTenProfiles[i].address

            //Create New Table Data "td" To GEt the Profile Modified
            let newTdModified = document.createElement("td");
            let newUserModifiedSpan = document.createElement("span");
            newTdModified.appendChild(newUserModifiedSpan);
            newUserModifiedSpan.textContent = showTenProfiles[i].modified;
            
            //Create New Table Data "td" To GEt the Profile View
            let newTdView = document.createElement("td");
            let newIconSPan = document.createElement("span");
            let newIcon = "&gt;";
            newIconSPan.innerHTML = newIcon;
            newTdView.appendChild(newIconSPan)

            newTr.appendChild(newTdPhoto)
            newTr.appendChild(newTdId)
            newTr.appendChild(newTdEmail)
            newTr.appendChild(newTdUsername)
            newTr.appendChild(newTdPhonenumber)
            newTr.appendChild(newTdAddress)
            newTr.appendChild(newTdModified)
            newTr.appendChild(newTdView)
        }
        return profiles;
    }
)
.then(
    (searchResult)=>{
        searchBoxBtn.addEventListener("click",()=>{
            console.log(searchBox.value);
            for(result of searchResult){
                if(searchBox.value.toLowerCase() == result.first_name.toLowerCase() || searchBox.value.toLowerCase() == result.last_name.toLowerCase() || searchBox.value.toLowerCase() == result.email.toLowerCase()){
                    myTable.removeChild(myTable.children[1]);
                    let newTableBody = document.createElement("tbody");
                    myTable.appendChild(newTableBody);

                    let newTr = document.createElement("tr");
                    myTable.children[1].appendChild(newTr);
                    newTr.classList.add("newTrs");
                    tableRows = document.querySelectorAll(".newTrs")
                    //Create New Table Data "td" To GEt the Profile Image
                    let newTdPhoto = document.createElement("td");
                    let newImg = document.createElement("img");
                    newTdPhoto.appendChild(newImg);
                    newImg.setAttribute("src",result.photo);
        
                    //Create New Table Data "td" To GEt the Profile Id
                    let newTdId = document.createElement("td");
                    let newIdSpan = document.createElement("span");
                    newTdId.appendChild(newIdSpan);
                    newIdSpan.textContent = result.loyalty_member_id
        
                    //Create New Table Data "td" To GEt the Profile Email Address
                    let newTdEmail = document.createElement("td");
                    let newEmailAddressSpan = document.createElement("span");
                    newTdEmail.appendChild(newEmailAddressSpan);
                    newEmailAddressSpan.textContent = result.email
        
                    //Create New Table Data "td" To GEt the Profile Username
                    let newTdUsername = document.createElement("td");
                    let newUsernameSpan = document.createElement("span");
                    newTdUsername.appendChild(newUsernameSpan);
                    if(result.gender == "Female"){
                        newUsernameSpan.textContent = `Mrs ${result.first_name + " " + result.last_name}`
                    }else{
                        newUsernameSpan.textContent = `Mr ${result.first_name + " " + result.last_name}`
                    }
                    
                    //Create New Table Data "td" To GEt the Profile Phone Number
                    let newTdPhonenumber = document.createElement("td");
                    let newUserphoneNumberSpan = document.createElement("span");
                    newTdPhonenumber.appendChild(newUserphoneNumberSpan);
                    newUserphoneNumberSpan.textContent = result.phone
        
                    //Create New Table Data "td" To GEt the Profile Address
                    let newTdAddress = document.createElement("td");
                    let newUserAddressSpan = document.createElement("span");
                    newTdAddress.appendChild(newUserAddressSpan);
                    newUserAddressSpan.textContent = result.address
        
                    //Create New Table Data "td" To GEt the Profile Modified
                    let newTdModified = document.createElement("td");
                    let newUserModifiedSpan = document.createElement("span");
                    newTdModified.appendChild(newUserModifiedSpan);
                    newUserModifiedSpan.textContent = result.modified;
                    
                    //Create New Table Data "td" To GEt the Profile View
                    let newTdView = document.createElement("td");
                    let newIconSPan = document.createElement("span");
                    let newIcon = "&gt;";
                    newIconSPan.innerHTML = newIcon;
                    newTdView.appendChild(newIconSPan)
        
                    newTr.appendChild(newTdPhoto)
                    newTr.appendChild(newTdId)
                    newTr.appendChild(newTdEmail)
                    newTr.appendChild(newTdUsername)
                    newTr.appendChild(newTdPhonenumber)
                    newTr.appendChild(newTdAddress)
                    newTr.appendChild(newTdModified)
                    newTr.appendChild(newTdView)
                }
            }
        })
        
    }
)


