import { useEffect, useRef } from 'react';

const FullscreenImageCarousel = ({ isOpen, images, selectedIndex, closeCarousel }) => {
    const selectedImgRef = useRef(null);

    useEffect(() => {
        if (isOpen && selectedImgRef.current) {
            selectedImgRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }, [isOpen, selectedIndex]);

    if (!isOpen || !images.length) {
        return null;
    }

    return (
        <div className="pdp-fullscreen-carousel" onClick={closeCarousel}>
            <span className="pdp-minimize-btn" onClick={closeCarousel}>×</span>
            {images.map((url, index) => (
                <img key={index} src={url} alt={`Fullscreen Image ${index}`}
                     ref={index === selectedIndex ? selectedImgRef : null}
                />
            ))}
        </div>
    );
};

export default FullscreenImageCarousel;