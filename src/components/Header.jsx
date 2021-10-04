import React from 'react';
import Navbar from './Navbar/Navbar';
import { StaticImage } from 'gatsby-plugin-image';
import Headerbot from './Headerbot';

const Header = () => {
    return (
        <>
            <div style={{ display: 'grid' }}>
                <StaticImage
                    style={{
                        gridArea: '1/1',

                        // maxHeight: 600,
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectRatio={3 / 2}
                    // This is a presentational image, so the alt should be an empty string
                    alt="plant"
                    // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
                    src={'../images/zavod31.jpg'}
                    formats={['auto', 'webp', 'avif']}
                    placeholder="blurred"
                    // use filters to interact with backG-img
                    transformOptions={{
                        duotone: { shadow: '#0b162b', highlight: '#919191', opacity: 65 },
                    }}
                />
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: '1/1',
                        position: 'relative',
                        // This centers the other elements inside the hero component
                        placeItems: 'start',
                        display: 'grid',
                    }}
                >
                    {/* Any content here will be toped/centered in the component */}
                    <Navbar />
                </div>
                <div
                    style={{
                        gridArea: '1/1',
                        position: 'relative',
                        placeItems: 'center',
                        display: 'grid',
                    }}
                >
                    <h1>Завод автомобильных глушителей «КД» и «ТДГ»</h1>
                </div>
                <div
                    style={{
                        gridArea: '1/1',
                        position: 'relative',
                        placeItems: 'end center ',
                        display: 'grid',
                        paddingBottom: '3rem',
                    }}
                >
                    <Headerbot />
                </div>
            </div>
        </>
    );
};
export default Header;
