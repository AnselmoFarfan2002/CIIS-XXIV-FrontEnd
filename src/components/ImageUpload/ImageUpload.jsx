import React, { useState } from "react";
import { CardMedia, Container } from "@mui/material";
// import { styled } from "@mui/system";
import defaultImageUpload from "assets/images/deafults/default-image-upload.jpg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";

function ImageUpload({ textButton, defaultImg }) {
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
    <Container maxWidth="sm">
      <MKBox>
        <MKBox mt={5} mb={3}>
          {selectedImage ? (
            <CardMedia component="img" src={selectedImage} height="200" alt="Preview" />
          ) : (
            <CardMedia
              component="img"
              src={defaultImg ? defaultImg : defaultImageUpload}
              height="150"
              alt="Preview"
            />
          )}
        </MKBox>
        <MKButton component="label" color="info" variant="gradient">
          {textButton ? textButton : "Seleccionar imagen"}
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </MKButton>
      </MKBox>
    </Container>
  );
}

export default ImageUpload;

ImageUpload.propTypes = {
  textButton: PropTypes.string,
  defaultImg: PropTypes.string,
};
