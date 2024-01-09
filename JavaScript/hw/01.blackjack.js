// 간단한 블랙잭 게임 예제

// 카드 덱 초기화
const deck = [
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A',
    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
];

// 카드를 섞는 함수
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// 카드 덱 섞기
shuffleDeck(deck);

// 플레이어와 딜러의 손 초기화
const playerHand = [];
const dealerHand = [];

// 카드 한 장을 뽑는 함수
function drawCard() {
    return deck.pop();
}

// 플레이어와 딜러에게 각각 2장씩 카드를 나눠줌
playerHand.push(drawCard(), drawCard());
dealerHand.push(drawCard(), drawCard());

console.log('플레이어 카드: ' + playerHand.join(', '));
console.log('딜러 카드: ' + dealerHand[0] + ', ?');