export const errorHandler = (err, req, res) => {
  console.error(err);
  if (err instanceof Error) return res.status(err.status).send(err.message);
};
