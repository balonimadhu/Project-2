function render() {
    const savedUserDetails = JSON.parse(
      localStorage.getItem("userDetails")
    );
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    console.log(password);
    console.log({ email: savedUserDetails.email }, { password });
    if (
      savedUserDetails &&
      email === savedUserDetails.email &&
      password === savedUserDetails.password
    ) {
      alert("credential matched");
      window.location.href = "homepage.html"; //for rendering
    } else {
      alert("credential not matched");
    }
    return false;
  }