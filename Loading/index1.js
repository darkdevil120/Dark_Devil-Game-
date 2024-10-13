function saveProfile() {
  const name = document.getElementById('nameInput').value;
  const profilePicFile = document.getElementById('profilePicInput').files[0];

  if (name) {
    localStorage.setItem('userName', name);
  }

  if (profilePicFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem('profilePic', e.target.result);
      window.location.href = '/Loading/Hamster/index2.html';
    }
    reader.readAsDataURL(profilePicFile);
  } else {
    window.location.href = '/Loading/Hamster/index2.html';
  }
}