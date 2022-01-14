import React from 'react';
import { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { catalog__slider, catalog__sliderItem } from './slider.module.scss';

const SliderImg = (props) => {
    const { setImgCount, slider } = props;

    const data = useStaticQuery(
        graphql`
            query {
                allFile(filter: { extension: { eq: "png" }, relativeDirectory: { eq: "slider" } }) {
                    edges {
                        node {
                            id
                            base
                            relativePath
                            childImageSharp {
                                gatsbyImageData(quality: 70, layout: FIXED, width: 700)
                            }
                        }
                    }
                }
            }
        `
    );

    useEffect(() => {
        setImgCount(data.allFile.edges.length);
        console.log(slider.current);
    }, [data.allFile.edges.length]);

    return (
        <ul className={catalog__slider} ref={slider}>
            {data.allFile.edges.map((e) => {
                return (
                    <li className={catalog__sliderItem} key={e.node.id}>
                        <GatsbyImage
                            image={e.node.childImageSharp.gatsbyImageData}
                            alt={e.node.base}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default SliderImg;
