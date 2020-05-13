function doTest() {
  function shuffle(array) {
    var i = 0
    var j = 0
    var temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

  var A = "A"
  var K = "K"
  var Q = "Q"
  var J = "J"

  var deck = [
    A,
    A,
    A,
    A,
    K,
    K,
    K,
    K,
    Q,
    Q,
    Q,
    Q,
    J,
    J,
    J,
    J,
    10,
    10,
    10,
    10,
    9,
    9,
    9,
    9,
    8,
    8,
    8,
    8,
    7,
    7,
    7,
    7,
    6,
    6,
    6,
    6,
    5,
    5,
    5,
    5,
    4,
    4,
    4,
    4,
    3,
    3,
    3,
    3,
    2,
    2,
    2,
    2,
  ]
  var card
  var numFlipped = 1
  var data = 0
  var cont = true
  var numOfShuffles = document.getElementById("n").value

  for (i = 0; i < numOfShuffles; i++) {
    numFlipped = 1
    cont = true
    shuffle(deck)
    while (cont) {
      card = deck[numFlipped]
      switch (card) {
        case A:
        case K:
        case Q:
        case J:
          cont = false
          break;
        default:
          numFlipped++
          break;
      }
    }
    data += numFlipped
  }

  alert(data / numOfShuffles)
}
