// script.js

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('depression-slider');
    const form = document.getElementById('response-form');
    const sliderValueInput = document.getElementById('slider-value');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        sliderValueInput.value = slider.value;

        // Lock the slider after submission
        slider.disabled = true;

        // Show a popup with the submitted value
        popupText.textContent = `Submitted value: ${slider.value}`;
        popup.style.display = 'block';
    });
});
