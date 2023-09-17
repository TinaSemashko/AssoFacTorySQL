export const getAllComments = (model) => async (req, res) => {
  const post = await model.getComments();

  if (!post) {
    return res.status(404).send({ message: "No comments" });
  }

  res.send({ results: [post] });
};
