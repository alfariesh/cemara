"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { PinInput } from "@/components/base/pin-input/pin-input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { BackgroundPattern } from "@/components/shared-assets/background-patterns";

export default function InputPinPage() {
    const router = useRouter();

    const handleVerify = () => {
        console.log("PIN verified");
        // Redirect to set password page
        router.push("/set-password");
    };

    return (
        <section className="min-h-screen overflow-hidden bg-primary px-4 py-12 md:px-8 md:pt-24">
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
                        <h1 className="text-display-xs font-semibold text-primary md:text-display-sm">Masukkan kode verifikasi</h1>
                        <p className="text-md text-tertiary">
                            Kami telah mengirimkan kode verifikasi ke email Anda. Masukkan kode 6 digit di bawah.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <div className="md:hidden">
                        <PinInput size="sm">
                            <PinInput.Group maxLength={6}>
                                <PinInput.Slot index={0} />
                                <PinInput.Slot index={1} />
                                <PinInput.Slot index={2} />
                                <PinInput.Separator />
                                <PinInput.Slot index={3} />
                                <PinInput.Slot index={4} />
                                <PinInput.Slot index={5} />
                            </PinInput.Group>
                        </PinInput>
                    </div>
                    <div className="max-md:hidden">
                        <PinInput size="md">
                            <PinInput.Group maxLength={6}>
                                <PinInput.Slot index={0} />
                                <PinInput.Slot index={1} />
                                <PinInput.Slot index={2} />
                                <PinInput.Separator />
                                <PinInput.Slot index={3} />
                                <PinInput.Slot index={4} />
                                <PinInput.Slot index={5} />
                            </PinInput.Group>
                        </PinInput>
                    </div>

                    <div className="w-full">
                        <Button size="lg" className="w-full" onClick={handleVerify}>
                            Verifikasi email
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 text-center">
                    <p className="flex gap-1">
                        <span className="text-sm text-tertiary">Belum menerima kode?</span>
                        <Button color="link-color" size="md" href="#">
                            Kirim ulang
                        </Button>
                    </p>
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
