import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import type { FC } from "react";

interface MenuCardProps {
    icon: FC<{ className?: string }>;
    title: string;
    description: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function MenuCard({ icon, title, description, disabled = false, onClick }: MenuCardProps) {
    return (
        <div
            className={`flex flex-col items-center gap-6 rounded-2xl border border-secondary bg-primary p-6 text-center transition-all ${
                disabled ? "opacity-50" : "hover:border-primary hover:shadow-md"
            }`}
        >
            <FeaturedIcon color="gray" theme="modern" size="xl" icon={icon} />

            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="text-sm text-tertiary">{description}</p>
            </div>

            <Button
                size="lg"
                className="w-full"
                isDisabled={disabled}
                onClick={onClick}
            >
                Continue
            </Button>
        </div>
    );
}
