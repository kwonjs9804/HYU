const container = document.getElementById('map');
const options = {
			center: new kakao.maps.LatLng(37.55740188665408, 127.04566664181759),
			level: 2
};


let index = 1;

// 지도를 생성합니다
const map = new kakao.maps.Map(container, options);

// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
const positions = [
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">백남학술정보관</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="column">화장실</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="column">정수기</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng(37.55740188665408, 127.04566664181759)
    },
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">제1공학관</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="column">화장실</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="column">정수기</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng(37.556618012593155, 127.04568313971993)
    },
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">정몽구미래자동차센터</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng( 37.55626222347592, 127.04541130352526)
    },
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">생활과학관</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="column">화장실</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="column">정수기</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">7F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">7F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng(37.55670318419364, 127.04676401533949)
    },
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">한양종합기술연구원</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="column">화장실</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="column">정수기</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">6F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">5F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng(37.557784342535335, 127.04686089134526)
    },
    {
        content: '<div class="overlaybox">' +
        '    <div class="boxtitle">한양사이버대학교</div>' +
        '    <div class="first">' +
        '   </div>' +
        '    <ul>' +
        '        <li>' +
        '            <span class="column">화장실</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="column">정수기</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">4F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">3F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">2F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">화장실</span>' +
        '            <span class="emoji">🚻 🟢</span>' +
        '        </li>' +
        '        <li>' +
        '            <span class="floor">1F</span>' +
        '            <span class="title">정수기</span>' +
        '            <span class="emoji">🚰 🟡</span>' +
        '        </li>' +
        '    </ul>' +
        '    </div>',
        latlng: new kakao.maps.LatLng(37.55722545975139, 127.04752262117935)
    },
];

for (let i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    let isOpen = false;
    const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        removable: true,
        position: positions[i].latlng // 마커의 위치
    });
    // 마커에 표시할 인포윈도우를 생성합니다 
    const infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
    });


    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(map, 'click', makeOutListener(infowindow));
}
// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}
// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

// //버튼 누르면 꽃가루
// const button = document.getElementById('button');
//     button.addEventListener('click', () => {
//         index++;
//         console.log(index % 3);
//         const canvas = document.getElementById('your_custom_canvas_id')
//         const jsConfetti = new JSConfetti({ canvas })

//         jsConfetti.addConfetti({
//             emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
//         })
//     }
// )