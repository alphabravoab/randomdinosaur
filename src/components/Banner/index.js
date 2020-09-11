import React from 'react'
import './banner.css'

const Banner = () => {
    const addBanner = () => {
        try {
            window._mNHandle.queue.push(function (){
                window._mNDetails.loadTag("844619673", "160x600", "844619673");
            });
        }
        catch (error) {}
    }
    addBanner()
    return <div className="banner"> <div id="844619673">
</div></div>
}

export default Banner
