import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Instagram = () => {
    return(
        <div>
            <InstagramEmbed
            url='https://www.instagram.com/p/CWYhvlZLNL_/'
            clientAccessToken='416926586587247|e84510f6029802084a4d5885ba92f0d5'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            />
            {/* <h1>IG Feed here</h1> */}
        </div>
    )
}

export default Instagram;