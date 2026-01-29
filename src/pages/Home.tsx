import { useState } from 'react';
import { Upload, FileText, Info, X, Search, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import SEOContent from '../components/SEOContent';
import HowToUse from '../components/HowToUse';
import DonationSection from '../components/DonationSection';

interface FileSignature {
  name: string;
  extensions: string[];
  signatures: Uint8Array[];
}

interface FileInfo {
  name: string;
  extension: string;
  size: string;
  type: string;
  detectedType: string;
  likelyType: string;
  isExtensionMatching: boolean;
  isSignatureDetected: boolean;
  magicBytes: string;
  commonPrograms: string[];
}

export default function Home() {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const programMap: Record<string, string[]> = {
    'JPEG': ['Chrome', 'Safari', 'Photoshop', 'GIMP', 'Preview'],
    'PNG': ['Chrome', 'Safari', 'Photoshop', 'GIMP', 'Preview'],
    'GIF': ['Chrome', 'Safari', 'Adobe Animate', 'Preview'],
    'PDF': ['Adobe Reader', 'Chrome', 'Safari', 'Preview', 'Foxit'],
    'ZIP': ['WinRAR', '7-Zip', 'Archive Utility', 'The Unarchiver'],
    'RAR': ['WinRAR', '7-Zip', 'The Unarchiver'],
    'GZIP': ['7-Zip', 'WinRAR', 'Terminal/Command Line'],
    'MP3': ['Windows Media Player', 'iTunes', 'VLC', 'Spotify'],
    'MP4': ['VLC', 'Windows Media Player', 'QuickTime', 'Premiere Pro'],
    'WAV': ['Windows Media Player', 'iTunes', 'Audacity', 'VLC'],
    'DOCX': ['Microsoft Word', 'Google Docs', 'LibreOffice', 'Apple Pages'],
    'XLSX': ['Microsoft Excel', 'Google Sheets', 'LibreOffice Calc'],
    'EXE': ['Windows', 'Wine (on Mac/Linux)'],
    'BMP': ['Paint', 'Chrome', 'Photoshop', 'GIMP', 'Preview'],
    'TIFF': ['Photoshop', 'Preview', 'GIMP', 'Safari'],
    'ZIP-based': ['WinRAR', '7-Zip', 'Archive Utility'],
  };

  const fileSignatures: FileSignature[] = [
    { name: 'JPEG', extensions: ['jpg', 'jpeg'], signatures: [new Uint8Array([0xFF, 0xD8, 0xFF])] },
    { name: 'PNG', extensions: ['png'], signatures: [new Uint8Array([0x89, 0x50, 0x4E, 0x47])] },
    { name: 'GIF', extensions: ['gif'], signatures: [new Uint8Array([0x47, 0x49, 0x46, 0x38])] },
    { name: 'PDF', extensions: ['pdf'], signatures: [new Uint8Array([0x25, 0x50, 0x44, 0x46])] },
    { name: 'ZIP-based', extensions: ['zip', 'docx', 'xlsx', 'pptx', 'apk'], signatures: [new Uint8Array([0x50, 0x4B, 0x03, 0x04])] },
    { name: 'RAR', extensions: ['rar'], signatures: [new Uint8Array([0x52, 0x61, 0x72, 0x21])] },
    { name: 'GZIP', extensions: ['gz'], signatures: [new Uint8Array([0x1F, 0x8B])] },
    { name: 'MP3', extensions: ['mp3'], signatures: [new Uint8Array([0xFF, 0xFB]), new Uint8Array([0xFF, 0xFA]), new Uint8Array([0x49, 0x44, 0x33])] },
    { name: 'WAV', extensions: ['wav'], signatures: [new Uint8Array([0x52, 0x49, 0x46, 0x46])] },
    { name: 'EXE', extensions: ['exe'], signatures: [new Uint8Array([0x4D, 0x5A])] },
    { name: 'BMP', extensions: ['bmp'], signatures: [new Uint8Array([0x42, 0x4D])] },
    { name: 'TIFF', extensions: ['tiff', 'tif'], signatures: [new Uint8Array([0x49, 0x49, 0x2A, 0x00]), new Uint8Array([0x4D, 0x4D, 0x00, 0x2A])] },
  ];

  const scanForMp4 = (bytes: Uint8Array): boolean => {
    if (bytes.length < 4) return false;
    for (let i = 0; i < Math.min(bytes.length - 3, 32); i++) {
      if (bytes[i] === 0x66 && bytes[i + 1] === 0x74 && bytes[i + 2] === 0x79 && bytes[i + 3] === 0x70) {
        return true;
      }
    }
    return false;
  };

  const getFileExtension = (filename: string): string => {
    const lastDot = filename.lastIndexOf('.');
    if (lastDot === -1) return 'No extension';
    return filename.substring(lastDot + 1).toLowerCase();
  };

  const bytesToHex = (bytes: Uint8Array): string => {
    return Array.from(bytes.slice(0, 8))
      .map(b => b.toString(16).padStart(2, '0').toUpperCase())
      .join(' ');
  };

  const detectFileType = (bytes: Uint8Array, extension: string): {
    type: string;
    likelyType: string;
    isExtensionMatching: boolean;
    isSignatureDetected: boolean;
  } => {
    if (scanForMp4(bytes)) {
      return {
        type: 'MP4',
        likelyType: 'MP4',
        isExtensionMatching: extension === 'mp4',
        isSignatureDetected: true,
      };
    }

    for (const sig of fileSignatures) {
      for (const signature of sig.signatures) {
        if (bytes.length >= signature.length) {
          const match = Array.from(signature).every((byte, index) => bytes[index] === byte);
          if (match) {
            const extensionMatches = sig.extensions.includes(extension);
            let likelyType = sig.name;

            if (sig.name === 'ZIP-based') {
              const extUpper = extension.toUpperCase();
              likelyType = ['DOCX', 'XLSX', 'PPTX', 'APK'].includes(extUpper)
                ? extUpper
                : 'ZIP';
            }

            return {
              type: sig.name,
              likelyType: likelyType,
              isExtensionMatching: extensionMatches,
              isSignatureDetected: true,
            };
          }
        }
      }
    }

    return {
      type: 'Unknown',
      likelyType: 'Unknown',
      isExtensionMatching: false,
      isSignatureDetected: false,
    };
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFile = (file: File) => {
    const extension = getFileExtension(file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      const bytes = new Uint8Array(e.target?.result as ArrayBuffer);
      const detection = detectFileType(bytes, extension);
      const magicBytes = bytesToHex(bytes);

      const programs = programMap[detection.likelyType] || programMap['ZIP-based'] || [];

      setFileInfo({
        name: file.name,
        extension: extension,
        size: formatFileSize(file.size),
        type: file.type || 'Unknown',
        detectedType: detection.type,
        likelyType: detection.likelyType,
        isExtensionMatching: detection.isExtensionMatching,
        isSignatureDetected: detection.isSignatureDetected,
        magicBytes: magicBytes,
        commonPrograms: programs,
      });
    };

    reader.readAsArrayBuffer(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setFileInfo(null);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          File Extension Identifier – Detect Real File Type Online
        </h2>
        <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
          Upload a file to detect its true format using magic bytes (file signature). Verify files aren't disguised or corrupted.
        </p>
      </div>




      {!fileInfo && (
        <div className="max-w-2xl mx-auto mb-16">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-12 transition-all ${isDragging
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
              : 'border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-500'
              }`}
          >
            <input
              type="file"
              onChange={handleFileInput}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Upload a file
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-center">
                Drag and drop your file here or click to browse
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-500 mt-2">
                Supports any file type
              </p>
            </label>
          </div>
        </div>
      )}

      {
        fileInfo && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">File Details</h3>
                <button
                  onClick={clearFile}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-slate-400" />
                </button>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-slate-300">File Name</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">
                      {fileInfo.name}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-slate-300 mb-1">Extension</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                      .{fileInfo.extension}
                    </p>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl">
                    <p className="text-sm text-gray-600 dark:text-slate-300 mb-1">File Size</p>
                    <p className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                      {fileInfo.size}
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border-2 ${fileInfo.isExtensionMatching
                  ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                  : 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800'
                  }`}>
                  <div className="flex items-start gap-3">
                    <div className="pt-1">
                      {fileInfo.isExtensionMatching ? (
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-2">Actual File Type (Detected from File Signature)</p>
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {fileInfo.likelyType}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-slate-400 mt-1">
                            {fileInfo.isExtensionMatching
                              ? 'Extension matches file signature'
                              : fileInfo.isSignatureDetected
                                ? 'Extension may not match actual file type'
                                : 'File signature not recognized'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-600 dark:text-slate-400 mb-1">Magic Bytes:</p>
                          <p className="font-mono text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded border border-gray-200 dark:border-slate-700 dark:text-slate-300">
                            {fileInfo.magicBytes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {fileInfo.commonPrograms.length > 0 && (
                  <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
                    <p className="text-sm font-semibold text-gray-700 dark:text-slate-200 mb-3">Common Programs to Open</p>
                    <div className="flex flex-wrap gap-2">
                      {fileInfo.commonPrograms.map((program, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm text-gray-700 dark:text-slate-200"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/30 rounded-xl">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-red-900 dark:text-red-300 mb-1">Security Warning</p>
                      <p className="text-sm text-red-800 dark:text-red-300/80">
                        Mismatched file extensions are a common malware technique. Executable files (.exe, .dll) disguised as images or PDFs are particularly dangerous. Always verify the detected type matches what you expect before opening.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-slate-300 mb-1">MIME Type</p>
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 break-all">
                    {fileInfo.type || 'Unknown'}
                  </p>
                </div>

                <button
                  onClick={clearFile}
                  className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors"
                >
                  Upload Another File
                </button>
              </div>
            </div>
          </div>
        )
      }

      <DonationSection />
      <HowToUse />

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Magic Bytes Detection</h3>
          <p className="text-gray-600 dark:text-slate-400">
            Detects actual file type from binary signature, not just the extension
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Malware Detection</h3>
          <p className="text-gray-600 dark:text-slate-400">
            Catches renamed or disguised executables before you open them
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
            <Info className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Program Recommendations</h3>
          <p className="text-gray-600 dark:text-slate-400">
            Get compatible programs to open any file type
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Why Verify File Types?</h3>
          <p className="text-blue-100 text-lg mb-6">
            Attackers disguise malware by renaming executable files to look like images or documents.
            Our tool detects the real file type using magic bytes (file signatures) to keep you safe.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">16+</div>
              <div className="text-blue-200 text-sm">File Formats</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Free</div>
              <div className="text-blue-200 text-sm">Always</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">Instant</div>
              <div className="text-blue-200 text-sm">Results</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How Magic Bytes Work</h3>
        <div className="space-y-4 text-gray-700 dark:text-slate-300">
          <p>
            Every file starts with unique binary data called "magic bytes" or "file signature". These identify the real file type:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">JPEG:</span> <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded border border-gray-300 dark:border-slate-600 font-mono text-sm">FF D8 FF</code>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">PNG:</span> <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded border border-gray-300 dark:border-slate-600 font-mono text-sm">89 50 4E 47</code>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">PDF:</span> <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded border border-gray-300 dark:border-slate-600 font-mono text-sm">25 50 44 46</code>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold">EXE:</span> <code className="bg-white dark:bg-slate-900 px-2 py-1 rounded border border-gray-300 dark:border-slate-600 font-mono text-sm">4D 5A</code>
            </li>
          </ul>
          <p className="mt-4">
            Renaming a .exe to .jpg won't change its magic bytes. That's why our detector catches the deception instantly.
          </p>
        </div>
      </div>

      <SEOContent />
    </main >
  );
}
