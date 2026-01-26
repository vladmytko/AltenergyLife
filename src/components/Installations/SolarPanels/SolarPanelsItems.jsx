import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons'

export const SolarPanelsItems = [
    {
        id: 1, 
        icon: <FontAwesomeIcon icon={fa1} />,
        text: "Long-term bill reduction"
    },

    {
        id: 2, 
        icon: <FontAwesomeIcon icon={fa2} />,
        text: "Higher property value"
    },

    {
        id: 3, 
        icon: <FontAwesomeIcon icon={fa3} />,
        text: "Improved EPC performance"
    },

    {
        id: 4, 
        icon: <FontAwesomeIcon icon={fa4} />,
        text: "Clean, modern system design"
    }
]