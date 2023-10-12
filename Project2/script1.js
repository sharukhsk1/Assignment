function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const formValues = [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Date of Birth: ${dob}`,
        `Country: ${country}`,
        `Gender: ${gender.join(', ')}`,
        `Profession: ${profession}`,
        `Email: ${email}`,
        `Mobile Number: ${mobile}`
    ];

    const popup = document.getElementById('popup');
    const formValuesList = document.getElementById('formValues');
    formValuesList.innerHTML = formValues.map(value => `<li>${value}</li>`).join('');
    popup.style.display = 'block';
}

function resetForm() {
    const form = document.getElementById('surveyForm');
    form.reset();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
