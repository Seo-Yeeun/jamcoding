// 최신 검증된 링크 기반 Mock Data (ID Schema 적용)
const MOCK_DB = {
    members: [
        { 
            id: 'm_soo_bin', 
            name: '최수빈 (SOOBIN)', 
            role: '리더 / 보컬', 
            image_key: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EC%B5%9C%EC%88%98%EB%B9%88%28SOOBIN%29%20%EC%9D%B4%EB%AF%B8%EC%A7%80.webp',
            details: {
                group: '투모로우바이투게더 (빅히트 뮤직)',
                height: '186cm (팀 내 최장신)',
                birthplace: '대한민국 안산',
                debut: '2019년 3월',
                mbti: 'ISFP',
                education: '안산고등학교 (연습생 시절 자퇴)',
                intro: '부드러운 외모와 달리 강단 있는 외유내강형 리더',
                keywords: ['신중함', '책임감', '은근한 장난기', '강한 승부욕'],
                motto: '속도에 상관없이 꾸준히 하자',
                hobbies: ['리그 오브 레전드(마스터 티어)', '애니메이션·게임 감상'],
                favorites: {
                    color: '하늘색, 노란색, 흰색',
                    flower: '해바라기',
                    season: '가을',
                    food: '아이스크림, 빵, 탄산음료'
                },
                pets: '진돗개(본가), 고슴도치 등',
                nicknames: ['최토끼', '안산 오이', '최인절미', '입덕요정'],
                catchphrase: '"그럼요" / "맞습니다"',
                sns: { instagram: 'https://www.instagram.com/page.soobin' }
            }
        },
        { 
            id: 'm_yeon_jun', 
            name: '최연준 (YEONJUN)', 
            role: '맏형 / 메인댄서 / 보컬·랩', 
            image_key: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EC%B5%9C%EC%97%B0%EC%A4%80%20%28YEONJUN%29%20%EC%9D%B4%EB%AF%B8%EC%A7%80.webp',
            details: {
                group: '투모로우바이투게더 (빅히트 뮤직)',
                height: '181.5cm',
                birthplace: '대한민국 서울 성북구',
                debut: '2019년 3월 4일',
                mbti: 'ENFP',
                education: '한국예술고등학교 음악과 졸업 / 글로벌사이버대학교 방송연예과 재학',
                intro: '노력하는 천재 — 강해 보이지만 속정 깊은 외강내유형',
                keywords: ['활발함', '애교', '장난기', '완벽주의', '눈물 많음'],
                motto: '무대 위에서는 완벽하게, 무대 아래에서는 귀엽게',
                hobbies: ['춤추기', '패션 공부', '옷 사기', 'LP 모으기'],
                favorites: {
                    color: '파란색, 보라색',
                    flower: '-',
                    season: '-',
                    food: '라면, 쌀국수 (별명: 라면과 결혼한 남자)'
                },
                pets: '',
                favorite_animal: '판다',
                nicknames: ['빅전연', '4세대 잇보이', '연또삐', '맏내'],
                catchphrase: '"웅냥냥" / "~한다구" / "~라구"',
                symbols: ['🦊', '애벌레', '☆'],
                sns: { instagram: 'https://www.instagram.com/yawnzzn' }
            }
        },
        { 
            id: 'm_beom_gyu', 
            name: '최범규 (BEOMGYU)', 
            role: '보컬 / 도입부 담당', 
            image_key: 'cover_member_beomgyu_v2',
            details: {
                group: '투모로우바이투게더 (빅히트 뮤직)',
                height: '180cm',
                birthplace: '대한민국 대구광역시 북구',
                debut: '2019년 3월',
                mbti: 'INFP',
                education: '한림연예예술고등학교 실용무용과 졸업',
                intro: '낮 3시와 새벽 3시가 공존하는 아이 — 밝고 여린 감성파',
                keywords: ['애교', '감수성', '완벽주의', '정 많음', '순수함'],
                motto: '행복하게 살자',
                hobbies: ['기타 연주', '떠들기', '리그 오브 레전드(마스터 티어)'],
                favorites: {
                    color: '파스텔 톤 (빨간색 원색 싫어함)',
                    flower: '-',
                    season: '-',
                    food: '단 음식 (매운 음식·가리는 음식 多)'
                },
                pets: '반려조 토토(아마존 앵무)',
                nicknames: ['밤규', '곰돌이', '말티즈', '쪼꼬미', '범또몰'],
                catchphrase: '"~잖아" / "헐"',
                symbols: ['🧸', '나비', '♢'],
                sns: { instagram: 'https://www.instagram.com/bamgyuuuu/' }
            }
        },
        { 
            id: 'm_tae_hyun', 
            name: '강태현 (TAEHYUN)', 
            role: '보컬 (비공식 메인보컬)', 
            image_key: 'cover_member_taehyun_v1',
            details: {
                group: '투모로우바이투게더 (빅히트 뮤직)',
                height: '177cm',
                birthplace: '대한민국 서울 강남구 역삼동',
                debut: '2019년 3월',
                mbti: 'ESTP (팀 내 유일 T)',
                education: '한림연예예술고등학교 실용음악과 졸업 / 사이버대학교 재학',
                intro: '똑부러지는 명언제조기, 알고 보면 장난기와 호기심 많은 반전 매력의 소유자',
                keywords: ['침착함', '다정함', '책임감', '은근한 금쪽이 기질'],
                motto: '후회 없이 즐기며 살자',
                hobbies: ['복싱', '유튜브 보기', '요리', '수다 떨기', '카드마술'],
                favorites: {
                    color: '노란색, 파스텔톤(민트, 하늘색)',
                    flower: '-',
                    season: '봄, 여름',
                    food: '딸기우유, 아이스 캐러멜 마키아토, 딸기·체리·복숭아'
                },
                pets: '고양이 호박(본가)',
                nicknames: ['다람쥐', '강텬', '사랑둥이', '명언제조기', '스포현'],
                catchphrase: '"~잖아" / "그치?"',
                symbols: ['🐿️', '🐱', '앵무새', '◯'],
                sns: { instagram: 'https://www.instagram.com/you.th' }
            }
        },
        { 
            id: 'm_hu_ning', 
            name: '휴닝카이 (HUENINGKAI)', 
            role: '막내 / 보컬', 
            image_key: 'cover_member_hueningkai_v1',
            details: {
                group: '투모로우바이투게더 (빅히트 뮤직)',
                height: '183cm',
                birthplace: '미국 하와이주 호놀룰루',
                nationality: '미국',
                debut: '2019년',
                mbti: 'ISTP',
                education: '한림연예예술고등학교 실용무용과 졸업',
                intro: '카메라 앞에선 애교천사, 집에선 조용한 덕후 감성러',
                keywords: ['배려심', '천사 같은 이타심', '덜렁거림', '내향성'],
                motto: '-',
                hobbies: ['악기 연주(기타·드럼·피아노)', '애니메이션 감상'],
                favorites: {
                    color: '-',
                    flower: '-',
                    season: '-',
                    food: '에그타르트'
                },
                pets: '고양이 아쿠아, 루비',
                nicknames: ['흠냐링', 'KIB', '껌딱지즈'],
                catchphrase: '-',
                symbols: ['🐧', '도마뱀', '♡'],
                sns: { instagram: 'https://www.instagram.com/kaikamal_' }
            }
        }
    ],
    groups: [
        {
            id: 'g_txt',
            name: '투모로우바이투게더 (TOMORROW X TOGETHER, TXT)',
            debut: '2019년 3월 4일',
            agency: 'BIGHIT MUSIC',
            group_type: '5인조 보이그룹',
            fandom: 'MOA (Moments Of Alwaysness)',
            meaning: '서로 다른 너와 내가 하나의 꿈으로 모여 함께 내일을 만들어간다.',
            member_ids: ['m_soo_bin', 'm_yeon_jun', 'm_beom_gyu', 'm_tae_hyun', 'm_hu_ning'],
            attributes: {
                '그룹 특징': ['청춘과 성장, 꿈을 주제로 한 스토리텔링', '앨범마다 이어지는 세계관', '다양한 장르를 소화하는 음악성', '높은 완성도의 퍼포먼스', '국내외에서 인정받는 대표 K-POP 그룹'],
                '실력': ['안정적인 라이브 보컬', '칼군무와 퍼포먼스', '뛰어난 무대 장악력', '다양한 콘셉트 소화력', '멤버들의 작사·작곡 참여'],
                '비주얼': ['다섯 멤버 모두 개성 있는 비주얼', '청량·판타지·다크 콘셉트 모두 소화', '감각적인 스타일링', '화보와 브랜드 활동으로 높은 화제성'],
                '팀워크': ['강한 신뢰와 끈끈한 케미', '서로를 배려하는 분위기', '뛰어난 무대 호흡', '예능과 콘텐츠에서 드러나는 자연스러운 관계성'],
                '글로벌 활동': ['월드투어 개최', '해외 음악 페스티벌 참가', 'Billboard 등 글로벌 차트 진입', '전 세계 MOA와 활발한 소통'],
                '대표 수상 및 기록': ['데뷔와 동시에 신인상 다수 수상', '골든디스크어워즈 본상 수상', 'MAMA Awards 주요 부문 수상', 'Melon Music Awards 수상', 'Asia Artist Awards 수상', 'Billboard 200 상위권 진입', '미국 및 일본 등 글로벌 음반 차트 상위권 기록', '대규모 월드투어 및 스타디움 공연 개최']
            },
            image_key: 'image_key_txt_group_photo_v1',
            keywords: ['Tomorrow', 'Dream', 'Youth', 'Growth', 'Storytelling', 'Performance', 'Teamwork', 'Visual', 'Global', 'MOA']
        }
    ],
    albums: [
        // 학생 지정 캐노니컬 순서 반영 (정규1→정규2→리패키지→정규3→정규4→미니1~8)
        { id: 'a_reg_1', title: '꿈의 장: MAGIC', type: 'regular', release_date: '2019.10.21', cover_image_key: 'cover_a_reg_1', tracks: ['New Rules', '9와 4분의 3 승강장에서 너를 기다려 (Run Away)', '간지러워 (Roller Coaster)', 'Poppin\' Star', '그냥 괴물을 살려두면 안 되는 걸까', 'Magic Island', '20cm', 'Angel Or Devil'] },
        { id: 'a_reg_2', title: '혼돈의 장: FREEZE', type: 'regular', release_date: '2021.05.31', cover_image_key: 'cover_a_reg_2', tracks: ['Anti-Romantic', '0X1=LOVESONG (I Know I Love You) feat. Seori', 'Magic', '소악행', '밸런스 게임', 'No Rules', '디어 스푸트니크', 'Frost'] },
        { id: 'a_reg_2_rep', title: '혼돈의 장: FIGHT OR ESCAPE', type: 'repackage', release_date: '2021.08.17', cover_image_key: 'cover_a_reg_2_rep', tracks: ['LO$ER=LO♡ER', 'Anti-Romantic', '0X1=LOVESONG (I Know I Love You) feat. Seori', 'Magic', '소악행', '밸런스 게임', 'No Rules', '교환일기 (두밧두 와리와리)', '디어 스푸트니크', 'Frost', '0X1=LOVESONG (Emocore Mix)'] },
        { id: 'a_reg_3', title: '이름의 장: FREEFALL', type: 'regular', release_date: '2023.10.13', cover_image_key: 'cover_a_reg_3', tracks: ['Growing Pain', 'Chasing That Feeling', 'Back for More (TXT Ver.)', 'Dreamer', 'Deep Down', 'Happily Ever After', '물수제비', 'Blue Spring', 'Do It Like That', 'Chasing That Feeling (English Ver.)'] },
        { id: 'a_reg_4', title: '별의 장: TOGETHER', type: 'regular', release_date: '2025.07.21', cover_image_key: 'cover_a_reg_4', tracks: ['Upside Down Kiss', 'Beautiful Strangers', 'Ghost girl', 'Sunday Driver', 'Dance With You', 'Take My Half', 'Bird of Night', '별의 노래'] },
        
        // 미니 앨범
        { id: 'a_mini_1', title: '꿈의 장: STAR', type: 'mini', release_date: '2019.03.04', cover_image_key: 'cover_a_mini_1', tracks: ['Blue Orangeade', '어느날 머리에서 뿔이 자랐다 (CROWN)', 'Our Summer', 'Cat & Dog', '별의 낮잠'] },
        { id: 'a_mini_2', title: '꿈의 장: ETERNITY', type: 'mini', release_date: '2020.05.18', cover_image_key: 'cover_a_mini_2', tracks: ['Drama', '세계가 불타버린 밤, 우린... (Can\'t You See Me?)', '샴푸의 요정', '거울 속의 미로', '동물원을 빠져나온 퓨마', 'Eternally'] },
        { id: 'a_mini_3', title: 'minisode1: BLUE HOUR', type: 'mini', release_date: '2020.10.26', cover_image_key: 'cover_a_mini_3', tracks: ['Ghosting', '5시 53분의 하늘에서 발견한 너와 나', '날씨를 잃어버렸어', 'Wishlist', '하굣길'] },
        { id: 'a_mini_4', title: 'minisode 2: Thursday\'s Child', type: 'mini', release_date: '2022.05.09', cover_image_key: 'cover_a_mini_4', tracks: ['Opening Sequence', 'Good Boy Gone Bad', 'Trust Fund Baby', 'Lonely Boy', 'Thursday\'s Child Has Far To Go'] },
        { id: 'a_mini_5', title: '이름의 장: TEMPTATION', type: 'mini', release_date: '2023.01.27', cover_image_key: 'cover_a_mini_5', tracks: ['Devil by the Window', 'Sugar Rush Ride', 'Happy Fools', 'Tinnitus', '네버랜드를 떠나며'] },
        { id: 'a_mini_6', title: 'minisode 3: TOMORROW', type: 'mini', release_date: '2024.04.01', cover_image_key: 'cover_a_mini_6', tracks: ['내일에서 기다릴게', '- --- -- --- .-. .-. --- .--', 'Deja Vu', 'Miracle', 'The Killa', 'Quarter Life', 'Deja Vu (Anemoia Remix)'] },
        { id: 'a_mini_7', title: '별의 장: SANCTUARY', type: 'mini', release_date: '2024.11.04', cover_image_key: 'cover_a_mini_7', tracks: ['Heaven', 'Over the Moon', 'Danger', 'Resist', 'Forty One Winks', 'Higher than Heaven'] },
        { id: 'a_mini_8', title: '7TH YEAR: 가시덤불에 잠시 바람이 멈췄을 때', type: 'mini', release_date: '2026.04.13', cover_image_key: 'cover_a_mini_8', tracks: ['Bed of Thorns', '하루에 하루만 더 (Stick With You)', 'Take Me to Nirvana (feat. 万妮达 Vinida Weng)', 'So What', '21st Century Romance', '다음의 다음'] }
    ],
    videos: [
        // [TITLE] 학생 제공 타이틀곡 목록 (2026 포함)
        { id: 'v_crown', title: '어느날 머리에서 뿔이 자랐다 (CROWN)', youtube_id: 'W3iSnJ663II', published_date: '2019-03-04', is_title: true },
        { id: 'v_run_away', title: '9와 4분의 3 승강장에서 너를 기다려 (Run Away)', youtube_id: '6yWPfUz0z94', published_date: '2019-10-21', is_title: true },
        { id: 'v_cant_you_see_me', title: '세계가 불타버린 밤, 우린... (Can\'t You See Me?)', youtube_id: 'cMFHUTJ13Ys', published_date: '2020-05-18', is_title: true },
        { id: 'v_blue_hour', title: '5시 53분의 하늘에서 발견한 너와 나', youtube_id: 'Vd9QkWsd5p4', published_date: '2020-10-26', is_title: true },
        { id: 'v_0x1', title: '0X1=LOVESONG (I Know I Love You) feat. Seori', youtube_id: 'd5bbqKYu51w', published_date: '2021-05-31', is_title: true },
        { id: 'v_loser_lover', title: 'LO$ER=LO♡ER', youtube_id: 'JzODRUBBXpc', published_date: '2021-08-17', is_title: true },
        { id: 'v_good_boy', title: 'Good Boy Gone Bad', youtube_id: 'Os_6c5j6YiQ', published_date: '2022-05-09', is_title: true },
        { id: 'v_sugar_rush', title: 'Sugar Rush Ride', youtube_id: 'P9tKTxbgdkk', published_date: '2023-01-27', is_title: true },
        { id: 'v_chasing', title: 'Chasing That Feeling', youtube_id: 'ISnyONG1dEc', published_date: '2023-10-13', is_title: true },
        { id: 'v_deja_vu', title: 'Deja Vu', youtube_id: 'DiHUEWBRQEI', published_date: '2024-04-01', is_title: true },
        { id: 'v_over_the_moon', title: 'Over The Moon', youtube_id: '80SH8Z_DOnY', published_date: '2024-11-04', is_title: true },
        { id: 'v_stick', title: '하루에 하루만 더 (Stick With You)', youtube_id: 'jOnLqqDRfY4', published_date: '2026-04-13', is_title: true },

        // [NON-TITLE] 학생 제공 수록곡 목록
        { id: 'v_blue_orangeade', title: 'Blue Orangeade', youtube_id: 'LTz8NjNQp-s', published_date: '2019-04-07', is_title: false },
        { id: 'v_cat_dog', title: 'Cat & Dog', youtube_id: 'NaKrke1EL1A', published_date: '2019-04-25', is_title: false },
        { id: 'v_nap_of_star', title: '별의 낮잠 (Nap of a Star)', youtube_id: 'XkDA02FHHik', published_date: '2019-06-05', is_title: false },
        { id: 'v_our_summer', title: 'Our Summer', youtube_id: 'M_iYqRNS_o0', published_date: '2019-07-12', is_title: false },
        { id: 'v_magic_island', title: 'Magic Island', youtube_id: 'KskEx8K-l2Q', published_date: '2019-11-18', is_title: false },
        { id: 'v_angel_devil', title: 'Angel Or Devil', youtube_id: 'cfm97EKin4c', published_date: '2019-11-29', is_title: false },
        { id: 'v_puma', title: '동물원을 빠져나온 퓨마', youtube_id: 'ImTgS5OXgbU', published_date: '2020-06-04', is_title: false },
        { id: 'v_eternally', title: 'Eternally', youtube_id: 'mxlloUcfUy0', published_date: '2020-06-29', is_title: false },
        { id: 'v_lost_weather', title: '날씨를 잃어버렸어', youtube_id: 'kwy0nR1_SBQ', published_date: '2020-11-13', is_title: false },
        { id: 'v_way_home', title: '하굣길 (Way Home)', youtube_id: 'n_f-eSCgktk', published_date: '2021-02-14', is_title: false },
        { id: 'v_magic', title: 'Magic', youtube_id: 'FQRnJvbLTAo', published_date: '2021-06-11', is_title: false },
        { id: 'v_frost', title: 'Frost', youtube_id: 'X3lA4EeeXtM', published_date: '2021-10-28', is_title: false },
        { id: 'v_opening_seq', title: 'Opening Sequence', youtube_id: 'iIh0XtoksFg', published_date: '2022-05-14', is_title: false },
        { id: 'v_trust_fund', title: 'Trust Fund Baby', youtube_id: 'N2Skanpc-cs', published_date: '2022-05-15', is_title: false },
        { id: 'v_thu_child_far', title: "Thursday's Child Has Far To Go", youtube_id: '82EQQGmPcHU', published_date: '2022-05-21', is_title: false },
        { id: 'v_devil_window', title: 'Devil by the Window', youtube_id: '0u50XFKHJKY', published_date: '2023-02-22', is_title: false },
        { id: 'v_happy_fools', title: 'Happy Fools', youtube_id: 'nAtSdy6of-k', published_date: '2023-02-28', is_title: false },
        { id: 'v_do_it_like_that', title: 'Do It Like That (with Jonas Brothers)', youtube_id: 'C0EYKxF1oTI', published_date: '2023-07-07', is_title: false },
        { id: 'v_back_for_more', title: 'Back for More (with Anitta)', youtube_id: 'e42AhJzYpVE', published_date: '2023-09-15', is_title: false }
    ]
};

const COVER_IMAGE_URLS = {
    cover_a_reg_1: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EA%BF%88%EC%9D%98%20%EC%9E%A5%20MAGIC%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_reg_2: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%9E%A5%20FREEZE%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_reg_2_rep: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%ED%98%BC%EB%8F%88%EC%9D%98%20%EC%9E%A5%20FIGHT%20OR%20ESCAPE%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_reg_3: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EC%9D%B4%EB%A6%84%EC%9D%98%20%EC%9E%A5%20FREEFALL%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_reg_4: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EB%B3%84%EC%9D%98%20%EC%9E%A5%20TOGETHER%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_1: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EA%BF%88%EC%9D%98%20%EC%9E%A5%20STAR%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_2: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EA%BF%88%EC%9D%98%20%EC%9E%A5%20ETERNITY%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_3: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/minisode1%20BLUE%20HOUR%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_4: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/minisode%202%20Thursday%27s%20Child%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_5: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EC%9D%B4%EB%A6%84%EC%9D%98%20%EC%9E%A5%20TEMPTATION%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_6: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/minisode%203%20TOMORROW%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_7: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EB%B3%84%EC%9D%98%20%EC%9E%A5%20SANCTUARY%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_a_mini_8: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/7TH%20YEAR%20%EA%B0%80%EC%8B%9C%EB%8D%A4%EB%B8%94%EC%97%90%20%EC%9E%A0%EC%8B%9C%20%EB%B0%94%EC%9D%B4%20%EB%A9%88%EC%8C%BC%EC%9D%84%20%EB%95%B4%20%EC%95%A0%EB%B2%8C%20%ED%91%9C%EC%A7%80.webp',
    cover_member_beomgyu_v2: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EC%B5%9C%EB%B2%94%EA%B7%9C%20%28BEOMGYU%29%20%EC%9D%B4%EB%AF%B8%EC%A7%80.webp',
    cover_member_taehyun_v1: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%EA%B0%95%ED%83%9C%ED%98%84%20%28TAEHYUN%29%20%EC%9D%B4%EB%AF%B8%EC%A7%80.webp',
    cover_member_hueningkai_v1: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%ED%9C%B4%EB%8B%9D%EC%B9%B4%EC%9D%B4%20%28HUENINGKAI%29%20%EC%9D%B4%EB%AF%B8%EC%A7%80.webp',
    image_key_txt_group_photo_v1: 'https://raw.githubusercontent.com/Seo-Yeeun/jamcoding/e18200b7705357cfec744375860ea23155c5b60b/%ED%88%AC%EB%AA%A8%EB%A1%9C%EC%9A%B0%EB%B0%94%EC%9D%B4%ED%88%AC%EA%B2%8C%EB%8D%94%20%28TOMORROW%20X%20TOGETHER%2C%20TXT%29%20%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84.webp'
};

// 제공된 raw URL만 직접 사용합니다.
function getImageSrc(imageKey) {
    if (!imageKey) return '';
    return COVER_IMAGE_URLS[imageKey] || imageKey;
}

// 외부 이미지 서버의 hotlink·Referer·차단 실패가 전체 레이아웃을 깨뜨리지 않게 처리합니다.
document.addEventListener('error', (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement)) return;

    image.hidden = true;
    const frame = image.closest('.stage-photo, .group-card, .album-item, .card, .access-album-tile, .signature-button');
    if (frame) frame.classList.add('image-missing');
}, true);

// DOM 요소
let contentArea = document.getElementById('content-area');
const errorMsg = document.getElementById('error-msg');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close-btn');
const tabBtns = document.querySelectorAll('.tab-btn');

// 초기화
function init() {
    setupHeroVisibility();
    setupParallax();
    setupTabs();
    setupJumpButtons();
    renderContinuousContent(); // 그룹 소개부터 영상까지 한 화면에 이어서 표시
    setupModalEvents();
}

// 히어로 영상이 화면에 보일 때는 제목과 안내 문구를 숨깁니다.
function setupHeroVisibility() {
    const hero = document.querySelector('.hero-video');
    if (!hero || !('IntersectionObserver' in window)) {
        document.body.classList.remove('hero-active');
        return;
    }

    const observer = new IntersectionObserver(([entry]) => {
        document.body.classList.toggle('hero-active', entry.isIntersecting);
    }, { threshold: 0.05 });

    observer.observe(hero);
}

// 탭과 히어로 바로가기 버튼을 같은 이동 흐름으로 연결합니다.
function selectCategory(category, shouldScroll = true) {
    const targetTab = Array.from(tabBtns).find(btn => btn.dataset.target === category);
    const targetSection = document.getElementById(`${category}-section`);
    if (!targetTab || !targetSection) return;

    tabBtns.forEach(btn => btn.classList.toggle('active', btn === targetTab));
    if (shouldScroll) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function setupTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => selectCategory(btn.dataset.target));
    });
}

function setupJumpButtons() {
    document.querySelectorAll('.section-jump').forEach(button => {
        button.addEventListener('click', () => selectCategory(button.dataset.target));
    });
}

// 현재 비디오 필터 상태 ('all', 'title', 'non-title')
let currentVideoFilter = 'all';
let memberModalReturnTarget = null;

// 통합 렌더링 엔진 (Schema 기반)
function renderContent(category) {
    contentArea.innerHTML = '<div class="loading-spinner">로딩 중...</div>';
    
    setTimeout(() => {
        contentArea.innerHTML = '';

        if (category === 'timeline') {
            renderInteractiveTimeline(contentArea);
            return;
        }
        
        // 비디오 탭일 경우 필터 UI 먼저 렌더링
        if (category === 'videos') {
            const filterContainer = document.createElement('div');
            filterContainer.className = 'video-filter-container';
            filterContainer.innerHTML = `
                <button class="filter-btn ${currentVideoFilter === 'all' ? 'active' : ''}" data-filter="all">전체 보기</button>
                <button class="filter-btn ${currentVideoFilter === 'title' ? 'active' : ''}" data-filter="title">타이틀곡 MV</button>
                <button class="filter-btn ${currentVideoFilter === 'non-title' ? 'active' : ''}" data-filter="non-title">비타이틀 / 기타</button>
            `;
            contentArea.appendChild(filterContainer);
            
            filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentVideoFilter = btn.dataset.filter;
                    renderContinuousContent(); // 전체 연속 섹션을 유지한 채 필터 갱신
                });
            });
        }

        let items = MOCK_DB[category] || [];

        // 앨범은 발매일 오래된 순(오름차순) 정렬
        if (category === 'albums') {
            items = [...items].sort((a, b) => {
                // YYYY.MM.DD 형식을 비교 가능한 문자열로 변환 (예: 2019.03.04 -> 2019-03-04)
                const dateA = a.release_date.replace(/\./g, '-');
                const dateB = b.release_date.replace(/\./g, '-');
                return new Date(dateA).getTime() - new Date(dateB).getTime();
            });
        }

        // 비디오 필터 적용
        if (category === 'videos' && currentVideoFilter !== 'all') {
            const isTitle = currentVideoFilter === 'title';
            items = items.filter(item => item.is_title === isTitle);
        }
        
        if (items.length === 0) {
            contentArea.innerHTML = '<p style="grid-column:1/-1; color:var(--text-sub)">등록된 콘텐츠가 없습니다.</p>';
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            
            // 앨범과 그룹 소개는 카드 형태를 유지하되, 그룹은 별도 상세 모달로 연결합니다.
            if (category === 'groups') {
                card.className = 'group-card';
                const groupDetailsHtml = Object.entries(item.attributes).map(([title, details]) => `
                    <section class="group-detail-section">
                        <h3>${title}</h3>
                        <ul>${details.map(detail => `<li>${detail}</li>`).join('')}</ul>
                    </section>
                `).join('');
                const memberNames = item.member_ids.map(memberId => {
                    const member = MOCK_DB.members.find(entry => entry.id === memberId);
                    return member ? `<span>${member.name}</span>` : '';
                }).join('');
                card.innerHTML = `
                    ${item.image_key ? `<img class="group-photo" src="${getImageSrc(item.image_key)}" alt="${item.name} 단체사진" loading="lazy" referrerpolicy="no-referrer">` : ''}
                    <h2>${item.name}</h2>
                    <p>${item.group_type} · ${item.agency} · 데뷔 ${item.debut}</p>
                    <p>팬덤 ${item.fandom}<br>${item.meaning}</p>
                    <div class="group-card-tags">${item.keywords.slice(0, 6).map(keyword => `<span>#${keyword}</span>`).join('')}</div>
                    <div class="group-members-inline"><strong>멤버</strong>${memberNames}</div>
                    <div class="group-details-inline">${groupDetailsHtml}</div>
                    <p class="group-source-note">학습용 데모 콘텐츠이며, 이미지·미디어의 저작권은 원작자와 소속사에 있습니다. 외부 미디어는 핫링크/CORS 정책에 따라 표시가 제한될 수 있습니다.</p>
                `;
            } else if (category === 'albums') {
                card.className = 'album-item';
                const coverSrc = getImageSrc(item.cover_image_key);
                card.innerHTML = `
                    ${coverSrc ? `<img class="album-thumb" src="${coverSrc}" alt="${item.title} 표지" loading="lazy" referrerpolicy="no-referrer">` : '<div class="album-thumb-placeholder">Cover</div>'}
                    <div>
                        <span class="album-title">${item.title}</span>
                        <span class="album-release">${item.release_date} · ${item.type.toUpperCase()}</span>
                    </div>
                `;
                card.addEventListener('click', () => openAlbumDetailModal(item));
            } else {
                card.className = 'card';
                // 이미지 소스 결정 (youtube_id 처리 포함)
                let src = getImageSrc(item.image_key);
                if (!src && item.youtube_id) {
                    src = `https://img.youtube.com/vi/${item.youtube_id}/hqdefault.jpg`;
                }
                
                // 카드 내부 HTML 구성
                card.innerHTML = `
                    <img src="${src}" alt="${item.title || item.name}" loading="lazy" referrerpolicy="no-referrer">
                    ${item.youtube_id ? '<div class="play-icon">▶</div>' : ''}
                    <div class="card-info">
                        <div class="card-title">${item.title || item.name}</div>
                        <div class="card-desc">${item.role || (item.type ? item.type.toUpperCase() : '') || item.release_date || ''}</div>
                    </div>
                `;
                
                // 클릭 이벤트 분기: 비디오는 플레이어, 멤버는 상세 프로필, 나머지는 이미지 모달
                if (item.youtube_id) {
                    card.addEventListener('click', () => openVideoModal(item.youtube_id));
                } else if (category === 'members' && item.details) {
                    card.addEventListener('click', () => openMemberDetailModal(item));
                } else if (src) {
                    card.addEventListener('click', () => openImageModal(src));
                }
            }
            
            contentArea.appendChild(card);
        });
    }, 300); // 네트워크 요청 시뮬레이션
}

// 그룹 소개부터 멤버·앨범·영상까지 세로로 연결해 렌더링합니다.
function renderContinuousContent() {
    const root = document.getElementById('content-area');
    const categories = [
        ['members', '멤버', '다섯 멤버의 이야기 만나기'],
        ['albums', '앨범', '앨범 표지와 제목을 훑고 선택한 앨범의 상세 정보 보기'],
        ['timeline', '타임라인', '앨범 발매 순서와 트랙 흐름을 발견하기'],
        ['videos', '영상', '공식 영상과 타이틀곡 MV']
    ];

    root.innerHTML = categories.map(([category, title, description]) => `
        <section id="${category}-section" class="continuous-section ${category}-section" aria-labelledby="${category}-section-title">
            <div class="section-heading">
                <span>${String(categories.findIndex(item => item[0] === category) + 1).padStart(2, '0')} / TXT ARCHIVE</span>
                <h2 id="${category}-section-title">${title}</h2>
                <p>${description}</p>
                ${category === 'videos' ? '<a class="official-youtube-link" href="https://www.youtube.com/channel/UCtiObj3CsEAdNU6ZPWDsddQ" target="_blank" rel="noopener noreferrer">TXT 공식 YouTube 채널 보기 ↗</a>' : ''}
            </div>
            <div class="section-content"></div>
        </section>
    `).join('');

    const sections = root.querySelectorAll('.continuous-section');
    let index = 0;
    const renderNext = () => {
        if (index >= categories.length) {
            contentArea = root;
            return;
        }
        contentArea = sections[index].querySelector('.section-content');
        if (categories[index][0] === 'albums') {
            renderAccessTimeline(contentArea);
        } else {
            renderContent(categories[index][0]);
        }
        index += 1;
        window.setTimeout(renderNext, 360);
    };
    renderNext();
}

// 모달 제어
function setupModalEvents() {
    // 닫기 버튼
    closeBtn.addEventListener('click', closeModal);
    
    // 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function openImageModal(src) {
    modal.innerHTML = `<div class="modal-content"><span class="close-btn">&times;</span><img src="${src}" alt="Expanded View"></div>`;
    setupModalCloseEvents();
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

function openMemberDetailModal(member) {
    const d = member.details;
    const tagsHtml = d.keywords.map(k => `<span style="display:inline-block; padding:4px 10px; background:rgba(139,122,255,0.15); border-radius:12px; font-size:0.8rem; margin-right:6px; margin-bottom:6px;">#${k}</span>`).join('');
    const snsHandle = d.sns?.instagram ? d.sns.instagram.split('/').filter(Boolean).pop() : '';
    const snsHtml = d.sns?.instagram ? `<a href="${d.sns.instagram}" target="_blank" rel="noopener noreferrer" style="color:var(--accent); text-decoration:none; font-weight:bold; display:inline-flex; align-items:center; gap:6px;">📷 Instagram (@${snsHandle})</a>` : '';

    modal.innerHTML = `
        <div class="modal-content album-detail-modal">
            <button type="button" class="close-btn" aria-label="멤버 상세 닫기">×</button>
            <div style="display:flex; gap:1.5rem; margin-bottom:1.5rem; align-items:flex-start;">
                <img src="${getImageSrc(member.image_key)}" alt="${member.name}" loading="lazy" referrerpolicy="no-referrer" style="width:120px; height:120px; object-fit:cover; border-radius:50%; border:2px solid var(--accent); flex-shrink:0;">
                <div>
                    <h2 style="font-size:1.6rem; margin-bottom:0.3rem;">${member.name}</h2>
                    <p style="color:var(--accent); font-weight:500; margin-bottom:0.5rem;">${member.role}</p>
                    <p style="font-size:0.9rem; color:var(--text-sub); line-height:1.5;">${d.intro}</p>
                </div>
            </div>
            
            <div style="margin-bottom:1.5rem;">${tagsHtml}</div>
            
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:1rem; font-size:0.9rem; margin-bottom:1.5rem; background:rgba(255,255,255,0.03); padding:1rem; border-radius:12px;">
                <div><span style="color:var(--text-sub)">출생지</span><br>${d.birthplace}</div>
                <div><span style="color:var(--text-sub)">키</span><br>${d.height}</div>
                <div><span style="color:var(--text-sub)">MBTI</span><br>${d.mbti}</div>
                <div style="grid-column:1/-1"><span style="color:var(--text-sub)">학력</span><br>${d.education}</div>
            </div>

            <div style="margin-bottom:1.5rem;">
                <h3 style="font-size:1rem; margin-bottom:0.5rem; color:#fff;">TMI & Favorites</h3>
                <ul style="list-style:none; font-size:0.9rem; color:var(--text-sub); line-height:1.8;">
                    <li>🎮 ${d.hobbies.join(', ')}</li>
                    <li>🎨 좋아하는 색: ${d.favorites.color}</li>
                    <li>🌻 꽃: ${d.favorites.flower} | 🍂 계절: ${d.favorites.season}</li>
                    <li>🍞 음식: ${d.favorites.food}</li>
                    ${d.pets ? `<li>🐾 반려동물: ${d.pets}</li>` : ''}
                    ${d.favorite_animal ? `<li>🐼 좋아하는 동물: ${d.favorite_animal}</li>` : ''}
                    <li>🏷️ 별명: ${d.nicknames.join(', ')}</li>
                    <li>💬 말버릇: ${d.catchphrase}</li>
                </ul>
            </div>

            <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:1rem; text-align:center;">
                ${snsHtml}
            </div>
        </div>`;
    setupModalCloseEvents();
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

function openGroupDetailModal(group) {
    const attributeHtml = Object.entries(group.attributes).map(([title, items]) => `
        <section style="margin-bottom:1.2rem;">
            <h3>${title}</h3>
            <ul style="padding-left:1.2rem; color:var(--text-sub); line-height:1.8;">${items.map(item => `<li>${item}</li>`).join('')}</ul>
        </section>
    `).join('');
    const membersHtml = group.member_ids.map(memberId => {
        const member = MOCK_DB.members.find(item => item.id === memberId);
        return member ? `<button class="filter-btn group-member-link" data-member-id="${member.id}">${member.name}</button>` : '';
    }).join('');

    modal.innerHTML = `
        <div class="modal-content album-detail-modal">
            <span class="close-btn">&times;</span>
            <div class="album-header">
                <h2>${group.name}</h2>
                <p class="album-meta">${group.group_type} · ${group.agency} · 데뷔 ${group.debut}</p>
            </div>
            <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
                <p><strong>팬덤</strong> · ${group.fandom}</p>
                <p style="color:var(--text-sub); margin-top:0.4rem;">${group.meaning}</p>
            </div>
            <h3>멤버</h3>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.5rem;">${membersHtml}</div>
            ${attributeHtml}
            <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:1rem; color:var(--text-sub); font-size:0.85rem;">핵심 키워드 · ${group.keywords.join(' · ')}</div>
            <p style="color:var(--text-sub); font-size:0.75rem; margin-top:1rem;">학습용 데모 콘텐츠이며, 관련 이미지·미디어의 저작권은 원작자와 소속사에 있습니다. 외부 미디어는 핫링크/CORS 정책에 따라 표시가 제한될 수 있습니다.</p>
        </div>`;
    setupModalCloseEvents();
    modal.querySelectorAll('.group-member-link').forEach(button => {
        button.addEventListener('click', () => {
            const member = MOCK_DB.members.find(item => item.id === button.dataset.memberId);
            if (member) openMemberDetailModal(member);
        });
    });
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

function openAlbumDetailModal(album) {
    const trackListHtml = album.tracks.map((t, i) => `<li><span class="track-no">${String(i + 1).padStart(2, '0')}</span> ${t}</li>`).join('');
    const coverSrc = getImageSrc(album.cover_image_key);
    
    modal.innerHTML = `
        <div class="modal-content album-detail-modal">
            <span class="close-btn">&times;</span>
            <div class="album-header">
                <h2>${album.title}</h2>
                <p class="album-meta">${album.release_date} · ${album.type.toUpperCase()}</p>
            </div>
            ${coverSrc ? `<img src="${coverSrc}" alt="${album.title} Cover" loading="lazy" referrerpolicy="no-referrer" style="width:100%; aspect-ratio:1/1; object-fit:cover; border-radius:8px; margin-bottom:1.5rem;">` : '<div class="album-cover-placeholder">Cover Image Pending</div>'}
            <ul class="track-list">${trackListHtml}</ul>
        </div>`;
    setupModalCloseEvents();
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

function openVideoModal(youtubeId) {
    modal.innerHTML = `
        <div class="modal-content video-wrapper">
            <span class="close-btn">&times;</span>
            <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&controls=0&disablekb=1&modestbranding=1&iv_load_policy=3&cc_load_policy=0" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        </div>`;
    setupModalCloseEvents();
    modal.classList.remove('hidden');
    requestAnimationFrame(() => modal.classList.add('show'));
}

function setupModalCloseEvents() {
    const newCloseBtn = modal.querySelector('.close-btn');
    if (newCloseBtn) newCloseBtn.onclick = closeModal;
}

function closeModal() {
    const returnTarget = memberModalReturnTarget;
    memberModalReturnTarget = null;
    modal.classList.remove('show');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.innerHTML = ''; // iframe 및 이미지 메모리 완전 정리
        if (returnTarget) {
            returnTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 300);
}

// 히어로 커서 패럴랙스: 별도 토글 없이 항상 작동합니다.
function setupParallax() {
    const banner = document.querySelector('.intro-banner');
    if (!banner) return;

    let frame = 0;
    const renderPosition = (event) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
            const rect = banner.getBoundingClientRect();
            const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
            const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
            banner.style.setProperty('--copy-x', `${(x * 8).toFixed(1)}px`);
            banner.style.setProperty('--copy-y', `${(y * 6).toFixed(1)}px`);
            banner.style.setProperty('--mark-x', `${(x * -14).toFixed(1)}px`);
            banner.style.setProperty('--mark-y', `${(y * -10).toFixed(1)}px`);
        });
    };

    banner.addEventListener('pointermove', renderPosition, { passive: true });
    banner.addEventListener('pointerleave', () => {
        banner.style.setProperty('--copy-x', '0px');
        banner.style.setProperty('--copy-y', '0px');
        banner.style.setProperty('--mark-x', '0px');
        banner.style.setProperty('--mark-y', '0px');
    });
}

// TXT / ACCESS 진입 및 섹션 탐색 레이어
function accessSection(category) {
    const root = document.getElementById('content-area');
    const names = { members:['MEMBERS','다섯 멤버의 세계에 접속했어.'], albums:['MUSIC','앨범과 트랙 데이터를 불러왔어.'], videos:['MEDIA','공식 영상 데이터를 연결했어.'] };
    if (category === 'timeline') { renderAccessTimeline(root); return; }
    const [title, desc] = names[category];
    root.innerHTML = `<div class="access-section-title"><h2>${title}</h2><p>ACCESSING / ${desc}</p></div><div class="access-grid" id="access-grid"></div>`;
    const grid = root.querySelector('#access-grid');
    let items = category === 'albums' ? [...MOCK_DB.albums].sort((a,b) => a.release_date.localeCompare(b.release_date)) : MOCK_DB[category];
    items.forEach(item => {
        const card = document.createElement('div');
        if (category === 'albums') {
            card.className = 'album-item';
            const src = getImageSrc(item.cover_image_key);
            card.innerHTML = `${src ? `<img class="album-thumb" src="${src}" alt="${item.title} 표지">` : '<div class="album-thumb-placeholder">COVER</div>'}<div><span class="album-title">${item.title}</span><span class="album-release">${item.release_date} · ${item.type.toUpperCase()}</span></div>`;
            card.onclick = () => openAlbumDetailModal(item);
        } else {
            card.className = 'card';
            const src = category === 'videos' ? `https://img.youtube.com/vi/${item.youtube_id}/hqdefault.jpg` : getImageSrc(item.image_key);
            card.innerHTML = `<img src="${src}" alt="${item.title || item.name}" loading="lazy" referrerpolicy="no-referrer">${category === 'videos' ? '<div class="play-icon">▶</div>' : ''}<div class="card-info"><div class="card-title">${item.title || item.name}</div><div class="card-desc">${item.role || item.published_date || ''}</div></div>`;
            if (category === 'videos') card.onclick = () => openVideoModal(item.youtube_id);
            else card.onclick = () => openMemberDetailModal(item);
        }
        grid.appendChild(card);
    });
    root.scrollIntoView({behavior:'smooth', block:'start'});
}
function renderInteractiveTimeline(root) {
    const entries = [...MOCK_DB.albums].sort((a, b) => a.release_date.localeCompare(b.release_date));
    root.innerHTML = `<div class="timeline-list" aria-label="앨범 발매 타임라인"></div>`;
    const list = root.querySelector('.timeline-list');

    entries.forEach(item => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'timeline-item timeline-select';
        button.setAttribute('aria-label', `${item.title} 앨범 상세 보기`);
        const coverSrc = getImageSrc(item.cover_image_key);
        button.innerHTML = `
            <span class="timeline-year">${item.release_date.slice(0, 4)}</span>
            <span class="timeline-album-row">
                ${coverSrc ? `<img class="timeline-cover" src="${coverSrc}" alt="${item.title} 표지" loading="lazy" referrerpolicy="no-referrer">` : '<span class="timeline-cover timeline-cover-fallback" aria-hidden="true">TXT</span>'}
                <span class="timeline-album-copy"><strong>${item.title}</strong><span>${item.release_date} · ${item.tracks.length} TRACKS · 상세 보기 →</span></span>
            </span>
        `;
        button.addEventListener('click', () => openAlbumDetailModal(item));
        list.appendChild(button);
    });
}

function renderAccessTimeline(root) {
    const entries = [...MOCK_DB.albums].sort((a, b) => a.release_date.localeCompare(b.release_date));
    root.innerHTML = `<div class="access-section-title"><h2>ALBUMS</h2><p>${entries.length}개 앨범 · 표지를 선택하면 발매일과 트랙리스트를 볼 수 있어</p></div><div class="access-album-grid" aria-label="TXT 앨범 목록"></div>`;
    const grid = root.querySelector('.access-album-grid');

    entries.forEach(item => {
        const album = document.createElement('button');
        const coverSrc = getImageSrc(item.cover_image_key);
        album.type = 'button';
        album.className = 'access-album-tile';
        album.setAttribute('aria-label', `${item.title} 앨범 상세 보기`);
        album.innerHTML = `
            ${coverSrc ? `<img src="${coverSrc}" alt="${item.title} 표지" loading="lazy" referrerpolicy="no-referrer">` : '<span class="access-album-cover-fallback" aria-hidden="true">TXT</span>'}
            <strong>${item.title}</strong>
        `;
        album.addEventListener('click', () => openAlbumDetailModal(item));
        grid.appendChild(album);
    });
}
function startAccessLoader() {
    const loader = document.getElementById('system-loader');
    const message = document.getElementById('loader-message');
    const status = document.getElementById('loader-status');
    const line = loader.querySelector('.loader-progress i');
    const tracks = {
        members: loader.querySelector('[data-loader-track="members"] i'),
        timeline: loader.querySelector('[data-loader-track="timeline"] i'),
        media: loader.querySelector('[data-loader-track="media"] i')
    };
    const startedAt = performance.now();
    const duration = 2500;

    message.textContent = 'INITIALIZING...';
    status.textContent = '연결 대기 중...';
    line.style.width = '0%';

    const animate = (now) => {
        const elapsed = now - startedAt;
        const progress = Math.min(elapsed / duration, 1);
        const fill = (start, end) => Math.max(0, Math.min(1, (progress - start) / (end - start)));
        const members = fill(0.04, 0.34);
        const timeline = fill(0.25, 0.68);
        const media = fill(0.58, 0.92);

        tracks.members.style.width = `${members * 100}%`;
        tracks.timeline.style.width = `${timeline * 100}%`;
        tracks.media.style.width = `${media * 100}%`;
        line.style.width = `${progress * 100}%`;

        if (progress < 1) {
            requestAnimationFrame(animate);
            return;
        }

        Object.values(tracks).forEach(track => { track.style.width = '100%'; });
        message.textContent = 'CONNECTION ESTABLISHED.';
        status.textContent = 'TXT 데이터 연결 완료';
        setTimeout(() => {
            loader.classList.add('is-done');
            document.body.classList.remove('access-loading');
            document.body.classList.add('access-ready');
        }, 500);
    };

    requestAnimationFrame(animate);
}
function scrollToAccessSection(category) {
    const target = document.getElementById(`${category}-section`);
    if (!target) return;

    const hasRenderedContent = category !== 'videos' || target.querySelector('.card, .error-message');
    if (!hasRenderedContent) {
        window.setTimeout(() => scrollToAccessSection(category), 180);
        return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function enterAccess(memberId = '', targetCategory = '') {
    document.body.classList.add('entry-entered');
    const member = memberId ? MOCK_DB.members.find(item => item.id === memberId) : null;
    const stageKicker = document.querySelector('.stage-kicker');

    if (member && stageKicker) {
        stageKicker.textContent = `SELECTED / ${member.name.split(' (')[0]} · ARCHIVE CONNECTED`;
    } else if (stageKicker) {
        stageKicker.textContent = 'WELCOME, MOA. / CONNECTION ESTABLISHED';
    }

    // 모든 메뉴는 동일한 연속 아카이브를 만든 뒤 각자의 섹션으로 이동합니다.
    renderContinuousContent();

    const sectionCategory = member ? 'members' : targetCategory;
    if (sectionCategory) {
        window.setTimeout(() => scrollToAccessSection(sectionCategory), 520);
    }

    if (member) {
        memberModalReturnTarget = document.querySelector('.scrapbook-stage');
        setTimeout(() => openMemberDetailModal(member), 650);
    }
}
function renderNamuImageList() {
    const list = document.getElementById('namu-image-list');
    if (!list) return;

    const pairs = [];
    const seen = new Set();
    const addPair = (description, url) => {
        if (!url || !url.includes('raw.githubusercontent.com')) return;
        if (seen.has(url)) return;
        seen.add(url);
        pairs.push({ description, url });
    };

    document.querySelectorAll('img[src*="raw.githubusercontent.com"]').forEach(image => {
        addPair(image.alt || '코드에 삽입된 이미지', image.getAttribute('src'));
    });

    MOCK_DB.members.forEach(member => {
        addPair(`${member.name} 이미지`, getImageSrc(member.image_key));
    });
    MOCK_DB.groups.forEach(group => {
        addPair(`${group.name} 단체사진`, getImageSrc(group.image_key));
    });
    MOCK_DB.albums.forEach(album => {
        addPair(`${album.title} 앨범 표지`, getImageSrc(album.cover_image_key));
    });

    Object.entries(COVER_IMAGE_URLS).forEach(([key, url]) => {
        const album = MOCK_DB.albums.find(item => item.cover_image_key === key);
        const member = MOCK_DB.members.find(item => item.image_key === key);
        const description = album ? `${album.title} 앨범 표지` : member ? `${member.name} 이미지` : `${key} 이미지`;
        addPair(description, url);
    });

    list.innerHTML = '';
    pairs.forEach(({ description, url }) => {
        const item = document.createElement('li');
        const label = document.createElement('strong');
        label.textContent = `${description}: `;
        item.append(label, document.createTextNode(url));
        list.appendChild(item);
    });
}

function initAccess() {
    renderNamuImageList();
    const photo = document.getElementById('home-photo');
    if (photo && MOCK_DB.groups[0]) {
        const photoFrame = photo.closest('.stage-photo');
        photo.addEventListener('load', () => {
            photo.hidden = false;
            if (photoFrame) photoFrame.classList.remove('is-fallback');
        }, { once: true });
        photo.referrerPolicy = 'no-referrer';
        photo.src = getImageSrc(MOCK_DB.groups[0].image_key);
        if (photo.complete && photo.naturalWidth === 0) showPhotoFallback();
    }

    document.querySelectorAll('[data-access]').forEach(button => button.addEventListener('click', () => {
        const category = button.dataset.access;
        enterAccess('', category);
    }));

    document.querySelectorAll('.signature-button').forEach(button => button.addEventListener('click', () => {
        // 사인은 특정 멤버 상세가 아니라 TXT 단체 입장 인터페이스로 사용합니다.
        enterAccess();
    }));

    const enterButton = document.querySelector('.entry-enter');
    if (enterButton) enterButton.addEventListener('click', () => enterAccess());
    startAccessLoader();
}
// 기존 데이터·모달 엔진은 유지하고 새 진입 흐름만 연결합니다.
document.addEventListener('DOMContentLoaded', initAccess);