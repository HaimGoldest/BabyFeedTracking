function restart() {
  f.remainsFood.value = f.weightText.value;
}

function feedUpdate() {
  f.remainsFood.value -= f.feedText.value;
}

function calc(weight) {
  var res = weight * 150;
}
