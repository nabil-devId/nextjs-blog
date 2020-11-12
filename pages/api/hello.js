// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const email = req.body.email
  console.log(email);
  res.json({message:'success'});
}
