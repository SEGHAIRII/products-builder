import { ButtonHTMLAttributes, ReactNode } from "react"

export default interface Ibutton  extends ButtonHTMLAttributes<HTMLButtonElement> {
    className :string,
    children:ReactNode,
}