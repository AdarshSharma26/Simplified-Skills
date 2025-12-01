import React from "react"

const Heading = ({ text1, text2 }) => {
    return (
        <h2 className="text-3xl lg:text-5xl mb-8 lg:mb-16 font-extrabold text-gray-900">
            {text1} <span className="text-orange-500">{text2}</span>
        </h2>
    )
}

export default Heading