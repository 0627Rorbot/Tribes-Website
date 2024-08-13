import React, {ReactNode} from "react"

interface ButtonProps {
    children: ReactNode;
    href: string;
  }

const YellowBorderButton: React.FC<ButtonProps> = ({ children, href }) => {
    return (
        <a className="tf-button btn-effect m-[10px]" href={href}>
            <span className="boder-fade"></span>
            <span className="effect">
                {children}
            </span>
        </a>
    );
}

export default YellowBorderButton;