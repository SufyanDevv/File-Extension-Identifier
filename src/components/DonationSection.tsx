

export default function DonationSection() {
    return (
        <div className="flex flex-col items-center justify-center mb-8 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 p-6 rounded-2xl border border-blue-100 dark:border-slate-700 max-w-lg mx-auto shadow-sm">
                <p className="text-gray-700 dark:text-slate-300 font-medium mb-4 leading-relaxed">
                    This tool is free and runs without ads.
                    <br />
                    If it saved you time, consider leaving a small tip <span className="text-red-500 animate-pulse inline-block">❤️</span>
                </p>

                <a
                    href='https://ko-fi.com/U7U41T7FCR'
                    target='_blank'
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg animate-attention"
                >
                    <img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi cup" className="w-5 h-5 animate-bounce-slight" />
                    <span>Support me on Ko-fi</span>
                </a>
            </div>
        </div>
    );
}
