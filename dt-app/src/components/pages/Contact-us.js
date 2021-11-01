import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
// import showForm from '../../utils/index.js';

const paddingTop = {
    paddingTop: 100
}

const Contact = () => {

    const form = `<div style='display:none;' id="contact-form">
      <a name="form848109695" id="formAnchor848109695"></a>
      <script src="https://fs23.formsite.com/include/form/embedManager.js?848109695"></script>
      <script>
        EmbedManager.embed({
	      key: "https://fs23.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTACymL1UaDf4d-QzMm5HwRu&848109695",
	      width: "100%"
      });
      </script>
    </div>`
    
    const [ displayForm, setDisplayForm ] = useState(false);

    useEffect(()=>{
        let form = document.querySelector("#contact-form");
        if(displayForm === false){
            form.style.display = 'none';
        } else {
            form.style.display = 'block';
        }
    },[displayForm]); 


    return (
        <Container style={paddingTop}>

            <Container>
                <Button onClick={()=>{
                    if(displayForm===false){
                        setDisplayForm(true)
                    } else {
                        setDisplayForm(false)
                    }
                }}>
                Click here</Button>
                <div id='contact-form'>
                {form.trim()}
                </div>
            </Container>
        </Container>
    )
}

export default Contact;