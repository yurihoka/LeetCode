/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let reversedImage = [];

  for (let i = 0; i < image.length; i++) {
    reversedImage.push(image[i].reverse());

    for (let j = 0; j < image[i].length; j++) {
      if (reversedImage[i][j] === 1) {
        reversedImage[i][j] = 0;
      } else {
        reversedImage[i][j] = 1;
      }
    }
  }
  return reversedImage;
};
