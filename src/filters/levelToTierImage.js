export default (value = "0") => {
  let src = "img/rank/";
  //tier-large | tier-small
  let tier = value;
  let ext = ".svg";
  return src.concat(tier, ext);
};
