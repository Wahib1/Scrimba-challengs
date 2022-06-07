const $unitInput = document.querySelectorAll(".unitInput")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const $inputVal = Number(document.getElementById("inputVal").value);
    const $meterToFeet = document.getElementById("meterToFeet");
    $meterToFeet.innerHTML = ($inputVal * 3.28084).toFixed(3)
    const $feetToMeter = document.getElementById("feetToMeter");
    $feetToMeter.innerHTML = ($inputVal * 0.3048).toFixed(3)
    const $litersToGallons = document.getElementById("litersToGallons")
    $litersToGallons.innerHTML = ($inputVal / 3.785).toFixed(3)
    const $gallonsToLiters = document.getElementById("gallonsToLiters");
    $gallonsToLiters.innerHTML = ($inputVal * 3.785).toFixed(3)
    const $kilosToPounds = document.getElementById("kilosToPounds")
    $kilosToPounds.innerHTML = ($inputVal / 0.45359237).toFixed(3)
    const $poundsToKilos = document.getElementById("poundsToKilos")
    $poundsToKilos.innerHTML = ($inputVal * 0.45359237).toFixed(3)
    $unitInput.forEach((item) => {
      item.innerHTML = $inputVal;
    });
    $unitInput.innerHTML = $inputVal;
})
