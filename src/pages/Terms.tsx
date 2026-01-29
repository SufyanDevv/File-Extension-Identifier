import { FileText, AlertTriangle, Scale, CheckCircle, XCircle, Info } from 'lucide-react';

export default function Terms() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 dark:border-slate-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
            <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        </div>

        <p className="text-gray-600 dark:text-slate-400 mb-8">Last updated: January 29, 2026</p>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Agreement to Terms</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                By accessing and using File Extension Identifier, you accept and agree to be bound by the terms
                and provisions of this agreement. If you do not agree to these terms, please do not use our service.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Use License</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                Permission is granted to use File Extension Identifier for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Personal and commercial file analysis</li>
                <li>Verifying file types and detecting potential security threats</li>
                <li>Educational and research purposes</li>
                <li>Integration into security workflows and file validation processes</li>
              </ul>
              <p className="mt-4">
                This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Disclaimer and Limitations</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl p-4">
                <p className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Important Notice:</p>
                <p className="text-amber-800 dark:text-amber-200/80">
                  File Extension Identifier is provided as a tool to help identify file types. While we strive
                  for accuracy, this service should not be your only line of defense against malware or security threats.
                </p>
              </div>
              <p>
                The service is provided "as is" without any warranties, expressed or implied, including but not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Accuracy or completeness of file type detection</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
              <p className="mt-4">
                We are not liable for any damages resulting from the use or inability to use this service,
                including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prohibited Uses</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                You agree not to use File Extension Identifier:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>In any way that violates applicable local, state, national, or international law</li>
                <li>To transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate our service, our employees, another user, or any other person or entity</li>
                <li>To engage in any automated use of the system, such as scraping or automated scripts, without permission</li>
                <li>To interfere with or disrupt the service or servers or networks connected to the service</li>
                <li>To attempt to gain unauthorized access to any portion of the service</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security Recommendations</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                While our tool helps identify file types:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Always use comprehensive antivirus and anti-malware software</li>
                <li>Do not open files from untrusted sources, even if the extension appears legitimate</li>
                <li>Be cautious with executable files (.exe, .dll, .bat, .cmd, .scr, etc.)</li>
                <li>Keep your operating system and software up to date</li>
                <li>Use our tool as one part of a comprehensive security strategy</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Intellectual Property</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                The service and its original content, features, and functionality are owned by File Extension Identifier
                and are protected by international copyright, trademark, patent, trade secret, and other intellectual
                property laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Service Availability</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                We reserve the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Modify or discontinue the service at any time without notice</li>
                <li>Refuse service to anyone for any reason</li>
                <li>Update or change these terms at any time</li>
              </ul>
              <p className="mt-4">
                We will not be liable if for any reason all or any part of the service is unavailable at any time
                or for any period.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Indemnification</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                You agree to defend, indemnify, and hold harmless File Extension Identifier and its affiliates
                from any claims, damages, obligations, losses, liabilities, costs, or debt arising from:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Your use of and access to the service</li>
                <li>Your violation of any term of these Terms of Service</li>
                <li>Your violation of any third-party right, including intellectual property rights</li>
                <li>Any harm caused to a third party through your use of the service</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Governing Law</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                These terms shall be governed by and construed in accordance with applicable laws, without regard
                to its conflict of law provisions. Any disputes relating to these terms will be subject to the
                exclusive jurisdiction of the appropriate courts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Changes to Terms</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to this page. Your continued use of the service after changes are posted constitutes your
                acceptance of the modified terms.
              </p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Contact Information</h2>
            <div className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed">
              <p>
                If you have any questions about these Terms of Service, please contact us.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
