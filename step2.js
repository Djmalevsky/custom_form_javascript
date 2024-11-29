<!-- Multi-Step Form -->
<div id="multiStepForm" style="font-family: Poppins, sans-serif; max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; box-sizing: border-box; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

    <!-- Step 2: Booking Form -->
    <div id="step2" class="form-step" style="display: block;">
      <h2 style="text-align: center; color: #ff6b08; margin-bottom: 30px;">Book Your Appointment</h2>
  
  <!-- Date of Birth Step -->
<div id="dobStep" class="step" style="display: block;">
  <h4 style="margin-bottom: 15px; color: #333;">Date of Birth</h4>
  <div style="margin-bottom: 20px;">
    <input 
      type="text" 
      name="dob" 
      id="dob" 
      placeholder="MM-DD-YYYY" 
      inputmode="numeric" 
      style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px; box-sizing: border-box;" 
    />
    <p id="dobError" style="color: #b22222; font-size: 12px; display: none; margin-top: 5px;">Please enter your date of birth in MM-DD-YYYY format.</p>
  </div>
  <div style="text-align: center; margin-top: 20px;">
    <button 
      onclick="validateDob()" 
      style="background-color: #611011; color: white; padding: 12px 25px; width: 100%; border: none; border-radius: 4px; font-size: 18px; cursor: pointer; transition: background-color 0.3s;"
    >
      Next
    </button>
  </div>
</div>
  
  <!-- Step 2: Insurance -->
  <div id="insuranceStep" class="step" style="display: none;">
    <h4 style="color: #333; margin-bottom: 15px;">Insurance</h4>
    <div style="margin-bottom: 20px; display: flex; flex-direction: column; gap: 15px;">
      <div style="display: flex; flex-direction: column;">
        <label for="insuranceManual">
          <input type="radio" name="insuranceOption" value="manual" id="insuranceManual" onchange="toggleInsuranceInputs()" style="margin-right: 10px;">
          <span>Manually Enter Insurance</span>
        </label>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label for="insuranceUpload">
          <input type="radio" name="insuranceOption" value="upload" id="insuranceUpload" onchange="toggleInsuranceInputs()" style="margin-right: 10px;">
          <span>Upload Insurance</span>
        </label>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label for="insuranceSelfPay">
          <input type="radio" name="insuranceOption" value="selfPay" id="insuranceSelfPay" onchange="toggleInsuranceInputs()" style="margin-right: 10px;">
          <span>Self Pay</span>
        </label>
      </div>
    </div>
  
    <!-- Error message -->
    <p id="insuranceError" style="color: red; font-size: 14px; display: none; margin-bottom: 10px;">Please select an insurance option.</p>
  
    <!-- Manual Insurance Inputs -->
    <div id="insuranceManualInputs" style="display:none; margin-bottom: 20px;">
      <input type="text" name="insuranceName" id="insuranceName" placeholder="Insurance Name" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; box-sizing: border-box; margin-bottom: 10px;">
      <input type="text" name="insuranceId" id="insuranceId" placeholder="Insurance ID" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; box-sizing: border-box;">
      <p id="manualInsuranceError" style="color: red; font-size: 14px; display: none; margin-top: 5px;">Please enter both insurance name and ID.</p>
    </div>
  
    <!-- Upload Insurance Inputs -->
    <div id="insuranceUploadInputs" style="display:none; margin-bottom: 20px;">
      <label style="font-size: 14px;">Upload Front of Insurance</label>
      <input type="file" name="insuranceFront" id="insuranceFront" style="padding: 12px; margin-bottom: 10px;">
      <label style="margin-top: 5px; font-size: 14px;">Upload Back of Insurance</label>
      <input type="file" name="insuranceBack" id="insuranceBack" style="padding: 12px;">
      <p id="uploadInsuranceError" style="color: red; font-size: 14px; display: none; margin-top: 5px;">Please upload both the front and back of your insurance.</p>
    </div>
  
    <!-- Self-Pay Message -->
    <div id="selfPayMessage" style="display:none; margin-bottom: 20px;">
      <p style="color: green; font-size: 14px;">Self-pay option selected.</p>
    </div>
  
    <div style="text-align: center; margin-top: 20px;">
      <button 
        onclick="validateInsuranceInputs()" 
        style="background-color: #611011; color: white; padding: 12px 25px; width: 100%; border: none; border-radius: 4px; font-size: 18px; cursor: pointer; transition: background-color 0.3s;">
        Next
      </button>
    </div>
  </div>
<!-- Step 3: Location Selection -->
<div id="locationStep" class="step" style="display: none;">
    <h4 style="color: #333; margin-bottom: 15px;">Choose Your Location</h4>
    <div style="margin-bottom: 20px;">
        <select id="locationSelect" onchange="updateAvailableDates()" 
        style="width: 100%; padding: 16px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; box-sizing: border-box; height: 50px;">
  <option value="">Select a Location</option>
  <option value="fort-lauderdale">Fort Lauderdale</option>
  <option value="boca-raton">Boca Raton</option>
  <option value="aventura">Aventura</option>
  <option value="plantation">Plantation</option>
  <option value="west-palm-beach">West Palm Beach</option>
</select>
      <p id="locationError" style="color: red; font-size: 14px; display: none; margin-top: 10px;">Please select a location.</p>
    </div>
    <div id="availableDates" style="display: none;">
      <h3 style="color: #ff6b08;">Choose Your Appointment Date</h3>
      <div id="dateSelection"></div>
    </div>
  
    <div style="text-align: center; margin-top: 20px;">
      <button 
        onclick="validateLocationStep()" 
        style="background-color: #611011; color: white; padding: 12px 25px; width: 100%; border: none; border-radius: 4px; font-size: 18px; cursor: pointer; transition: background-color 0.3s;">
        Next
      </button>
    </div>
  </div>
  
  <!-- Step 4: Appointment Booking -->
<div id="timeStep" class="step" style="display: none;">
  <h4 style="color: #333; margin-bottom: 15px; text-align: center;">Choose Your Appointment Date & Time</h4>

  <!-- Date Picker -->
  <div style="margin-bottom: 20px;">
    <label for="appointmentDate" style="display: block; font-size: 14px; color: #333; margin-bottom: 5px;">Select Appointment Date</label>
    <input
      type="date"
      id="appointmentDate"
      name="appointmentDate"
      min="{{min_date}}"
      style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 16px; margin-bottom: 10px;"
      required
    />
    <p id="appointmentDateError" style="color: red; font-size: 12px; display: none;">Appointments must be scheduled for today or later.</p>
  </div>

  <!-- Time Options -->
  <div id="timeOptions">
    <div
      id="morningOption"
      class="time-slot"
      onclick="selectTime('Morning')"
      style="display: flex; align-items: center; justify-content: center; padding: 15px; background-color: #f9f9f9; border: 1px solid #ccc; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-size: 16px; text-align: center;"
    >
      <i class="fas fa-sun" style="margin-right: 10px;"></i> Morning (8:00 AM - 12:00 PM)
    </div>
    <div
      id="afternoonOption"
      class="time-slot"
      onclick="selectTime('Afternoon')"
      style="display: flex; align-items: center; justify-content: center; padding: 15px; background-color: #f9f9f9; border: 1px solid #ccc; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-size: 16px; text-align: center;"
    >
      <i class="fas fa-cloud-sun" style="margin-right: 10px;"></i> Afternoon (1:00 PM - 5:00 PM)
    </div>
  </div>

  <!-- Confirm Button -->
  <div style="text-align: center; margin-top: 20px;">
    <button
      onclick="submitAppointment()"
      style="padding: 15px 25px; width: 100%; background-color: #611011; color: white; border: none; border-radius: 8px; font-size: 18px; cursor: pointer; transition: background-color 0.3s; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    >
      Confirm Appointment
    </button>
  </div>
</div>
    </div>
  </div>
  
  <script>
  // Step 2: Form Start Event
let step2Started = false; // Prevent duplicate tracking

document.querySelectorAll('#step2 input, #step2 select').forEach((field) => {
  field.addEventListener("focus", () => {
    if (!step2Started) {
      gtag('event', 'form_start_step2', {
        event_category: 'Form',
        event_label: 'Step 2',
        step: 2
      });
      step2Started = true;
    }
  });
});
  // Set minimum date for the date picker
  document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().toISOString().split("T")[0];
    const appointmentDateInput = document.getElementById("appointmentDate");
    if (appointmentDateInput) {
      appointmentDateInput.setAttribute("min", today);
    }
  });
  
  function updateAvailableDates() {
    const locationSelect = document.getElementById("locationSelect");
    const appointmentDateInput = document.getElementById("appointmentDate");
  
    if (!locationSelect || !appointmentDateInput) return;
  
    const selectedLocation = locationSelect.value;
    const today = new Date();
    let minDate = new Date();
  
    // Adjust minDate for specific locations
    if (selectedLocation === "plantation" || selectedLocation === "west-palm-beach") {
      minDate.setDate(today.getDate() + 1); // At least one day in advance
    } else {
      minDate = today; // Same-day appointments allowed
    }
  
    // Format minDate as YYYY-MM-DD
    const formattedMinDate = minDate.toISOString().split("T")[0];
    appointmentDateInput.setAttribute("min", formattedMinDate);
  
    // Optionally reset the date input value if it's invalid
    if (appointmentDateInput.value && new Date(appointmentDateInput.value) < minDate) {
      appointmentDateInput.value = ""; // Clear invalid date
    }
  }
  
  // Function to navigate between steps
  function nextStep(currentStepId, nextStepId) {
    const currentStep = document.getElementById(currentStepId);
    const nextStep = document.getElementById(nextStepId);
  
    if (currentStep) currentStep.style.display = "none";
    if (nextStep) nextStep.style.display = "block";
  }
  
  // Toggle insurance inputs visibility based on selected option
  function toggleInsuranceInputs() {
    const insuranceOption = document.querySelector('input[name="insuranceOption"]:checked')?.value;
  
    const manualInputs = document.getElementById("insuranceManualInputs");
    const uploadInputs = document.getElementById("insuranceUploadInputs");
  
    if (manualInputs) manualInputs.style.display = insuranceOption === "manual" ? "block" : "none";
    if (uploadInputs) uploadInputs.style.display = insuranceOption === "upload" ? "block" : "none";
  }
  
  // Track selected time
  let selectedTime = "";
  
  function selectTime(time) {
  selectedTime = time; // Store the selected time

  // Get all time slots
  const timeSlots = document.querySelectorAll(".time-slot");

  // Reset styles for all time slots
  timeSlots.forEach((slot) => {
    slot.style.backgroundColor = ""; // Reset to default (transparent or inherited)
    slot.style.border = "1px solid #ccc"; // Reset border
    slot.style.color = "#333"; // Reset text color
  });

  // Apply styles to the selected time slot
  const selectedOption = document.getElementById(`${time.toLowerCase()}Option`);
  selectedOption.style.backgroundColor = "#d3d3d3"; // Gray background
  selectedOption.style.border = "2px solid #333"; // Subtle border
  selectedOption.style.color = "#000"; // Darker text for contrast
}
  
  // Dynamically update available time options based on date and time
  document.getElementById("appointmentDate")?.addEventListener("change", updateTimeOptions);
  function updateTimeOptions() {
  const appointmentDate = document.getElementById("appointmentDate")?.value;
  const today = new Date().toISOString().split("T")[0];
  const currentHour = new Date().getHours();

  const morningOption = document.getElementById("morningOption");
  const afternoonOption = document.getElementById("afternoonOption");

  // Reset styles
  morningOption.style.display = "block";
  afternoonOption.style.display = "block";

  if (appointmentDate === today) {
    if (currentHour >= 12) {
      morningOption.style.display = "none"; // Hide Morning if it's past 12 PM
    }
    if (currentHour >= 17) {
      afternoonOption.style.display = "none"; // Hide Afternoon if it's past 5 PM
    }
  }

  // Auto-select the first visible option
  if (morningOption.style.display !== "none") {
    selectTime("Morning");
  } else if (afternoonOption.style.display !== "none") {
    selectTime("Afternoon");
  }
}
function validateAppointmentDate() {
  const appointmentDateInput = document.getElementById("appointmentDate");
  const locationSelect = document.getElementById("locationSelect");
  const appointmentDateError = document.getElementById("appointmentDateError");

  if (!appointmentDateInput || !locationSelect) {
    console.error("Missing required elements.");
    return false;
  }

  const selectedDateInput = appointmentDateInput.value;
  const selectedLocation = locationSelect.value;

  const selectedDate = new Date(`${selectedDateInput}T00:00:00`);
  const now = new Date();
  const estNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

  const estToday = new Date(estNow);
  estToday.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);

  // Plantation and West Palm Beach: One day in advance
  if (selectedLocation === "plantation" || selectedLocation === "west-palm-beach") {
    if (selectedDate <= estToday) {
      appointmentDateError.style.display = "block";
      appointmentDateError.textContent = `For ${selectedLocation}, appointments must be scheduled at least one day in advance. Please select a later date.`;
      return false;
    }
  } else {
    // Same-day booking rules
    if (selectedDate.getTime() === estToday.getTime()) {
      if (estNow.getHours() >= 12 && selectedTime === "Morning") {
        appointmentDateError.style.display = "block";
        appointmentDateError.textContent = `Morning appointments for today are no longer available. Please select Afternoon or a future date.`;
        return false;
      }
      if (estNow.getHours() >= 17 && selectedTime === "Afternoon") {
        appointmentDateError.style.display = "block";
        appointmentDateError.textContent = `Afternoon appointments for today are no longer available. Please select a future date.`;
        return false;
      }
    }

    if (selectedDate < estToday) {
      appointmentDateError.style.display = "block";
      appointmentDateError.textContent = `Appointments cannot be scheduled for past dates. Please select today or a future date.`;
      return false;
    }
  }

  // If all validations pass
  appointmentDateError.style.display = "none";
  return true;
}


//Beginning of submission function!!!!






function submitAppointment() {
  // Validate the appointment date
  if (!validateAppointmentDate()) {
    return; // Stop submission if the date is invalid
  }

  const appointmentDate = document.getElementById("appointmentDate")?.value;
  const locationSelect = document.getElementById("locationSelect");
  const timeError = document.getElementById("timeError");
  const locationError = document.getElementById("locationError");

  // Reset error messages if elements exist
  if (timeError) {
    timeError.style.display = "none";
    timeError.textContent = ""; // Clear previous text
  }
  if (locationError) {
    locationError.style.display = "none";
    locationError.textContent = ""; // Clear previous text
  }

  // Validate time selection
  if (!selectedTime) {
    if (timeError) {
      timeError.style.display = "block";
      timeError.textContent = "Please select Morning or Afternoon.";
    } else {
      alert("Please select Morning or Afternoon.");
    }
    return;
  }

  // Validate location selection
  if (!locationSelect || !locationSelect.value) {
    if (locationError) {
      locationError.style.display = "block";
      locationError.textContent = "Please select a location.";
    } else {
      alert("Please select a location.");
    }
    return;
  }

  // Validate date selection
  if (!appointmentDate) {
    alert("Please select an appointment date.");
    return;
  }

  // Retrieve data from URL parameters or local storage
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get("firstName") || localStorage.getItem("firstName") || "";
  const lastName = urlParams.get("lastName") || localStorage.getItem("lastName") || "";
  const phone = urlParams.get("phone") || localStorage.getItem("phone") || "";
  const email = urlParams.get("email") || localStorage.getItem("email") || "";
  const painArea = urlParams.get("painArea") || localStorage.getItem("painArea") || "";

  // UTM Parameters
  const utmSource = urlParams.get("utm_source") || localStorage.getItem("utm_source") || "not_set";
  const utmMedium = urlParams.get("utm_medium") || localStorage.getItem("utm_medium") || "not_set";
  const utmCampaign = urlParams.get("utm_campaign") || localStorage.getItem("utm_campaign") || "not_set";
  const utmContent = urlParams.get("utm_content") || localStorage.getItem("utm_content") || "not_set";
  const utmTerm = urlParams.get("utm_term") || localStorage.getItem("utm_term") || "not_set";

  // Attribution
  const firstUtmContent = urlParams.get("first_utm_content") || localStorage.getItem("first_utm_content") || "not_set";
  let lastUtmContent = urlParams.get("last_utm_content") || localStorage.getItem("last_utm_content");

  // If last attribution is not set, fallback to first attribution
  if (!lastUtmContent || lastUtmContent === "not_set") {
    lastUtmContent = firstUtmContent;
  }

  // Save updated UTM and attribution parameters to localStorage
  localStorage.setItem("utm_source", utmSource);
  localStorage.setItem("utm_medium", utmMedium);
  localStorage.setItem("utm_campaign", utmCampaign);
  localStorage.setItem("utm_content", utmContent);
  localStorage.setItem("utm_term", utmTerm);
  localStorage.setItem("last_utm_content", lastUtmContent);

  // Validate user information
  if (!firstName || !lastName || !phone || !email) {
    alert("Missing required information. Please fill out all fields.");
    return;
  }

  // Check insurance selection
  const insuranceOption = document.querySelector('input[name="insuranceOption"]:checked')?.value;
  if (!insuranceOption) {
    alert("Please select an insurance option.");
    return;
  }

  // Validate insurance details based on the selected option
  if (insuranceOption === "manual") {
    const insuranceName = document.getElementById("insuranceName")?.value.trim();
    const insuranceId = document.getElementById("insuranceId")?.value.trim();

    if (!insuranceName || !insuranceId) {
      alert("Please enter both the insurance name and ID.");
      return;
    }
  } else if (insuranceOption === "upload") {
    const insuranceFront = document.getElementById("insuranceFront")?.files[0];
    const insuranceBack = document.getElementById("insuranceBack")?.files[0];

    if (!insuranceFront || !insuranceBack) {
      alert("Please upload both the front and back of your insurance.");
      return;
    }

    // Validate file type and size
    const allowedTypes = ["image/jpeg", "image/png"];
    const maxFileSize = 5 * 1024 * 1024; // 5 MB per file

    if (
      !allowedTypes.includes(insuranceFront.type) ||
      insuranceFront.size > maxFileSize ||
      !allowedTypes.includes(insuranceBack.type) ||
      insuranceBack.size > maxFileSize
    ) {
      alert("Please upload valid images (JPEG/PNG) under 5 MB.");
      return;
    }
  }

  // Construct the form data
  const formData = new FormData();
  formData.append("firstName", firstName);
  formData.append("lastName", lastName);
  formData.append("phone", phone);
  formData.append("email", email);
  formData.append("painArea", painArea);
  formData.append("dob", document.getElementById("dob")?.value || "");
  formData.append("insuranceOption", insuranceOption);

  if (insuranceOption === "manual") {
    formData.append("insuranceName", document.getElementById("insuranceName")?.value.trim());
    formData.append("insuranceId", document.getElementById("insuranceId")?.value.trim());
  } else if (insuranceOption === "upload") {
    formData.append("insuranceFront", document.getElementById("insuranceFront")?.files[0]);
    formData.append("insuranceBack", document.getElementById("insuranceBack")?.files[0]);
  }

  formData.append("location", locationSelect.value);
  formData.append("appointmentDate", appointmentDate);
  formData.append("appointmentTime", selectedTime);

  // Add attribution and step information
  formData.append("utm_source", utmSource);
  formData.append("utm_medium", utmMedium);
  formData.append("utm_campaign", utmCampaign);
  formData.append("utm_content", utmContent);
  formData.append("utm_term", utmTerm);
  formData.append("first_utm_content", firstUtmContent); // First-touch attribution
  formData.append("last_utm_content", lastUtmContent); // Last-touch attribution
  formData.append("form_step", "2"); // Current step

  // Disable the submit button to prevent duplicate submissions
  const submitButton = document.querySelector('button[onclick="submitAppointment()"]');
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
  }
  trackFormSubmitStep2()
  // Submit to Getform.io
  fetch("https://getform.io/f/amddydqb", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("multiStepForm").innerHTML = `
          <div style="text-align: center; padding: 20px;">
            <h2 style="color: #ff6b08;">We Will Call You To Confirm!</h2>
            <p style="font-size: 16px; color: #333;">
              Your appointment request has been received. A representative will call you to confirm from 
              <a href="tel:+19543359377" style="color: #611011; text-decoration: none;"><strong>(954) 335-9377</strong></a>.
            </p>
          </div>
        `;
      } else {
        alert("Error submitting appointment. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    })
    .finally(() => {
      // Re-enable the submit button after submission
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Confirm Appointment";
      }
    });
}




/// END OF SUBMISSION FUNCTION
function trackFormSubmitStep2() {
  if (typeof gtag === "function") {
    gtag('event', 'form_submit_step2', {
      event_category: 'Form',
      event_label: 'Step 2 Completed',
      step: 2,
      status: 'success',
    });
    console.log("form_submit_step2 event fired.");
  }
}
function trackInsuranceSubmit(validationStatus) {
  const insuranceOption = document.querySelector('input[name="insuranceOption"]:checked')?.value;
  if (insuranceOption && typeof gtag === "function") {
    gtag('event', 'Insurance_submit', {
      event_category: 'Form',
      event_label: 'Insurance Details Submitted',
      step: 2,
      insuranceOption: insuranceOption,
      validationStatus: validationStatus,
    });
    console.log(`Insurance_submit event fired: ${insuranceOption}, ${validationStatus}`);
  }
}
function trackLocationSubmit() {
  const locationSelect = document.getElementById("locationSelect");
  const selectedLocation = locationSelect?.value;

  if (selectedLocation && typeof gtag === "function") {
    gtag('event', 'location_submit', {
      event_category: 'Form',
      event_label: 'Location Submitted',
      step: 2,
      selectedLocation: selectedLocation,
    });
    console.log(`location_submit event fired: ${selectedLocation}`);
  }
}

  function toggleInsuranceInputs() {
    const insuranceOption = document.querySelector('input[name="insuranceOption"]:checked')?.value;
  
    const manualInputs = document.getElementById("insuranceManualInputs");
    const uploadInputs = document.getElementById("insuranceUploadInputs");
    const selfPayMessage = document.getElementById("selfPayMessage"); // Updated ID
  
    // Show/Hide based on selection
    if (manualInputs) manualInputs.style.display = insuranceOption === "manual" ? "block" : "none";
    if (uploadInputs) uploadInputs.style.display = insuranceOption === "upload" ? "block" : "none";
    if (selfPayMessage) selfPayMessage.style.display = insuranceOption === "selfPay" ? "block" : "none";
  }
   function validateInsuranceInputs() {
    const insuranceOption = document.querySelector('input[name="insuranceOption"]:checked')?.value;
  
    // Hide all error messages initially
    document.getElementById("insuranceError").style.display = "none";
    document.getElementById("manualInsuranceError").style.display = "none";
    document.getElementById("uploadInsuranceError").style.display = "none";
  
    // Check if any option is selected
    if (!insuranceOption) {
      document.getElementById("insuranceError").style.display = "block";
      return;
    }
  
    // Validation for "Manually Enter Insurance"
    if (insuranceOption === "manual") {
      const insuranceName = document.getElementById("insuranceName").value.trim();
      const insuranceId = document.getElementById("insuranceId").value.trim();
  
      if (!insuranceName || !insuranceId) {
        document.getElementById("manualInsuranceError").style.display = "block";
        return;
      }
    }
  
    // Validation for "Upload Insurance"
    if (insuranceOption === "upload") {
      const insuranceFront = document.getElementById("insuranceFront").files[0];
      const insuranceBack = document.getElementById("insuranceBack").files[0];
  
      if (!insuranceFront || !insuranceBack) {
        document.getElementById("uploadInsuranceError").style.display = "block";
        return;
      }
    }
    trackInsuranceSubmit(insuranceOption)
    // Proceed to the next step if validation passes
    nextStep("insuranceStep", "locationStep");
  }
  function validateLocation() {
    const locationSelect = document.getElementById("locationSelect");
    const locationError = document.getElementById("locationError");
  
    if (!locationSelect.value) {
      locationError.style.display = "block";
      return;
    }
  
    locationError.style.display = "none";
    nextStep("locationStep", "timeStep");
  }
  

  function validateLocationStep() {
  const locationSelect = document.getElementById("locationSelect");
  const locationError = document.getElementById("locationError");

  // Check if a location is selected
  if (!locationSelect.value) {
    locationError.style.display = "block"; // Show the error message
    return; // Prevent moving to the next step
  }

  locationError.style.display = "none"; // Hide the error message if valid
  trackLocationSubmit()
  nextStep("locationStep", "timeStep"); // Move to the next step
}

// Add input masking for MM-DD-YYYY format
document.getElementById('dob').addEventListener('input', function (e) {
  let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
  const parts = [];

  // Format the string as MM-DD-YYYY
  if (value.length > 2) {
    parts.push(value.substr(0, 2)); // MM
    value = value.substr(2);
  }
  if (value.length > 2) {
    parts.push(value.substr(0, 2)); // DD
    value = value.substr(2);
  }
  if (value.length > 0) {
    parts.push(value.substr(0, 4)); // YYYY
  }
  this.value = parts.join('-'); // Join the parts with dashes
});

function validateDob() {
  const dobInput = document.getElementById("dob");
  const dobError = document.getElementById("dobError");
  const dobValue = dobInput.value.trim();

  // Regex for MM-DD-YYYY format
  const dobRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)\d{2}$/;

  // Check if format matches MM-DD-YYYY
  if (!dobRegex.test(dobValue)) {
    dobError.style.display = "block";
    dobError.textContent = "Enter a valid date in MM-DD-YYYY format.";
    dobInput.focus();
    return false;
  }

  // Split date into components
  const [month, day, year] = dobValue.split("-").map((part) => parseInt(part, 10));

  // Validate logical correctness of the date
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    dobError.style.display = "block";
    dobError.textContent = "Invalid date. Please check your input.";
    dobInput.focus();
    return false;
  }

  // Handle months with fewer than 31 days
  const daysInMonth = new Date(year, month, 0).getDate(); // Get the last day of the month
  if (day > daysInMonth) {
    dobError.style.display = "block";
    dobError.textContent = "Invalid day for the selected month.";
    dobInput.focus();
    return false;
  }

  // Validate against current date
  const today = new Date();
  const dobDate = new Date(year, month - 1, day); // Month is 0-indexed in JS Date
  if (dobDate > today) {
    dobError.style.display = "block";
    dobError.textContent = "Date of birth cannot be in the future.";
    dobInput.focus();
    return false;
  }

  // Check if the date is within a reasonable age range
  const maxAge = 120;
  const minAge = 18;
  const oldestValidDate = new Date(today.getFullYear() - maxAge, today.getMonth(), today.getDate());
  const legalAgeDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

  if (dobDate < oldestValidDate) {
    dobError.style.display = "block";
    dobError.textContent = `Date of birth cannot be more than ${maxAge} years ago.`;
    dobInput.focus();
    return false;
  }

  if (dobDate > legalAgeDate) {
    dobError.style.display = "block";
    dobError.textContent = "You must be at least 18 years old.";
    dobInput.focus();
    return false;
  }

  // If all validations pass
  dobError.style.display = "none";
  console.log("Valid Date of Birth:", dobValue);
  if (typeof gtag === "function") {
  gtag('event', 'DOB_Submit', {
    event_category: 'Form',
    event_label: 'Date of Birth Submitted',
    step: 2,
    dob: dobValue
  });
  console.log("DOB_Submit event fired successfully.");
} else {
  console.error("gtag is not defined. Event not fired.");
}

  nextStep("dobStep", "insuranceStep"); // Proceed to the next step
  return true;
}
  </script>
   <style>
    /* General Layout: Always stacked vertically */
    #timeOptions {
      display: grid;
      grid-template-columns: 1fr; /* Single column */
      gap: 10px; /* Space between items */
    }

    /* Time Slot Styling */
    .time-slot {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 16px;
      text-align: center;
    }

    /* Highlight Selected Time Slot */
    .time-slot.selected {
      background-color: #d3d3d3; /* Gray background */
      border: 2px solid #333; /* Subtle border */
      color: #000; /* Darker text for contrast */
    }
  </style>
 <style>
    /* Manual Insurance Section Styling */
    #insuranceManualInputs {
      display: none; /* Default: Hidden */
      margin-bottom: 20px;
      background-color: #f8f9fa; /* Light background for contrast */
      border: 2px solid #ccc; /* Subtle border */
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
      transition: all 0.3s ease;
    }
  
    /* Highlight effect on focus */
    #insuranceManualInputs:focus-within {
      border-color: #ff6b08; /* Highlight border when interacting */
      box-shadow: 0 4px 12px rgba(255, 107, 8, 0.2); /* Glow effect */
    }
  
    /* Input Field Styling */
    #insuranceManualInputs input {
      width: 100%;
      padding: 15px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      box-sizing: border-box;
      transition: all 0.3s ease;
    }
  
    /* Highlight input fields on focus */
    #insuranceManualInputs input:focus {
      border-color: #ff6b08;
      outline: none;
      box-shadow: 0 0 8px rgba(255, 107, 8, 0.2);
    }
  
    /* Manual Error Message */
    #manualInsuranceError {
      color: #b22222; /* Error red */
      font-size: 14px;
      display: none;
      margin-top: 5px;
    }
  
    /* Section Header for Manual Entry */
    #insuranceManualInputs h5 {
      margin-bottom: 15px;
      color: #611011; /* Distinct color for header */
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style>
  <style>
    /* Insurance Option Styling */
    #insuranceStep label {
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 500; /* Slightly bolder text for readability */
      color: #333; /* Darkened text color */
      cursor: pointer; /* Indicate clickability */
      transition: color 0.3s ease;
    }
  
    /* Hover effect for insurance options */
    #insuranceStep label:hover {
      color: #000; /* Darker color on hover */
    }
  
    /* Radio Button Styling */
    #insuranceStep input[type="radio"] {
      margin-right: 12px; /* Space between radio button and label text */
      accent-color: #ff6b08; /* Style the radio button (modern browsers) */
    }
  
    /* Error Message Styling */
    #insuranceError {
      color: #b22222; /* Red for error messages */
      font-size: 14px;
      display: none;
      margin-top: 10px;
    }
  </style>
