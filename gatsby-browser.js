// all pages should scroll to the top
exports.shouldUpdateScroll = () => {
  document.body.scrollTo(0, 0);
  return false;
};
