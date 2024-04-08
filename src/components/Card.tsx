import type { FC } from "react"

import type { Coffees } from "@/env"

import { Star } from "@/icons/Star"
import { StarFill } from "@/icons/StarFill"

interface CardProps {
    coffee: Coffees
}

export const Card: FC<CardProps> = ({ coffee }) => {
    const { name, image, price, rating, votes, available, popular} = coffee
    return (
        <article className="flex flex-col relative gap-3 min-w-6">
            <img src={image} alt={name} className="rounded-xl" />
            {popular && (<span className="absolute top-2 left-2 bg-saffron px-2 py-1 text-[10px] rounded-xl font-medium text-[#2e2623]">Popular</span>)}
            <div className="w-full flex justify-between items-center">
                <div className="font-semibold text-floral-white">{name}</div>
                <div className="bg-tea-green text-gray-dark text-xs font-semibold px-2 py-1 rounded-md">{price}</div>
            </div>
            {
                rating ?
                    (<div className="flex justify-between">
                        <div className="flex gap-x-2 items-center">
                        <StarFill />
                        <span>{rating} <span className="text-slate-gray text-sm">({votes} votes)</span></span>
                        </div>
                       {
                        !available && (<span className="text-bitterswett text-sm">Sold out</span>)
                       }
                    </div>)
                    : (<div className="flex gap-x-2 text-slate-gray">
                        <Star />
                        <span className="font-medium">No ratings</span>
                    </div>)
            }
        </article>
    )
}