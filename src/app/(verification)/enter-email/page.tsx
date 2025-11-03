"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export default function EnterEmailPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        console.log("Verification email:", data);
        // Redirect to input PIN page
        router.push("/input-pin");
    };

    return (
        <section className="flex min-h-screen flex-1 overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
            <div className="mx-auto flex w-full max-w-90 flex-col gap-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <FeaturedIcon color="gray" theme="modern" size="xl" className="relative z-10">
                            <Mail01 className="size-7" />
                        </FeaturedIcon>
                        <BackgroundPattern pattern="grid" size="lg" className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block" />
                        <BackgroundPattern pattern="grid" size="md" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden" />
                    </div>

                    <div className="z-10 flex flex-col gap-2 md:gap-3">
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Masukkan email Anda</h1>
                        <p className="text-md text-tertiary">
                            Kami akan mengirimkan kode verifikasi ke email Anda untuk memverifikasi akun.
                        </p>
                    </div>
                </div>

                <Form onSubmit={handleSubmit} className="z-10 flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                        <Input
                            isRequired
                            hideRequiredIndicator
                            type="email"
                            name="email"
                            placeholder="Masukkan email Anda"
                            size="md"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button type="submit" size="lg">
                            Kirim kode verifikasi
                        </Button>
                    </div>
                </Form>

                <div className="flex justify-center gap-1 text-center">
                    <Button
                        color="link-gray"
                        size="md"
                        href="/login"
                        className="mx-auto"
                        iconLeading={ArrowLeft}
                    >
                        Kembali ke login
                    </Button>
                </div>
            </div>
        </section>
    );
}
