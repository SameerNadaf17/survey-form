 


 function submitForm()
 {
   // Get form values
   const firstName = document.getElementById("firstName").value;
   const lastName = document.getElementById("lastName").value;
   const dob = document.getElementById("dob").value;
   const countryDropdown = document.getElementById("countryDropdown");
   const selectedIndex = countryDropdown.selectedIndex;
   const country = selectedIndex !== -1 ? countryDropdown.options[selectedIndex].value : "";
   const gender = document.getElementById("male").checked ? "Male" : document.getElementById("female").checked ? "Female" : "";
   const profession = document.getElementById("profession").value;
   const email = document.getElementById("email").value;
   const mobile = document.getElementById("mobile").value;
   const Is = document.getElementById("Yes").checked ? "Yes" : document.getElementById("No").checked ? "NO" : "";
   const Would = document.getElementById("Yes").checked ? "Yes" : document.getElementById("No").checked ? "NO" : "";
   


   // Perform necessary validations (you can customize these)
   if (!firstName || !lastName || !dob || !countryDropdown || !gender || !profession || !email || !mobile || !Is || !Would) {
     alert("Please fill in all the required fields.");
     return;
   }

   // Display popup with selected values
   const popupContent = `
     <strong>First Name:</strong> ${firstName}<br>
     <strong>Last Name:</strong> ${lastName}<br>
     <strong>Date of Birth:</strong> ${dob}<br>
     <strong>Country:</strong> ${country}<br>
     <strong>Gender:</strong> ${gender}<br>
     <strong>Profession:</strong> ${profession}<br>
     <strong>Email:</strong> ${email}<br>
     <strong>Mobile Number:</strong> ${mobile}<br>
     <strong>Is this first time you are using our product and service?</strong> ${Is}<br>
     <strong>Would you suggestion to your friends & colleague?</strong> ${Would}<br>
   `;

   document.getElementById("popupContent").innerHTML = popupContent;

   // Display overlay and popup
   document.getElementById("overlay").style.display = "block";
   document.getElementById("popup").style.display = "block";

   // Reset the form
   resetForm();
 }

 function resetForm() 
 {
   document.getElementById("surveyForm").reset();
 }

 function closePopup() 
 {
   // Hide overlay and popup
   document.getElementById("overlay").style.display = "none";
   document.getElementById("popup").style.display = "none";
 }
 function handleGenderCheckbox(clickedCheckbox) 
 {
  const checkboxes = document.getElementsByName("gender");

  checkboxes.forEach(checkbox => {
  if (checkbox !== clickedCheckbox) 
  {
   checkbox.checked = false;
  }
  });
 }

 