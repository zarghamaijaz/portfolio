"use client";
import ReactRotatingText from "react-rotating-text";

const ChangingText = ({texts}:{
    texts: string[]
}) => {

    return (
        <ReactRotatingText items={texts} />
    );
}
 
export default ChangingText;