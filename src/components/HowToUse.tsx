import { Upload, FileSearch, ShieldCheck } from 'lucide-react';

export default function HowToUse() {
    return (
        <div className="max-w-4xl mx-auto mb-16 px-4">
            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 dark:bg-blue-900/30 -translate-y-1/2 -z-10" />

                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-500 transition-colors z-10">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm w-full">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Upload File</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400">Drag & drop or select any file to check</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-500 transition-colors z-10">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm w-full">
                        <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <FileSearch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Auto-Scan</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400">Browser reads magic bytes instantly</p>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900 rounded-full flex items-center justify-center mb-4 group-hover:border-blue-500 transition-colors z-10">
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm w-full">
                        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Verify</h3>
                        <p className="text-sm text-gray-500 dark:text-slate-400">See true file type and potential risks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
