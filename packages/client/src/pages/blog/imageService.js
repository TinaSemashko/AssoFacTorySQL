import axios from "../../axios.js";

export async function uploadImageToImgur(imageFile, clientId) {
  console.log("there");
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    const response = await axios.post(
      "https://api.imgur.com/3/image",
      formData,
      {
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      }
    );
    if (response.data.success) {
      return response.data.data.link; // URL загруженной фотографии
    } else {
      console.error(
        "Ошибка при загрузке фотографии на Imgur:",
        response.data.data.error
      );
      return null;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса на Imgur:", error);
    return null;
  }
}

export const uploadImageToImgBB = async (imageFile, apiKey) => {
  try {
    const formData = new FormData();
    formData.append("imageFile", imageFile);

    const response = await axios.post("/upload", formData, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 200) {
      throw new Error("Ошибка при загрузке изображения на сервер");
    }

    const data = response.data;
    const imageUrl = data.imageUrl; // URL загруженного изображения
    return imageUrl;
  } catch (error) {
    console.error("Произошла ошибка при загрузке изображения:", error);
    return null;
  }
};

export async function uploadImageToCloudinary(imageFile, clientId) {
  console.log("there");
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData);
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/deg3fztky",
      formData,
      {
        headers: {
          Authorization: `Client-ID ${clientId}`,
        },
      }
    );
    if (response.data.success) {
      return response.data.data.link; // URL загруженной фотографии
    } else {
      console.error(
        "Ошибка при загрузке фотографии на Imgur:",
        response.data.data.error
      );
      return null;
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса на Imgur:", error);
    return null;
  }
}
