document.getElementById("runButton").addEventListener("click", function () {

  const bish = parseInt(document.getElementById("bishValue").value);
  const bosh = parseInt(document.getElementById("boshValue").value);
  const loopEnd = parseInt(document.getElementById("loopEnd").value);
  const resultDiv = document.getElementById("result");

  // Clear previous results
  resultDiv.innerHTML = "";

  // Input validation
  if (isNaN(bish) || isNaN(bosh) || isNaN(loopEnd) ||
      bish < 1 || bosh < 1 || loopEnd < 1) {
    resultDiv.innerHTML = "<p class='error'>Please enter only positive numbers greater than zero.</p>";
    return;
  }

  // Loop and generate output
  for (let i = 1; i <= loopEnd; i++) {
    let output = "";
    let cssClass = "";


    if (i % bish === 0 && i % bosh === 0) {
      output = " ✨ Bish-Bosh ✨";
      cssClass = "bishbosh";
    } else if (i % bish === 0) {
      output = "Bish";
      cssClass = "bish";
    } else if (i % bosh === 0) {
      output = "Bosh";
      cssClass = "bosh";
    } else {
      output = i;
    }

    // Display result
    const p = document.createElement("p");
    p.textContent = output;
    p.className = cssClass;

    resultDiv.appendChild(p);
  }
});
