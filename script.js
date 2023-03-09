function restart() {
  var res = f.weightText.value * 150;
  f.remainsFood.value = res;
}

function feedUpdate() {
  f.remainsFood.value -= f.feedText.value;
}
