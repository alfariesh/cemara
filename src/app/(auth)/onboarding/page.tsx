"use client";

import { BarChart12, LogOut01, Package, Settings01, Truck01 } from "@untitledui/icons";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { CemaraLogo } from "@/components/foundations/logo/cemara-logo";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { MenuCard } from "@/components/cemara/menu-card";
import { ThemeToggle } from "@/components/shared-assets/theme-toggle";
import { useAuth } from "@/lib/context/auth-context";

interface MenuItem {
    id: "wcm" | "dimas" | "respons" | "andalan";
    icon: React.ComponentType;
    title: string;
    description: string;
}

export default function OnboardingPage() {
    const router = useRouter();
    const { user, logout } = useAuth();

    // All available menu items
    const allMenuItems: MenuItem[] = [
        {
            id: "wcm",
            icon: Package,
            title: "Pendaftaran Subsidi",
            description: "Kelola pendaftaran mitra untuk program subsidi",
        },
        {
            id: "dimas",
            icon: Truck01,
            title: "Pendaftaran Non Subsidi",
            description: "Kelola pendaftaran mitra untuk program non-subsidi",
        },
        {
            id: "respons",
            icon: BarChart12,
            title: "Transaksi Subsidi",
            description: "Kelola pemesanan, penjualan, dan pelaporan produk subsidi, termasuk pengelolaan dokumen kontrak penjualan dengan Pupuk Indonesia.",
        },
        {
            id: "andalan",
            icon: Settings01,
            title: "Transaksi Non Subsidi",
            description: "Kelola pemesanan, dan pelaporan produk non subsidi, termasuk pengelolaan dokumen kontrak penjualan dengan PI.",
        },
    ];

    // Filter menu items based on user permissions
    const getMenuItems = () => {
        if (!user) {
            return [];
        }

        return allMenuItems
            .map((item) => {
                const menuStatus = user.menus[item.id];
                if (menuStatus === "x") {
                    return null; // Hide menu
                }
                return {
                    ...item,
                    disabled: menuStatus === "disable",
                };
            })
            .filter((item): item is MenuItem & { disabled: boolean } => item !== null);
    };

    const menuItems = getMenuItems();

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
                                Selamat Datang di CEMARA
                            </h1>
                            {user && (
                                <div className="flex flex-col gap-3 text-center">
                                    <p className="text-sm text-gray-500">
                                        Email: {user.email}
                                        {user.idSap && ` | SAP ID: ${user.idSap}`}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {user.type && user.type.split(",").map((t, idx) => (
                                            <span
                                                key={idx}
                                                className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                            >
                                                {t.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <p className="text-md text-tertiary md:text-lg">
                                Pilih modul yang ingin Anda akses untuk melanjutkan aktivitas Anda
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
                            onClick={() => {
                                logout();
                                router.push("/login");
                            }}
                            className="w-full md:w-auto md:self-center"
                        >
                            Keluar
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="p-4 pt-8 lg:p-8 lg:pt-11">
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="text-sm text-tertiary">© Cemara - PT Pupuk Indonesia</p>
                    <ThemeToggle />
                </div>
            </footer>
        </section>
    );
}
