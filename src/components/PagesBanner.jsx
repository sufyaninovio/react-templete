import React from "react";

const PageBanner = (props) => {
    // alert(props.image_logo);
    return (
        <>
            <section className="universal-banner">
                <div className="container">
                    <div className={`page-banner-start wow animate__animated animate__fadeInBottom animate__delay-2s ${props.image_logo}`}>
                        <h1 class="level-1 mb-0" >{props.dark_heading} <span class="text-primary">{props.light_heading}</span></h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PageBanner;