// bg-blue-950 border-blue-950
// bg-zinc-950 border-zinc-950
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products"


export const COLORS = [
    {
        label: "Black",
        value:'black',
        tw: 'zinc-950'
    },
     {
        label: "Blue",
        value:'blue',
        tw: 'blue-950'
    },
     {
        label: "Rose",
        value:'rose',
        tw: 'rose-950'
    },
] as const

export const MODELS = {
    name: 'models',
    options: [
        {
            label: 'iphone X',
            value: 'iphonex'
        },
        {
            label: 'iphone 11',
            value: 'iphone11'
        },
        {
            label: 'iphone 12',
            value: 'iphone12'
        },
        {
            label: 'iphone 13',
            value: 'iphone13'
        },
        {
            label: 'iphone 14',
            value: 'iphone14'
        },
        {
            label: 'iphone 15',
            value: 'iphone15'
        },
    ],
 } as const

 export const MATERIALS = {
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "Scratch-resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate,
        },
    ],
 } as const

 export const FINISHIES = {
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "oft grippy texture",
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
 } as const