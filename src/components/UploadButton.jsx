import { useState, useEffect } from "react";
import styles from "./UploadButton.module.css";

const FileInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className={styles.uploadField}>
      
      <input
        accept="image/*"
        type="file"
        id="select-image"
        style={{ opacity: "0", position: "absolute" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
        name="uploadInput"
      />

      {imageUrl && selectedImage && (
        <div mt={2} className="imagePreview">
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </div>  
      )}
      
      {imageUrl || (
          <label htmlFor="select-image">
          <button variant="contained" color="primary" component="span" name="uploadCover">
            Adicionar imagem de capa
          </button>
        </label>
        )
      }
      
    </div>
  );
};

export default FileInput;