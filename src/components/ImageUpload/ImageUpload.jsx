import React, { useState, forwardRef, useEffect } from "react";
import { CardMedia, Container } from "@mui/material";
// import { styled } from "@mui/system";
import defaultImageUpload from "assets/images/deafults/default-image-upload.jpg";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";

const ImageUpload = forwardRef(({ textButton, defaultImg, files }, ref) => {
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

  useEffect(() => {
    // Asignar el valor de files al input cuando se actualice
    if (ref.current && files.length > 0) {
      const fileList = new DataTransfer();
      files.forEach((file) => {
        fileList.items.add(file);
      });
      ref.current.files = fileList.files;

      handleImageChange({ target: ref.current });
    }
  }, [files, ref]);

  return (
    <Container maxWidth="sm">
      <MKBox>
        <MKBox mt={5} mb={3}>
          {selectedImage ? (
            <CardMedia
              component="img"
              src={selectedImage}
              style={{ maxWidth: "100%", margin: 0 }}
              height="200"
              alt="Vista previa"
            />
          ) : (
            <CardMedia
              component="img"
              src={defaultImg ? defaultImg : defaultImageUpload}
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
            ref={ref}
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
};
