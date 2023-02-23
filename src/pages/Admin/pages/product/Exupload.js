import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { v4 } from "uuid";
const Exupload = () => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const fileName = image.name + v4();
    const storage = getStorage(app);
    const storageRef = ref(storage, `products/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`progress ${progress} % done`);

        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");

            break;
          case "running":
            console.log("upload is running");

            break;

          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage(url);
          console.log(url);
          console.log(image);
        });
      }
    );
  };

  return (
    <>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </>
  );
};

export default Exupload;
