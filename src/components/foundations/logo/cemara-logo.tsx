"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

interface CemaraLogoProps {
    className?: string;
}

export function CemaraLogo({ className }: CemaraLogoProps) {
    const { resolvedTheme } = useTheme();

    return (
        <Image
            src={resolvedTheme === "dark" ? "/cemara-dark.svg" : "/cemara-light.svg"}
            alt="Cemara - PT Pupuk Indonesia"
            width={192}
            height={58}
            className={className}
            priority
        />
    );
}
