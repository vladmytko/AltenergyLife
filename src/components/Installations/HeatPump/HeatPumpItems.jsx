import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons'

export const HeatPumpItems = [
    {
        id: 1, 
        icon: <FontAwesomeIcon icon={fa1} />,
        text: "Lower lifetime heating costs"
    },

    {
        id: 2, 
        icon: <FontAwesomeIcon icon={fa2} />,
        text: "Quiet, even heat distribution"
    },

    {
        id: 3, 
        icon: <FontAwesomeIcon icon={fa3} />,
        text: "Compliance with future UK regulations"
    },

    {
        id: 4, 
        icon: <FontAwesomeIcon icon={fa4} />,
        text: "CA clear path away from gas"
    }
]