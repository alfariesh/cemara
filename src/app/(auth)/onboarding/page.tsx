"use client";

import { BarChart12, LogOut01, Package, Settings01, Truck01 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { CemaraLogo } from "@/components/foundations/logo/cemara-logo";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { MenuCard } from "@/components/cemara/menu-card";
import { IndonesiaFlag, UsaFlag } from "@/components/foundations/flag-icons";

export default function OnboardingPage() {
    const router = useRouter();

    const menuItems = [
        {
            icon: Package,
            title: "WCM",
            description: "Manage inventory, stock, and warehouse operations",
            disabled: false,
        },
        {
            icon: Truck01,
            title: "DIMAS",
            description: "Track and manage distribution and logistics",
            disabled: false,
        },
        {
            icon: BarChart12,
            title: "RESPONS",
            description: "View reports, insights, and data analytics",
            disabled: false,
        },
        {
            icon: Settings01,
            title: "ANDALAN",
            description: "Configure system settings and preferences",
            disabled: true,
        },
    ];

    return (
        <section className="flex min-h-screen flex-col overflow-hidden bg-primary">
            <div className="flex flex-1 flex-col px-4 py-12 md:px-8 md:py-24">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="relative">
                            <BackgroundPattern
                                pattern="grid"
                                size="lg"
                                className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block"
                            />
                            <BackgroundPattern
                                pattern="grid"
                                size="md"
                                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                            />
                            <CemaraLogo className="relative z-10 h-auto w-48 max-md:w-40" />
                        </div>

                        <div className="z-10 flex flex-col gap-2 md:gap-3">
                            <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">
                                Welcome to Cemara
                            </h1>
                            <p className="text-md text-tertiary md:text-lg">
                                Choose a module to get started with your supply chain management
                            </p>
                        </div>
                    </div>

                    {/* Menu Cards Grid */}
                    <div className="z-10 flex flex-col gap-6">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {menuItems.map((item, index) => (
                                <MenuCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    disabled={item.disabled}
                                    onClick={() => {
                                        if (!item.disabled) {
                                            router.push("/");
                                        }
                                    }}
                                />
                            ))}
                        </div>

                        {/* Logout Button */}
                        <Button
                            color="tertiary"
                            size="lg"
                            iconLeading={LogOut01}
                            onClick={() => router.push("/login")}
                            className="w-full md:w-auto md:self-center"
                        >
                            Logout
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="p-4 pt-8 lg:p-8 lg:pt-11">
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-sm text-tertiary">© Cemara - PT Pupuk Indonesia</p>
                    <div className="flex items-center gap-2">
                        <Button color="tertiary" size="sm" iconLeading={IndonesiaFlag}>
                            Indonesia
                        </Button>
                        <span className="text-sm text-tertiary">|</span>
                        <Button color="tertiary" size="sm" iconLeading={UsaFlag}>
                            English
                        </Button>
                    </div>
                </div>
            </footer>
        </section>
    );
}
