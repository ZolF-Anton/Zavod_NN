import * as React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
    return (
        <>
            <Navbar />

            <Helmet title='Zavod Home' defer={false}>
                <title>Home Page</title>
            </Helmet>

            <div style={{ display: 'grid' }}>
                <StaticImage
                    style={{
                        gridArea: '1/1',

                        // maxHeight: 600,
                    }}
                    layout='fullWidth'
                    // You can optionally force an aspect ratio for the generated image
                    aspectRatio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=''
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src={'../images/zavod31.jpg'}
                    formats={['auto', 'webp', 'avif']}
                />
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: '1/1',
                        position: 'relative',
                        // This centers the other elements inside the hero component
                        placeItems: 'center',
                        display: 'grid',
                    }}
                >
                    {/* Any content here will be centered in the component */}
                </div>
            </div>
        </>
    );
};

export default IndexPage;
