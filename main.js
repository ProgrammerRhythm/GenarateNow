function generateCertificate() {
    var userName = document.getElementById('userNameInput').value;
    document.getElementById('userName').innerText = userName;
}

function downloadCertificate() {
    var certificateContainer = document.querySelector('.certificate-container');
    domtoimage.toBlob(certificateContainer)
        .then(function (blob) {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'certificate.png';
            link.click();
        });
}
function generateCertificate() {
    var userName = document.getElementById('userNameInput').value;
    var userImageInput = document.getElementById('userImageInput');
    var userImage = document.getElementById('userImage');

    document.getElementById('userName').innerText = userName;
    document.getElementById('Downlaod').style.display = 'block';
    // Check if a picture is selected
    if (userImageInput.files.length > 0) {
        var userImageUrl = URL.createObjectURL(userImageInput.files[0]);
        userImage.src = userImageUrl;
    } else {
        // If no picture is selected, remove the existing image
        userImage.src = '';
    }
}

function downloadCertificate() {
    var certificateContainer = document.querySelector('.certificate-container');
    domtoimage.toBlob(certificateContainer)
        .then(function (blob) {
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'certificate.png';
            link.click();
        });
}