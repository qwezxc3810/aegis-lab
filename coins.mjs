export function calculateCoins(currentCoins, reward, approved) {
    if(!approved) {
        return currentCoins;
    }

    return currentCoins + reward;
}

// export	다른 파일에서도 사용 가능하게 공개
// function	하나의 기능을 정의
// calculateCoins	우리가 정한 함수 이름
// currentCoins	현재 동전 개수
// reward	지급할 보상
// approved	보호자 승인 여부
// if (!approved)	승인되지 않았다면
// return	결과 반환