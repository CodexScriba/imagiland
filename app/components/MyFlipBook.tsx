// components/MyFlipBook.tsx

import React, { forwardRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { ssr: false });

interface PageProps {
  number: string;
  children: React.ReactNode;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ number, children }, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      <h1>Page Header</h1>
      <p>{children}</p>
      <p>Page number: {number}</p>
    </div>
  );
});

const MyFlipBook: React.FC = () => {
  return (
    <HTMLFlipBook width={300} height={500} className={''} style={undefined} children={undefined} startPage={0} size={'fixed'} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0} drawShadow={false} flippingTime={0} usePortrait={false} startZIndex={0} autoSize={false} maxShadowOpacity={0} showCover={false} mobileScrollSupport={false} clickEventForward={false} useMouseEvents={false} swipeDistance={0} showPageCorners={false} disableFlipByClick={false}>
      <Page number="1">Page 1 Content</Page>
      <Page number="2">Page 2 Content</Page>
      <Page number="3">Page 3 Content</Page>
      <Page number="4">Page 4 Content</Page>
    </HTMLFlipBook>
  );
};

export default MyFlipBook;
