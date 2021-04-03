import Modal from './Modal';
import { useState } from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
const ProfilePicCropperModel = ({
  heading,
  active,
  setActive,
  profilePicSrc,
  setProfilePicSrc,
  setCroppedImageBase64,
  clearFileInputOnCancel,
  setCurrentUser,
}) => {
  // Cropped Image file To be uploaded to Django server
  // const [croppedImage, setCroppedImage] = useState(null)
  // React image crop set aspect ratio to 1 / 1 and default starting crop to 200x200px
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    unit: 'px',
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });
  // React image crop image state
  const [image, setImage] = useState(null);
  const sendImageToServer = (imageFile) => {
    console.log(imageFile);
    // upload croppedImage to Server Here
  };
  // get cropped image and draw it in canvas then convert it to base64 using canves.toDataUrl() and save it on croppedImageState to display cropped image as profile
  // then extract file extension from file input state and convert the canves base64 to file using base64StringtoFile() so that we can upload cropped image to server
  // or download it

  const extractImageFileExtensionFromBase64 = (base64Data) => {
    return base64Data.substring(
      'data:image/'.length,
      base64Data.indexOf(';base64'),
    );
  };

  const base64DatatoFile = (base64String, filename) => {
    let arr = base64String.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  const closeModelAndClearFileInput = (status) => {
    setActive(status);
    setTimeout(clearFileInputOnCancel, 200);
    // reset crop initial box
    setCrop({ aspect: 1 / 1, unit: 'px', x: 0, y: 0, width: 200, height: 200 });
  };
  const getCroppedImage = () => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );
    // get Base64 of cropped image from canves to display preview save it in state
    const croppedBase64Image = canvas.toDataURL('image/jpeg');
    setCroppedImageBase64(croppedBase64Image);
    // Extract Image file extension
    const imageFileExtension = extractImageFileExtensionFromBase64(
      profilePicSrc,
    );
    // append Image Extension to a unique filename using users data
    const filename = 'mumble_profile_pic.' + imageFileExtension;
    // Convert cropped base64 to File using filename and send it to Django api to update users profile
    const croppedImageFile = base64DatatoFile(croppedBase64Image, filename);
    // Send Image To Server
    sendImageToServer(croppedImageFile);
    // Unmount Image Cropper and clear file input
    closeModelAndClearFileInput();
    // use Base64Image to Update currentProfile Pic Preview
    setCurrentUser((state) => {
      return { ...state, profile_pic: croppedBase64Image };
    });
    //
  };
  return (
    <Modal
      heading={heading}
      active={active}
      setActive={closeModelAndClearFileInput}
    >
      <div
        className="profile-pic--cropper-container"
        style={{ height: '90%', overflow: 'hidden' }}
      >
        <ReactCrop
          src={profilePicSrc}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onImageLoaded={setImage}
        />
      </div>
      <div className="modal-actions">
        <button
          className="btn btn-1 btn-md"
          style={{ marginRight: '8px' }}
          onClick={getCroppedImage}
        >
          Crop & Update
        </button>
        <button
          className="btn btn-1 btn-md"
          onClick={() => closeModelAndClearFileInput(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};
export default ProfilePicCropperModel;
