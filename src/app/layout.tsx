import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { AuthProvider } from "@/lib/context/auth-context";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Cemara — PIHC",
    description: "Ini project buatan digsar bos",
};

export const viewport: Viewport = {
    themeColor: "#01A1E4",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="light-mode">
            <body className={cx(inter.variable, "bg-primary antialiased")}>
                <AuthProvider>
                    <RouteProvider>
                        <Theme>{children}</Theme>
                    </RouteProvider>
                </AuthProvider>
                <Toaster />
            </body>
        </html>
    );
}
