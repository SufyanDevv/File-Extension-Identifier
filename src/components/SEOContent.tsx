import { useEffect } from 'react';
import { HelpCircle, BookOpen, ShieldCheck, ChevronRight } from 'lucide-react';

export default function SEOContent() {
    useEffect(() => {
        const schemaData = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "SoftwareApplication",
                    "name": "File Extension Identifier",
                    "applicationCategory": "UtilitiesApplication",
                    "operatingSystem": "Any",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Free online tool to detect true file types using magic bytes/file signatures. Identify fake extensions and prevent malware execution.",
                    "featureList": "Magic byte detection, Client-side privacy, Malware identification, File signature analysis"
                },
                {
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is this file checker safe to use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, absolutely. File Extension Identifier runs entirely in your web browser. Your files are never uploaded to any server. We use the HTML5 FileReader API to read the binary signature (magic bytes) locally on your device."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What are \"Magic Bytes\"?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Magic bytes (or file signatures) are a sequence of bytes at the beginning of a file that uniquely identify its format. Unlike file extensions (like .jpg or .pdf), which can be easily changed, magic bytes are difficult to fake without corrupting the file."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Why does my file extension not match the detected type?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "This usually happens if a file was renamed incorrectly (e.g., a .png renamed to .jpg) or if it's malware trying to disguise itself (e.g., a .exe renamed to .pdf). Our tool reveals the true nature of the file."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What file formats do you support?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We currently detect over 16 common formats including JPEG, PNG, GIF, PDF, ZIP, RAR, MP3, MP4, EXE, and more. We are constantly adding new signatures to our database."
                            }
                        }
                    ]
                }
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schemaData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="space-y-16 mt-20">
            {/* Blog Snippet Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        The Ultimate Guide to File Extension Verification
                    </h2>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-slate-300">
                    <p className="leading-relaxed mb-6">
                        In the digital age, file extensions are not always what they seem. A common security tactic used by cybercriminals is
                        <strong> "extension spoofing"</strong>—renaming a malicious executable (like a virus) from <code className="text-sm bg-gray-100 dark:bg-slate-700 px-1 py-0.5 rounded">document.exe</code> to
                        <code className="text-sm bg-gray-100 dark:bg-slate-700 px-1 py-0.5 rounded">document.pdf</code> to trick users into clicking it.
                    </p>
                    <p className="leading-relaxed mb-6">
                        Windows and macOS often hide file extensions by default, making this attack even more effective. This
                        <strong> File Extension Identifier</strong> tool cuts through the deception by reading the raw binary signature of any file.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Why Magic Bytes Don't Lie</h3>
                        <p>
                            Unlike filenames, which can be changed by anyone, the file signature is part of the file's DNA.
                            Whether you are a developer debugging a corrupt download, a security researcher analyzing suspicious attachments,
                            or just a user trying to open a mystery file, our free online tool provides instant, privacy-focused verification.
                        </p>
                    </div>
                    <p className="leading-relaxed">
                        By analyzing the first few bytes of data (the hexadecimal signature), we can determine if a file is truly an image, video,
                        archive, or potentially dangerous program, regardless of what the filename says.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section>
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                            Is this file checker safe to use?
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            Yes, absolutely. File Extension Identifier runs entirely in your web browser. Your files are <strong>never</strong> uploaded to any server.
                            We use the HTML5 FileReader API to read the binary signature locally on your device.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            What are "Magic Bytes"?
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            Magic bytes (or file signatures) are a sequence of bytes at the beginning of a file that uniquely identify its format.
                            Unlike file extensions, which can be easily changed, magic bytes are difficult to fake without corrupting the file.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            Why mismatching extensions?
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            This usually happens if a file was renamed incorrectly (e.g., a .png to .jpg) or if it's malware trying to disguise itself
                            (e.g., a .exe to .pdf). Our tool reveals the true nature of the file instantly.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-2">
                            <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                            What formats are supported?
                        </h3>
                        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                            We currently detect over 16 common formats including JPEG, PNG, GIF, PDF, ZIP, RAR, MP3, MP4, EXE, and more.
                            We are constantly adding new signatures to our database covers most daily needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
