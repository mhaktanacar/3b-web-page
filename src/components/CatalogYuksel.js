import React, { useState } from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap'
import logo from '../util/3B-Protection.webp'
import sunum from '../util/3BYuksel.pdf'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function CatalogYuksel() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function onNext({ numPages }) {
        setPageNumber(pageNumber + 1);
    }
    function onPrevious({ numPages }) {
        setPageNumber(pageNumber - 1);
    }

    return (

        <div>
            <Row>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Document file={sunum} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
                <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>

                    <p>
                        {pageNumber}/{numPages}
                    </p>
                    <br></br>
                    <div>

                        <Button onClick={onPrevious}>Önceki Sayfa</Button>
                        <Button onClick={onNext}>Sonraki Sayfa</Button>
                        <Button href={sunum} onClick={onPrevious}>İndir</Button>

                    </div>
                </div>

            </Row>
            <Row>
            </Row>

        </div>

    );
}



export default CatalogYuksel