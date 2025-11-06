"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { CemaraLogo } from "@/components/foundations/logo/cemara-logo";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";
import { IndonesiaFlag, UsaFlag } from "@/components/foundations/flag-icons";
import { RadioButton, RadioGroup } from "@/components/base/radio-buttons/radio-buttons";
import { cx } from "@/utils/cx";
import { getUserByEmail } from "@/lib/mock-data/users";

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
}

export default function RegisterPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});

    const passwordRequirements = {
        minLength: password.length >= 8,
        hasLetters: /[A-Z]/.test(password) && /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const validateEmail = (email: string): string | undefined => {
        if (!email || email.trim() === "") {
            return "Email tidak boleh kosong. Silahkan isi email terlebih dahulu.";
        }
        if (!email.includes("@")) {
            return "Format email tidak sesuai. Periksa kembali format email yang diinputkan.";
        }
        return undefined;
    };

    const validateName = (name: string): string | undefined => {
        if (!name || name.trim() === "") {
            return "Nama tidak boleh kosong. Silahkan isi nama terlebih dahulu.";
        }
        return undefined;
    };

    const validatePassword = (pwd: string): string | undefined => {
        if (!pwd || pwd.trim() === "") {
            return "Password tidak boleh kosong. Silahkan isi password terlebih dahulu.";
        }
        return undefined;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const name = data.name as string;
        const email = data.email as string;
        const pwd = data.password as string;

        // Clear previous errors
        setErrors({});

        // Validate name
        const nameError = validateName(name);
        if (nameError) {
            setErrors((prev) => ({ ...prev, name: nameError }));
            return;
        }

        // Validate email
        const emailError = validateEmail(email);
        if (emailError) {
            setErrors((prev) => ({ ...prev, email: emailError }));
            return;
        }

        // Validate password
        const passwordError = validatePassword(pwd);
        if (passwordError) {
            setErrors((prev) => ({ ...prev, password: passwordError }));
            return;
        }

        // Check if email already registered
        const existingUser = getUserByEmail(email);
        if (existingUser) {
            setErrors({
                email: "Email sudah terdaftar. Gunakan email lain atau coba login.",
            });
            return;
        }

        console.log("Register data:", data);
        // Redirect to email verification page
        router.push("/input-pin");
    };

    return (
        <section className="grid min-h-screen grid-cols-1 overflow-hidden bg-primary lg:grid-cols-2">
            {/* Left side - Register Form */}
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
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Buat akun</h1>
                                <p className="text-md text-tertiary">Daftar untuk memulai dengan Cemara.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={handleSubmit}
                            className="relative z-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1">
                                    <Input
                                        isRequired
                                        hideRequiredIndicator
                                        label="Nama"
                                        type="text"
                                        name="name"
                                        placeholder="Masukkan nama Anda"
                                        size="md"
                                        className={errors.name ? "border-red-500 focus:border-red-500" : ""}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                    )}
                                </div>

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
                                        placeholder="••••••••"
                                        size="md"
                                        onChange={setPassword}
                                        minLength={8}
                                        pattern='.*[!@#$%^&*(),.?":{}|<>].*'
                                        className={errors.password ? "border-red-500 focus:border-red-500" : ""}
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                                    )}
                                </div>
                                <Input
                                    isRequired
                                    hideRequiredIndicator
                                    label="Konfirmasi password"
                                    type="password"
                                    name="password_confirm"
                                    placeholder="••••••••"
                                    size="md"
                                    validate={(value) => value === password || "Password tidak cocok"}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-semibold text-primary">Persyaratan Password</p>
                                <span className="flex gap-2">
                                    <div
                                        className={cx(
                                            "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                            passwordRequirements.minLength ? "bg-fg-success-primary" : "",
                                        )}
                                    >
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path
                                                d="M1.25 4L3.75 6.5L8.75 1.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-tertiary">Minimal 8 karakter</p>
                                </span>
                                <span className="flex gap-2">
                                    <div
                                        className={cx(
                                            "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                            passwordRequirements.hasLetters ? "bg-fg-success-primary" : "",
                                        )}
                                    >
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path
                                                d="M1.25 4L3.75 6.5L8.75 1.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-tertiary">Mengandung huruf besar dan kecil (Aa)</p>
                                </span>
                                <span className="flex gap-2">
                                    <div
                                        className={cx(
                                            "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                            passwordRequirements.hasNumber ? "bg-fg-success-primary" : "",
                                        )}
                                    >
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path
                                                d="M1.25 4L3.75 6.5L8.75 1.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-tertiary">Mengandung angka (0-9)</p>
                                </span>
                                <span className="flex gap-2">
                                    <div
                                        className={cx(
                                            "flex size-5 items-center justify-center rounded-full bg-fg-disabled_subtle text-fg-white transition duration-150 ease-in-out",
                                            passwordRequirements.hasSpecialChar ? "bg-fg-success-primary" : "",
                                        )}
                                    >
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path
                                                d="M1.25 4L3.75 6.5L8.75 1.5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-tertiary">Mengandung karakter spesial (!@#$%^&*)</p>
                                </span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium text-primary">Pilih Tipe Kemitraan</label>
                                <RadioGroup aria-label="Tipe Kemitraan" name="partnershipType" defaultValue="subsidi">
                                    <RadioButton label="Mitra Subsidi" value="subsidi" />
                                    <RadioButton label="Mitra Non Subsidi" value="non_subsidi" />
                                    <RadioButton label="Mitra Subsidi & Non Subsidi" value="subsidi_non_subsidi" />
                                </RadioGroup>
                            </div>

                            <div className="flex items-center">
                                <Checkbox label="Saya setuju dengan syarat dan ketentuan" name="terms" isRequired />
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Buat akun
                                </Button>
                            </div>
                        </Form>

                        <div className="flex items-center justify-center gap-2">
                            <p className="text-sm text-tertiary">Sudah punya akun?</p>
                            <Button href="/login" color="link-color" size="md">
                                Masuk
                            </Button>
                        </div>
                    </div>
                </div>

                <footer className="p-4 pt-8 lg:p-8 lg:pt-11">
                    <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <p className="text-sm text-tertiary">© Cemara - PIHC</p>
                        <div className="flex items-center gap-2">
                            <Button color="tertiary" size="sm" iconLeading={IndonesiaFlag}>
                                Indonesia
                            </Button>
                            <span className="text-sm text-tertiary">|</span>
                            <Button color="tertiary" size="sm" iconLeading={UsaFlag} isDisabled>
                                English
                            </Button>
                        </div>
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
