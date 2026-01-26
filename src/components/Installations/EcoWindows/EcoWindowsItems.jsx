import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons'

export const EcoWindowsItems = [
    {
        id: 1, 
        icon: <FontAwesomeIcon icon={fa1} />,
        text: "Better thermal performance"
    },

    {
        id: 2, 
        icon: <FontAwesomeIcon icon={fa2} />,
        text: "Reduced condensation"
    },

    {
        id: 3, 
        icon: <FontAwesomeIcon icon={fa3} />,
        text: "Enhanced sound insulation"
    },

    {
        id: 4, 
        icon: <FontAwesomeIcon icon={fa4} />,
        text: "Clean, contemporary aesthetics"
    }
]