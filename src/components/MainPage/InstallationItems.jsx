import React from "react";
import {assets} from '../../assets/assets'

export const ServiceItems = [
    {
        id: 1, 
        title: "Solar Panels",
        image: assets.solar_panels,
        link: "/installations/solar-panels",
        description: [
          <>Up to <span className="font-semibold">60%</span> lower electricity bills.</>,
          <><span className="font-semibold">25+ years</span> system lifespan.</>,
          "EPC score improvement.",
          "Energy independence, built in.",
        ]

    },
    {
        id: 2, 
        title: "Heat Pumps",
        image: assets.heat_pump,
        link: "/installations/heat-pump",
        description: [
          <>Up to <span className="font-semibold">300% heating efficiency</span>.</>,
          <><span className="font-semibold">Low running costs</span>, no gas reliance.</>,
          "Quiet, stable warmth.", 
          "Designed for future UK standards",
        ]

    },
    {
        id: 3, 
        title: "Eco Windows",
        image: assets.windows_image,
        link: "/installations/eco-windows",
        description: [
          <><span className="font-semibold">A-rated thermal performance</span>.</>,
          <>Up to <span className="font-semibold">40% less heat loss</span>.</>,
          "Noticeable noise reduction",
          "Modern, premium finish",
        ]
    },
    {
        id: 4, 
        title: "Home Insulation",
        image: assets.insulation,
        link: "/installations/home-insulation",
        description: [
            <>Up to <span className="font-semibold">35% heating savings</span>.</>,
            "Tailored insulation design",
            "Draught-free comfort",
            "Supports A-rated EPC homes",

        ]
    }
]