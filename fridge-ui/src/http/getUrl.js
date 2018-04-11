export function getUrl() {
  var userAgent = navigator.userAgent.toLowerCase();
  var url = "";
  var getUrl = window.location.protocol + '//' + window.location.host + '/fridge';
  if (userAgent.match(/Alipay/i) == "alipay") {
    url = getUrl + '/alipay';
  } else if (userAgent.match(/MicroMessenger/i) == "micromessenger") {
    url = getUrl + '/weichart';
  }
  return url;
}
export function getStatus() {
  var status = "";
  var sta = (window.location.href).split("/");
  for (var i = 0; i < sta.length; i++) {
    if (sta[i] == 'index') {
      status = sta[i + 1].substring(0, 18);
      return status
    }
  }
}
