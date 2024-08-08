function totalArea(parcalar) {
  let toplamAlan = 0;
  for (let for of parcalar) {
    let yukseklik = parcalar[0];
    let genislik = parcalar[1];
    let alan = yukseklik * genislik;
    toplamAlan += alan;
  }
  return toplamAlan;
}
console.log(
  totalArea([
    [3, 5],
    [2, 8],
    [3, 12],
  ])
);
console.log(
  totalArea([
    [1, 100],
    [2, 10],
    [3, 40],
  ])
);
