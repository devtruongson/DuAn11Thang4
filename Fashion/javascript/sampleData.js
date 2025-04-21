const TYPE = "thucung";

const type = localStorage.getItem("type_app") || null;
if (!type) {
    localStorage.clear();
    localStorage.setItem("type_app", "fashion");
}

if (type === TYPE) {
    localStorage.clear();
}

if (!localStorage.getItem("products")) {
    const sampleProducts = [
        {
            id: 1745216916786,
            name: "Áo Sơ Mi Kẻ Thêu BST10 Dài Tay Unisex By PEABOO Form Rộng Thoáng Mát Dành Cho Nam Nữ",
            category: "Áo Sơ Mi Nữ",
            subcategory: "áo",
            sku: "ASM01",
            price: 155000,
            salePrice: 135000,
            stock: 1000,
            material: "Cotton",
            description:
                'Áo Sơ Mi Kẻ Thêu BST10 Dài Tay Unisex By PEABOO Form Rộng Thoáng Mát Dành Cho Nam Nữ\n\nÁo Sơ Mi Kẻ chất vải oxford, kết hợp giữa sợi bông và sợi polyester với nhiều ưu điểm vượt trội như khả năng chống phai màu, độ bền cao, mềm mại, thoáng mát, thấm hút mồ hôi, đường may chuẩn chỉnh, tỉ mỉ, chắc chắn.\n\nThiết kế áo hiện đại, trẻ trung, năng động, dễ phối đồ phù hợp cho cả nam và nữ, đi học, di du lịch, dạo phố, hẹn hò,...\n\n\n\n\n\n\n\n\n\n\n\nPHƯƠNG CHÂM SHOP "BÁN HÀNG ONLINE LÀ BÁN NIỀM TIN"\n\n\n\n#sơ_mi_nữ_cao_cấp #áo_sơ_mi_nữ_đẹp #sơ_mi_nữ_form_rộng #sơ_mi_đẹp #sơ_mi_kiêu_đẹp_nữ #kiểu_áo_sơ_mi_nữ_đẹp #mẫu_sơ_mi_kiểu #sơ_mi_trắng_nữ_tay_lỡ #áo_sơ_mi_trắng_nữ_tay_lỡ #sơ_mi #áo_sơ_mi_nữ_cao_cấp #so_mi_nu #so_mi_nữ #áo_sơ_mi_lụa #áo_sơ_mi_đẹp #áo_sơ_mi_nữ_đẹp #áo_sơ_mi_thêu #so_mi_nam',
            colors: ["Đỏ", "Xanh", "Đen"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo sơ mi", "áo nữ"],
            onSale: true,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8hbwo4r1d3be9.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m7kme0cclg3q76.webp",
            ],
        },
        {
            id: 1745217174920,
            name: "Áo Sơ Mi Lụa Nữ Thiết Kế Dấu Cúc Che Khuyết Điểm V1 Hiệu Quả, Áo Sơ Mi Trắng Cổ Đức Form Rộng Tay Dài CHANMINU A16",
            category: "Áo Sơ Mi Nữ",
            subcategory: "Thời Trang",
            sku: "ASM02",
            price: 181000,
            salePrice: 121000,
            stock: 100,
            material: "Cotton",
            description:
                'Áo Sơ Mi Lụa Nữ Thiết Kế Dấu Cúc Che Khuyết Điểm V1 Hiệu Quả, Áo Sơ Mi Trắng Cổ Đức Form Rộng Tay Dài  CHANMINU A16\n\n\n\n CHANMINU không đơn thuần chỉ là quần áo, chúng luôn mang đến giá trị "Chân - Thiện - Mỹ" cho khách hang, mang lại vẻ đẹp tuyệt đối cho chị em phụ nữ, sự tự tin, niềm hạnh phúc làm chủ cuộc sống của chính mình.\n\n\n\n1.Thông tin sản phẩm Áo sơ mi lụa kiểu dấu cúc dài tay phong cách thời trang công sở mới, áo sơ mi trắng cổ đức form rộng tay dài A16\n\n\n\n\n\n\n\n+ áo sơ mi dài tay thiết kế cổ đức: Lụa Ngọc Trai Cao Cấp, không phai màu, chất co dãn nhẹ, mặc đứng dáng, chống nhăn, có độ thoáng khi mặc, thấm hút mồ hôi tốt.\n\n\n\n+ áo sơ mi công sở có nẹp dấu cúc giúp che khuyết điểm V1, V2 hoàn hảo nhất, thiết kế tối giản thanh lịch.\n\n\n\n+ Áo sơ mi nữ công sở có thể mặc hằng ngày cùng quần âu, chân váy …..là bạn đã có những sét đồ công sở ấn tượng\n\n\n\n*** Đây là sự lựa chọn đầu tiên cho gu thời trang công sở của những cô nàng văn phòng.\n\n- Màu sắc: Trắng, Đen, Be, xanh đậm, Xanh ngọc. Đỏ Đô, \n\n- Size: S, M, L, XL ( xem phần hình ảnh)\n\n\n\n2. chính sách đổi trả\n\n-Với hàng Shop gửi nhầm Size, nhầm Mẫu, hàng lỗi, có vết ố bẩn lạ. shop sẽ có trách nhiệm đổi lại hàng cho quý khách, miễn phí 100% tiền cước vận chuyển.\n\n\n\n-Trường hợp quý khách mặc chật hoặc rộng, đặt nhầm mẫu, SHOP hỗ trợ đổi Size hoặc đổi lại mẫu cho quý khách, khách chịu tiền cước 2 chiều, giá trị sản phẩm đổi sang tương đương hoặc lớn hơn sp cũ\n\n\n\n-Hàng gửi đổi phải còn nguyên nhãn mác, chưa sử dụng, không có mùi lạ (mùi cơ thể, nước hoa... khi nhận lại hàng nếu phát hiện những trường hợp như trên SHOP có quyền từ chối đổi\n\ntrả)\n\n- Qúy khách vui lòng quay video khui hàng để dễ dàng giải quyết khiếu nại. Chi tiết các bạn có\n\nthể nhắn tin cho Shop để được hướng dẫn chi tiết khi gặp trường hợp cần hỗ trợ nhé \n\n\n\n3. Shop cam kết: Sơ mi lụa tay dài thiết kế dấu cúc lịch lãm chất vải lụa mát , áo sơ mi nữ công sở cổ đức dáng suông cơ bản\n\n- Không bán hàng kém chất lượng. \n\n- áo sơ mi dài tay 100% giống mô tả \n\n- Tư vấn nhiệt tình, chu đáo luôn lắng nghe khách hàng để phục vụ tốt nhất. \n\n- Giao hàng nhanh đúng tiến độ không phải để quý khách chờ đợi lâu để nhận hàng.\n\n\n\nChúc Khách Yêu mua hàng Vui vẻ tại hàng thiết kế CHANMI\n\n\n\n#aosomilua #somilua #somiluanu #aosomitrang #aosominucongso #sominucongso #aosomidaitay #somiden #somitrangnu #aosomilua #somilua #aosomiluanu #aosomicongso #aosomidennu #aosomihanquoc #aosomiformrong #aosominutrang #aosominuformrong #somicongso #aosomicongsonu #aosomi #aosomitrungniên #aoso #aosominuhanquoc #aosominukieuhanquoc #aosominu #aosomi #aosominudep #sominucongso #aosomikhongnhan #aosominukieudep #aosomicaocap #aosominucaocap #cackieuaosominudethuong #aosomi #cackieuaosominudethuong #cackieuaosominudaitaydep #somicaocap #somidep #aosomitrang #aosominukieu #mauaosominudep #aocongso #sominudep #aosomikieudep #aosomiden #aosominudep #aosomihanquocnu #aosominucaocaphanghieu #muaaosomitrangnu #aosomitrangnuhanghieu #aosomikieudep #aosominugiare #aosominutrang #aosominucongsocaocap #aosominu #aosomikieunu #aosominukieu ',
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo sơ mi", "áo nữ"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxup0pcm8bmh25.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lxup0pcm43q3dd.webp",
            ],
        },
        {
            id: 1745217305006,
            name: "Đầm vest công sở Nhật Vy dập ly tay dáng dài chất lụa sọc gân phù hợp dự tiệc sang chảnh - D2724",
            category: "Váy Công Sở Nữ",
            subcategory: "Chân váy",
            sku: "ASM03",
            price: 244000,
            salePrice: 144000,
            stock: 190,
            material: "Cotton",
            description:
                "Đầm vest công sở Nhật Vy dập ly tay ngắn form dáng dài chất lụa sọc gân phù hợp dự tiệc dạo phố sang chảnh - D2724\n\n👑 Sản phẩm được thiết kế độc quyền bởi thương hiệu NHẬT VY BOUTIQUE - tạo nên phong cách của riêng bạn - bạn vẫn là bạn nhưng sẽ ở phiên bản đặc biệt và hoàn hảo nhất!!\n\n-------------------------------\n\n❤️ SỐ ĐO TỪNG SIZE: (Khách liên hệ shop để được tư vấn chính xác hơn)\n\nCHIỀU DÀI ĐẦM : 110CM\n\nSIZE S: NGỰC < 88cm - EO < 70cm - CỬA TAY < 30cm\n\nSIZE M: NGỰC < 94cm - EO < 76cm - CỬA TAY < 32cm\n\nSIZE L: NGỰC < 100cm - EO < 82cm - CỬA TAY < 34cm\n\nSIZE XL: NGỰC < 106cm - EO < 88cm - CỬA TAY < 36cm\n\nSIZE 2XL: NGỰC < 112cm - EO < 94cm - CỬA TAY < 38cm\n\n-------------------------------\n\n⚠️ LƯU Ý\n\n- Khách lưu ý đo vòng eo trên rốn tầm 4-5cm (ĐOẠN EO NHỎ NHẤT)\n\n- Bảng size chỉ mang tính chất tham khảo, tùy thuộc vào số đo cơ thể mỗi người và chất liệu vải khác nhau sẽ có sự chênh lệch nhất định từ 1 - 2cm\n\n- Màu sắc vải/ sản phẩm sẽ chênh lệch thực tế một phần nhỏ, do ảnh hưởng về độ lệch màu của ánh sáng nhưng vẫn đảm bảo chất lượng\n\n-------------------------------\n\n❤️ THÔNG TIN SẢN PHẨM\n\n   Đầm vest công sở Nhật Vy dập ly tay ngắn form dáng dài chất lụa sọc gân phù hợp dự tiệc dạo phố sang chảnh - D2724\n\n- Chất liệu : LỤA SỌC GÂN HÀN\n\n- Họa tiết : TRƠN\n\n- Kiểu tay : TAY NGẮN \n\n- Dáng đầm : CÓ EO , DÂY KÉO SAU , KHÔNG LÓT , KHÔNG TÚI\n\n- Màu: ĐEN - NUDE\n\n-------------------------------\n\n❤ HƯỚNG DẪN BẢO QUẢN :\n\n- Giặt tay hoặc giặt bằng máy không quá 30 độ C.\n\n- Nên sử dụng bàn là hơi nước.\n\n- Không giặt chung đồ bị ra màu.\n\n- Giặt bằng nước lạnh ở nước giặt đầu tiên. \n\n-------------------------------\n\n🌈QUY ĐỊNH ĐỔI HÀNG: \n\n🔥 SHOP CHỈ HỖ TRỢ ĐỔI TRONG VÒNG 7 NGÀY SAU KHI NHẬN HÀNG\n\n👉 Trường hợp đổi hàng do LỖI SẢN PHẨM & GỬI THIẾU:\n\n✅ Các bạn nhắn tin cho shop để được hỗ trợ (trường hợp thiếu hàng chỉ hỗ trợ khi có clip khui và chụp đơn hàng lúc nhận)\n\n✅ Đổi hàng/giao lại miễn phí nếu: giao nhầm mẫu, nhầm size, giao thiếu sản phẩm\n\n---------------\n\n👉 Trường hợp đổi SIZE/SẢN PHẨM KHÁC do khách yêu cầu\n\n✅ Giá đổi sang sản phẩm khác sẽ áp dụng giá gốc, không áp dụng giá sale trên Shopee.\n\n✅ Sản phẩm vẫn còn mới nguyên tem mác, chưa qua sử dụng, giặt là, chỉnh sửa.\n\n✅ Khách hàng thanh toán phí ship 2 chiều và chênh lệch giá sản phẩm mới. \n\n💋 Chat ngay với NHẬT VY BOUTIQUE để được tư vấn bạn nhé!\n\n#nhatvyboutique #maihouse #thoitrangthietke #vay #dam #damxinh #damthietke #damgiare #thoitranggiare #hottrend #damnu #damdichoi # damditiec #damcongso #damsale #mienship #damdep #damcovest #damvest #damnude #damden #damxeply #damvesthottrend #congsothanhlich #damluahanquoc #damxeply",
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo thun", "nam", "hè"],
            onSale: true,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/e9a2d0ade3b20e191628586dc084f1b0.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lh71v8y0p8tv4b.webp",
            ],
        },
        {
            id: 1745217491780,
            name: "Quần Jean Ống Rộng Nữ Lưng Cao Dáng Suông LIMISU, Quần Bò Nữ Màu Xanh Basic Phong Cách Ulzzang JT",
            category: "Quần Jean Nữ",
            subcategory: "Thời Trang",
            sku: "ATN001",
            price: 89000,
            salePrice: 79000,
            stock: 198,
            material: "Cotton",
            description:
                "1. THÔNG TIN SẢN PHẨM\n\n- Tên sản phẩm: Quần Jean Ống Rộng Nữ Lưng Cao Dáng Suông LIMISU,  Quần Bò Nữ Màu Xanh Basic Phong Cách Ulzzang JT\n\n\n\n- Size: S-M-L-XL\n\n\n\n- Màu sắc: Xanh Nhạt - Xanh Rêu\n\n\n\n- Chất liệu: jean cao cấp\n\n\n\n- Kiểu dáng:  ống suông, cạp cao.\n\n\n\n- Đường may chuẩn chỉnh, tỉ mỉ, chắc chắn.\n\n\n\n\n\n2. THÔNG SỐ SẢN PHẨM:\n\n- Size S: Eo ( 63- 64 )  Chiều dài 96cm.  Cân nặng 38kg - 44kg\n\n- Size M: Eo (67- 68)   Chiều dài 98cm.  Cân nặng 45kg - 52kg\n\n- Size L: Eo (71- 72 )   Chiều dài 100cm.  Cân nặng 53kg - 58kg\n\n- Size XL: Eo (75- 76)  Chiều dài 102cm.  Cân nặng 59kg - 65kg\n\n\n\n4. CHÍNH SÁCH ĐỔI TRẢ\n\n\n\n- Các trường hợp được chấp nhận đổi trả\n\n\n\n+ Hàng hoá vẫn còn mới nguyên tem mác, chưa qua sử dụng.\n\n\n\n+ Hàng hoá bị lỗi hoặc hư hỏng do vận chuyển hoặc do nhà sản xuất.\n\n\n\n- Các trường hợp không được đổi trả:\n\n\n\n+ Quá 07 ngày kể từ khi Quý khách nhận hàng từ shopee.\n\n\n\n+ Gửi lại hàng không đúng mẫu mã, không phải sản phẩm của shop.\n\n\n\n5. CHÚ Ý\n\n- Do màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%.\n\n\n\n- Bảng size chỉ mang tính chất tham khảo, vui lòng nhắn tin cho shop để được tư vấn size chuẩn nhất.\n\n\n\nquần jean nữ\n\nquần jean ống rộng nữ\n\nquần ống rộng nữ\n\nquần jean suông nữ\n\nquần bò nữ\n\nquần bò rộng nữ\n\nquần bò xuông nữ\n\nquần jean cạp cao nứ\n\nquần ống suông nữ\n\nquần bò suông nữ\n\nquần jean den nữ\n\nquần xám ống rộng nữ\n\nquần jeans nữ\n\nquần jeans nữ lưng cao\n\n#quầnjean #quầnjeans #quầnjeanốngrộng #quầnjean #quanjeanongsuongnulungcao #quầnốngrộngnữ #quầnjeannữốngsuônglưngcao #quầnjeanốngrộng #quầnjeanốngrộng #quầndàiốngsuôngnữ #quầnjeanssuôngnữ #quầnjeanốngsuông #quầnjeanốngsuônglưngcao #quanjeanongsuongnulungcao #quanongrongretro #quanjeansuongretro\n\n#quanjeanscapcao #limisu #limisu #limisuclothing",
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["S", "M", "L", "XL"],
            tags: [""],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2peeyhz0oauca.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2pefkdf1r0m71.webp",
            ],
        },
        {
            id: 1745217784992,
            name: "Giày Bít Mũi Nữ Cao 5cm Phối Nơ Da Thật, Giày Slingback Cao Gót Mũi Nhọn Đế Vuông NUDDO N5555",
            category: "Giày Nữ",
            subcategory: "Thời Trang",
            sku: "ASM07",
            price: 120093,
            salePrice: 87887,
            stock: 23,
            material: "Cotton",
            description:
                "HƯỚNG DẪN CHỌN SIZE DÀNH CHO GIÀY CAO GÓT NỮ NUDDO.\n\n  🔸 Giày cao gót nữ công sở NUDDO sản xuất theo tiêu chuẩn size giày Việt Nam, bạn chọn như size giày thường mang.\n\n  🔸Trường hợp bạn mua giày của Nuddo mà mang giày vào chân hơi rộng hoặc chật chân, bạn vui lòng liên hệ CSKH để đk đổi size.\n\n\n\n🌸HƯỚNG DẪN SỬ DỤNG VÀ BẢO QUẢN GIÀY CAO GÓT NỮ NUDDO.\n\n  \n\n   🔸 Hãy thường xuyên,vệ sinh đôi giày của bạn, chúng sẽ giúp cho giày bạn luôn mới hơn. \n\n   🔸 Khi giày bị bẩn đừng chà hay giặt rửa trực tiếp bằng nước lạnh. \n\n   🔸Vệ sinh giày bằng vải sạch thấm nước xà bông loãng hoặc kem đánh răng. Lau rửa nhẹ nhàng, sau đó lau khô lại bằng khăn sạch. \n\n   🔸 Phơi giày ở nơi khô thoáng, tránh nắng gắt hoặc nhiệt độ cao.\n\n\n\n🌸 TÍNH ỨNG DỤNG VÀ CÁCH PHỐI ĐỒ VỚI GIÀY CAO GÓT NỮ NUDDO\n\n\n\n  🔸 Cách phối đồ hợp với giày cao gót NUDDO: Giày được thiết kế basic bạn có thể phối giày cùng với váy công sở, quần vải, quần jeans, chân váy xòe, váy maxi..\n\n  🔸Phom dáng của giày được thiết kế đẹp, chuẩn size thích hợp với người đi làm, văn phòng công sở, đồng phục công ty, bao gồm cả trung niên.\n\n\n\n🌸 NUDDO CAM KẾT VỚI KHÁCH HÀNG\n\n\n\n   🔸Sản phẩm GIÀY CÔNG SỞ NỮ CAO CẤP NUDDO chính hãng, sản xuất tại Việt Nam, do Cty TNNH ™ NUDDO Sản xuất.\n\n   🔸Hình ảnh thực tế 100% giống mô tả, do TEAM NUDDO tự chụp\n\n   🔸Hỗ trợ đổi size giày trong 30 ngày kể từ ngày nhận hàng.\n\n   🔸NUDDO bảo hành 12 tháng sử dụng giày cao gót \n\n\n\n🌸 CHÍNH SÁCH ĐỔI GIÀY CAO GÓT NỮ THEO QUY ĐỊNH NUDDO \n\n    \n\n  📛 Đổi size hoặc mẫu trong 30 ngày, ko cần lý do, chúng tôi muốn bạn có sự trải nghiệm  *WOW* đối với sản phẩm và dịch vụ của chúng tôi.\n\n  📛 Mọi vấn đề vui lòng thông báo đến shop trong vòng TỐI ĐA 30 NGÀY kể từ khi nhận giày.\n\n#giaycaogot5p #giaybitmuinu #giayden #giaycongsonu #giaycaogotnu #sucmuinhon #slingback #giaycongso #giaycaogot #guoc5p #giaybupbenu #giaymuinhon #giaybupbemuinhon #giaynu #giaybupbemuinhon #giaybitmui #giaychome",
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo thun", "nam", "hè"],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0eri6jb02hb5a.webp",
                "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0g5rfiep9qn15.webp",
            ],
        },
    ];
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}
if (!localStorage.getItem("categories")) {
    const sampleCategories = [
        { id: 1745217996593, name: "Áo Sơ Mi Nữ", description: "Áo Sơ Mi Nữ" },
        {
            id: 1745218004892,
            name: "Váy Công Sở Nữ",
            description: "Váy Công Sở Nữ",
        },
        {
            id: 1745218010993,
            name: "Quần Jean Nữ",
            description: "Quần Jean Nữ",
        },
        { id: 1745218023257, name: "Giày Nữ", description: "Giày Nữ" },
    ];
    localStorage.setItem("categories", JSON.stringify(sampleCategories));
}
if (!localStorage.getItem("orders")) {
    const sampleOrders = [
        {
            id: 1,
            customer: "Nguyễn Văn A",
            total: 300000,
            status: "Đã Đặt",
            date: "2023-10-01",
        },
    ];
    localStorage.setItem("orders", JSON.stringify(sampleOrders));
}
if (!localStorage.getItem("customers")) {
    const sampleCustomers = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            email: "nva@example.com",
            phone: "0909123456",
            totalOrders: 5,
        },
    ];
    localStorage.setItem("customers", JSON.stringify(sampleCustomers));
}
if (!localStorage.getItem("settings")) {
    const sampleSettings = {
        storeName: "Fashion Store",
        supportEmail: "support@fashionstore.com",
    };
    localStorage.setItem("settings", JSON.stringify(sampleSettings));
}

if (!localStorage.getItem("users")) {
    const users = [
        {
            fullname: "admin",
            email: "admin@gmail.com",
            password: "admin",
            role: "admin",
            phone: "0869224813",
        },
        {
            fullname: "Trường Sơn",
            email: "truongsonpt.80@gmail.com",
            password: "123456",
            role: "user",
            phone: "0869224814",
        },
    ];
    localStorage.setItem("users", JSON.stringify(users));
}
