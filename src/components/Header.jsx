import React from 'react';
import Navbar from './Navbar/Navbar';
import { StaticImage } from 'gatsby-plugin-image';
import Headerbot from './Headerbot';
import Headercenter from './Headercenter';

const Header = () => {
    return (
        <>
            <div style={{ display: 'grid' }}>
                <StaticImage
                    style={{
                        gridArea: '1/1/8/4',

                        maxHeight: 1000,
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    //aspectRatio={21 / 9}
                    // This is a presentational image, so the alt should be an empty string
                    alt="plant"
                    src={'../images/zavod31.jpg'}
                    formats={['auto', 'webp', 'avif']}
                    placeholder="blurred"
                    transformOptions={{
                        duotone: { shadow: '#0b162b', highlight: '#919191', opacity: 65 },
                    }}
                />
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: '1/1/2/4',
                        position: 'relative',
                        // This centers the other elements inside the hero component
                        //placeItems: 'start center',
                        display: 'grid',
                    }}
                >
                    {/* Any content here will be toped/centered in the component */}
                    <Navbar />
                </div>
                <div
                    style={{
                        gridArea: '3/1/5/3',
                        position: 'relative',
                        //placeItems: 'center',
                        display: 'grid',
                    }}
                >
                    <Headercenter />
                </div>
                <div
                    style={{
                        gridArea: '6/1/8/4',
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
