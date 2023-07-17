import React, { useState, forwardRef } from "react";
import { CardMedia, Container } from "@mui/material";
// import { styled } from "@mui/system";
import defaultImageUpload from "assets/images/deafults/default-image-upload.jpg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";

const ImageUpload = forwardRef(({ textButton, defaultImg, className, name }, ref) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container maxWidth="sm" className={className} ref={ref}>
      <MKBox>
        <MKBox mt={5} mb={3}>
          {selectedImage ? (
            <CardMedia
              component="img"
              src={selectedImage}
              style={{ maxWidth: "100%", margin: 0 }}
              height="150"
              alt="Vista previa"
            />
          ) : (
            <CardMedia
              component="img"
              src={defaultImg ? defaultImg : defaultImageUpload}
              style={{ maxWidth: "100%", margin: 0 }}
              height="150"
              alt="Seleccione una imagen"
            />
          )}
        </MKBox>
        <MKButton component="label" color="info" variant="gradient">
          {textButton ? textButton : "Seleccionar imagen"}
          <input
            type="file"
            accept="image/*"
            multiple={false}
            style={{ display: "none" }}
            onChange={handleImageChange}
            name={name}
          />
        </MKButton>
      </MKBox>
    </Container>
  );
});

export default ImageUpload;

ImageUpload.propTypes = {
  textButton: PropTypes.string,
  defaultImg: PropTypes.string,
  files: PropTypes.array,
  className: PropTypes.string,
  name: PropTypes.string,
};
