import logo from "../assets/wasteco-logo.png";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg" | "xl" | "xxxl";
}

export function Logo({
    className = "",
    size = "xxxl"
}: LogoProps) {

    const sizeClasses = {
        sm: "h-8",
        md: "h-12",
        lg: "h-16",
        xl: "h-20",
        xxxl: "h-40"
    };

    return (
        <div className={`flex items-center ${className}`}>
            <img
                src={logo}
                alt="Wasteco Logo"
                className={`${sizeClasses[size]} w-auto object-contain`}
            />
        </div>
    );
}