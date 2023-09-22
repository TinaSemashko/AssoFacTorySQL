export const getPosts = (model) => async (req, res) => {
  const { salon } = req.query;

  const user = await model.getPostsBySalon(salon);

  if (!user) {
    return res.status(404).send({ message: "Post doesn't existe" });
  }

  res.send({ results: [user] });
};

export const getAllPosts = (model) => async (req, res) => {
  const post = await model.getPostsAll();

  if (!post) {
    return res.status(404).send({ message: "No posts" });
  }

  res.send({ results: [post] });
};

export const createNewPost = (model) => async (req, res) => {
  const { data } = req.body;
  const postId = await model.createPost(data);

  if (!postId) {
    return res.status(404).send({ message: "Something went wrong..." });
  }

  res.send({ results: [postId] });
};

// app.post("/api/upload_avatar", (req, res) => {
//   console.log(req.body);
//   const randomString = crypto.randomBytes(5).toString("hex");
//   const stream = fs.createWriteStream(`./public/images/${randomString}.png`);

//   stream.on("finish", function () {
//     console.log("file has been written");
//     res.end("file has been written");
//   });

//   stream.write(Buffer.from(req.body), "utf-8");
//   stream.end();
// });
