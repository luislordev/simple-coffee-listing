import type { FC, MouseEventHandler, ReactNode } from "react";

interface CustomButtonProps {
    active: boolean,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const CustomButton: FC<CustomButtonProps> = ({ active, children, onClick }) => {
    return (
        <button className={`p-2 ${active ? 'bg-slate-gray' : ''} text-sm text-floral-white font-semibold rounded-md inline-block`} onClick={onClick}>
            {children}
        </button>
    )
}