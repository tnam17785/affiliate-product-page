# Shop Gợi Ý – Trang phân phối sản phẩm Affiliate

Trang web tĩnh (HTML/CSS/JS) để giới thiệu sản phẩm kèm link affiliate Shopee / TikTok Shop.

## Tính năng

- Phân loại theo nhóm: **Thời trang**, **Giải trí** (dễ mở rộng)
- Mỗi sản phẩm hiển thị: hình ảnh, tên, nhãn hàng (brand), giá, link tiếp thị
- Giao diện hiện đại, responsive (điện thoại + máy tính)
- Dữ liệu sản phẩm nằm trong file `products.json` → rất dễ thêm / sửa / xóa

## Cách chỉnh sửa sản phẩm

Mở file **`products.json`** và chỉnh sửa mảng JSON.

### Cấu trúc mỗi sản phẩm

```json
{
  "id": 9,
  "name": "Tên sản phẩm",
  "brand": "Tên nhãn hàng",
  "price": "199.000đ",
  "category": "thoi-trang",
  "image": "https://link-hinh-anh.jpg",
  "link": "https://shopee.vn/..."
}
```

| Trường     | Mô tả                                      | Ví dụ                  |
|------------|--------------------------------------------|------------------------|
| `id`       | Số duy nhất (tăng dần)                     | `9`                    |
| `name`     | Tên sản phẩm                               | `"Áo thun form rộng"` |
| `brand`    | Nhãn hàng / thương hiệu                    | `"Local Brand"`        |
| `price`    | Giá hiển thị (chuỗi)                       | `"159.000đ"`           |
| `category` | Nhóm sản phẩm                              | `"thoi-trang"` hoặc `"giai-tri"` |
| `image`    | URL hình ảnh (khuyến khích tỉ lệ vuông)    | link Unsplash / CDN    |
| `link`     | Link affiliate Shopee / TikTok Shop        | link tiếp thị của bạn  |

### Thêm sản phẩm mới
1. Copy một object trong mảng
2. Đổi `id` thành số mới
3. Cập nhật các trường còn lại
4. Lưu file → commit & push

### Xóa sản phẩm
Chỉ cần xóa object tương ứng trong mảng `products.json`.

### Thêm nhóm sản phẩm mới
1. Thêm `category` mới (ví dụ `"gia-dung"`)
2. Trong `index.html`, thêm nút filter:

```html
<button class="filter-btn" data-category="gia-dung">🏠 Gia dụng</button>
```

## Chạy thử local

Chỉ cần mở `index.html` bằng trình duyệt, hoặc dùng live server:

```bash
# Nếu có Python
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`

## Deploy lên GitHub Pages

1. Vào **Settings → Pages** của repository
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Save → vài phút sau trang sẽ live tại:
   `https://tnam17785.github.io/affiliate-product-page/`

## Ghi chú

- Link trong `products.json` hiện đang là placeholder. Hãy thay bằng **link affiliate thật** của bạn.
- Hình ảnh đang dùng Unsplash. Bạn có thể thay bằng ảnh thật của sản phẩm.
- Trang hoàn toàn tĩnh, không cần backend.
