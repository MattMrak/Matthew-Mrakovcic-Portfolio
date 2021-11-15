import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
// import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
//react-pdf
import { pdfjs } from 'react-pdf';
// import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://docs.google.com/document/d/1FbPwQ_Tr9j0tLTa9wTCea0aPiKMFRyPNrh0M7WsO3Z0/edit?usp=sharing';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  // const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
  }, [pdfPageWidth]);

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
        </Button>
          {/* <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button> */}

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          {/* <img src="https://i.imgur.com/kgrCx2M.jpg" alt="Matthew Mrakovcic Resume" width="400" height="550" /> */}
          <img src="https://i.imgur.com/cnDx51f.png" alt="Matthew Mrakovcic Resume" width={pdfPageWidth} />

        </div>

        {/* <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: resumeLink,
            }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div> */}
      </div>
    </BaseLayout>
  );
};

export default Resume;

// import s from './Resume.module.scss';
// import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
// import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
// import { useEffect, useRef, useState } from 'react';
// import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
// // import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
// import Button from '../../components/UIElements/Button/Button';
// //react-pdf
// import { pdfjs } from 'react-pdf';
// // import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//   const resumeLink =
//     'https://docs.google.com/document/d/1btOI-ri89xm0vgvHbkXGF55Qx-MHNRVyRgb3wpvYtKE/edit?usp=sharing';
//     // 'https://raw.githubusercontent.com/vsnaichuk/vsnaichuk/master/CV.pdf';

//   const Resume = () => {
//     const pdfWrapper = useRef(null);
//     const [setPdfPageWidth] = useState(null);
//     // const [pdfPageWidth, setPdfPageWidth] = useState(null);
//     useEffect(() => {
//       setPdfPageWidth(
//         pdfWrapper.current?.getBoundingClientRect().width || null,
//       );
//     }, [setPdfPageWidth]);
//     // }, []);


//   // const removeTextLayerOffset = () => {
//   //   const textLayers = document.querySelectorAll(
//   //     '.react-pdf__Page__textContent',
//   //   );
//   //   textLayers.forEach((layer) => {
//   //     const { style } = layer;
//   //     style.top = '0';
//   //     style.left = '0';
//   //     style.transform = '';
//   //   });
//   // };

//   return (
//     <BaseLayout>
//       <div className={s.content}>
//         <div className={s.header}>
//           <h1 className={s.title}>
//             My <br /> Resume
//           </h1>

//           <div className={s.filesImg}>
//             <FilesIcon />
//           </div>
//         </div>

//         <Button
//           style={{ margin: 'auto', width: '15rem' }}
//           className="primary"
//           href={resumeLink}
//           target="_blank"
//         >
//           <DownloadIcon fill="#fff" />
//           <span className={s.downloadText}> download resume</span>
//         </Button>
//           {/* <DownloadIcon fill="#fff" />
//           <span className={s.downloadText}> download resume</span>
//           <span className={s.filename}>.pdf</span>
//         </Button> */}

//         <div className={s.pdfWrapper} ref={pdfWrapper}>
//           <img src="https://i.imgur.com/Y2MULSz.jpg" alt="Matthew Mrakovcic Resume" width="600" height="700" />
//         </div>

//         {/* <div className={s.pdfWrapper} ref={pdfWrapper}>
//           <Document
//             loading={<LinerProgress />}
//             file={{
//               url: resumeLink,
//             }}
//           >
//             <Page
//               onLoadSuccess={removeTextLayerOffset}
//               loading={<LinerProgress />}
//               width={pdfPageWidth}
//               pageNumber={1}
//             />
//           </Document>
//         </div> */}
//       </div>
//     </BaseLayout>
//   );
// };

// export default Resume;


  // const removeTextLayerOffset = () => {
  //   const textLayers = document.querySelectorAll(
  //     '.react-pdf__Page__textContent',
  //   );
  //   textLayers.forEach((layer) => {
  //     const { style } = layer;
  //     style.top = '0';
  //     style.left = '0';
  //     style.transform = '';
  //   });
  // };