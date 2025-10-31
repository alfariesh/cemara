"use client";

import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { UntitledLogoMinimal } from "@/components/foundations/logo/untitledui-logo-minimal";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export default function LoginPage() {
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
                                <UntitledLogoMinimal className="relative z-10 size-12 max-md:hidden" />
                                <UntitledLogoMinimal className="relative z-10 size-10 md:hidden" />
                            </div>
                            <div className="z-10 flex flex-col gap-2 md:gap-3">
                                <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Welcome back</h1>
                                <p className="text-md text-tertiary">Welcome back! Please enter your details.</p>
                            </div>
                        </div>

                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="relative z-10 flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-5">
                                <Input isRequired hideRequiredIndicator label="Email" type="email" name="email" placeholder="Enter your email" size="md" />
                                <Input isRequired hideRequiredIndicator label="Password" type="password" name="password" size="md" placeholder="••••••••" />
                            </div>

                            <div className="flex items-center">
                                <Checkbox label="Remember for 30 days" name="remember" />

                                <Button color="link-color" size="md" href="#" className="ml-auto">
                                    Forgot password
                                </Button>
                            </div>

                            <div className="flex flex-col gap-4">
                                <Button type="submit" size="lg">
                                    Sign in
                                </Button>
                                <Button color="secondary" size="lg">
                                    Register
                                </Button>
                            </div>
                        </Form>

                        <div className="flex justify-center text-center">
                            <Button href="#" color="link-color" size="md">
                                Forgot password
                            </Button>
                        </div>
                    </div>
                </div>

                <footer className="hidden p-8 pt-11 lg:block">
                    <div className="flex items-center justify-between gap-4">
                        <p className="text-sm text-tertiary">© Cemara - PT Pupuk Indonesia</p>
                        <div className="flex items-center gap-2">
                            <Button color="tertiary" size="sm">
                                Indonesia
                            </Button>
                            <span className="text-sm text-tertiary">|</span>
                            <Button color="tertiary" size="sm">
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
