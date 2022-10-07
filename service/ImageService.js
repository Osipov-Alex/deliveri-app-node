/* eslint-disable class-methods-use-this */
import * as uuid from 'uuid';
import * as path from 'path';

class ImageService {
  saveFile(file) {
    try {
      // eslint-disable-next-line prefer-template
      const fileName = uuid.v4() + '.png';
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default new ImageService();
