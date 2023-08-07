'use client'
import Lottie from "lottie-react";
import animation from "public/coding-animation.json"

const Animation = () => {
    
    return (
        <div>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default Animation;