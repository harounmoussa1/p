import HTMLFlipBook from "react-pageflip";
import React, { useState, forwardRef, ForwardedRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfFile from "/Charte.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
interface PagesProps {
  children: React.ReactNode;
  number: number;
}

const Pages = forwardRef(
  ({ children, number }: PagesProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className="bg-white flex justify-center items-center relative h-full w-full"
        ref={ref}
      >
        {children}
        <div className="absolute bottom-4 right-4 text-gray-600 text-lg">
          Page {number}
        </div>
      </div>
    );
  }
);

Pages.displayName = "Pages";

function Charte() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({
    width: 1200,
    height: 677,
  });

  const isPCScreen = () => {
    const pcMinWidth = 1200;
    const pcMinHeight = 690;

    return (
      window.innerWidth >= pcMinWidth &&
      window.innerHeight >= pcMinHeight &&
      window.matchMedia("(min-width: 1024px)").matches
    );
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (isPCScreen()) {
        setDimensions({
          width: 1200,
          height: 677,
        });
      } else {
        const screenWidth = window.innerWidth * 0.9;
        const screenHeight = window.innerHeight * 0.7;
        const calculatedWidth = Math.min(screenWidth, 1200);
        const calculatedHeight = calculatedWidth / 1.414;

        setDimensions({
          width: calculatedWidth,
          height: Math.min(calculatedHeight, screenHeight),
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8">
      <h1 className="text-center text-3xl  font-bold md:text-4xl mb-6 md:mb-8 text-gray-800">
        Charte RSE
      </h1>

      <Document
        file={PdfFile}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {numPages && (
          <div className=" rounded-lg w-full max-w-7xl mx-auto">
            <HTMLFlipBook
              width={dimensions.width}
              height={dimensions.height}
              className={isPCScreen() ? "fixed-size-pc" : "responsive-size"}
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
  );
}

export default Charte;
