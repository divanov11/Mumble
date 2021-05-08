import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import { useDispatch } from 'react-redux';
import 'react-image-crop/dist/ReactCrop.css';
import { updateProfilePic } from '../actions/userActions';
import { Modal, ModalContentAction } from '../common';

const ProfilePicCropperModal = ({
  heading,
  active,
  setActive,
  profilePicSrc,
  setProfilePicSrc,
  setCroppedImageBase64,
  clearFileInputOnCancel,
  setCurrentUser,
}) => {
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    unit: 'px',
    x: 0,
    y: 0,
    width: 200,
    height: 200,
  });

  const [image, setImage] = useState(null);

  const sendImageToServer = (imageFile) => {
    let formData = new FormData();
    formData.append('profile_pic', imageFile);
    dispatch(updateProfilePic(formData));
  };

  const extractImageFileExtensionFromBase64 = (base64Data) => {
    return base64Data.substring('data:image/'.length, base64Data.indexOf(';base64'));
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

    const croppedBase64Image = canvas.toDataURL('image/jpeg');
    setCroppedImageBase64(croppedBase64Image);
    const imageFileExtension = extractImageFileExtensionFromBase64(profilePicSrc);
    const filename = 'mumble_profile_pic.' + imageFileExtension;
    const croppedImageFile = base64DatatoFile(croppedBase64Image, filename);
    sendImageToServer(croppedImageFile);
    closeModelAndClearFileInput();

    // setCurrentUser((state) => {
    //   return { ...state, profile_pic: croppedBase64Image };
    // });
  };

  return (
    <Modal heading={heading} active={active} setActive={closeModelAndClearFileInput}>
      <div className="profile-pic--cropper-container" style={{ height: '90%', overflow: 'hidden' }}>
        <ReactCrop
          src={profilePicSrc}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onImageLoaded={setImage}
        />
      </div>
      <ModalContentAction setActive={closeModelAndClearFileInput} successAction={getCroppedImage} />
    </Modal>
  );
};
export default ProfilePicCropperModal;
