import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PDFTemplate from './PDFTemplate';

const PDFFile = React.forwardRef((props, ref) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
      <div className='displayWrapper'>
        <div className='previewForm'>
          <PDFTemplate ref={componentRef} />
        </div>
        <button className='pdf ' onClick={handlePrint}>Print this out!</button>
      </div>
    );
  });
export default PDFFile;