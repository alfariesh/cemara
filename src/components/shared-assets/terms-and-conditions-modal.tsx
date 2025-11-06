"use client";

import { X as CloseIcon } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

interface TermsAndConditionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function TermsAndConditionsModal({
    isOpen,
    onClose,
}: TermsAndConditionsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="flex max-h-[90vh] w-full max-w-2xl flex-col rounded-lg bg-white dark:bg-gray-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 p-6 dark:border-gray-800">
                    <h2 className="text-xl font-semibold text-primary">
                        Syarat dan Ketentuan
                    </h2>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Close modal"
                    >
                        <CloseIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                1. Definisi dan Interpretasi
                            </h3>
                            <p>
                                Dalam Syarat dan Ketentuan ini, kecuali konteks
                                menunjukkan sebaliknya, istilah-istilah berikut
                                memiliki makna sebagai berikut:
                            </p>
                            <ul className="mt-2 ml-4 list-inside space-y-1">
                                <li>
                                    • <strong>Platform:</strong> Aplikasi web dan
                                    mobile Cemara
                                </li>
                                <li>
                                    • <strong>Pengguna:</strong> Individu atau entitas
                                    yang menggunakan Platform
                                </li>
                                <li>
                                    • <strong>Layanan:</strong> Semua fitur dan
                                    fungsi yang disediakan Platform
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                2. Penggunaan Platform
                            </h3>
                            <p>
                                Dengan menggunakan Platform Cemara, Anda setuju
                                untuk:
                            </p>
                            <ul className="mt-2 ml-4 list-inside space-y-1">
                                <li>
                                    • Mematuhi semua hukum dan regulasi yang berlaku
                                </li>
                                <li>
                                    • Tidak menggunakan Platform untuk keperluan
                                    ilegal
                                </li>
                                <li>
                                    • Menjaga kerahasiaan informasi akun Anda
                                </li>
                                <li>
                                    • Bertanggung jawab atas semua aktivitas yang
                                    terjadi di akun Anda
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                3. Akun Pengguna
                            </h3>
                            <p>
                                Anda bertanggung jawab untuk memastikan informasi
                                yang Anda berikan akurat dan terkini. PT Pupuk
                                Indonesia berhak menolak atau menghapus akun yang
                                tidak mematuhi ketentuan ini.
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                4. Larangan Penggunaan
                            </h3>
                            <p>
                                Anda dilarang untuk:
                            </p>
                            <ul className="mt-2 ml-4 list-inside space-y-1">
                                <li>
                                    • Menggunakan Platform untuk tujuan yang melanggar
                                    hukum
                                </li>
                                <li>
                                    • Mengganggu atau mencegah akses pengguna lain
                                </li>
                                <li>
                                    • Melakukan hack, phishing, atau serangan siber
                                    lainnya
                                </li>
                                <li>
                                    • Mengumpulkan atau mengirimkan informasi yang
                                    tidak akurat
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                5. Hak Kekayaan Intelektual
                            </h3>
                            <p>
                                Semua konten, fitur, dan fungsionalitas Platform
                                adalah milik PT Pupuk Indonesia atau pemberi lisensi
                                lainnya. Anda tidak diizinkan untuk menyalin, memodifikasi,
                                atau mendistribusikan konten tanpa izin tertulis.
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                6. Tanggung Jawab Terbatas
                            </h3>
                            <p>
                                PT Pupuk Indonesia tidak bertanggung jawab atas
                                kerugian langsung, tidak langsung, insidental,
                                khusus, atau konsekuensial yang timbul dari
                                penggunaan Platform.
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                7. Perubahan Layanan
                            </h3>
                            <p>
                                PT Pupuk Indonesia berhak mengubah, menangguhkan,
                                atau menghentikan Platform atau layanan apapun
                                kapan saja tanpa pemberitahuan sebelumnya.
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                8. Hubungan Hukum
                            </h3>
                            <p>
                                Syarat dan Ketentuan ini diatur oleh hukum Republik
                                Indonesia. Setiap sengketa akan diselesaikan melalui
                                pengadilan yang berwenang di Indonesia.
                            </p>
                        </section>

                        <section>
                            <h3 className="mb-2 font-semibold text-primary">
                                9. Kontak
                            </h3>
                            <p>
                                Untuk pertanyaan tentang Syarat dan Ketentuan ini,
                                silakan hubungi:
                            </p>
                            <p className="mt-2">
                                <strong>PT Pupuk Indonesia (Persero)</strong>
                                <br />
                                Email: support@cemara.pupuk-indonesia.com
                            </p>
                        </section>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-6 dark:border-gray-800">
                    <Button
                        onClick={onClose}
                        className="w-full"
                    >
                        Saya Mengerti
                    </Button>
                </div>
            </div>
        </div>
    );
}
