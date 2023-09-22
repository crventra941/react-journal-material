
export const fileUpload = async (file) => {
  const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dcnvhxvxw/upload';

  if (!file) return null;

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {

    const response = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error("No se pudo subir");
    const cloudResp = await response.json();

    return cloudResp.secure_url;
  } catch (error) {
    // console.log(error);
    // throw new Error("No se pudo subir la imagen")
    return null;
  }
}
