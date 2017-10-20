import Api from 'Api';
import Auth from 'Auth';

export default class Image {
  static sendBase64(file, userId) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const avatar = reader.result;
      const profile = {
        avatar: avatar
      };

      Api.profileUpdate(userId, profile, Auth.getUserTokens())
      .then((response) => {
        alert('Data updated.');
      })
      .catch((error) => {
        console.log(error);
      })

    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
}