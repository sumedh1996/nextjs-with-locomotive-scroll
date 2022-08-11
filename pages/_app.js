import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider as ReactLocomotiveScrollProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <ReactLocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={
        []
      }
      location={asPath}
      onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Component {...pageProps} />;
      </div>
    </ReactLocomotiveScrollProvider>
  );
}

export default MyApp
