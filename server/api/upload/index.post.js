//import multer from multer
//const upload = multer()

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //const media = { originalname: body.filename, buffer: body.data };
  //console.log(media);
  console.log(body);

  return { ok: true };
  /* await upload.single('file'), (req, res) => {
        if (!req.file) {
          console.log("No file received");
          return res.send({
            success: false
          });
      
        } else {
          console.log('file received');
          return res.send({
            success: true
          })
        }*/
});
