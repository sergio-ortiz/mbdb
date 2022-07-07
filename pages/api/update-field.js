import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const data = req.body;
  const where = { id: parseInt(data.id) };
  delete data.id;

  const update = await prisma.business.update({
    where,
    data,
  });

  res.redirect(302, `/business/${where.id}`);
}
