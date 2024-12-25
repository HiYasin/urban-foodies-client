import React, { useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { Captions, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";



import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css";

import { Slides } from '../data/Slides';
import Banner from '../components/Gallery/Banner';
const Gallery = () => {
    const [open, setOpen] = useState(false);
    const captionRef = useRef(null);
    const zoomRef = useRef(null);
    const [index, setIndex] = React.useState(-1);


    return (
        <div className=''>
            <Banner></Banner>
            <div className='container mx-auto bg-orange-100 dark:bg-orange-600 dark:bg-opacity-60 dark:border-none p-4 md:p-6 rounded-box border mt-10'>
                <RowsPhotoAlbum
                    photos={Slides}
                    //targetRowHeight={150}
                    onClick={({ index: current }) => setIndex(current)}
                />

                <Lightbox
                    plugins={[Captions, Zoom, Thumbnails]}
                    // open={open}
                    captions={{ ref: captionRef, descriptionTextAlign: 'center', }}
                    zoom={{ ref: zoomRef }}
                    index={index}
                    slides={Slides}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                >
                </Lightbox>
            </div>
        </div>
    );
};

export default Gallery;
