const ResponsiveImage = ({ imageData }) => {
  const {
    imgDesktop1x,
    imgDesktop2x,
    imgTablet1x,
    imgTablet2x,
    imgMobile1x,
    imgMobile2x,
    altText,
  } = imageData;

  return (
    <picture>
      <source
        media="(min-width: 1280px)"
        srcSet={`${imgDesktop1x} 1x, ${imgDesktop2x} 2x`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${imgTablet1x} 1x, ${imgTablet2x} 2x`}
      />
      <source
        media="(max-width: 767px)"
        srcSet={`${imgMobile1x} 1x, ${imgMobile2x} 2x`}
      />
      <img src={imgMobile1x} alt={altText} />
    </picture>
  );
};

export default ResponsiveImage;
