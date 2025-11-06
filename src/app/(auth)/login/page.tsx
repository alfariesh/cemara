"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { CemaraLogo } from "@/components/foundations/logo/cemara-logo";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { IndonesiaFlag, UsaFlag } from "@/components/foundations/flag-icons";
import { IconNotification } from "@/components/application/notifications/notifications";
import { ThemeToggle } from "@/components/shared-assets/theme-toggle";
import { useAuth } from "@/lib/context/auth-context";
import { getUserByEmail, DEFAULT_PASSWORD } from "@/lib/mock-data/users";

interface FormErrors {
    email?: string;
    password?: string;
    form?: string;
}

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [errors, setErrors] = useState<FormErrors>({});

    const validateEmail = (email: string): string | undefined => {
        if (!email || email.trim() === "") {
            return "Email tidak boleh kosong. Silahkan isi email terlebih dahulu.";
        }
        if (!email.includes("@")) {
            return "Format email tidak sesuai. Periksa kembali format email yang diinputkan.";
        }
        return undefined;
    };

    const validatePassword = (password: string): string | undefined => {
        if (!password || password.trim() === "") {
            return "Password tidak boleh kosong. Silahkan isi password terlebih dahulu.";
        }
        return undefined;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const email = data.email as string;
        const password = data.password as string;

        // Clear previous errors
        setErrors({});

        // Validate email field
        const emailError = validateEmail(email);
        if (emailError) {
            setErrors((prev) => ({ ...prev, email: emailError }));
            return;
        }

        // Validate password field
        const passwordError = validatePassword(password);
        if (passwordError) {
            setErrors((prev) => ({ ...prev, password: passwordError }));
            return;
        }

        // Check if email exists
        const user = getUserByEmail(email);
        if (!user) {
            setErrors({
                email: "Email tidak terdaftar. Pastikan menggunakan email yang telah terdaftar.",
            });
            return;
        }

        // Validate password
        if (password !== DEFAULT_PASSWORD) {
            setErrors({
                form: "Email atau password tidak sesuai. Periksa kembali atau gunakan fitur Lupa Password jika diperlukan.",
            });
            return;
        }

        // Login successful
        login(user);
        setErrors({});
        toast.custom((t) => (
            <IconNotification
                title="Login Berhasil"
                description="Selamat datang! Anda akan dialihkan ke halaman utama."
                color="success"
                hideDismissLabel={true}
                onClose={() => {
                    toast.dismiss(t);
                }}
                onConfirm={() => {
                    toast.dismiss(t);
                }}
            />
        ));

        // Redirect after 2 seconds
        setTimeout(() => {
            router.push("/onboarding");
        }, 2000);
    };

    return (
        <section className="grid min-h-screen grid-cols-1 overflow-hidden bg-primary lg:grid-cols-2">
            {/* Left side - Login Form */}
            <div className="flex flex-col bg-primary">
                <div className="flex flex-1 justify-center px-4 py-12 md:items-center md:px-8">
                    <div className="flex w-full flex-col gap-8 sm:max-w-90">
                        <div className="flex flex-col items-center gap-6 text-center">
                            <div className="relative">
                                <BackgroundPattern pattern="grid" className="absolute top-1/2 left-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                                <BackgroundPattern
                                    pattern="grid"
                                    size="md"
                                    className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 md:hidden"
                                />
                                <CemaraLogo className="relative z-10 h-auto w-48 max-md:w-40" />
                            </div>
                            <div className="z-10 flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Selamat datang kembali</h1>
                                <p className="text-md text-tertiary">Selamat datang kembali! Silakan masukkan detail Anda.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={handleSubmit}
                            className="relative z-10 flex flex-col gap-6"
                        >
                            {/* Form-level error message */}
                            {errors.form && (
                                <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-300">
                                    {errors.form}
                                </div>
                            )}

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <Input
                                        isRequired
                                        hideRequiredIndicator
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Masukkan email Anda"
                                        size="md"
                                        className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1">
                                    <Input
                                        isRequired
                                        hideRequiredIndicator
                                        label="Password"
                                        type="password"
                                        name="password"
                                        size="md"
                                        placeholder="••••••••"
                                        className={errors.password ? "border-red-500 focus:border-red-500" : ""}
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Checkbox label="Ingat saya selama 30 hari" name="remember" />

                                <Button color="link-color" size="md" href="/enter-email" className="ml-auto">
                                    Lupa password?
                                </Button>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Masuk
                                </Button>
                                <Button color="secondary" size="lg" href="/register">
                                    Daftar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

                <footer className="p-4 pt-8 lg:p-8 lg:pt-11">
                    <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <p className="text-sm text-tertiary">© Cemara - PIHC</p>
                        <ThemeToggle />
                    </div>
                </footer>
            </div>

            {/* Right side - Image Background (Desktop only) */}
            <div className="relative z-10 hidden overflow-hidden lg:block">
                <img
                    src="/landing-page.png"
                    className="absolute inset-0 size-full object-cover"
                    alt="Markisa - Supply Chain Management Illustration"
                />
            </div>
        </section>
    );
}
