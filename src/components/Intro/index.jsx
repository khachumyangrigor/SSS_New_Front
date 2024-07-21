import React from "react";
import GenericButton from "../../ui/buttons/generic-button/GenericButton";
import ContainerWithHeader from "../../ui/containers/ContainerWithHeader";

//!TODO create dedicated css file & remove data outside the component to reuse in the other pages.
import './styles.css'

const Intro = ({data}) => {
    if (!data) return null

    const {
        title,
        description,
        iframeUrl,
        iframeTitle,
        buttonTitle,
        buttonUrl
    } = data.find(item => item.component === 'intro');

    return (
        <ContainerWithHeader>
            <div className="intro">
                <div className="intro-left">
                    <div>
                        <h2>{title}</h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <GenericButton title={buttonTitle} url={buttonUrl}/>
                </div>
                <div className="intro-right">
                    <iframe
                        src={iframeUrl}
                        title={iframeTitle}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>

                    </iframe>
                </div>
            </div>
        </ContainerWithHeader>
    )
}

export default Intro