//Function to handle show/hide forms based on window url
const showForm = () => {
    const myForm = document.getElementById("contact-form");
    if( window.location.href === 'http://localhost:3000/contact-us') {
        if(myForm.style.display === 'none') {
            myForm.style.display = 'block';
        } else {
            myForm.style.display = 'none';
        }
    }
 }

export default showForm;