import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LottieViewer = ({lottieName, className, loop = true}) => {
    const animContainer = useRef(null);

    useEffect(() => {
        loadLottie();
    }, []);

    const loadLottie = () => {
        if (!animContainer.current.innerHTML) {
            lottie.loadAnimation({
                container: animContainer.current,
                renderer: 'svg',
                loop: loop,
                autoplay: true,
                animationData: require(`../assets/lotties/${lottieName}.json`)
            });
        }
    }

    return (
        <div className={className} style={{overflow: 'hidden'}}>
            <div ref={animContainer} style={{height: 'calc(100vh - 100px)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}></div>
        </div>
    )
}

export default LottieViewer;
