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
            id: 1,
            name: "Chân váy 2 lớp xòe 2 có quần bảo hộ yên tâm sử dụng",
            category: "Nữ",
            subcategory: "Chân váy",
            sku: "ATN001",
            price: 150000,
            salePrice: 120000,
            stock: 50,
            material: "Cotton",
            description:
                "- HỖ TRỢ ĐỔI HÀNG LÊN TỚI 15 NGÀY: MYAN hỗ trợ khách đổi hàng trong vòng 15 ngày tính từ ngày mua hàng. (tính theo dấu bưu điện, trừ ngày nghỉ đối với khách mua online). \nHàng đủ điều kiện được đổi sang sản phẩm khác: Còn nguyên tem,mác, hoá đơn (nếu mất, khách hàng cung cấp ngày mua và sđt tích điểm để MYAN check trên hệ thống), sản phẩm còn mới chưa qua giặt tẩy, rách, bẩn. Myan không hỗ trợ đổi trả hàng với trường hợp khách mua hàng vào các dịp cửa hàng xả hàng tồn (Myan sẽ thông báo rõ ràng đối với TH sale xả hàng mỗi đợt thanh lý)\n\nQuý khách vui lòng không đổi hàng trước 12h, không đổi hàng vào mùng 1 âm lịch <3\n\nKhách online muốn đổi hàng, chỉ cần liên hệ MYAN qua zalo 0369788779, chúng tớ sẽ tạo đơn để ship qua tận nơi thu hàng về. Quý khách không cần phải đem hàng đi gửi về cho shop. Đổi hàng khách thanh toán phí ship 2 chiều 50k giúp shop ạ. Shop cảm ơn <3\n\nHotline\nCONTACT US:\nWebsite: myanstore.vn\n Shopee:  \nshope.ee/6KXaBGl94z\nLazada:  \nhttps://s.lazada.vn/l.KKHO\n Zalo: 0369.788.779\n Hotline đặt hàng: 0369.788.779\n Phản ánh chất lượng: 0966.424.781",
            colors: ["Đen", "Trắng", "Xanh"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo thun", "nam", "hè"],
            onSale: true,
            isNew: false,
            isBestSeller: true,
            featured: false,
            images: [
                "https://pos.nvncdn.com/8d4112-8686/ps/20240716_gVeqG1QJT6.jpeg",
                "https://pos.nvncdn.com/8d4112-8686/ps/20240716_XM2Sbelp0B.jpeg",
            ],
        },
        {
            id: 1744899374415,
            name: "Chân váy xếp ly dáng dài cực đẹp ( hàng loại 1), chân váy xếp li màu đen, trắng, nude",
            category: "Nữ",
            subcategory: "Thời Trang",
            sku: "Trang",
            price: 12000,
            salePrice: 1200,
            stock: 133,
            material: "Cotton",
            description:
                "Chân váy xếp ly ngắn phối cùng áo thun tay dài sẽ rất thích hợp và mang đến sự năng động cho bạn. Với áo tay dài các bạn có thể che đi khuyết điểm ở bắp tay của mình và cùng với đó kiểu phối này sẽ vô cùng thích hợp vào những ngày đông se lạnh.\nPhối chân váy xếp ly ngắn với áo croptop\nPhối chân váy xếp ly ngắn với áo croptop\nPhối chân váy xếp ly ngắn với áo croptop\nChân váy xếp ly phối cùng áo croptop sẽ là một sự kết hợp vô cùng năng động, cá tính mà các bạn không thể nào bỏ qua được. Bên cạnh đó, sự phối hợp này còn mang đến cho các bạn một vẻ đẹp đầy gợi cảm đó nha.\nPhối chân váy xếp ly ngắn với áo sơ mi\nPhối chân váy xếp ly ngắn với áo sơ mi\nPhối chân váy xếp ly ngắn với áo sơ mi\nBạn là người thích sự nhẹ nhàng thì việc phối chân váy xếp ly ngắn cùng với áo sơ mi sẽ là một sự lựa chọn vô cùng thích hợp dành cho bạn. Sự phối hợp này sẽ vừa mang đến sự kín đáo vừa mang đến vẻ đẹp đầy trẻ trung và duyên dáng dành cho bạn.\nPhối chân váy xếp ly ngắn với áo sơ mi voan\nPhối chân váy xếp ly ngắn với áo sơ mi voan\nPhối chân váy xếp ly ngắn với áo sơ mi voan\nMột sự kết hợp có thể các bạn nghĩ sẽ là sự đối lập của nhau nhưng khi kết hợp lại thì vô cùng hoàn hảo. Chân váy xếp ly năng động phối cùng áo sơ mi voan nhẹ nhàng tạo nên một bộ trang phục vô cùng xinh đẹp. Với sự kết hợp này các bạn có thể diện khi đến công sở hoặc là những buổi hẹn hò.\nPhối chân váy xếp ly ngắn với áo len\nPhối chân váy xếp ly ngắn với áo len\nPhối chân váy xếp ly ngắn với áo len\nVào mùa đông và những ngày se lạnh thì sự kết hợp giữa chân váy xếp ly ngắn và áo len sẽ vô cùng thích hợp. Sự kết hợp này mang đến cho bạn sự nhẹ nhàng nhưng không kém phần năng động nhé.\nPhối chân váy xếp ly ngắn với áo trễ vai\nPhối chân váy xếp ly ngắn với áo trễ vai\nPhối chân váy xếp ly ngắn với áo trễ vai\nSự kết hợp vô cùng hoàn hảo giữa chân váy xếp ly và áo trễ vai. Bộ trang phục sẽ giúp bạn khoe khéo đôi vai đầy gợi cảm của bạn và còn giúp bạn trở nên đầy cuốn hút hơn đó.\nPhối chân váy xếp ly ngắn với áo Sweater\n\nVào những ngày đông thì việc phối chân váy xếp ly ngắn với áo sweater sẽ là một lựa chọn vô cùng thích hợp. Sự kết hợp nào vừa mang lại sự ấm áp vừa giúp bạn thêm phần trẻ trung, năng động.\nPhối chân váy xếp ly ngắn với áo Hodie\nPhối chân váy xếp ly ngắn với áo Hoodie\nPhối chân váy xếp ly ngắn với áo Hoodie\nChân váy xếp ly ngắn phối cùng áo Hoodie sẽ là một sự kết hợp vô cùng độc đáo. Với sự kết hợp này, sẽ mang đến cho các bạn sự trẻ trung năng động và còn giúp các bạn nữ thêm phần dễ thương nữa đó.\nPhối chân váy xếp ly ngắn với áo khoác jeans\nPhối chân váy xếp ly ngắn với áo khoác jeans\nPhối chân váy xếp ly ngắn với áo khoác jeans\nKết hợp giữa chân váy xếp ly ngắn cùng với áo khoác jeans là một sự kết hợp vô cùng hợp lý. Sự kết hợp này sẽ rất thích hợp cho các bạn nữa cá tính và ưa chuộng một chút phong cách năng động.\n2\nMột số lưu ý khi phối đồ với chân váy xếp ly\nLưu ý khi chọn chân váy xếp ly\nĐộ dài chân váy: Với những bạn thích phong cách năng động, quyến rũ thì các bạn có thể chọn váy với độ dài váy ngang đùi. Còn với các bạn theo đuổi phong cách thanh lịch, dịu dàng thì có để chọn váy xếp ly với độ dài gần đầu gối.\nMột số lưu ý khi phối đồ với chân váy xếp ly\nMột số lưu ý khi phối đồ với chân váy xếp ly\nHọa tiết: Các bạn có thể chọn họa tiết của chân váy theo sở thích của mình, những mẫu chân váy trơn sẽ dễ kết hợp với áo, còn với những mẫu chân váy có màu sắc sặc sỡ sẽ khó kết hợp với áo hơn một xíu.\nCách chọn phụ kiện phối cùng chân váy xếp ly\nMột số lưu ý khi phối đồ với chân váy xếp ly\nMột số lưu ý khi phối đồ với chân váy xếp ly\nCác có thể phối cùng chân váy xếp ly nhiều phụ kiện mà bản thân yêu thích. Các bạn có thể kết hợp của giày sneaker, những chiếc vòng cổ, vòng tay sẽ giúp bạn thêm phần năng động và cá tính hơn.",
            colors: ["Đỏ", "Xanh", "Đen"],
            sizes: ["S", "M", "L", "XL"],
            tags: ["áo thun", "nam", "hè"],
            onSale: false,
            isNew: true,
            isBestSeller: true,
            featured: true,
            images: [
                "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m064qhm0wstp6c",
                "https://cdn.tgdd.vn/Files/2022/07/20/1449349/10-cach-phoi-do-voi-chan-vay-xep-ly-ngan-nang-dong-ca-tinh-cho-ban-nu-202207202121539541.jpg",
            ],
        },
        {
            id: 1744899474067,
            name: "Chân Váy Xếp Ly Dài Ngàng Gối Cho Nàng Công Sở",
            category: "Nữ",
            subcategory: "Thời Trang",
            sku: "TR01",
            price: 13344,
            salePrice: 3432,
            stock: 12,
            material: "Cotton",
            description:
                "Là con gái, chắc hẳn chân váy là thứ mà các bạn đều có trong tủ đồ. Chân váy mặc rất thoải mái, phù hợp nhiều dịp và còn rất nữ tính. Tất nhiên, các nàng công sở cũng không ngoại lệ. Mốt chiếc váy điệu đà thay cho quần tây cũng là ý hay. Như vậy là bạn có thể F5 cho bản thân mà chẳng cần làm gì cầu kỳ. Hiện nay, những chiếc chân váy xếp ly dài đang rất được yêu thích. Nó có gì mà lại thu hút các tín đồ thời trang như vậy? Bài viết dưới đây sẽ cũng cấp một số thông tin cần thiết dành cho bạn",
            colors: ["Đỏ", "Xanh", "Đen"],
            sizes: ["xs", "xl", "xxl"],
            tags: ["áo thun", "nam", "hè"],
            onSale: false,
            isNew: true,
            isBestSeller: false,
            featured: false,
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6n9E30wUvDJHxDPiYSnmlArYOzg5Nb4EIQ&s",
                "https://pos.nvncdn.com/fa49eb-41931/ps/20211225_95FQua31FsPjOmeBHiwBhWCw.jpg",
            ],
        },
    ];
    localStorage.setItem("products", JSON.stringify(sampleProducts));
}
if (!localStorage.getItem("categories")) {
    const sampleCategories = [
        { id: 1, name: "Nam", description: "Quần áo nam" },
        { id: 2, name: "Phụ Nữ", description: "Quần áo nữ" },
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
