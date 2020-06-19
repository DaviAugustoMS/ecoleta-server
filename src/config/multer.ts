import multer from "multer";
import path from "path";
import cripto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      const hash = cripto.randomBytes(8).toString("hex");

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
