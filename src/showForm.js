//Function to handle show/hide forms based on window url
const showForm = () => {
    const newPersonal = document.getElementById("new-personal");
    const returningClient = document.getElementById("returning-client");
    const newBusiness = document.getElementById("new-business");
    const extraForms = document.getElementById("extra-forms");
    const hostUrl = 'www.diversified.tax';
    // const hostUrl = 'https://diversified-tax.netlify.app';
    // const hostUrl = 'http://localhost:3000/'
    
    if( window.location.href === `${hostUrl}/new-personal-clients`) {
        if(newPersonal.style.display === 'none') {
            newPersonal.style.display = 'block';
        } else {
            newPersonal.style.display = 'none';
        }
    } else if(window.location.href === `${hostUrl}/returning-personal-clients`){
        if(returningClient.style.display === 'none') {
            returningClient.style.display = 'block';
        } else {
            returningClient.style.display = 'none';
        }
    } else if(window.location.href === `${hostUrl}/new-business-clients`) {
        if(newBusiness.style.display === 'none') {
            newBusiness.style.display = 'block';
        } else {
            newBusiness.style.display = 'none';
        }
    } else if(window.location.href === `${hostUrl}/returning-business-clients`) {
        if(returningClient.style.display === 'none') {
            returningClient.style.display = 'block';
        } else {
            returningClient.style.display = 'none';
        }
    } else if(window.location.href === `${hostUrl}/extra-forms`){
        if(extraForms.style.display === 'none') {
            extraForms.style.display = 'block';
        } else {
            extraForms.style.display = 'none';
        }
    } else {
        console.log('All forms are hidden!');
    }
 }

export default showForm;
