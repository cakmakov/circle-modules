const pi = Math.PI

const circleArea = (radius) => {
  console.log('circleArea: ', pi * radius * radius)
}

const circleCircumference = (radius) => {
  console.log('circleCircumference: ', 2 * pi * radius)
}

module.exports = {
  circleArea,
  circleCircumference,
}
