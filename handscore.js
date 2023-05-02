function getHandScore(input) {
  const cards = input.split(" ");
  let scores = {
    S: 0,
    C: 0,
    H: 0,
    D: 0,
  };
  let rankCount = {};
  let maxScore = 0;

  for (let card of cards) {
    const suit = card[0];
    const rank = card.substring(1);

    if (rank === "A") {
      scores[suit] += 11;
      rankCount[rank] = (rankCount[rank] || 0) + 1;
    } else if (rank === "J" || rank === "Q" || rank === "K") {
      scores[suit] += 10;
      rankCount[rank] = (rankCount[rank] || 0) + 1;
    } else {
      scores[suit] += parseInt(rank);
      rankCount[rank] = (rankCount[rank] || 0) + 1;
    }
  }

  for (let rank in rankCount) {
    if (rankCount[rank] === 3) {
      if (rank === "A") {
        maxScore = 35;
      } else {
        maxScore = 32.5;
      }
      break;
    }
  }

  const maxSuitScore = Math.max(...Object.values(scores));

  return Math.max(maxScore, maxSuitScore);
}

console.log("Hand Score: H9 S2 DA", getHandScore("H9 S2 DA"));
console.log("Hand Score: H3 H5 HQ", getHandScore("H3 H5 HQ"));
console.log("Hand Score: S8 S10 CA", getHandScore("S8 S10 CA"));
console.log("Hand Score: C9 CK CK", getHandScore("C9 CK CK"));
console.log("Hand Score: D2 D2 D2", getHandScore("D2 D2 D2"));
console.log("Hand Score: HJ SJ DJ", getHandScore("HJ SJ DJ"));
console.log("Hand Score: HA SA DA", getHandScore("HA SA DA"));
