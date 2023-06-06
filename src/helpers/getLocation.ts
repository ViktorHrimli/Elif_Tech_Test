function successCallback(position: any) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  console.log("Широта:", latitude);
  console.log("Долгота:", longitude);
}

function errorCallback(error: any) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("Пользователь запретил доступ к геолокации");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Информация о местоположении недоступна");
      break;
    case error.TIMEOUT:
      console.log("Время ожидания запроса на получение местоположения истекло");
      break;
    case error.UNKNOWN_ERROR:
      console.log("Произошла неизвестная ошибка");
      break;
  }
}

export { successCallback, errorCallback };
