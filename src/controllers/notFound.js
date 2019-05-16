const notFound = async (_, res) => {
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  console.log("not found")
  res.status(404).render('error', { layout: false });
};

export default notFound;
