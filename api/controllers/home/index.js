module.exports = async function index(req, res) {
  let cnt = 0;
  try {
    let counter = sails.hooks.ignite.getCounter('indexCounter');
    cnt = counter.incrementAndGet();
  } catch(e) {
    console.log(e.message, e);
  }
  return res.view('home/index.ejs', {cnt: cnt});
};
