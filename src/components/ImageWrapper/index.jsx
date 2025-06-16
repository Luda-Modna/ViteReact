import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.sass";

function ImageWrapper({ width, height, children, ...restProps }) {
  const wrapperDims = {
    width,
    height,
  };
  return (
    <div style={wrapperDims} className={styles.imageContainer} {...restProps}>
      {children}
    </div>
  );
}

ImageWrapper.defaultProps = {
  width: "300px",
  height: "200px",
};

ImageWrapper.propTypes = {
  children: PropTypes.element,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
