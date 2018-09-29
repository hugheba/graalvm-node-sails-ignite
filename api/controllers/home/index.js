module.exports = async function index(req, res) {
  let cnt = 0;
  try {
    let ib = sails.hooks.ignite.get();
    let counter = ib.getCounter('indexCounter');
    cnt = counter.incrementAndGet();
  } catch(e) {
    console.log(e.message, e);
  }
  return res.view('home/index.ejs', {cnt: cnt});
};
