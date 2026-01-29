import { Shield, Eye, Lock, Database, Globe, Users } from 'lucide-react';

export default function Privacy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>

        <p className="text-gray-600 dark:text-slate-400 mb-8">Last updated: January 29, 2026</p>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                File Extension Identifier is designed with privacy in mind. When you use our service:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Files you upload:</strong> All file analysis happens directly in your browser using JavaScript.
                  Your files are never uploaded to our servers or transmitted over the internet.
                </li>
                <li>
                  <strong>Usage data:</strong> We may collect anonymous analytics data such as page views and feature usage
                  to improve our service. This data does not include any personal information or file content.
                </li>
                <li>
                  <strong>Technical information:</strong> Standard web server logs may collect your IP address, browser type,
                  and access times for security and performance monitoring.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Protect Your Privacy</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                Your privacy is our top priority:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Client-side processing:</strong> All file analysis is performed locally in your browser.
                  Files never leave your device.
                </li>
                <li>
                  <strong>No file storage:</strong> We do not store, save, or have access to any files you analyze.
                </li>
                <li>
                  <strong>No tracking cookies:</strong> We do not use tracking cookies or similar technologies to
                  identify individual users.
                </li>
                <li>
                  <strong>Secure connection:</strong> All connections to our website use HTTPS encryption.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Retention</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                Since all file processing happens in your browser and files are never sent to our servers:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>File data exists only temporarily in your browser's memory while analyzing</li>
                <li>All file data is automatically cleared when you close the tab or navigate away</li>
                <li>We cannot and do not retain any information about files you analyze</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Third-Party Services</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                We may use third-party services for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Analytics:</strong> Anonymous usage statistics to understand how visitors use our service
                </li>
                <li>
                  <strong>Hosting:</strong> Website hosting and content delivery services
                </li>
              </ul>
              <p>
                These services have their own privacy policies and do not have access to your files.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Use our service without creating an account or providing personal information</li>
                <li>Request information about what data we collect</li>
                <li>Opt out of analytics by using browser privacy features or ad blockers</li>
                <li>Contact us with questions about our privacy practices</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Children's Privacy</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                Our service is available to users of all ages. Since we do not collect personal information
                or require account registration, and all processing happens client-side, there are no special
                privacy concerns for children using our service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                We may update this privacy policy from time to time. Changes will be posted on this page
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contact Us</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                If you have questions about this privacy policy or our privacy practices, please contact us.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
