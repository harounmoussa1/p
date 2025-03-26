import HTMLFlipBook from "react-pageflip";
import React, { useState, forwardRef, ForwardedRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfFile from "/Etat.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PagesProps {
  children: React.ReactNode;
  number: number;
}

const Pages = forwardRef(
  ({ children, number }: PagesProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className="relative shadow-md bg-white" ref={ref}>
        {children}
        <div className="absolute bottom-2 right-2 text-gray-600 text-sm">
          {number}
        </div>
      </div>
    );
  }
);

Pages.displayName = "Pages";

function Etat() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 1000 });

  const isPCScreen = () => {
    // Détection PC avec au moins 1200px de largeur
    return window.matchMedia("(min-width: 1400px)").matches;
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (isPCScreen()) {
        // Dimensions fixes pour PC
        setDimensions({
          width: 700,
          height: 1000,
        });
      } else {
        // Calcul responsive pour autres appareils
        const containerWidth = window.innerWidth * 0.8;
        const calculatedHeight = containerWidth * 1.4;
          
        setDimensions({
          width: containerWidth,
          height: Math.min(calculatedHeight, window.innerHeight),
        });
      }
    };
    updateDimensions();
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Etat Financier
      </h1>
      <div className={isPCScreen()? "flex flex-row  w-full":"flex flex-col w-full"}>
        {/* PDF à gauche */}
        <div className="md:flex-1">
          <Document
            file={PdfFile}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {numPages && (
              <div className=" rounded-lg overflow-hidden">
                <HTMLFlipBook
                  width={dimensions.width}
                  height={dimensions.height}
                >
                  {Array.from({ length: numPages }, (_, index) => (
                    <Pages key={index} number={index + 1}>
                      <Page
                        pageNumber={index + 1}
                        width={dimensions.width}
                        height={dimensions.height}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Pages>
                  ))}
                </HTMLFlipBook>
              </div>
            )}
          </Document>
        </div>

        <div className="hidden md:block w-px bg-gray-300 mx-4 h-auto" />

        <div className="md:flex-1 md:max-w-[100%] p-4 rounded-lg overflow-y-auto max-h-[80vh] flex items-center">
          <div className="w-full">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 break-words hyphens-auto">
              wgdxfghghxwxchlkghkf,xgwfxchgfhfwwxcggfwxcghfgjfwwfxhgkf,wnddfgfgwfgkfgddgfgfwwxgfkgfdhwwfgfjwfgFDWHXVGKJKBHKVCGFXHGXJHCVJLVCGFXGHFJCHVJCGHFXGXHGFCGVHCGXHXFCGVHJCGFXFCGVHJGCFGXFCGVHJGHCGFXFCGVHJHCGGFXFCGVHCGGXFCGVGHCGXCGVHGCFXCGVGCFXCGVHGHCFGXFCVHJGHCXGFCGHVCGFXGHVCGFGHVCGFGHJVCGHHJHVJHLKMHJKHJ%HJ%OJHIMLJHHVJJLMHHVJJHJHJKHVJHJKBHVJJBKHVJJKBHVJ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etat;
