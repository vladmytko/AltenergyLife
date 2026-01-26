import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons'

export const HomeInsulationItems = [
    {
        id: 1, 
        icon: <FontAwesomeIcon icon={fa1} />,
        text: "Lower heating bills"
    },

    {
        id: 2, 
        icon: <FontAwesomeIcon icon={fa2} />,
        text: "Fewer draughts"
    },

    {
        id: 3, 
        icon: <FontAwesomeIcon icon={fa3} />,
        text: "Improved EPC rating"
    },

    {
        id: 4, 
        icon: <FontAwesomeIcon icon={fa4} />,
        text: "Stronger foundation for solar & heat pumps"
    }
]