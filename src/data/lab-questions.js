// End-of-lab question outline, following the "❓ Câu hỏi kiểm tra" items of the PTITCube syllabus
// (https://github.com/PTITCube, profile README). Each checkpoint follows either a Doc or a practice group.
//
// A question may only carry what the learner sees while answering:
//   { id: 'q1', type: 'single_choice' | 'multiple_choice' | 'true_false' | 'short_answer',
//     prompt: '...', choices: [{ id: 'A', text: '...' }] }
// Never put correct answers or explanations here — this file ships in the browser bundle.
// Graded questions belong in the server-side Lab Test bank (AGENTS.md rule 5).

const doc = (id, label, topics, questions = []) => ({ id, kind: 'doc', label, topics, exercises: [], questions });
const practice = (id, label, topics, exercises, questions = []) => ({ id, kind: 'practice', label, topics, exercises, questions });

export const LAB_QUESTION_SETS = {
  0: {
    summary: 'Nắm vững cấu trúc tổng thể và mối tương quan phối hợp giữa các phân hệ trên vệ tinh.',
    checkpoints: [
      doc('doc-0-1', 'Câu hỏi kiểm tra Doc 0.1', 'Lịch sử CubeSat, thông số tiêu chuẩn 1U, cơ chế nhả chốt lò xo P-POD và các hiện tượng vật lý LEO (thoát khí, hàn nguội, SEU/SEL/TID, chu kỳ nhiệt 95 phút).', [
      {
            "id": "q-doc-0-1-1",
            "type": "single_choice",
            "prompt": "Tiêu chuẩn vệ tinh CubeSat chuẩn 1U (1 Unit) đầu tiên trên thế giới được khởi xướng vào năm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Năm 1999"
                  },
                  {
                        "id": "B",
                        "text": "Năm 1985"
                  },
                  {
                        "id": "C",
                        "text": "Năm 2012"
                  },
                  {
                        "id": "D",
                        "text": "Năm 1970"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-2",
            "type": "single_choice",
            "prompt": "Mục tiêu cốt lõi ban đầu của việc đề xuất tiêu chuẩn vệ tinh CubeSat là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thay thế hoàn toàn các vệ tinh viễn thông địa tĩnh khổng lồ"
                  },
                  {
                        "id": "B",
                        "text": "Giúp sinh viên và viện nghiên cứu tiếp cận không gian với chi phí thấp"
                  },
                  {
                        "id": "C",
                        "text": "Thử nghiệm động cơ hạt nhân nhiệt dùng cho du hành liên hành tinh"
                  },
                  {
                        "id": "D",
                        "text": "Xây dựng mạng lưới internet vệ tinh thương mại phủ sóng toàn cầu"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-3",
            "type": "single_choice",
            "prompt": "Hai trường đại học đầu tiên khởi xướng và phát triển tiêu chuẩn CubeSat là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đại học Harvard và Viện Công nghệ Massachusetts"
                  },
                  {
                        "id": "B",
                        "text": "Đại học Oxford và Đại học Cambridge tại Vương quốc Anh"
                  },
                  {
                        "id": "C",
                        "text": "Đại học Bách khoa bang California và Đại học Stanford"
                  },
                  {
                        "id": "D",
                        "text": "Đại học Tokyo và Đại học Kỹ thuật Quốc gia Seoul"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-4",
            "type": "single_choice",
            "prompt": "Kích thước hình học tiêu chuẩn của một vệ tinh CubeSat 1U cơ bản (chưa tính ray trượt) là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "150 x 150 x 150 mm"
                  },
                  {
                        "id": "B",
                        "text": "50 x 50 x 50 mm"
                  },
                  {
                        "id": "C",
                        "text": "200 x 200 x 200 mm"
                  },
                  {
                        "id": "D",
                        "text": "100 x 100 x 100 mm"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-5",
            "type": "single_choice",
            "prompt": "Chiều dài thân dọc theo trục có ray trượt của một vệ tinh CubeSat 1U tiêu chuẩn là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "113.5 mm"
                  },
                  {
                        "id": "B",
                        "text": "150.0 mm"
                  },
                  {
                        "id": "C",
                        "text": "100.0 mm"
                  },
                  {
                        "id": "D",
                        "text": "125.0 mm"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-6",
            "type": "single_choice",
            "prompt": "Khối lượng tiêu chuẩn tối đa cho phép của một vệ tinh CubeSat 1U truyền thống theo tài liệu CDS là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tối đa 5.0 kg"
                  },
                  {
                        "id": "B",
                        "text": "Tối đa 1.33 kg"
                  },
                  {
                        "id": "C",
                        "text": "Tối đa 0.5 kg"
                  },
                  {
                        "id": "D",
                        "text": "Tối đa 10.0 kg"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-7",
            "type": "single_choice",
            "prompt": "Thuật ngữ linh kiện COTS (Commercial Off-The-Shelf) trong chế tạo vệ tinh nhỏ mang ý nghĩa gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Linh kiện chuyên dụng chỉ sản xuất riêng cho cơ quan hàng không vũ trụ"
                  },
                  {
                        "id": "B",
                        "text": "Linh kiện đã qua sử dụng được tháo rời từ các mảnh vỡ vệ tinh cũ"
                  },
                  {
                        "id": "C",
                        "text": "Linh kiện thương mại đại trà sẵn có trên thị trường với giá thành hợp lý"
                  },
                  {
                        "id": "D",
                        "text": "Linh kiện được chế tạo hoàn toàn bằng kim loại quý chống bức xạ tuyệt đối"
                  }
            ]
      },
      {
            "id": "q-doc-0-1-8",
            "type": "single_choice",
            "prompt": "Theo thang phân loại vệ tinh nhỏ (SmallSat), CubeSat 1U có khối lượng 1.33 kg thuộc nhóm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nhóm Vệ tinh Mini (Minisatellite)"
                  },
                  {
                        "id": "B",
                        "text": "Nhóm Vệ tinh Pico (Picosatellite)"
                  },
                  {
                        "id": "C",
                        "text": "Nhóm Vệ tinh Femto (Femtosatellite)"
                  },
                  {
                        "id": "D",
                        "text": "Nhóm Vệ tinh Nano (Nanosatellite)"
                  }
            ]
      }
]),
      doc('doc-0-2', 'Câu hỏi kiểm tra Doc 0.2', 'Chức năng hạt nhân, luồng dữ liệu viễn trắc/viễn lệnh và cơ chế phối hợp giữa 6 phân hệ CubeSat.', [
      {
            "id": "q-doc-0-2-1",
            "type": "single_choice",
            "prompt": "Chốt an toàn RBF (Remove Before Flight) trên vệ tinh được kỹ sư tháo ra tại thời điểm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Sau khi vệ tinh đã bay trên quỹ đạo được đúng ba mươi ngày"
                  },
                  {
                        "id": "B",
                        "text": "Trong quá trình lắp ráp các bo mạch điện tử tại phòng sạch"
                  },
                  {
                        "id": "C",
                        "text": "Ngay trước khi nạp vệ tinh vào ống phóng hoặc trước khi đóng cửa bệ phóng"
                  },
                  {
                        "id": "D",
                        "text": "Khi vệ tinh chuẩn bị rơi tự do vào bầu khí quyển Trái Đất"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-2",
            "type": "single_choice",
            "prompt": "Trong kỹ thuật hệ thống vệ tinh tiêu chuẩn, cấu trúc tổng thể được phân tách thành hai nhóm hệ thống chính nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống Phần mềm (Software) và Hệ thống Phần cứng (Hardware)"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống Pin Mặt trời (Solar) và Hệ thống Pin Sạc (Battery)"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống Nền tảng (Bus System) và Hệ thống Tải trọng (Payload System)"
                  },
                  {
                        "id": "D",
                        "text": "Hệ thống Trạm Mặt đất (Ground) và Hệ thống Trạm Không gian (Space)"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-3",
            "type": "single_choice",
            "prompt": "Khái niệm Bus System (Hệ thống Nền tảng) của một vệ tinh bao gồm các phân hệ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ bao gồm các camera quang học chụp ảnh bề mặt Trái Đất"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống máy tính điều khiển và anten đặt tại trạm mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ bao gồm phần khung nhôm kim loại nâng đỡ bên ngoài"
                  },
                  {
                        "id": "D",
                        "text": "Các phân hệ duy trì hoạt động gồm Nguồn điện, Máy tính, Kết cấu và Truyền thông"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-4",
            "type": "single_choice",
            "prompt": "Chuẩn kết cấu cơ điện tử xếp tầng các bo mạch phổ biến bên trong CubeSat là chuẩn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chuẩn khe cắm PCIe Gen 4"
                  },
                  {
                        "id": "B",
                        "text": "Chuẩn xếp tầng cọc đồng PC/104"
                  },
                  {
                        "id": "C",
                        "text": "Chuẩn giao tiếp USB Type-C"
                  },
                  {
                        "id": "D",
                        "text": "Chuẩn socket cắm vi xử lý LGA"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-5",
            "type": "single_choice",
            "prompt": "Chữ viết tắt OBC trong kiến trúc phân hệ vệ tinh đại diện cho phân hệ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Optical Bus Controller (Bộ điều khiển bus quang học)"
                  },
                  {
                        "id": "B",
                        "text": "Orbital Battery Charger (Mạch sạc pin quỹ đạo)"
                  },
                  {
                        "id": "C",
                        "text": "On-Board Computer (Máy tính trên bo mạch)"
                  },
                  {
                        "id": "D",
                        "text": "Orientation Balancing Circuit (Mạch cân bằng hướng)"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-6",
            "type": "single_choice",
            "prompt": "Vi điều khiển trung tâm được sử dụng làm lõi xử lý cho phân hệ OBC của bộ kit PTITCube là dòng chip nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Atmega328P 8-bit"
                  },
                  {
                        "id": "B",
                        "text": "Intel Core i7 thế hệ mới"
                  },
                  {
                        "id": "C",
                        "text": "PIC16F877A 8-bit"
                  },
                  {
                        "id": "D",
                        "text": "ESP32-WROOM-32 lõi kép 32-bit"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-7",
            "type": "single_choice",
            "prompt": "Thông số dung lượng bộ nhớ RAM tĩnh nội bộ (SRAM) tích hợp bên trong chip ESP32 trên bo OBC là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "520 KB SRAM"
                  },
                  {
                        "id": "B",
                        "text": "128 KB SRAM"
                  },
                  {
                        "id": "C",
                        "text": "32 KB SRAM"
                  },
                  {
                        "id": "D",
                        "text": "4096 KB SRAM"
                  }
            ]
      },
      {
            "id": "q-doc-0-2-8",
            "type": "single_choice",
            "prompt": "Chữ viết tắt EPS trong kiến trúc vệ tinh đại diện cho phân hệ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Electronic Positioning Sensor (Cảm biến định vị điện tử)"
                  },
                  {
                        "id": "B",
                        "text": "Electrical Power System (Phân hệ Năng lượng Điện)"
                  },
                  {
                        "id": "C",
                        "text": "Emergency Parachute System (Hệ thống bung dù khẩn cấp)"
                  },
                  {
                        "id": "D",
                        "text": "Environmental Pressure Shield (Tấm chắn áp suất môi trường)"
                  }
            ]
      }
]),
      practice('practice-0', 'Câu hỏi kiểm tra Thực hành', 'Nhận diện trực quan vị trí bo mạch, cổng kết nối, ăng-ten và thông số kỹ thuật từng linh kiện trên mô hình 3D.', [], [
      {
            "id": "q-practice-0-1",
            "type": "single_choice",
            "prompt": "Mục đích chính của bài thực hành Lab 0 trên nền tảng CubeSat-LMS là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm quen trực quan với mô hình 3D của CubeSat và tra cứu thông số kỹ thuật linh kiện"
                  },
                  {
                        "id": "B",
                        "text": "Lập trình thuật toán lọc bù góc nghiêng phức tạp bằng C++"
                  },
                  {
                        "id": "C",
                        "text": "Biên dịch và nạp firmware trực tiếp vào vi điều khiển qua cổng USB"
                  },
                  {
                        "id": "D",
                        "text": "Thiết kế và hàn mạch in điện tử 4 lớp trong phòng thí nghiệm"
                  }
            ]
      },
      {
            "id": "q-practice-0-2",
            "type": "single_choice",
            "prompt": "Các tính năng học sâu như soạn thảo mã nguồn, lập trình khối Blockly và nạp firmware Web Serial API sẽ bắt đầu từ lab nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngay từ bài thực hành Lab 0 này"
                  },
                  {
                        "id": "B",
                        "text": "Bắt đầu được triển khai và đào sâu từ Lab 1 trở đi"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ xuất hiện ở bài đồ án tốt nghiệp cuối cùng Lab 8"
                  },
                  {
                        "id": "D",
                        "text": "Hoàn toàn không có trong chương trình đào tạo của khóa học"
                  }
            ]
      },
      {
            "id": "q-practice-0-3",
            "type": "single_choice",
            "prompt": "Trên giao diện mô hình 3D của Web LMS, thao tác giữ chuột trái và kéo di chuyển chuột có tác dụng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phóng to hoặc thu nhỏ kích thước của mô hình"
                  },
                  {
                        "id": "B",
                        "text": "Dịch chuyển tịnh tiến cả không gian 3D sang một bên"
                  },
                  {
                        "id": "C",
                        "text": "Xoay góc nhìn 360 độ quanh mô hình vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Xóa bỏ vĩnh viễn linh kiện đang chọn khỏi mô hình"
                  }
            ]
      },
      {
            "id": "q-practice-0-4",
            "type": "single_choice",
            "prompt": "Để phóng to hoặc thu nhỏ góc nhìn mô hình vệ tinh 3D trên Web LMS, người dùng sử dụng thao tác nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nhấn liên tục phím cách Spacebar trên bàn phím"
                  },
                  {
                        "id": "B",
                        "text": "Giữ đồng thời hai phím Ctrl và Alt trên bàn phím"
                  },
                  {
                        "id": "C",
                        "text": "Nhấp đúp chuột phải vào giữa màn hình giao diện"
                  },
                  {
                        "id": "D",
                        "text": "Cuộn con lăn giữa của chuột máy tính"
                  }
            ]
      },
      {
            "id": "q-practice-0-5",
            "type": "single_choice",
            "prompt": "Để dịch chuyển tịnh tiến góc nhìn mô hình 3D (Pan) sang trái, phải, lên hoặc xuống, người dùng sử dụng thao tác nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giữ chuột phải và kéo rê chuột trên vùng không gian làm việc"
                  },
                  {
                        "id": "B",
                        "text": "Nhấp chuột trái 3 lần liên tiếp vào linh kiện"
                  },
                  {
                        "id": "C",
                        "text": "Nhấn phím F5 để tải lại toàn bộ trang web"
                  },
                  {
                        "id": "D",
                        "text": "Gõ lệnh pan trên bàn phím máy tính"
                  }
            ]
      },
      {
            "id": "q-practice-0-6",
            "type": "single_choice",
            "prompt": "Quan sát vị trí các tầng bo mạch trên mô hình 3D của kit PTITCube, bo mạch EPS thường nằm ở tầng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dán ở mặt ngoài cùng của tấm pin mặt trời"
                  },
                  {
                        "id": "B",
                        "text": "Nằm lơ lửng ngoài không gian không chạm vào khung"
                  },
                  {
                        "id": "C",
                        "text": "Gắn trực tiếp vào đầu thanh anten vô tuyến LoRa"
                  },
                  {
                        "id": "D",
                        "text": "Nằm ở tầng đáy sát khung dưới của vệ tinh"
                  }
            ]
      },
      {
            "id": "q-practice-0-7",
            "type": "single_choice",
            "prompt": "Khối pin sạc Li-Po trên mô hình 3D của kit vệ tinh được đặt ở vị trí nào để tối ưu trọng tâm?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đặt ở tầng đáy gắn liền với bo mạch nguồn EPS"
                  },
                  {
                        "id": "B",
                        "text": "Treo tự do bên ngoài thân vệ tinh bằng dây dù"
                  },
                  {
                        "id": "C",
                        "text": "Đặt che kín ngay phía trước ống kính máy ảnh camera"
                  },
                  {
                        "id": "D",
                        "text": "Gắn vào đỉnh cao nhất của thanh anten vô tuyến"
                  }
            ]
      },
      {
            "id": "q-practice-0-8",
            "type": "single_choice",
            "prompt": "Quan sát trên mô hình 3D, bo mạch máy tính trung tâm OBC (chứa vi điều khiển ESP32) thường nằm ở vị trí nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nằm ở bên ngoài ống phóng P-POD"
                  },
                  {
                        "id": "B",
                        "text": "Nằm ở tầng giữa của cấu trúc xếp tầng PC/104"
                  },
                  {
                        "id": "C",
                        "text": "Nằm ngay trên bề mặt tấm pin năng lượng mặt trời"
                  },
                  {
                        "id": "D",
                        "text": "Nằm bên trong khe cắm thẻ nhớ MicroSD"
                  }
            ]
      }
]),
    ],
  },
  1: {
    summary: 'Hoàn thiện kỹ năng lập trình nhúng C++ cơ bản và điều khiển toàn diện các linh kiện ngoại vi của bo mạch OBC.',
    checkpoints: [
      doc('doc-1-1', 'Câu hỏi kiểm tra Doc 1.1', 'Kiến trúc lõi kép Xtensa LX6, bản đồ bộ nhớ SRAM/Flash, các chân Strapping Pins nguy hiểm (GPIO 0, 2, 12, 15) và bảng chân GPIO an toàn.', [
      {
            "id": "q-doc-1-1-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh tiêu chuẩn CubeSat, phân hệ OBC (On-Board Computer) đóng vai trò chủ đạo nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cung cấp nguồn năng lượng cho toàn bộ vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Điều phối hoạt động và xử lý dữ liệu vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Thu phát sóng vô tuyến công suất cao với trạm đất"
                  },
                  {
                        "id": "D",
                        "text": "Bảo vệ kết cấu bo mạch khỏi rung động va đập cơ học"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-2",
            "type": "single_choice",
            "prompt": "Vi điều khiển chính được sử dụng làm lõi xử lý cho phân hệ OBC của vệ tinh PTITCube là dòng vi điều khiển nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "ESP32-WROOM-32 lõi kép 32-bit"
                  },
                  {
                        "id": "B",
                        "text": "PIC16F877A"
                  },
                  {
                        "id": "C",
                        "text": "Atmega328P 8-bit"
                  },
                  {
                        "id": "D",
                        "text": "STM32F103 ARM Cortex-M3"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-3",
            "type": "single_choice",
            "prompt": "Kiến trúc nhân xử lý của vi điều khiển ESP32 trên bo mạch OBC thuộc dòng kiến trúc nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "RISC-V Dual-Core 64-bit RV64"
                  },
                  {
                        "id": "B",
                        "text": "ARM Cortex-M4 Single-Core 32-bit"
                  },
                  {
                        "id": "C",
                        "text": "MIPS32 Micro-Core 32-bit M4K"
                  },
                  {
                        "id": "D",
                        "text": "Xtensa Dual-Core 32-bit LX6"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-4",
            "type": "single_choice",
            "prompt": "Tần số xung nhịp tối đa (Clock Speed) mà hai nhân xử lý của vi điều khiển ESP32 có thể hoạt động là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1 GHz"
                  },
                  {
                        "id": "B",
                        "text": "240 MHz"
                  },
                  {
                        "id": "C",
                        "text": "80 MHz"
                  },
                  {
                        "id": "D",
                        "text": "16 MHz"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-5",
            "type": "single_choice",
            "prompt": "Dung lượng bộ nhớ RAM tĩnh nội bộ (SRAM) tích hợp sẵn bên trong vi điều khiển ESP32 là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "128 KB"
                  },
                  {
                        "id": "B",
                        "text": "32 KB"
                  },
                  {
                        "id": "C",
                        "text": "520 KB"
                  },
                  {
                        "id": "D",
                        "text": "4 MB"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-6",
            "type": "single_choice",
            "prompt": "Loại bộ nhớ nào trong ESP32 vẫn giữ nguyên được dữ liệu ngay cả khi ngắt toàn bộ nguồn điện cấp?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bộ nhớ đệm Cache"
                  },
                  {
                        "id": "B",
                        "text": "DRAM động"
                  },
                  {
                        "id": "C",
                        "text": "Bộ nhớ Flash SPI"
                  },
                  {
                        "id": "D",
                        "text": "SRAM nội bộ"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-7",
            "type": "single_choice",
            "prompt": "Bộ nhớ SRAM bên trong vi điều khiển ESP32 có đặc tính vật lý cơ bản nào khi mất nguồn điện?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dữ liệu bị xóa sạch hoàn toàn"
                  },
                  {
                        "id": "B",
                        "text": "Dữ liệu bị mã hóa"
                  },
                  {
                        "id": "C",
                        "text": "Dữ liệu tự động sao lưu vào ROM"
                  },
                  {
                        "id": "D",
                        "text": "Dữ liệu được lưu trữ vĩnh viễn"
                  }
            ]
      },
      {
            "id": "q-doc-1-1-8",
            "type": "single_choice",
            "prompt": "Khối đồng xử lý tiêu thụ điện năng siêu thấp (ULP - Ultra Low Power Coprocessor) của ESP32 có chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển xung nhịp chính của các nhân LX6"
                  },
                  {
                        "id": "B",
                        "text": "Tăng tốc độ mã hóa phần cứng mạng vô tuyến"
                  },
                  {
                        "id": "C",
                        "text": "Giám sát GPIO và ADC trong chế độ Deep Sleep"
                  },
                  {
                        "id": "D",
                        "text": "Xử lý đồ họa và giao tiếp hiển thị đa phương tiện"
                  }
            ]
      }
]),
      doc('doc-1-2', 'Câu hỏi kiểm tra Doc 1.2', 'Quy trình biên dịch Cloud Server, cơ chế bắt tay Web Serial API của trình duyệt và tốc độ baud nạp firmware.', [
      {
            "id": "q-doc-1-2-1",
            "type": "single_choice",
            "prompt": "Dung lượng bộ nhớ Flash SPI tích hợp trên module ESP32-WROOM-32 tiêu chuẩn của bo mạch OBC là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1 MB"
                  },
                  {
                        "id": "B",
                        "text": "32 MB"
                  },
                  {
                        "id": "C",
                        "text": "4 MB"
                  },
                  {
                        "id": "D",
                        "text": "512 KB"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-2",
            "type": "single_choice",
            "prompt": "Trong phân vùng bộ nhớ Flash của ESP32, ứng dụng firmware chính của người dùng thường được lưu tại địa chỉ offset nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0x00000"
                  },
                  {
                        "id": "B",
                        "text": "0x01000"
                  },
                  {
                        "id": "C",
                        "text": "0x10000"
                  },
                  {
                        "id": "D",
                        "text": "0x08000"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-3",
            "type": "single_choice",
            "prompt": "Vị trí địa chỉ 0x1000 trong bộ nhớ Flash của ESP32 thường được nhà sản xuất sử dụng để chứa thành phần nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dữ liệu WiFi NVS"
                  },
                  {
                        "id": "B",
                        "text": "Mã nhị phân Bootloader cấp 2"
                  },
                  {
                        "id": "C",
                        "text": "Bảng phân vùng"
                  },
                  {
                        "id": "D",
                        "text": "Chương trình người dùng"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-4",
            "type": "single_choice",
            "prompt": "Bảng phân vùng (Partition Table) của ESP32 quy định cấu trúc bộ nhớ Flash thường nằm tại địa chỉ offset nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0x20000"
                  },
                  {
                        "id": "B",
                        "text": "0x10000"
                  },
                  {
                        "id": "C",
                        "text": "0x8000"
                  },
                  {
                        "id": "D",
                        "text": "0x1000"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-5",
            "type": "single_choice",
            "prompt": "Trình duyệt web hiện đại kết nối trực tiếp với cổng nạp vi điều khiển trên máy tính thông qua công nghệ API nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Web Storage API"
                  },
                  {
                        "id": "B",
                        "text": "WebRTC API"
                  },
                  {
                        "id": "C",
                        "text": "Web Serial API"
                  },
                  {
                        "id": "D",
                        "text": "Web Audio API"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-6",
            "type": "single_choice",
            "prompt": "Tệp kết quả sau khi biên dịch mã nguồn C++ trên máy chủ để sẵn sàng nạp xuống bộ nhớ Flash của ESP32 có định dạng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": ".mp4"
                  },
                  {
                        "id": "B",
                        "text": ".hex hoặc .bin"
                  },
                  {
                        "id": "C",
                        "text": ".txt"
                  },
                  {
                        "id": "D",
                        "text": ".docx"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-7",
            "type": "single_choice",
            "prompt": "Chân tín hiệu nào trên ESP32 đóng vai trò chốt trạng thái khởi động (Strapping Pin) để vào chế độ nạp ROM Bootloader?",
            "choices": [
                  {
                        "id": "A",
                        "text": "GPIO 0"
                  },
                  {
                        "id": "B",
                        "text": "GPIO 16"
                  },
                  {
                        "id": "C",
                        "text": "GPIO 1"
                  },
                  {
                        "id": "D",
                        "text": "GPIO 3"
                  }
            ]
      },
      {
            "id": "q-doc-1-2-8",
            "type": "single_choice",
            "prompt": "Khi cả hai chân DTR và RTS cùng được phần mềm nạp kéo xuống mức logic tích cực, mạch auto-reset bảo đảm trạng thái nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chân EN và GPIO0 không bị kéo xuống LOW cùng lúc"
                  },
                  {
                        "id": "B",
                        "text": "Cả hai chân EN và GPIO0 đều bị chập mạch gây cháy"
                  },
                  {
                        "id": "C",
                        "text": "Tần số hoạt động của vi điều khiển tự động tăng đôi"
                  },
                  {
                        "id": "D",
                        "text": "Dữ liệu trong bộ nhớ Flash bị xóa sạch hoàn toàn"
                  }
            ]
      }
]),
      doc('doc-1-3', 'Câu hỏi kiểm tra Doc 1.3', 'Nguyên lý diode phát quang, định luật Ohm tính điện trở hạn dòng, cấu trúc kênh LEDC và công thức tính chu kỳ xung PWM.', [
      {
            "id": "q-doc-1-3-1",
            "type": "single_choice",
            "prompt": "Mục đích cốt lõi của việc mắc nối tiếp một điện trở hạn dòng với đèn LED chỉ thị trên bo mạch OBC là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giới hạn dòng điện qua LED trong mức an toàn"
                  },
                  {
                        "id": "B",
                        "text": "Khuếch đại điện áp nguồn giúp LED phát sáng chói"
                  },
                  {
                        "id": "C",
                        "text": "Kích hoạt mạch dao động giúp LED chớp nháy tự động"
                  },
                  {
                        "id": "D",
                        "text": "Hấp thụ các xung nhiễu điện áp cao tần của nguồn cấp"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-2",
            "type": "single_choice",
            "prompt": "Nếu sử dụng chân GPIO xuất 3.3V cấp cho đèn LED đỏ có điện áp rơi $V_f = 1.8\\text{V}$, với dòng mong muốn $10\\text{mA}$, giá trị điện trở hạn dòng cần chọn là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "33 Ohm"
                  },
                  {
                        "id": "B",
                        "text": "1000 Ohm"
                  },
                  {
                        "id": "C",
                        "text": "10 kOhm"
                  },
                  {
                        "id": "D",
                        "text": "150 Ohm"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-3",
            "type": "single_choice",
            "prompt": "Ngoại vi điều chế độ rộng xung phần cứng (PWM) trên vi điều khiển ESP32 được gọi tên là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bộ định thời Timer 555"
                  },
                  {
                        "id": "B",
                        "text": "Bộ khuếch đại thuật toán Op-Amp"
                  },
                  {
                        "id": "C",
                        "text": "Ngoại vi LEDC"
                  },
                  {
                        "id": "D",
                        "text": "Bộ dao động tích phân"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-4",
            "type": "single_choice",
            "prompt": "Bộ ngoại vi LEDC của ESP32 cung cấp tổng cộng bao nhiêu kênh xung PWM độc lập?",
            "choices": [
                  {
                        "id": "A",
                        "text": "32 kênh"
                  },
                  {
                        "id": "B",
                        "text": "4 kênh"
                  },
                  {
                        "id": "C",
                        "text": "16 kênh"
                  },
                  {
                        "id": "D",
                        "text": "8 kênh"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-5",
            "type": "single_choice",
            "prompt": "Độ phân giải chu kỳ công tác (Duty Cycle Resolution) của ngoại vi LEDC trên ESP32 có thể cấu hình tối đa là bao nhiêu bit?",
            "choices": [
                  {
                        "id": "A",
                        "text": "16 bit"
                  },
                  {
                        "id": "B",
                        "text": "10 bit"
                  },
                  {
                        "id": "C",
                        "text": "8 bit"
                  },
                  {
                        "id": "D",
                        "text": "32 bit"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-6",
            "type": "single_choice",
            "prompt": "Nếu cấu hình kênh LEDC ở độ phân giải 8-bit, dải giá trị điều khiển độ sáng LED (Duty Cycle) sẽ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "0 đến 4095"
                  },
                  {
                        "id": "B",
                        "text": "0 đến 1023"
                  },
                  {
                        "id": "C",
                        "text": "0 đến 255"
                  },
                  {
                        "id": "D",
                        "text": "0 đến 100"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-7",
            "type": "single_choice",
            "prompt": "Nếu cấu hình kênh LEDC ở độ phân giải 10-bit, giá trị số nguyên biểu diễn chu kỳ công tác 50% là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1024"
                  },
                  {
                        "id": "B",
                        "text": "128"
                  },
                  {
                        "id": "C",
                        "text": "512"
                  },
                  {
                        "id": "D",
                        "text": "2048"
                  }
            ]
      },
      {
            "id": "q-doc-1-3-8",
            "type": "single_choice",
            "prompt": "Chu kỳ làm việc (Duty Cycle) của tín hiệu PWM được định nghĩa chính xác là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tỷ lệ thời gian mức HIGH so với chu kỳ xung"
                  },
                  {
                        "id": "B",
                        "text": "Điện áp cực đại đo được tại đỉnh của dạng sóng xung"
                  },
                  {
                        "id": "C",
                        "text": "Tổng số lượng chu kỳ xung xuất hiện trong một giây"
                  },
                  {
                        "id": "D",
                        "text": "Trở kháng đặc trưng danh định của đường dẫn tín hiệu"
                  }
            ]
      }
]),
      practice('practice-1-led', 'Câu hỏi kiểm tra Thực hành LED', 'Khối chức năng mã nguồn: pinMode(), digitalWrite(), mảng chân GPIO, các hàm cấu hình PWM (ledcSetup(), ledcAttachPin(), ledcWrite()) và giải thuật điều chế Duty Cycle.',
        ['Lab1-01_Blink_LED', 'Lab1-02_Control_Multiple_LEDs', 'Lab1-03_PWM_LED'], [
      {
            "id": "q-practice-1-led-1",
            "type": "single_choice",
            "prompt": "Để điều chỉnh chu kỳ làm việc (Duty Cycle) của một kênh PWM trong ngoại vi LEDC, lệnh C++ nào được gọi?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Sử dụng hàm pwmWrite() ghi chu kỳ xung vào thanh ghi ngoại vi"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng hàm digitalWritePWM() xuất mức xung tương ứng"
                  },
                  {
                        "id": "C",
                        "text": "Sử dụng hàm analogWrite() điều chỉnh tỷ lệ thời gian đóng ngắt"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng hàm ledcWrite() cập nhật chu kỳ làm việc của kênh PWM"
                  }
            ]
      }
]),
      doc('doc-1-4', 'Câu hỏi kiểm tra Doc 1.4', 'Mức logic hở mạch (Floating), mạch điện trở kéo lên nội và hiện tượng nảy tiếp điểm cơ khí (Contact Bounce).', [
      {
            "id": "q-doc-1-4-1",
            "type": "single_choice",
            "prompt": "Khi cấu hình một chân GPIO làm ngõ vào với chế độ `INPUT_PULLUP`, trạng thái mặc định của chân khi để hở là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "B",
                        "text": "Mức điện áp trôi nổi không xác định"
                  },
                  {
                        "id": "C",
                        "text": "Mức logic LOW"
                  },
                  {
                        "id": "D",
                        "text": "Điện áp -3.3V"
                  }
            ]
      },
      {
            "id": "q-doc-1-4-2",
            "type": "single_choice",
            "prompt": "Nếu một chân GPIO cấu hình chế độ `INPUT` thuần túy mà không có điện trở kéo (Floating), hiện tượng gì sẽ xảy ra?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Trạng thái logic chập chờn do nhiễu môi trường"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống vi điều khiển tự động reset lại liên tục"
                  },
                  {
                        "id": "C",
                        "text": "Chân GPIO luôn luôn đo được mức logic LOW cố định"
                  },
                  {
                        "id": "D",
                        "text": "Chân tín hiệu bị chập mạch gây hỏng vi điều khiển"
                  }
            ]
      },
      {
            "id": "q-doc-1-4-3",
            "type": "single_choice",
            "prompt": "Hiện tượng rung cơ khí (Contact Bounce) của nút bấm xảy ra trong khoảng thời gian điển hình là bao lâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.1 đến 0.5 mili-giây"
                  },
                  {
                        "id": "B",
                        "text": "1.0 đến 2.0 mili-giây"
                  },
                  {
                        "id": "C",
                        "text": "50 đến 100 mili-giây"
                  },
                  {
                        "id": "D",
                        "text": "5 đến 20 mili-giây"
                  }
            ]
      },
      {
            "id": "q-doc-1-4-4",
            "type": "single_choice",
            "prompt": "Nếu không xử lý hiện tượng rung phím (Debounce), việc bấm nút một lần có thể dẫn đến hậu quả gì trong phần mềm?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm nóng chảy tiếp điểm kim loại của nút bấm cơ học"
                  },
                  {
                        "id": "B",
                        "text": "Làm chập mạch và hỏng hoàn toàn cổng giao tiếp USB"
                  },
                  {
                        "id": "C",
                        "text": "Nhận diện nhầm thành nhiều lần bấm liên tiếp"
                  },
                  {
                        "id": "D",
                        "text": "Làm sai lệch giá trị đếm thời gian thực của hệ thống"
                  }
            ]
      },
      {
            "id": "q-doc-1-4-5",
            "type": "single_choice",
            "prompt": "Giải pháp phần cứng kinh điển để chống rung tiếp điểm cơ học cho nút nhấn là sử dụng linh kiện nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mắc nối tiếp tiếp điểm nút nhấn với cuộn biến áp"
                  },
                  {
                        "id": "B",
                        "text": "Mắc song song chân nút nhấn với một bóng đèn LED"
                  },
                  {
                        "id": "C",
                        "text": "Mắc song song tiếp điểm nút nhấn với tụ điện nhỏ"
                  },
                  {
                        "id": "D",
                        "text": "Mắc nối tiếp chân tín hiệu với cuộn cảm công suất"
                  }
            ]
      },
      {
            "id": "q-doc-1-4-6",
            "type": "single_choice",
            "prompt": "Khi nút nhấn nối chân GPIO với GND theo cấu hình `INPUT_PULLUP`, giá trị hàm `digitalRead()` trả về khi bấm nút là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic LOW"
                  },
                  {
                        "id": "B",
                        "text": "Không xác định"
                  },
                  {
                        "id": "C",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "D",
                        "text": "Mức 3.3V"
                  }
            ]
      }
]),
      practice('practice-1-button', 'Câu hỏi kiểm tra Thực hành Nút Nhấn', 'Khối code đọc digitalRead(), biến trạng thái chốt (Toggle) và giải thuật lọc chống rung phần mềm với thời gian trễ kiểm tra.',
        ['Lab1-03_Button', 'Lab1-04_LED_Button'], [
      {
            "id": "q-practice-1-button-1",
            "type": "single_choice",
            "prompt": "Khi cấu hình một chân GPIO làm ngõ vào với chế độ `INPUT_PULLUP`, trạng thái mặc định của chân khi để hở là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "B",
                        "text": "Mức điện áp trôi nổi không xác định"
                  },
                  {
                        "id": "C",
                        "text": "Mức logic LOW"
                  },
                  {
                        "id": "D",
                        "text": "Điện áp -3.3V"
                  }
            ]
      },
      {
            "id": "q-practice-1-button-2",
            "type": "single_choice",
            "prompt": "Nếu một chân GPIO cấu hình chế độ `INPUT` thuần túy mà không có điện trở kéo (Floating), hiện tượng gì sẽ xảy ra?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Trạng thái logic chập chờn do nhiễu môi trường"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống vi điều khiển tự động reset lại liên tục"
                  },
                  {
                        "id": "C",
                        "text": "Chân GPIO luôn luôn đo được mức logic LOW cố định"
                  },
                  {
                        "id": "D",
                        "text": "Chân tín hiệu bị chập mạch gây hỏng vi điều khiển"
                  }
            ]
      },
      {
            "id": "q-practice-1-button-3",
            "type": "single_choice",
            "prompt": "Hiện tượng rung cơ khí (Contact Bounce) của nút bấm xảy ra trong khoảng thời gian điển hình là bao lâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.1 đến 0.5 mili-giây"
                  },
                  {
                        "id": "B",
                        "text": "1.0 đến 2.0 mili-giây"
                  },
                  {
                        "id": "C",
                        "text": "50 đến 100 mili-giây"
                  },
                  {
                        "id": "D",
                        "text": "5 đến 20 mili-giây"
                  }
            ]
      },
      {
            "id": "q-practice-1-button-4",
            "type": "single_choice",
            "prompt": "Nếu không xử lý hiện tượng rung phím (Debounce), việc bấm nút một lần có thể dẫn đến hậu quả gì trong phần mềm?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm nóng chảy tiếp điểm kim loại của nút bấm cơ học"
                  },
                  {
                        "id": "B",
                        "text": "Làm chập mạch và hỏng hoàn toàn cổng giao tiếp USB"
                  },
                  {
                        "id": "C",
                        "text": "Nhận diện nhầm thành nhiều lần bấm liên tiếp"
                  },
                  {
                        "id": "D",
                        "text": "Làm sai lệch giá trị đếm thời gian thực của hệ thống"
                  }
            ]
      },
      {
            "id": "q-practice-1-button-5",
            "type": "single_choice",
            "prompt": "Giải pháp phần cứng kinh điển để chống rung tiếp điểm cơ học cho nút nhấn là sử dụng linh kiện nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mắc nối tiếp tiếp điểm nút nhấn với cuộn biến áp"
                  },
                  {
                        "id": "B",
                        "text": "Mắc song song chân nút nhấn với một bóng đèn LED"
                  },
                  {
                        "id": "C",
                        "text": "Mắc song song tiếp điểm nút nhấn với tụ điện nhỏ"
                  },
                  {
                        "id": "D",
                        "text": "Mắc nối tiếp chân tín hiệu với cuộn cảm công suất"
                  }
            ]
      },
      {
            "id": "q-practice-1-button-6",
            "type": "single_choice",
            "prompt": "Khi nút nhấn nối chân GPIO với GND theo cấu hình `INPUT_PULLUP`, giá trị hàm `digitalRead()` trả về khi bấm nút là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic LOW"
                  },
                  {
                        "id": "B",
                        "text": "Không xác định"
                  },
                  {
                        "id": "C",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "D",
                        "text": "Mức 3.3V"
                  }
            ]
      }
]),
      doc('doc-1-5', 'Câu hỏi kiểm tra Doc 1.5', 'Thanh ghi dịch 8-bit và thanh ghi chốt (Storage Register), giản đồ xung chân DS, SH_CP, ST_CP và bảng mã Anode/Cathode chung.', [
      {
            "id": "q-doc-1-5-1",
            "type": "single_choice",
            "prompt": "Vi mạch dịch 74HC595 thường được tích hợp trên bo mạch OBC nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mở rộng dung lượng lưu trữ cho bộ nhớ SRAM nội"
                  },
                  {
                        "id": "B",
                        "text": "Tăng khả năng nén hình ảnh chụp của cảm biến"
                  },
                  {
                        "id": "C",
                        "text": "Mở rộng chân ra logic chỉ với 3 chân điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Khuếch đại nguồn điện áp một chiều lên mức 220V"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-2",
            "type": "single_choice",
            "prompt": "Để điều khiển thanh ghi dịch 74HC595, vi điều khiển ESP32 cần kết nối tối thiểu bao nhiêu đường tín hiệu điều khiển?",
            "choices": [
                  {
                        "id": "A",
                        "text": "8 đường"
                  },
                  {
                        "id": "B",
                        "text": "16 đường"
                  },
                  {
                        "id": "C",
                        "text": "3 đường"
                  },
                  {
                        "id": "D",
                        "text": "1 đường duy nhất"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-3",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'DS' (Serial Data Input) trên vi mạch 74HC595 có nhiệm vụ gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa sạch toàn bộ dữ liệu đang lưu trong thanh ghi"
                  },
                  {
                        "id": "B",
                        "text": "Tiếp nhận nguồn điện áp dương 3.3V nuôi mạch vi sai"
                  },
                  {
                        "id": "C",
                        "text": "Nhận dữ liệu nhị phân nối tiếp từ vi điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Kích hoạt các tầng đệm xuất dòng công suất cao ngoài"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-4",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'SH_CP' (Shift Register Clock Pin) trên vi mạch 74HC595 hoạt động theo cơ chế nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dịch bit chân DS vào thanh ghi tại sườn xung dương"
                  },
                  {
                        "id": "B",
                        "text": "Tự động đảo cực tính dòng điện chạy qua tải công suất"
                  },
                  {
                        "id": "C",
                        "text": "Luôn duy trì mức điện áp logic HIGH để giữ trạng thái"
                  },
                  {
                        "id": "D",
                        "text": "Xóa toàn bộ thanh ghi dữ liệu khi chân ở mức logic LOW"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-5",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'ST_CP' (Storage Register Clock / Latch Pin) trên 74HC595 có vai trò chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chốt dữ liệu từ thanh ghi dịch ra các chân ngõ ra"
                  },
                  {
                        "id": "B",
                        "text": "Đo nhiệt độ tiếp giáp bán dẫn bên trong của vi mạch"
                  },
                  {
                        "id": "C",
                        "text": "Điều chỉnh tốc độ nạp nén dữ liệu firmware nhúng"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp nguồn điện áp dự phòng 5V cho mạch tải ngoài"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-6",
            "type": "single_choice",
            "prompt": "Ưu điểm quan trọng của việc sử dụng chân chốt (Latch Pin) trên 74HC595 khi điều khiển LED là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cắt giảm hoàn toàn mức tiêu thụ năng lượng mạch"
                  },
                  {
                        "id": "B",
                        "text": "Tránh nhấp nháy rác ở ngõ ra trong khi dịch bit"
                  },
                  {
                        "id": "C",
                        "text": "Tự động kích thích cho bóng đèn LED đổi màu sắc"
                  },
                  {
                        "id": "D",
                        "text": "Tăng cường độ rọi quang học của bóng LED lên đôi"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-7",
            "type": "single_choice",
            "prompt": "Chân 'OE' (Output Enable) trên vi mạch 74HC595 tích cực ở mức logic nào để cho phép các ngõ ra hoạt động?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "B",
                        "text": "Mức điện áp trôi nổi"
                  },
                  {
                        "id": "C",
                        "text": "Mức tần số cao"
                  },
                  {
                        "id": "D",
                        "text": "Mức logic LOW"
                  }
            ]
      },
      {
            "id": "q-doc-1-5-8",
            "type": "single_choice",
            "prompt": "Để xóa sạch dữ liệu trong thanh ghi dịch của 74HC595 về 0 tức thời, chân tín hiệu nào cần được kéo xuống mức LOW?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chân nhận dữ liệu DS"
                  },
                  {
                        "id": "B",
                        "text": "Chân xuất nối tiếp Q7S"
                  },
                  {
                        "id": "C",
                        "text": "Chân MR tích cực mức LOW"
                  },
                  {
                        "id": "D",
                        "text": "Chân cấp nguồn dương VCC"
                  }
            ]
      }
]),
      practice('practice-1-74hc595', 'Câu hỏi kiểm tra Thực hành 74HC595', 'Cấu trúc hàm shiftOut(), thứ tự truyền bit MSBFIRST/LSBFIRST, thao tác chốt latchPin bằng cặp lệnh LOW/HIGH và mảng mẫu byte hiển thị.',
        ['Lab1-05_7_Segment_LED'], [
      {
            "id": "q-practice-1-74hc595-1",
            "type": "single_choice",
            "prompt": "Vi mạch dịch 74HC595 thường được tích hợp trên bo mạch OBC nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mở rộng dung lượng lưu trữ cho bộ nhớ SRAM nội"
                  },
                  {
                        "id": "B",
                        "text": "Tăng khả năng nén hình ảnh chụp của cảm biến"
                  },
                  {
                        "id": "C",
                        "text": "Mở rộng chân ra logic chỉ với 3 chân điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Khuếch đại nguồn điện áp một chiều lên mức 220V"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-2",
            "type": "single_choice",
            "prompt": "Để điều khiển thanh ghi dịch 74HC595, vi điều khiển ESP32 cần kết nối tối thiểu bao nhiêu đường tín hiệu điều khiển?",
            "choices": [
                  {
                        "id": "A",
                        "text": "8 đường"
                  },
                  {
                        "id": "B",
                        "text": "16 đường"
                  },
                  {
                        "id": "C",
                        "text": "3 đường"
                  },
                  {
                        "id": "D",
                        "text": "1 đường duy nhất"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-3",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'DS' (Serial Data Input) trên vi mạch 74HC595 có nhiệm vụ gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa sạch toàn bộ dữ liệu đang lưu trong thanh ghi"
                  },
                  {
                        "id": "B",
                        "text": "Tiếp nhận nguồn điện áp dương 3.3V nuôi mạch vi sai"
                  },
                  {
                        "id": "C",
                        "text": "Nhận dữ liệu nhị phân nối tiếp từ vi điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Kích hoạt các tầng đệm xuất dòng công suất cao ngoài"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-4",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'SH_CP' (Shift Register Clock Pin) trên vi mạch 74HC595 hoạt động theo cơ chế nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dịch bit chân DS vào thanh ghi tại sườn xung dương"
                  },
                  {
                        "id": "B",
                        "text": "Tự động đảo cực tính dòng điện chạy qua tải công suất"
                  },
                  {
                        "id": "C",
                        "text": "Luôn duy trì mức điện áp logic HIGH để giữ trạng thái"
                  },
                  {
                        "id": "D",
                        "text": "Xóa toàn bộ thanh ghi dữ liệu khi chân ở mức logic LOW"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-5",
            "type": "single_choice",
            "prompt": "Chân tín hiệu 'ST_CP' (Storage Register Clock / Latch Pin) trên 74HC595 có vai trò chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chốt dữ liệu từ thanh ghi dịch ra các chân ngõ ra"
                  },
                  {
                        "id": "B",
                        "text": "Đo nhiệt độ tiếp giáp bán dẫn bên trong của vi mạch"
                  },
                  {
                        "id": "C",
                        "text": "Điều chỉnh tốc độ nạp nén dữ liệu firmware nhúng"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp nguồn điện áp dự phòng 5V cho mạch tải ngoài"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-6",
            "type": "single_choice",
            "prompt": "Ưu điểm quan trọng của việc sử dụng chân chốt (Latch Pin) trên 74HC595 khi điều khiển LED là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cắt giảm hoàn toàn mức tiêu thụ năng lượng mạch"
                  },
                  {
                        "id": "B",
                        "text": "Tránh nhấp nháy rác ở ngõ ra trong khi dịch bit"
                  },
                  {
                        "id": "C",
                        "text": "Tự động kích thích cho bóng đèn LED đổi màu sắc"
                  },
                  {
                        "id": "D",
                        "text": "Tăng cường độ rọi quang học của bóng LED lên đôi"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-7",
            "type": "single_choice",
            "prompt": "Chân 'OE' (Output Enable) trên vi mạch 74HC595 tích cực ở mức logic nào để cho phép các ngõ ra hoạt động?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mức logic HIGH"
                  },
                  {
                        "id": "B",
                        "text": "Mức điện áp trôi nổi"
                  },
                  {
                        "id": "C",
                        "text": "Mức tần số cao"
                  },
                  {
                        "id": "D",
                        "text": "Mức logic LOW"
                  }
            ]
      },
      {
            "id": "q-practice-1-74hc595-8",
            "type": "single_choice",
            "prompt": "Để xóa sạch dữ liệu trong thanh ghi dịch của 74HC595 về 0 tức thời, chân tín hiệu nào cần được kéo xuống mức LOW?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chân nhận dữ liệu DS"
                  },
                  {
                        "id": "B",
                        "text": "Chân xuất nối tiếp Q7S"
                  },
                  {
                        "id": "C",
                        "text": "Chân MR tích cực mức LOW"
                  },
                  {
                        "id": "D",
                        "text": "Chân cấp nguồn dương VCC"
                  }
            ]
      }
]),
      doc('doc-1-6', 'Câu hỏi kiểm tra Doc 1.6', 'Khung truyền UART (Start bit, Data bits, Parity bit, Stop bit), tốc độ baud và bộ đệm phần cứng FIFO.', [
      {
            "id": "q-doc-1-6-1",
            "type": "single_choice",
            "prompt": "Giao tiếp Web Serial trên trình duyệt yêu cầu điều kiện bảo mật bắt buộc nào để có thể hoạt động?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống máy tính phải kết nối sẵn mạng Bluetooth"
                  },
                  {
                        "id": "B",
                        "text": "Trình duyệt phải chạy bằng quyền Root hệ điều hành"
                  },
                  {
                        "id": "C",
                        "text": "Người dùng phải cài đặt thêm máy ảo phần mềm Java"
                  },
                  {
                        "id": "D",
                        "text": "Trang web phải chạy trên HTTPS hoặc localhost"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-2",
            "type": "single_choice",
            "prompt": "Để nạp được firmware từ trình duyệt web xuống chip ESP32, máy tính cần nhận diện chip cầu nối USB-UART nào phổ biến?",
            "choices": [
                  {
                        "id": "A",
                        "text": "CH340 hoặc CP2102"
                  },
                  {
                        "id": "B",
                        "text": "NE555"
                  },
                  {
                        "id": "C",
                        "text": "ULN2003"
                  },
                  {
                        "id": "D",
                        "text": "LM358"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-3",
            "type": "single_choice",
            "prompt": "Quá trình nạp firmware xuống ESP32 thông qua cổng nối tiếp UART sử dụng công cụ mã nguồn mở kinh điển nào của Espressif?",
            "choices": [
                  {
                        "id": "A",
                        "text": "GDB Debugger"
                  },
                  {
                        "id": "B",
                        "text": "OpenOCD"
                  },
                  {
                        "id": "C",
                        "text": "GCC Compiler"
                  },
                  {
                        "id": "D",
                        "text": "esptool"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-4",
            "type": "single_choice",
            "prompt": "Mạch tự động nạp (Auto-reset circuit) trên bo mạch nạp ESP32 sử dụng hai tín hiệu điều khiển nào từ cổng USB-UART?",
            "choices": [
                  {
                        "id": "A",
                        "text": "CTS và DSR"
                  },
                  {
                        "id": "B",
                        "text": "DTR và RTS"
                  },
                  {
                        "id": "C",
                        "text": "VCC và GND"
                  },
                  {
                        "id": "D",
                        "text": "TXD và RXD"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-5",
            "type": "single_choice",
            "prompt": "Tốc độ baud rate tiêu chuẩn thường được cấu hình cho việc nạp firmware tốc độ cao qua UART xuống ESP32 là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ tiêu chuẩn 9600 bps"
                  },
                  {
                        "id": "B",
                        "text": "921600 bps hoặc 460800 bps"
                  },
                  {
                        "id": "C",
                        "text": "Tốc độ giới hạn 1200 bps"
                  },
                  {
                        "id": "D",
                        "text": "Tốc độ cao nhất 10 Mbps"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-6",
            "type": "single_choice",
            "prompt": "Tốc độ baud rate mặc định thường dùng để hiển thị dữ liệu gỡ lỗi (Serial Monitor) của hệ thống PTITCube là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "9600 bps"
                  },
                  {
                        "id": "B",
                        "text": "115200 bps"
                  },
                  {
                        "id": "C",
                        "text": "1200 bps"
                  },
                  {
                        "id": "D",
                        "text": "1000000 bps"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-7",
            "type": "single_choice",
            "prompt": "Khi mở cửa sổ Serial Monitor trên Web LMS mà màn hình chỉ hiển thị các ký tự lạ hoặc rác (Garbage text), nguyên nhân phổ biến nhất là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cáp USB kết nối bị đứt đường dây cấp nguồn 5V"
                  },
                  {
                        "id": "B",
                        "text": "Sai lệch tốc độ baud rate giữa phần mềm và code"
                  },
                  {
                        "id": "C",
                        "text": "Chân truyền tín hiệu UART của vi điều khiển hỏng"
                  },
                  {
                        "id": "D",
                        "text": "Điện áp cấp cho vi điều khiển bị sụt áp đột ngột"
                  }
            ]
      },
      {
            "id": "q-doc-1-6-8",
            "type": "single_choice",
            "prompt": "Cổng nối tiếp UART phần cứng nào trên vi điều khiển OBC (ESP32) được mặc định sử dụng để nạp firmware và xuất thông tin gỡ lỗi (debug log) ra Serial Monitor?",
            "choices": [
                  {
                        "id": "A",
                        "text": "UART0 (Serial)"
                  },
                  {
                        "id": "B",
                        "text": "UART1 (Serial1)"
                  },
                  {
                        "id": "C",
                        "text": "UART2 (Serial2)"
                  },
                  {
                        "id": "D",
                        "text": "UART3 (Serial3)"
                  }
            ]
      }
]),
      practice('practice-1-uart', 'Câu hỏi kiểm tra Thực hành UART', 'Khối code Serial.available(), Serial.read(), cấu trúc switch-case giải mã ký tự điều khiển và kỹ thuật định dạng in ấn.',
        ['Lab1-06_Serial_Communication', 'Lab1-07_Serial_Control_LED'], [
      {
            "id": "q-practice-1-uart-1",
            "type": "single_choice",
            "prompt": "Để khởi tạo giao tiếp nối tiếp UART0 với tốc độ truyền 115200 baud, lệnh C++ nào được gọi trong hàm `setup()`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Gọi hàm UART.init() và truyền tham số tốc độ baud mong muốn"
                  },
                  {
                        "id": "B",
                        "text": "Gọi phương thức Serial.start() để bật khối ngoại vi truyền nhận"
                  },
                  {
                        "id": "C",
                        "text": "Gọi phương thức Serial.begin() và truyền tham số tốc độ baud mong muốn"
                  },
                  {
                        "id": "D",
                        "text": "Gọi phương thức Serial.connect() để thiết lập kênh UART0"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-2",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ nào sau đây được sử dụng để đọc liên tục chuỗi ký tự nhận được từ cổng Serial cho đến khi gặp ký tự xuống dòng '\\n'?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Sử dụng phương thức Serial.readStringUntil() đọc tới ký tự ngắt dòng"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng phương thức Serial.read() đọc tuần tự từng ký tự đơn lẻ"
                  },
                  {
                        "id": "C",
                        "text": "Sử dụng phương thức Serial.peek() xem trước ký tự đầu trong bộ đệm"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng phương thức Serial.print() xuất ký tự ngắt dòng ra terminal"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-3",
            "type": "single_choice",
            "prompt": "Để so sánh nội dung của chuỗi lệnh `cmd` nhận được từ cổng Serial với chuỗi cố định LED_ON, cú pháp C++ chuẩn là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Sử dụng toán tử so sánh bằng == hoặc phương thức equals() của đối tượng String"
                  },
                  {
                        "id": "B",
                        "text": "Kiểm tra chuỗi lệnh khác rỗng và có độ dài ký tự lớn hơn không"
                  },
                  {
                        "id": "C",
                        "text": "Sử dụng toán tử gán đơn = kết hợp kiểm tra độ dài tổng thể"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ kiểm tra xem ký tự đầu tiên của chuỗi có trùng với chữ L hay không"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-4",
            "type": "single_choice",
            "prompt": "Để thiết lập thời gian chờ tối đa (Timeout) khi thực hiện các hàm đọc chuỗi như `Serial.readBytesUntil()`, lệnh C++ nào được dùng?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Sử dụng phương thức Serial.wait() truyền thời gian chờ tối đa"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng phương thức Serial.setTimeout() thiết lập thời gian chờ tối đa"
                  },
                  {
                        "id": "C",
                        "text": "Sử dụng phương thức Serial.setTime() cấu hình đồng hồ đếm thời gian"
                  },
                  {
                        "id": "D",
                        "text": "Gọi hàm dừng trễ delay() để tạm dừng chương trình chờ dữ liệu tới"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-5",
            "type": "single_choice",
            "prompt": "Đoạn mã sau thực hiện chức năng gì: `if (Serial.available() > 0) { char c = Serial.read(); Serial.write(c); }`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tạo vòng lặp vô hạn khiến vi điều khiển bị treo"
                  },
                  {
                        "id": "B",
                        "text": "Đọc ký tự nhận được và dội ngược lại về máy tính"
                  },
                  {
                        "id": "C",
                        "text": "Đọc bỏ ký tự nhận được và xóa sạch khỏi bộ nhớ"
                  },
                  {
                        "id": "D",
                        "text": "Lưu trữ ký tự vừa nhận vào ô nhớ của bộ nhớ Flash"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-6",
            "type": "single_choice",
            "prompt": "Cú pháp `Serial.write(buf, len);` khác với `Serial.print(buf);` ở điểm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hai phương thức hoàn toàn đồng nhất về định dạng dữ liệu gửi ra"
                  },
                  {
                        "id": "B",
                        "text": "Serial.write hiển thị cỡ chữ lớn hơn trên màn hình giao diện dòng lệnh"
                  },
                  {
                        "id": "C",
                        "text": "Serial.write truyền mảng byte nhị phân thô thay vì chuyển đổi sang ký tự ASCII"
                  },
                  {
                        "id": "D",
                        "text": "Serial.write chỉ truyền được duy nhất một phần tử byte đầu tiên trong mảng"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-7",
            "type": "single_choice",
            "prompt": "Đoạn mã sau thực hiện hành vi nào: `while(Serial.available() > 0) { Serial.read(); }`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tạm dừng chương trình để chờ luồng dữ liệu mới gửi đến"
                  },
                  {
                        "id": "B",
                        "text": "Đọc bỏ và dọn sạch toàn bộ dữ liệu trong bộ đệm RX"
                  },
                  {
                        "id": "C",
                        "text": "Làm khóa cứng chu trình tính toán của vi điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Đẩy toàn bộ dữ liệu trong mảng bộ đệm ra đường truyền"
                  }
            ]
      },
      {
            "id": "q-practice-1-uart-8",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ nào sau đây giúp chuyển đổi một ký tự số ASCII nhận được từ Serial (ví dụ ký tự '5') thành giá trị số nguyên nguyên bản là 5?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nhân mã số ASCII của ký tự với hệ số nguyên bằng mười"
                  },
                  {
                        "id": "B",
                        "text": "Ép kiểu dữ liệu trực tiếp từ kiểu ký tự sang kiểu số nguyên int"
                  },
                  {
                        "id": "C",
                        "text": "Lấy mã ASCII của ký tự trừ đi mã ASCII của ký tự số không"
                  },
                  {
                        "id": "D",
                        "text": "Lấy mã ASCII của ký tự cộng thêm mã ASCII của ký tự số không"
                  }
            ]
      }
]),
      doc('doc-1-7', 'Câu hỏi kiểm tra Doc 1.7', 'Sóng WiFi 2.4GHz, địa chỉ IP động DHCP và IP tĩnh, giao thức HTTP cổng 80 và các phương thức GET/POST.', [
      {
            "id": "q-doc-1-7-1",
            "type": "single_choice",
            "prompt": "Mạng không dây WiFi tích hợp trên module ESP32 hoạt động ở dải tần số vô tuyến chuẩn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "2.4 GHz"
                  },
                  {
                        "id": "B",
                        "text": "5.8 GHz"
                  },
                  {
                        "id": "C",
                        "text": "433 MHz"
                  },
                  {
                        "id": "D",
                        "text": "915 MHz"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-2",
            "type": "single_choice",
            "prompt": "Chuẩn mã hóa bảo mật mạng WiFi nào sau đây được phần cứng ESP32 hỗ trợ đầy đủ?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ hỗ trợ mạng mở không bảo mật"
                  },
                  {
                        "id": "B",
                        "text": "Không hỗ trợ giao thức bảo mật"
                  },
                  {
                        "id": "C",
                        "text": "WPA, WPA2-PSK và WPA3"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ hỗ trợ khóa WEP cũ"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-3",
            "type": "single_choice",
            "prompt": "Ở chế độ hoạt động 'Station Mode' (STA), module WiFi của ESP32 đóng vai trò là thiết bị gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hoạt động như máy khách kết nối vào mạng Wi-Fi sẵn có"
                  },
                  {
                        "id": "B",
                        "text": "Hoạt động như điểm truy cập phát sóng Wi-Fi cho thiết bị"
                  },
                  {
                        "id": "C",
                        "text": "Hoạt động như bộ định tuyến chuyển mạch gói dữ liệu mạng"
                  },
                  {
                        "id": "D",
                        "text": "Hoạt động như bộ lặp sóng không dây mở rộng vùng phủ sóng"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-4",
            "type": "single_choice",
            "prompt": "Ở chế độ hoạt động 'Access Point' (AP), module WiFi của ESP32 đảm nhận vai trò thiết bị nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Anten thu phát tín hiệu truyền hình vệ tinh quỹ đạo"
                  },
                  {
                        "id": "B",
                        "text": "Thiết bị quét và giải mã sóng vô tuyến mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Điểm phát sóng không dây cho máy khách kết nối vào"
                  },
                  {
                        "id": "D",
                        "text": "Cảm biến tiếp nhận sóng thụ động ngoài không gian"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-5",
            "type": "single_choice",
            "prompt": "Địa chỉ IP mặc định cục bộ khi ESP32 khởi tạo mạng SoftAP thông thường có giá trị là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "192.168.4.1"
                  },
                  {
                        "id": "B",
                        "text": "255.255.255.0"
                  },
                  {
                        "id": "C",
                        "text": "127.0.0.1"
                  },
                  {
                        "id": "D",
                        "text": "0.0.0.0"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-6",
            "type": "single_choice",
            "prompt": "Giao thức mạng nào cho phép bo mạch ESP32 tự động nhận địa chỉ IP khi kết nối vào mạng WiFi gia đình hoặc phòng lab?",
            "choices": [
                  {
                        "id": "A",
                        "text": "SNMP"
                  },
                  {
                        "id": "B",
                        "text": "FTP"
                  },
                  {
                        "id": "C",
                        "text": "DNS"
                  },
                  {
                        "id": "D",
                        "text": "DHCP"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-7",
            "type": "single_choice",
            "prompt": "Hệ thống Web Server nhúng chạy trên ESP32 phục vụ các yêu cầu giao tiếp mạng dựa trên giao thức lớp ứng dụng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "HTTP hoặc HTTPS"
                  },
                  {
                        "id": "B",
                        "text": "Telnet"
                  },
                  {
                        "id": "C",
                        "text": "SMTP"
                  },
                  {
                        "id": "D",
                        "text": "SSH"
                  }
            ]
      },
      {
            "id": "q-doc-1-7-8",
            "type": "single_choice",
            "prompt": "Mã trạng thái phản hồi HTTP '200 OK' từ Web Server của ESP32 có ý nghĩa gì đối với trình duyệt?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Yêu cầu bị từ chối do không có quyền"
                  },
                  {
                        "id": "B",
                        "text": "Yêu cầu đã được máy chủ tiếp nhận và xử lý thành công"
                  },
                  {
                        "id": "C",
                        "text": "Lỗi nội bộ vi điều khiển"
                  },
                  {
                        "id": "D",
                        "text": "Tài nguyên không tìm thấy trên hệ thống"
                  }
            ]
      }
]),
      doc('doc-1-8', 'Câu hỏi kiểm tra Doc 1.8', 'Tác hại của hàm chặn delay() trong phần mềm bay, kiểu unsigned long của millis() và phép trừ chống lỗi tràn số sau 49.7 ngày.', [
      {
            "id": "q-doc-1-8-1",
            "type": "single_choice",
            "prompt": "Tác động nguy hiểm nhất của việc sử dụng hàm chặn `delay(1000)` trong mã nguồn điều khiển vệ tinh là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm cạn kiệt dung lượng phân vùng bộ nhớ Flash nạp"
                  },
                  {
                        "id": "B",
                        "text": "Làm sai lệch quang phổ và màu phát quang của đèn LED"
                  },
                  {
                        "id": "C",
                        "text": "Gây xung điện làm hỏng phần cứng cổng nối tiếp UART"
                  },
                  {
                        "id": "D",
                        "text": "Chặn CPU khiến hệ thống không kịp xử lý sự kiện"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-2",
            "type": "single_choice",
            "prompt": "Hàm thời gian hệ thống `millis()` trong môi trường lập trình C++ của OBC trả về giá trị gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Số micro-giây trong một chu kỳ xung nhịp hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Số mili-giây trôi qua từ thời điểm chip khởi động"
                  },
                  {
                        "id": "C",
                        "text": "Thời gian vận hành dự kiến còn lại của nguồn pin"
                  },
                  {
                        "id": "D",
                        "text": "Giá trị thời gian thiên văn hiện tại theo giờ GMT"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-3",
            "type": "single_choice",
            "prompt": "Kiểu dữ liệu phù hợp nhất trong C++ để lưu trữ giá trị trả về từ hàm `millis()` nhằm tránh hiện tượng tràn số sớm là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "int"
                  },
                  {
                        "id": "B",
                        "text": "short"
                  },
                  {
                        "id": "C",
                        "text": "char"
                  },
                  {
                        "id": "D",
                        "text": "unsigned long"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-4",
            "type": "single_choice",
            "prompt": "Trong kỹ thuật lập trình phi phong bế (Non-blocking), điều kiện nào được dùng để xác định đã trôi qua khoảng thời gian `interval`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Kiểm tra biến thời gian millis() vượt quá một ngưỡng hằng số cố định"
                  },
                  {
                        "id": "B",
                        "text": "Kiểm tra hiệu số giữa millis() hiện tại và mốc trước đó lớn hơn hoặc bằng chu kỳ interval"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra biến thời gian millis() bằng chính xác giá trị chu kỳ interval định sẵn"
                  },
                  {
                        "id": "D",
                        "text": "Gọi hàm dừng trễ delay() và kiểm tra trạng thái hoàn tất trả về"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-5",
            "type": "single_choice",
            "prompt": "Đoạn mã sau làm đèn LED nối với kênh PWM thay đổi độ sáng như thế nào: `for(int d=0; d<=255; d++) { ledcWrite(0, d); delay(10); }`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đèn LED chớp nháy tuần hoàn theo chu kỳ cố định"
                  },
                  {
                        "id": "B",
                        "text": "Đèn LED liên tục thay đổi tần số dao động quang phổ"
                  },
                  {
                        "id": "C",
                        "text": "Độ sáng đèn LED tăng dần từ tắt đến sáng cực đại"
                  },
                  {
                        "id": "D",
                        "text": "Đèn LED lập tức tắt hẳn và chuyển sang trạng thái treo"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-6",
            "type": "single_choice",
            "prompt": "Hàm `micros()` trong C++ có chức năng tương tự hàm `millis()` nhưng đơn vị thời gian đo lường là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Micro-giây"
                  },
                  {
                        "id": "B",
                        "text": "Phút"
                  },
                  {
                        "id": "C",
                        "text": "Nano-giây"
                  },
                  {
                        "id": "D",
                        "text": "Giây"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-7",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ sau thực hiện kiểm tra điều kiện gì: `if (btnState == LOW && (millis() - lastDebounceTime > 50))`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Kiểm tra nhiệt độ cảm biến vượt quá ngưỡng 50 độ C"
                  },
                  {
                        "id": "B",
                        "text": "Kiểm tra khoảng thời gian tắt toàn bộ bóng đèn LED"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra dung lượng bộ nhớ đệm đã bị đầy hay chưa"
                  },
                  {
                        "id": "D",
                        "text": "Nút bấm đã được ấn ổn định quá 50 mili-giây"
                  }
            ]
      },
      {
            "id": "q-doc-1-8-8",
            "type": "single_choice",
            "prompt": "Đoạn mã sau kiểm tra hiện tượng gì: `if (millis() < previousMillis) { previousMillis = millis(); }`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xử lý hiện tượng tràn số của bộ đếm millis"
                  },
                  {
                        "id": "B",
                        "text": "Phát hiện hiện tượng sụt áp nguồn điện của hệ thống"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra nhiệt độ môi trường giảm đột ngột dưới sàn"
                  },
                  {
                        "id": "D",
                        "text": "Phát hiện trạng thái nút nhấn cơ học bị kẹt tiếp điểm"
                  }
            ]
      }
]),
      practice('practice-1-wifi', 'Câu hỏi kiểm tra Thực hành WiFi & Web Server', 'Khối code WiFi.begin(), WiFi.softAP(), đăng ký định tuyến server.on(), xử lý chuỗi phản hồi HTML và vòng lặp Non-blocking server.handleClient().',
        ['Lab1-08_WiFi_Connection', 'Lab1-09_WiFi_AP_Mode', 'Lab1-10_Web_Server_LED'], [
      {
            "id": "q-practice-1-wifi-1",
            "type": "single_choice",
            "prompt": "Mạng không dây WiFi tích hợp trên module ESP32 hoạt động ở dải tần số vô tuyến chuẩn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "2.4 GHz"
                  },
                  {
                        "id": "B",
                        "text": "5.8 GHz"
                  },
                  {
                        "id": "C",
                        "text": "433 MHz"
                  },
                  {
                        "id": "D",
                        "text": "915 MHz"
                  }
            ]
      },
      {
            "id": "q-practice-1-wifi-2",
            "type": "single_choice",
            "prompt": "Chuẩn mã hóa bảo mật mạng WiFi nào sau đây được phần cứng ESP32 hỗ trợ đầy đủ?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ hỗ trợ mạng mở không bảo mật"
                  },
                  {
                        "id": "B",
                        "text": "Không hỗ trợ giao thức bảo mật"
                  },
                  {
                        "id": "C",
                        "text": "WPA, WPA2-PSK và WPA3"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ hỗ trợ khóa WEP cũ"
                  }
            ]
      },
      {
            "id": "q-practice-1-wifi-3",
            "type": "single_choice",
            "prompt": "Ở chế độ hoạt động 'Station Mode' (STA), module WiFi của ESP32 đóng vai trò là thiết bị gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hoạt động như máy khách kết nối vào mạng Wi-Fi sẵn có"
                  },
                  {
                        "id": "B",
                        "text": "Hoạt động như điểm truy cập phát sóng Wi-Fi cho thiết bị"
                  },
                  {
                        "id": "C",
                        "text": "Hoạt động như bộ định tuyến chuyển mạch gói dữ liệu mạng"
                  },
                  {
                        "id": "D",
                        "text": "Hoạt động như bộ lặp sóng không dây mở rộng vùng phủ sóng"
                  }
            ]
      },
      {
            "id": "q-practice-1-wifi-4",
            "type": "single_choice",
            "prompt": "Ở chế độ hoạt động 'Access Point' (AP), module WiFi của ESP32 đảm nhận vai trò thiết bị nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Anten thu phát tín hiệu truyền hình vệ tinh quỹ đạo"
                  },
                  {
                        "id": "B",
                        "text": "Thiết bị quét và giải mã sóng vô tuyến mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Điểm phát sóng không dây cho máy khách kết nối vào"
                  },
                  {
                        "id": "D",
                        "text": "Cảm biến tiếp nhận sóng thụ động ngoài không gian"
                  }
            ]
      },
      {
            "id": "q-practice-1-wifi-5",
            "type": "single_choice",
            "prompt": "Giao thức mạng nào cho phép bo mạch ESP32 tự động nhận địa chỉ IP khi kết nối vào mạng WiFi gia đình hoặc phòng lab?",
            "choices": [
                  {
                        "id": "A",
                        "text": "SNMP"
                  },
                  {
                        "id": "B",
                        "text": "FTP"
                  },
                  {
                        "id": "C",
                        "text": "DNS"
                  },
                  {
                        "id": "D",
                        "text": "DHCP"
                  }
            ]
      },
      {
            "id": "q-practice-1-wifi-6",
            "type": "single_choice",
            "prompt": "Để đo tín hiệu tương tự an toàn và ổn định mà không bị xung đột khi bật WiFi trên ESP32, nên ưu tiên sử dụng các chân thuộc khối nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối ADC1"
                  },
                  {
                        "id": "B",
                        "text": "Chân nạp TX/RX"
                  },
                  {
                        "id": "C",
                        "text": "Khối ADC2"
                  },
                  {
                        "id": "D",
                        "text": "Chân cấp nguồn 3.3V"
                  }
            ]
      }
]),
    ],
  },
  2: {
    summary: 'Nắm vững phương pháp quản lý, tối ưu hóa và bảo vệ nguồn điện cho vệ tinh.',
    checkpoints: [
      doc('doc-2-1', 'Câu hỏi kiểm tra Doc 2.1', 'Đường đặc tính phóng điện pin Li-Po, 2 pha sạc CC/CV của TP4056, hiệu suất nguồn xung Buck/Boost, địa chỉ 7-bit 0x36 và thanh ghi 0x02 (VCELL), 0x04 (SOC) của MAX17048.', [
      {
            "id": "q-doc-2-1-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh CubeSat, phân hệ Năng lượng (EPS - Electrical Power System) đảm nhận vai trò cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển góc quay và định vị quỹ đạo vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Thu nhận, lưu trữ và phân phối điện cho phụ tải"
                  },
                  {
                        "id": "C",
                        "text": "Giao tiếp sóng vô tuyến hai chiều với mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Thu thập và xử lý hình ảnh quang học bề mặt"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-2",
            "type": "single_choice",
            "prompt": "Nguồn năng lượng sơ cấp duy nhất mà một vệ tinh hoạt động trên quỹ đạo thấp Trái Đất (LEO) có thể khai thác liên tục là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bức xạ quang năng từ nguồn ánh sáng Mặt Trời"
                  },
                  {
                        "id": "B",
                        "text": "Sóng vô tuyến điện từ phát từ trạm mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Nhiệt lượng tỏa ra từ lò phản ứng hạt nhân"
                  },
                  {
                        "id": "D",
                        "text": "Năng lượng hóa thạch đốt cháy bên trong vỏ"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Pha chiếu sáng' (Sunlight Phase) trong một chu kỳ quay quanh quỹ đạo của CubeSat được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khoảng thời gian vệ tinh bay qua trạm mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Khoảng thời gian vệ tinh phát tín hiệu định vị"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng thời gian vệ tinh tạm ngắt toàn bộ tải"
                  },
                  {
                        "id": "D",
                        "text": "Khoảng thời gian vệ tinh nhận ánh sáng Mặt Trời"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-4",
            "type": "single_choice",
            "prompt": "Khái niệm 'Pha vùng tối' (Eclipse Phase) của vệ tinh trên quỹ đạo là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khoảng thời gian vệ tinh bay qua cực nam Trái Đất"
                  },
                  {
                        "id": "B",
                        "text": "Khoảng thời gian vệ tinh bị mây dày che phủ kín"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng thời gian vệ tinh tạm ngừng phát tín hiệu"
                  },
                  {
                        "id": "D",
                        "text": "Khoảng thời gian vệ tinh ở vùng bóng tối Trái Đất"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-5",
            "type": "single_choice",
            "prompt": "Trong pha vùng tối (Eclipse), thành phần nào chịu trách nhiệm duy nhất cung cấp điện cho toàn bộ hệ thống vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tấm pin Mặt Trời"
                  },
                  {
                        "id": "B",
                        "text": "Ống phóng P-POD"
                  },
                  {
                        "id": "C",
                        "text": "Bộ pin lưu trữ năng lượng hóa học"
                  },
                  {
                        "id": "D",
                        "text": "Trạm mặt đất truyền năng lượng không dây"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Cân bằng Năng lượng' (Energy Budget / Power Budget) của vệ tinh được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bảng tổng hợp khối lượng phần cứng phân hệ nguồn"
                  },
                  {
                        "id": "B",
                        "text": "Bảng định mức dung tích bình nhiên liệu đẩy cơ khí"
                  },
                  {
                        "id": "C",
                        "text": "Bảng cân đối giữa năng lượng thu nhận và tiêu thụ"
                  },
                  {
                        "id": "D",
                        "text": "Bảng chi phí tài chính cho linh kiện phân hệ nguồn"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-7",
            "type": "single_choice",
            "prompt": "Nếu bảng cân bằng năng lượng của một vệ tinh bị âm (Năng lượng tiêu thụ trung bình lớn hơn năng lượng sinh ra từ pin Mặt Trời), hậu quả tất yếu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ bay của vệ tinh trên quỹ đạo tăng cao"
                  },
                  {
                        "id": "B",
                        "text": "Khối pin cạn dần dẫn tới mất nguồn hoàn toàn"
                  },
                  {
                        "id": "C",
                        "text": "Bề mặt tấm pin quang điện bị nổ do quá nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Hệ thống đẩy tự động kích hoạt rơi xuống biển"
                  }
            ]
      },
      {
            "id": "q-doc-2-1-8",
            "type": "single_choice",
            "prompt": "Để bảo đảm an toàn vận hành, hệ số dự phòng an toàn công suất (Power Margin) tối thiểu khuyến nghị khi thiết kế EPS thường là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "50% đến 60%"
                  },
                  {
                        "id": "B",
                        "text": "20% đến 30%"
                  },
                  {
                        "id": "C",
                        "text": "5% đến 10%"
                  },
                  {
                        "id": "D",
                        "text": "75% đến 90%"
                  }
            ]
      }
]),
      practice('practice-2-max17048', 'Câu hỏi kiểm tra Thực hành Nguồn & MAX17048', 'Ghép 2 byte thành số nguyên 16-bit, hệ số phân giải 78.125 µV, hàm đóng gói getBatteryVoltage() và phương pháp phát hiện pin yếu.',
        ['Lab2-01a_Battery_I2C', 'Lab2-01b_Battery_Library'], [
      {
            "id": "q-practice-2-max17048-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh CubeSat, phân hệ Năng lượng (EPS - Electrical Power System) đảm nhận vai trò cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển góc quay và định vị quỹ đạo vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Thu nhận, lưu trữ và phân phối điện cho phụ tải"
                  },
                  {
                        "id": "C",
                        "text": "Giao tiếp sóng vô tuyến hai chiều với mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Thu thập và xử lý hình ảnh quang học bề mặt"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-2",
            "type": "single_choice",
            "prompt": "Nguồn năng lượng sơ cấp duy nhất mà một vệ tinh hoạt động trên quỹ đạo thấp Trái Đất (LEO) có thể khai thác liên tục là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bức xạ quang năng từ nguồn ánh sáng Mặt Trời"
                  },
                  {
                        "id": "B",
                        "text": "Sóng vô tuyến điện từ phát từ trạm mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Nhiệt lượng tỏa ra từ lò phản ứng hạt nhân"
                  },
                  {
                        "id": "D",
                        "text": "Năng lượng hóa thạch đốt cháy bên trong vỏ"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Pha chiếu sáng' (Sunlight Phase) trong một chu kỳ quay quanh quỹ đạo của CubeSat được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khoảng thời gian vệ tinh bay qua trạm mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Khoảng thời gian vệ tinh phát tín hiệu định vị"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng thời gian vệ tinh tạm ngắt toàn bộ tải"
                  },
                  {
                        "id": "D",
                        "text": "Khoảng thời gian vệ tinh nhận ánh sáng Mặt Trời"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-4",
            "type": "single_choice",
            "prompt": "Khái niệm 'Pha vùng tối' (Eclipse Phase) của vệ tinh trên quỹ đạo là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khoảng thời gian vệ tinh bay qua cực nam Trái Đất"
                  },
                  {
                        "id": "B",
                        "text": "Khoảng thời gian vệ tinh bị mây dày che phủ kín"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng thời gian vệ tinh tạm ngừng phát tín hiệu"
                  },
                  {
                        "id": "D",
                        "text": "Khoảng thời gian vệ tinh ở vùng bóng tối Trái Đất"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-5",
            "type": "single_choice",
            "prompt": "Trong pha vùng tối (Eclipse), thành phần nào chịu trách nhiệm duy nhất cung cấp điện cho toàn bộ hệ thống vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tấm pin Mặt Trời"
                  },
                  {
                        "id": "B",
                        "text": "Ống phóng P-POD"
                  },
                  {
                        "id": "C",
                        "text": "Bộ pin lưu trữ năng lượng hóa học"
                  },
                  {
                        "id": "D",
                        "text": "Trạm mặt đất truyền năng lượng không dây"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Cân bằng Năng lượng' (Energy Budget / Power Budget) của vệ tinh được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bảng tổng hợp khối lượng phần cứng phân hệ nguồn"
                  },
                  {
                        "id": "B",
                        "text": "Bảng định mức dung tích bình nhiên liệu đẩy cơ khí"
                  },
                  {
                        "id": "C",
                        "text": "Bảng cân đối giữa năng lượng thu nhận và tiêu thụ"
                  },
                  {
                        "id": "D",
                        "text": "Bảng chi phí tài chính cho linh kiện phân hệ nguồn"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-7",
            "type": "single_choice",
            "prompt": "Nếu bảng cân bằng năng lượng của một vệ tinh bị âm (Năng lượng tiêu thụ trung bình lớn hơn năng lượng sinh ra từ pin Mặt Trời), hậu quả tất yếu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ bay của vệ tinh trên quỹ đạo tăng cao"
                  },
                  {
                        "id": "B",
                        "text": "Khối pin cạn dần dẫn tới mất nguồn hoàn toàn"
                  },
                  {
                        "id": "C",
                        "text": "Bề mặt tấm pin quang điện bị nổ do quá nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Hệ thống đẩy tự động kích hoạt rơi xuống biển"
                  }
            ]
      },
      {
            "id": "q-practice-2-max17048-8",
            "type": "single_choice",
            "prompt": "Để bảo đảm an toàn vận hành, hệ số dự phòng an toàn công suất (Power Margin) tối thiểu khuyến nghị khi thiết kế EPS thường là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "50% đến 60%"
                  },
                  {
                        "id": "B",
                        "text": "20% đến 30%"
                  },
                  {
                        "id": "C",
                        "text": "5% đến 10%"
                  },
                  {
                        "id": "D",
                        "text": "75% đến 90%"
                  }
            ]
      }
]),
      doc('doc-2-2', 'Câu hỏi kiểm tra Doc 2.2', 'Công tắc hành trình ray phóng, chốt RBF, mạch Reset Brownout BOD và kỹ thuật điều khiển dòng vào hạ áp để cắt dòng tiêu thụ tĩnh của khối cảm biến.', [
      {
            "id": "q-doc-2-2-1",
            "type": "single_choice",
            "prompt": "Để đáp ứng tiêu chuẩn an toàn phóng (Launch Safety Requirements), bộ pin sạc của CubeSat bắt buộc phải trải qua thử nghiệm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thử nghiệm ngâm khối pin trong dung dịch nước muối"
                  },
                  {
                        "id": "B",
                        "text": "Thử nghiệm thả rơi tự do khối pin từ độ cao lớn"
                  },
                  {
                        "id": "C",
                        "text": "Thử nghiệm đốt nóng trực tiếp bằng ngọn lửa hở"
                  },
                  {
                        "id": "D",
                        "text": "Thử rung động phóng, sốc nhiệt và chân không nhiệt"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-2",
            "type": "single_choice",
            "prompt": "Hiện tượng 'Sụt áp nguồn' (Voltage Brownout) trên vệ tinh CubeSat thường xảy ra trong tình huống nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi bức xạ Mặt Trời chiếu thẳng góc lên tấm pin"
                  },
                  {
                        "id": "B",
                        "text": "Khi phụ tải bật đột ngột làm sụt áp nguồn cấp"
                  },
                  {
                        "id": "C",
                        "text": "Khi vệ tinh di chuyển qua đường xích đạo Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Khi vi điều khiển trung tâm chuyển sang ngủ sâu"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-3",
            "type": "single_choice",
            "prompt": "Giải pháp hiệu quả nhất để ngăn chặn lỗi Brownout do xung dòng khởi động của tải công suất cao là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngắt hoàn toàn và vĩnh viễn phụ tải công suất cao"
                  },
                  {
                        "id": "B",
                        "text": "Dùng mạch khởi động mềm và tụ tích năng lượng"
                  },
                  {
                        "id": "C",
                        "text": "Tháo bỏ hoàn toàn bộ pin sạc lưu trữ trên vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Thu hẹp tiết diện các đường dây dẫn nguồn trên bo"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-4",
            "type": "single_choice",
            "prompt": "Công tắc hành trình (Deployment Limit Switch / Kill Switch) trên vệ tinh CubeSat thường được bố trí tại vị trí cơ khí nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bố trí tại vị trí trung tâm của bảng mạch nguồn"
                  },
                  {
                        "id": "B",
                        "text": "Đặt sâu bên trong vỏ bọc cơ khí của khối pin sạc"
                  },
                  {
                        "id": "C",
                        "text": "Bố trí ở chân thanh ray dẫn hướng góc đáy vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Hàn cố định ngay trên bề mặt tấm pin quang điện"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-5",
            "type": "single_choice",
            "prompt": "Trạng thái cơ học của công tắc hành trình tại chân ray trong suốt giai đoạn vệ tinh nằm bên trong ống phóng P-POD là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bị khóa chặt bằng đai ốc kim loại trên thanh ray"
                  },
                  {
                        "id": "B",
                        "text": "Tự do bung ra hoàn toàn ngoài không gian vũ trụ"
                  },
                  {
                        "id": "C",
                        "text": "Liên tục đảo trạng thái đóng ngắt do rung chấn cơ"
                  },
                  {
                        "id": "D",
                        "text": "Bị ép nén chặt, giữ tiếp điểm ở trạng thái hở mạch"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-6",
            "type": "single_choice",
            "prompt": "Thời điểm công tắc hành trình tại chân ray tự động bật chuyển trạng thái đóng mạch cấp nguồn cho vệ tinh là khi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngay thời điểm tên lửa đẩy bắt đầu rời bệ phóng"
                  },
                  {
                        "id": "B",
                        "text": "Sau khi vệ tinh vận hành ổn định trên quỹ đạo"
                  },
                  {
                        "id": "C",
                        "text": "Khi nhận được bức điện kích hoạt từ trạm mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Khi vệ tinh thoát hoàn toàn khỏi ống phóng P-POD"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-7",
            "type": "single_choice",
            "prompt": "Mục tiêu an toàn tối thượng của việc trang bị công tắc hành trình tại chân thanh ray của CubeSat là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tránh phát sóng hoặc chập nguồn trong ống phóng"
                  },
                  {
                        "id": "B",
                        "text": "Tăng tốc độ nạp điện cho bộ pin trong khoang hàng"
                  },
                  {
                        "id": "C",
                        "text": "Chống hiện tượng trầy xước bề mặt ray dẫn hướng cơ"
                  },
                  {
                        "id": "D",
                        "text": "Đo độ bền cơ học của khung vỏ trong lúc phóng"
                  }
            ]
      },
      {
            "id": "q-doc-2-2-8",
            "type": "single_choice",
            "prompt": "Theo tiêu chuẩn thiết kế quốc tế của CubeSat, sau khi công tắc hành trình đóng điện, vệ tinh phải thực thi quy định nào sau đây?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bật máy phát vô tuyến công suất tối đa tức thời"
                  },
                  {
                        "id": "B",
                        "text": "Im lặng vô tuyến và không bung anten trong 30 phút"
                  },
                  {
                        "id": "C",
                        "text": "Xóa sạch toàn bộ dữ liệu trên chip nhớ flash"
                  },
                  {
                        "id": "D",
                        "text": "Kích hoạt cơ cấu an toàn để kiểm tra bung anten"
                  }
            ]
      }
]),
      practice('practice-2-power', 'Câu hỏi kiểm tra Thực hành Tiết Kiệm Điện', 'Khối code điều khiển chân khống chế dòng vào hạ áp, quy tắc logic (0 bật / 1 ngắt), thời gian chờ ổn định điện áp ngõ ra (100 ms) và hiệu quả giảm dòng rò.',
        ['Lab2-02_Power_Saving'], [
      {
            "id": "q-practice-2-power-1",
            "type": "single_choice",
            "prompt": "Để đáp ứng tiêu chuẩn an toàn phóng (Launch Safety Requirements), bộ pin sạc của CubeSat bắt buộc phải trải qua thử nghiệm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thử nghiệm ngâm khối pin trong dung dịch nước muối"
                  },
                  {
                        "id": "B",
                        "text": "Thử nghiệm thả rơi tự do khối pin từ độ cao lớn"
                  },
                  {
                        "id": "C",
                        "text": "Thử nghiệm đốt nóng trực tiếp bằng ngọn lửa hở"
                  },
                  {
                        "id": "D",
                        "text": "Thử rung động phóng, sốc nhiệt và chân không nhiệt"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-2",
            "type": "single_choice",
            "prompt": "Hiện tượng 'Sụt áp nguồn' (Voltage Brownout) trên vệ tinh CubeSat thường xảy ra trong tình huống nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi bức xạ Mặt Trời chiếu thẳng góc lên tấm pin"
                  },
                  {
                        "id": "B",
                        "text": "Khi phụ tải bật đột ngột làm sụt áp nguồn cấp"
                  },
                  {
                        "id": "C",
                        "text": "Khi vệ tinh di chuyển qua đường xích đạo Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Khi vi điều khiển trung tâm chuyển sang ngủ sâu"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-3",
            "type": "single_choice",
            "prompt": "Giải pháp hiệu quả nhất để ngăn chặn lỗi Brownout do xung dòng khởi động của tải công suất cao là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngắt hoàn toàn và vĩnh viễn phụ tải công suất cao"
                  },
                  {
                        "id": "B",
                        "text": "Dùng mạch khởi động mềm và tụ tích năng lượng"
                  },
                  {
                        "id": "C",
                        "text": "Tháo bỏ hoàn toàn bộ pin sạc lưu trữ trên vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Thu hẹp tiết diện các đường dây dẫn nguồn trên bo"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-4",
            "type": "single_choice",
            "prompt": "Mạch biến đổi DC-DC Buck (Hạ áp / Step-Down) trong phân hệ EPS thực hiện biến đổi điện áp như thế nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đổi nguồn một chiều sang dạng xoay chiều cao thế"
                  },
                  {
                        "id": "B",
                        "text": "Hạ áp pin xuống mức 3.3V ổn định cấp cho hệ thống"
                  },
                  {
                        "id": "C",
                        "text": "Nâng mức điện áp của khối pin sạc lên ngưỡng 12V"
                  },
                  {
                        "id": "D",
                        "text": "Giữ nguyên mức điện áp đầu vào truyền tới tải"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-5",
            "type": "single_choice",
            "prompt": "Khi phụ tải công suất 5V tắt không hoạt động, mạch DC-DC Boost nên được điều khiển như thế nào để tiết kiệm điện?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nâng điện áp ngõ ra của bộ chuyển đổi lên mức 9V"
                  },
                  {
                        "id": "B",
                        "text": "Đấu nối điện trở xả nhiệt phụ trợ vào mạch ra"
                  },
                  {
                        "id": "C",
                        "text": "Kéo chân kích hoạt IC Boost xuống LOW để ngắt mạch"
                  },
                  {
                        "id": "D",
                        "text": "Cho phép mạch tiếp tục hoạt động liên tục tự do"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-6",
            "type": "single_choice",
            "prompt": "Công tắc hành trình (Deployment Limit Switch / Kill Switch) trên vệ tinh CubeSat thường được bố trí tại vị trí cơ khí nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bố trí tại vị trí trung tâm của bảng mạch nguồn"
                  },
                  {
                        "id": "B",
                        "text": "Đặt sâu bên trong vỏ bọc cơ khí của khối pin sạc"
                  },
                  {
                        "id": "C",
                        "text": "Bố trí ở chân thanh ray dẫn hướng góc đáy vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Hàn cố định ngay trên bề mặt tấm pin quang điện"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-7",
            "type": "single_choice",
            "prompt": "Trạng thái cơ học của công tắc hành trình tại chân ray trong suốt giai đoạn vệ tinh nằm bên trong ống phóng P-POD là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bị khóa chặt bằng đai ốc kim loại trên thanh ray"
                  },
                  {
                        "id": "B",
                        "text": "Tự do bung ra hoàn toàn ngoài không gian vũ trụ"
                  },
                  {
                        "id": "C",
                        "text": "Liên tục đảo trạng thái đóng ngắt do rung chấn cơ"
                  },
                  {
                        "id": "D",
                        "text": "Bị ép nén chặt, giữ tiếp điểm ở trạng thái hở mạch"
                  }
            ]
      },
      {
            "id": "q-practice-2-power-8",
            "type": "single_choice",
            "prompt": "Thời điểm công tắc hành trình tại chân ray tự động bật chuyển trạng thái đóng mạch cấp nguồn cho vệ tinh là khi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngay thời điểm tên lửa đẩy bắt đầu rời bệ phóng"
                  },
                  {
                        "id": "B",
                        "text": "Sau khi vệ tinh vận hành ổn định trên quỹ đạo"
                  },
                  {
                        "id": "C",
                        "text": "Khi nhận được bức điện kích hoạt từ trạm mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Khi vệ tinh thoát hoàn toàn khỏi ống phóng P-POD"
                  }
            ]
      }
]),
    ],
  },
  3: {
    summary: 'Thiết lập hộp đen lưu trữ dữ liệu quỹ đạo và xây dựng nền tảng phần mềm đa nhiệm tin cậy cao.',
    checkpoints: [
      doc('doc-3-1', 'Câu hỏi kiểm tra Doc 3.1', '4 đường tín hiệu SPI (MOSI, MISO, SCK, CS), cực tính và pha xung nhịp (CPOL/CPHA Mode 0), bảng phân bổ tệp FAT32 và bộ đệm 512 byte trong RAM.', [
      {
            "id": "q-doc-3-1-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh tiêu chuẩn, phân hệ C&DH (Command & Data Handling) đảm nhận vai trò chủ đạo nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lọc nhiễu cơ học từ tên lửa đẩy"
                  },
                  {
                        "id": "B",
                        "text": "Xử lý viễn lệnh và quản lý dữ liệu vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Biến đổi quang năng thành điện năng nguồn"
                  },
                  {
                        "id": "D",
                        "text": "Tạo lực đẩy để nâng cao quỹ đạo vệ tinh"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-2",
            "type": "single_choice",
            "prompt": "Khái niệm 'Telecommand' (TC - Viễn lệnh) trong kỹ thuật điều khiển vệ tinh được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bản tin đo nhiệt độ truyền về mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Tín hiệu thời gian chuẩn từ vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Khung dữ liệu ảnh chụp từ máy ảnh"
                  },
                  {
                        "id": "D",
                        "text": "Lệnh điều khiển gửi từ trạm mặt đất lên"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Telemetry' (TM - Dữ liệu viễn đo) của vệ tinh phản ánh tập hợp dữ liệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tọa độ địa lý của trạm thu mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Các bản tin dự báo thời tiết tải lên"
                  },
                  {
                        "id": "C",
                        "text": "Dữ liệu trạng thái kỹ thuật của vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Mã nguồn phần mềm hệ thống nhúng OBC"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-4",
            "type": "single_choice",
            "prompt": "Khái niệm chiến lược lưu trữ 'Store-and-Forward' (Lưu trữ và Chuyển tiếp) trên vệ tinh được áp dụng trong tình huống nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi vệ tinh ở trạng thái tắt hoàn toàn"
                  },
                  {
                        "id": "B",
                        "text": "Khi vệ tinh luôn trong tầm phủ sóng trạm"
                  },
                  {
                        "id": "C",
                        "text": "Khi bay ngoài vùng phủ sóng chờ truyền sau"
                  },
                  {
                        "id": "D",
                        "text": "Khi bộ nguồn thứ cấp trên vệ tinh cạn kiệt"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-5",
            "type": "single_choice",
            "prompt": "Sự khác biệt cốt lõi giữa một 'Tiến trình' (Process) và một 'Luồng' (Thread) trong kiến trúc hệ điều hành là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tiến trình có tốc độ chạy nhanh hơn luồng"
                  },
                  {
                        "id": "B",
                        "text": "Luồng không thể bị bộ lập lịch tạm dừng"
                  },
                  {
                        "id": "C",
                        "text": "Tiến trình có không gian bộ nhớ độc lập"
                  },
                  {
                        "id": "D",
                        "text": "Tiến trình không cần cấp phát bộ nhớ RAM"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-6",
            "type": "single_choice",
            "prompt": "Hệ điều hành thời gian thực (RTOS - Real-Time Operating System) khác biệt căn bản với hệ điều hành thông thường (General Purpose OS) ở đặc tính nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phản hồi tiền định trong thời gian nghiêm ngặt"
                  },
                  {
                        "id": "B",
                        "text": "Hoạt động không cần bộ đếm thời gian hệ thống"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ hỗ trợ thực thi trên vi xử lý đơn lõi"
                  },
                  {
                        "id": "D",
                        "text": "Luôn tích hợp sẵn giao diện đồ họa người dùng"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hệ thống Thời gian thực Cứng' (Hard Real-Time System) có nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống bọc trong lớp vỏ kim loại kiên cố"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống chỉ lưu trữ trên ổ đĩa từ tính cứng"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống bảo đảm không bao giờ phát sinh lỗi"
                  },
                  {
                        "id": "D",
                        "text": "Trễ hạn thời gian dẫn tới sự cố thảm họa"
                  }
            ]
      },
      {
            "id": "q-doc-3-1-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hệ thống Thời gian thực Mềm' (Soft Real-Time System) được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống không tích hợp vi xử lý điều khiển"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống gia công từ vật liệu polyme dẻo"
                  },
                  {
                        "id": "C",
                        "text": "Trễ hạn thời gian chỉ làm giảm chất lượng"
                  },
                  {
                        "id": "D",
                        "text": "Hệ thống chỉ xử lý văn bản phi cấu trúc"
                  }
            ]
      }
]),
      practice('practice-3-sd', 'Câu hỏi kiểm tra Thực hành Thẻ Nhớ MicroSD', 'Khối code SD.begin(), mở tệp với cờ FILE_APPEND, ghi chuỗi CSV timestamp,v,soc và vai trò của flush() để tránh mất dữ liệu khi mất nguồn.',
        ['Lab3-01a_MicroSD_SPI', 'Lab3-01b_MicroSD_Library'], [
      {
            "id": "q-practice-3-sd-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh tiêu chuẩn, phân hệ C&DH (Command & Data Handling) đảm nhận vai trò chủ đạo nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lọc nhiễu cơ học từ tên lửa đẩy"
                  },
                  {
                        "id": "B",
                        "text": "Xử lý viễn lệnh và quản lý dữ liệu vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Biến đổi quang năng thành điện năng nguồn"
                  },
                  {
                        "id": "D",
                        "text": "Tạo lực đẩy để nâng cao quỹ đạo vệ tinh"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-2",
            "type": "single_choice",
            "prompt": "Khái niệm 'Telecommand' (TC - Viễn lệnh) trong kỹ thuật điều khiển vệ tinh được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bản tin đo nhiệt độ truyền về mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Tín hiệu thời gian chuẩn từ vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Khung dữ liệu ảnh chụp từ máy ảnh"
                  },
                  {
                        "id": "D",
                        "text": "Lệnh điều khiển gửi từ trạm mặt đất lên"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Telemetry' (TM - Dữ liệu viễn đo) của vệ tinh phản ánh tập hợp dữ liệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tọa độ địa lý của trạm thu mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Các bản tin dự báo thời tiết tải lên"
                  },
                  {
                        "id": "C",
                        "text": "Dữ liệu trạng thái kỹ thuật của vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Mã nguồn phần mềm hệ thống nhúng OBC"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-4",
            "type": "single_choice",
            "prompt": "Khái niệm chiến lược lưu trữ 'Store-and-Forward' (Lưu trữ và Chuyển tiếp) trên vệ tinh được áp dụng trong tình huống nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi vệ tinh ở trạng thái tắt hoàn toàn"
                  },
                  {
                        "id": "B",
                        "text": "Khi vệ tinh luôn trong tầm phủ sóng trạm"
                  },
                  {
                        "id": "C",
                        "text": "Khi bay ngoài vùng phủ sóng chờ truyền sau"
                  },
                  {
                        "id": "D",
                        "text": "Khi bộ nguồn thứ cấp trên vệ tinh cạn kiệt"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-5",
            "type": "single_choice",
            "prompt": "Sự khác biệt cốt lõi giữa một 'Tiến trình' (Process) và một 'Luồng' (Thread) trong kiến trúc hệ điều hành là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tiến trình có tốc độ chạy nhanh hơn luồng"
                  },
                  {
                        "id": "B",
                        "text": "Luồng không thể bị bộ lập lịch tạm dừng"
                  },
                  {
                        "id": "C",
                        "text": "Tiến trình có không gian bộ nhớ độc lập"
                  },
                  {
                        "id": "D",
                        "text": "Tiến trình không cần cấp phát bộ nhớ RAM"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-6",
            "type": "single_choice",
            "prompt": "Hệ điều hành thời gian thực (RTOS - Real-Time Operating System) khác biệt căn bản với hệ điều hành thông thường (General Purpose OS) ở đặc tính nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phản hồi tiền định trong thời gian nghiêm ngặt"
                  },
                  {
                        "id": "B",
                        "text": "Hoạt động không cần bộ đếm thời gian hệ thống"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ hỗ trợ thực thi trên vi xử lý đơn lõi"
                  },
                  {
                        "id": "D",
                        "text": "Luôn tích hợp sẵn giao diện đồ họa người dùng"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hệ thống Thời gian thực Cứng' (Hard Real-Time System) có nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống bọc trong lớp vỏ kim loại kiên cố"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống chỉ lưu trữ trên ổ đĩa từ tính cứng"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống bảo đảm không bao giờ phát sinh lỗi"
                  },
                  {
                        "id": "D",
                        "text": "Trễ hạn thời gian dẫn tới sự cố thảm họa"
                  }
            ]
      },
      {
            "id": "q-practice-3-sd-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hệ thống Thời gian thực Mềm' (Soft Real-Time System) được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống không tích hợp vi xử lý điều khiển"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống gia công từ vật liệu polyme dẻo"
                  },
                  {
                        "id": "C",
                        "text": "Trễ hạn thời gian chỉ làm giảm chất lượng"
                  },
                  {
                        "id": "D",
                        "text": "Hệ thống chỉ xử lý văn bản phi cấu trúc"
                  }
            ]
      }
]),
      doc('doc-3-2', 'Câu hỏi kiểm tra Doc 3.2', 'Kiến trúc phân tích cú pháp dòng lệnh (Lexer/Parser), tách token bằng khoảng trắng, phân tách mã lệnh và tham số điều khiển vệ tinh từ xa.', [
      {
            "id": "q-doc-3-2-1",
            "type": "single_choice",
            "prompt": "Khi truyền dữ liệu gói tin trong phân hệ C&DH, mã kiểm tra dư thừa tuần hoàn (CRC - Cyclic Redundancy Check) có vai trò gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mã hóa nội dung dữ liệu nhằm ngăn chặn nghe lén thông tin"
                  },
                  {
                        "id": "B",
                        "text": "Tăng tốc độ truyền tải trên kênh thông tin vô tuyến hai chiều"
                  },
                  {
                        "id": "C",
                        "text": "Phát hiện lỗi sai lệch bit dữ liệu trên đường truyền vật lý"
                  },
                  {
                        "id": "D",
                        "text": "Nén kích thước khung truyền để tiết kiệm băng thông vô tuyến"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-2",
            "type": "single_choice",
            "prompt": "Trước khi thẻ nhớ bắt đầu truyền khối 512 byte dữ liệu về cho Master trong lệnh đọc, thẻ sẽ gửi một byte đánh dấu bắt đầu (Data Token) có giá trị là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "0xFF"
                  },
                  {
                        "id": "B",
                        "text": "0x55"
                  },
                  {
                        "id": "C",
                        "text": "0xFE"
                  },
                  {
                        "id": "D",
                        "text": "0x00"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-3",
            "type": "single_choice",
            "prompt": "Khi lập trình giao diện dòng lệnh (CLI - Command Line Interface) qua cổng Serial, hàm nào trong C++ thường được dùng để phân tách chuỗi lệnh thành các từ tố (Tokens)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "strtok()"
                  },
                  {
                        "id": "B",
                        "text": "split()"
                  },
                  {
                        "id": "C",
                        "text": "slice()"
                  },
                  {
                        "id": "D",
                        "text": "parse()"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-4",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `ls` (List files) trong shell vệ tinh có chức năng tương ứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Định dạng lại toàn bộ phân vùng trên thẻ nhớ lưu trữ"
                  },
                  {
                        "id": "B",
                        "text": "Liệt kê danh sách các tệp tin và thư mục có trên thẻ"
                  },
                  {
                        "id": "C",
                        "text": "Khởi động lại toàn bộ hệ điều hành thời gian thực RTOS"
                  },
                  {
                        "id": "D",
                        "text": "Hiển thị các thông số trạng thái pin và dòng tiêu thụ"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-5",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `cat <filename>` trong giao diện CLI của vệ tinh có chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa bỏ hoàn toàn tệp tin chỉ định khỏi thẻ nhớ lưu trữ"
                  },
                  {
                        "id": "B",
                        "text": "Di chuyển tệp tin sang một thư mục hệ thống dự phòng khác"
                  },
                  {
                        "id": "C",
                        "text": "Sao chép nội dung tệp tin sang một phân vùng nhớ tạm thời"
                  },
                  {
                        "id": "D",
                        "text": "Đọc và in toàn bộ nội dung tệp văn bản ra cổng Serial"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-6",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `rm <filename>` trong giao diện CLI thực hiện hành vi nào sau đây?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tạo một thư mục mới trên phân vùng lưu trữ của thẻ nhớ"
                  },
                  {
                        "id": "B",
                        "text": "Đổi tên tệp tin chỉ định sang một định danh quy ước mới"
                  },
                  {
                        "id": "C",
                        "text": "Xóa vĩnh viễn tệp tin chỉ định bằng hàm SD.remove()"
                  },
                  {
                        "id": "D",
                        "text": "Tải tệp tin nhị phân từ trạm mặt đất vào hệ thống nhớ"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-7",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `df` (Disk Free) trong hệ thống C&DH hiển thị thông tin gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiển thị tổng số ngày hoạt động của vệ tinh trên quỹ đạo"
                  },
                  {
                        "id": "B",
                        "text": "Hiển thị tổng dung lượng, đã dùng và còn trống của đĩa"
                  },
                  {
                        "id": "C",
                        "text": "Định dạng lại toàn bộ phân vùng hệ thống tệp của thẻ nhớ"
                  },
                  {
                        "id": "D",
                        "text": "Đo nhiệt độ hoạt động của khối vi điều khiển trung tâm"
                  }
            ]
      },
      {
            "id": "q-doc-3-2-8",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `reboot` trong giao diện CLI của vệ tinh kích hoạt chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Định dạng lại toàn bộ bộ nhớ flash của hệ thống vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Ngắt nguồn vĩnh viễn để đưa vệ tinh vào trạng thái ngủ"
                  },
                  {
                        "id": "C",
                        "text": "Bật đèn tín hiệu chỉ thị trạng thái hoạt động trên bo"
                  },
                  {
                        "id": "D",
                        "text": "Gọi hàm esp_restart() để khởi động lại máy tính nhúng OBC"
                  }
            ]
      }
]),
      practice('practice-3-cli', 'Câu hỏi kiểm tra Thực hành Shell CLI', 'Duyệt thư mục openNextFile(), đọc xuất nội dung read(), xóa tệp SD.remove() và đo dung lượng thẻ nhớ SD.usedBytes().',
        ['Lab3-02_Linux_FS_Commands'], [
      {
            "id": "q-practice-3-cli-1",
            "type": "single_choice",
            "prompt": "Khi truyền dữ liệu gói tin trong phân hệ C&DH, mã kiểm tra dư thừa tuần hoàn (CRC - Cyclic Redundancy Check) có vai trò gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mã hóa nội dung dữ liệu nhằm ngăn chặn nghe lén thông tin"
                  },
                  {
                        "id": "B",
                        "text": "Tăng tốc độ truyền tải trên kênh thông tin vô tuyến hai chiều"
                  },
                  {
                        "id": "C",
                        "text": "Phát hiện lỗi sai lệch bit dữ liệu trên đường truyền vật lý"
                  },
                  {
                        "id": "D",
                        "text": "Nén kích thước khung truyền để tiết kiệm băng thông vô tuyến"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-2",
            "type": "single_choice",
            "prompt": "Trước khi thẻ nhớ bắt đầu truyền khối 512 byte dữ liệu về cho Master trong lệnh đọc, thẻ sẽ gửi một byte đánh dấu bắt đầu (Data Token) có giá trị là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "0xFF"
                  },
                  {
                        "id": "B",
                        "text": "0x55"
                  },
                  {
                        "id": "C",
                        "text": "0xFE"
                  },
                  {
                        "id": "D",
                        "text": "0x00"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-3",
            "type": "single_choice",
            "prompt": "Khi lập trình giao diện dòng lệnh (CLI - Command Line Interface) qua cổng Serial, hàm nào trong C++ thường được dùng để phân tách chuỗi lệnh thành các từ tố (Tokens)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "strtok()"
                  },
                  {
                        "id": "B",
                        "text": "split()"
                  },
                  {
                        "id": "C",
                        "text": "slice()"
                  },
                  {
                        "id": "D",
                        "text": "parse()"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-4",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `ls` (List files) trong shell vệ tinh có chức năng tương ứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Định dạng lại toàn bộ phân vùng trên thẻ nhớ lưu trữ"
                  },
                  {
                        "id": "B",
                        "text": "Liệt kê danh sách các tệp tin và thư mục có trên thẻ"
                  },
                  {
                        "id": "C",
                        "text": "Khởi động lại toàn bộ hệ điều hành thời gian thực RTOS"
                  },
                  {
                        "id": "D",
                        "text": "Hiển thị các thông số trạng thái pin và dòng tiêu thụ"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-5",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `cat <filename>` trong giao diện CLI của vệ tinh có chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa bỏ hoàn toàn tệp tin chỉ định khỏi thẻ nhớ lưu trữ"
                  },
                  {
                        "id": "B",
                        "text": "Di chuyển tệp tin sang một thư mục hệ thống dự phòng khác"
                  },
                  {
                        "id": "C",
                        "text": "Sao chép nội dung tệp tin sang một phân vùng nhớ tạm thời"
                  },
                  {
                        "id": "D",
                        "text": "Đọc và in toàn bộ nội dung tệp văn bản ra cổng Serial"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-6",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `rm <filename>` trong giao diện CLI thực hiện hành vi nào sau đây?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tạo một thư mục mới trên phân vùng lưu trữ của thẻ nhớ"
                  },
                  {
                        "id": "B",
                        "text": "Đổi tên tệp tin chỉ định sang một định danh quy ước mới"
                  },
                  {
                        "id": "C",
                        "text": "Xóa vĩnh viễn tệp tin chỉ định bằng hàm SD.remove()"
                  },
                  {
                        "id": "D",
                        "text": "Tải tệp tin nhị phân từ trạm mặt đất vào hệ thống nhớ"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-7",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `df` (Disk Free) trong hệ thống C&DH hiển thị thông tin gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiển thị tổng số ngày hoạt động của vệ tinh trên quỹ đạo"
                  },
                  {
                        "id": "B",
                        "text": "Hiển thị tổng dung lượng, đã dùng và còn trống của đĩa"
                  },
                  {
                        "id": "C",
                        "text": "Định dạng lại toàn bộ phân vùng hệ thống tệp của thẻ nhớ"
                  },
                  {
                        "id": "D",
                        "text": "Đo nhiệt độ hoạt động của khối vi điều khiển trung tâm"
                  }
            ]
      },
      {
            "id": "q-practice-3-cli-8",
            "type": "single_choice",
            "prompt": "Lệnh dòng lệnh `reboot` trong giao diện CLI của vệ tinh kích hoạt chức năng gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Định dạng lại toàn bộ bộ nhớ flash của hệ thống vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Ngắt nguồn vĩnh viễn để đưa vệ tinh vào trạng thái ngủ"
                  },
                  {
                        "id": "C",
                        "text": "Bật đèn tín hiệu chỉ thị trạng thái hoạt động trên bo"
                  },
                  {
                        "id": "D",
                        "text": "Gọi hàm esp_restart() để khởi động lại máy tính nhúng OBC"
                  }
            ]
      }
]),
      doc('doc-3-3', 'Câu hỏi kiểm tra Doc 3.3', 'Định thời chiếm quyền (Preemption), cấu trúc TCB, tương tranh tài nguyên dùng chung, bài học Mars Pathfinder và kế thừa ưu tiên (Priority Inheritance) của Mutex.', [
      {
            "id": "q-doc-3-3-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Chuyển ngữ cảnh' (Context Switching) trong hệ điều hành đa nhiệm là quá trình gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đổi tên định danh vi điều khiển trung tâm"
                  },
                  {
                        "id": "B",
                        "text": "Thay đổi ngôn ngữ hiển thị trên giao diện"
                  },
                  {
                        "id": "C",
                        "text": "Lưu ngữ cảnh tác vụ cũ và nạp tác vụ mới"
                  },
                  {
                        "id": "D",
                        "text": "Chuyển đổi mức logic trên các chân tín hiệu"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-2",
            "type": "single_choice",
            "prompt": "Cơ chế lập lịch 'Chia sẻ thời gian' (Round-Robin Scheduling) thường được áp dụng cho nhóm tác vụ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ áp dụng khi chip có 100 nhân"
                  },
                  {
                        "id": "B",
                        "text": "Các tác vụ không bao giờ cần chạy"
                  },
                  {
                        "id": "C",
                        "text": "Các tác vụ có cùng mức độ ưu tiên"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ điều khiển khẩn cấp"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-3",
            "type": "single_choice",
            "prompt": "Cơ chế lập lịch 'Hợp tác' (Cooperative Multitasking) có đặc điểm vận hành nào sau đây?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chọn ngẫu nhiên một tác vụ bất kỳ trong danh sách"
                  },
                  {
                        "id": "B",
                        "text": "Luôn ưu tiên tác vụ vừa mới kết thúc vòng lặp"
                  },
                  {
                        "id": "C",
                        "text": "Chọn tác vụ sử dụng ít dung lượng ngăn xếp nhất"
                  },
                  {
                        "id": "D",
                        "text": "Luôn chọn tác vụ sẵn sàng có mức ưu tiên cao nhất"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-4",
            "type": "single_choice",
            "prompt": "Khái niệm 'Không gian ngăn xếp' (Stack) của mỗi tác vụ trong FreeRTOS được sử dụng để làm gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lưu trữ bảng cấu hình kết nối mạng nội bộ"
                  },
                  {
                        "id": "B",
                        "text": "Chứa mã nguồn nhị phân của chương trình nạp"
                  },
                  {
                        "id": "C",
                        "text": "Lưu biến cục bộ, địa chỉ hàm và thanh ghi CPU"
                  },
                  {
                        "id": "D",
                        "text": "Lưu toàn bộ dữ liệu ảnh tải trọng viễn thám"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-5",
            "type": "single_choice",
            "prompt": "Hệ điều hành FreeRTOS cung cấp cơ chế bảo vệ nào để phát hiện hiện tượng Stack Overflow trong quá trình chạy thử nghiệm?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động cấp phát mở rộng kích thước vùng nhớ RAM"
                  },
                  {
                        "id": "B",
                        "text": "Dùng móc kiểm tra con trỏ hoặc mẫu byte canary"
                  },
                  {
                        "id": "C",
                        "text": "Vô hiệu hóa tính năng đa nhiệm của hệ điều hành"
                  },
                  {
                        "id": "D",
                        "text": "Tự động khởi động lại mềm hệ thống ngay lập tức"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Mutex' (Mutual Exclusion) trong hệ điều hành được sử dụng nhằm mục đích cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cân bằng điện áp trên các nhánh nguồn thứ cấp"
                  },
                  {
                        "id": "B",
                        "text": "Kéo dài tuổi thọ chu kỳ ghi xóa của bộ nhớ flash"
                  },
                  {
                        "id": "C",
                        "text": "Tăng tốc độ tính toán cho khối dấu phẩy động"
                  },
                  {
                        "id": "D",
                        "text": "Bảo vệ tài nguyên dùng chung khỏi xung đột truy cập"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Vùng tranh chấp' (Critical Section) trong mã nguồn đa nhiệm được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối lệnh chứa các định nghĩa tiền xử lý hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Đoạn mã truyền nhận dữ liệu qua giao diện nối tiếp"
                  },
                  {
                        "id": "C",
                        "text": "Đoạn mã truy cập tài nguyên chung dễ gây xung đột"
                  },
                  {
                        "id": "D",
                        "text": "Vùng nhớ chứa các biến hằng số chỉ đọc của hệ thống"
                  }
            ]
      },
      {
            "id": "q-doc-3-3-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hiện tượng Nghịch đảo Độ ưu tiên' (Priority Inversion) xảy ra trong kịch bản nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tác vụ ưu tiên cao bị chặn bởi tác vụ ưu tiên thấp"
                  },
                  {
                        "id": "B",
                        "text": "Tác vụ ưu tiên cao chạy liên tục không giải phóng"
                  },
                  {
                        "id": "C",
                        "text": "Tác vụ ưu tiên thấp chiếm dụng toàn bộ bộ nhớ RAM"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ trung bình bị chặn do thiếu tài nguyên ngoại vi"
                  }
            ]
      }
]),
      practice('practice-3-rtos', 'Câu hỏi kiểm tra Thực hành FreeRTOS', 'Hàm xTaskCreatePinnedToCore(), vòng lặp tác vụ for(;;), hàm nhả CPU vTaskDelay() và cặp hàm xSemaphoreTake() / xSemaphoreGive().',
        ['Lab3-03_Multitasking_Scheduler'], [
      {
            "id": "q-practice-3-rtos-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Chuyển ngữ cảnh' (Context Switching) trong hệ điều hành đa nhiệm là quá trình gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đổi tên định danh vi điều khiển trung tâm"
                  },
                  {
                        "id": "B",
                        "text": "Thay đổi ngôn ngữ hiển thị trên giao diện"
                  },
                  {
                        "id": "C",
                        "text": "Lưu ngữ cảnh tác vụ cũ và nạp tác vụ mới"
                  },
                  {
                        "id": "D",
                        "text": "Chuyển đổi mức logic trên các chân tín hiệu"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-2",
            "type": "single_choice",
            "prompt": "Cơ chế lập lịch 'Chia sẻ thời gian' (Round-Robin Scheduling) thường được áp dụng cho nhóm tác vụ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ áp dụng khi chip có 100 nhân"
                  },
                  {
                        "id": "B",
                        "text": "Các tác vụ không bao giờ cần chạy"
                  },
                  {
                        "id": "C",
                        "text": "Các tác vụ có cùng mức độ ưu tiên"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ điều khiển khẩn cấp"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-3",
            "type": "single_choice",
            "prompt": "Cơ chế lập lịch 'Hợp tác' (Cooperative Multitasking) có đặc điểm vận hành nào sau đây?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chọn ngẫu nhiên một tác vụ bất kỳ trong danh sách"
                  },
                  {
                        "id": "B",
                        "text": "Luôn ưu tiên tác vụ vừa mới kết thúc vòng lặp"
                  },
                  {
                        "id": "C",
                        "text": "Chọn tác vụ sử dụng ít dung lượng ngăn xếp nhất"
                  },
                  {
                        "id": "D",
                        "text": "Luôn chọn tác vụ sẵn sàng có mức ưu tiên cao nhất"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-4",
            "type": "single_choice",
            "prompt": "Khái niệm 'Không gian ngăn xếp' (Stack) của mỗi tác vụ trong FreeRTOS được sử dụng để làm gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lưu trữ bảng cấu hình kết nối mạng nội bộ"
                  },
                  {
                        "id": "B",
                        "text": "Chứa mã nguồn nhị phân của chương trình nạp"
                  },
                  {
                        "id": "C",
                        "text": "Lưu biến cục bộ, địa chỉ hàm và thanh ghi CPU"
                  },
                  {
                        "id": "D",
                        "text": "Lưu toàn bộ dữ liệu ảnh tải trọng viễn thám"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-5",
            "type": "single_choice",
            "prompt": "Hệ điều hành FreeRTOS cung cấp cơ chế bảo vệ nào để phát hiện hiện tượng Stack Overflow trong quá trình chạy thử nghiệm?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động cấp phát mở rộng kích thước vùng nhớ RAM"
                  },
                  {
                        "id": "B",
                        "text": "Dùng móc kiểm tra con trỏ hoặc mẫu byte canary"
                  },
                  {
                        "id": "C",
                        "text": "Vô hiệu hóa tính năng đa nhiệm của hệ điều hành"
                  },
                  {
                        "id": "D",
                        "text": "Tự động khởi động lại mềm hệ thống ngay lập tức"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Mutex' (Mutual Exclusion) trong hệ điều hành được sử dụng nhằm mục đích cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cân bằng điện áp trên các nhánh nguồn thứ cấp"
                  },
                  {
                        "id": "B",
                        "text": "Kéo dài tuổi thọ chu kỳ ghi xóa của bộ nhớ flash"
                  },
                  {
                        "id": "C",
                        "text": "Tăng tốc độ tính toán cho khối dấu phẩy động"
                  },
                  {
                        "id": "D",
                        "text": "Bảo vệ tài nguyên dùng chung khỏi xung đột truy cập"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Vùng tranh chấp' (Critical Section) trong mã nguồn đa nhiệm được hiểu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối lệnh chứa các định nghĩa tiền xử lý hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Đoạn mã truyền nhận dữ liệu qua giao diện nối tiếp"
                  },
                  {
                        "id": "C",
                        "text": "Đoạn mã truy cập tài nguyên chung dễ gây xung đột"
                  },
                  {
                        "id": "D",
                        "text": "Vùng nhớ chứa các biến hằng số chỉ đọc của hệ thống"
                  }
            ]
      },
      {
            "id": "q-practice-3-rtos-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hiện tượng Nghịch đảo Độ ưu tiên' (Priority Inversion) xảy ra trong kịch bản nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tác vụ ưu tiên cao bị chặn bởi tác vụ ưu tiên thấp"
                  },
                  {
                        "id": "B",
                        "text": "Tác vụ ưu tiên cao chạy liên tục không giải phóng"
                  },
                  {
                        "id": "C",
                        "text": "Tác vụ ưu tiên thấp chiếm dụng toàn bộ bộ nhớ RAM"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ trung bình bị chặn do thiếu tài nguyên ngoại vi"
                  }
            ]
      }
]),
      doc('doc-3-4', 'Câu hỏi kiểm tra Doc 3.4', 'Cơ chế đếm ngược của WDT, phân biệt IWDT và TWDT, quy trình "cho chó ăn" (Feed/Reset WDT).', [
      {
            "id": "q-doc-3-4-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hàng đợi Thông điệp' (Message Queue) trong FreeRTOS mang lại lợi ích nào cho giao tiếp liên tác vụ (IPC)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lưu trữ trực tiếp luồng video từ camera tải trọng"
                  },
                  {
                        "id": "B",
                        "text": "Truyền dữ liệu an toàn và có thứ tự giữa các tác vụ"
                  },
                  {
                        "id": "C",
                        "text": "Tự động đồng bộ hóa thời gian thực qua sóng vô tuyến"
                  },
                  {
                        "id": "D",
                        "text": "Tăng tốc độ xung nhịp cho khối truyền thông nối tiếp"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-2",
            "type": "single_choice",
            "prompt": "Khái niệm 'Chó canh phần cứng' (Hardware Watchdog Timer - WDT) đóng vai trò lá chắn sống còn nào cho vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Báo động khi phát hiện xâm nhập cơ học từ bên ngoài"
                  },
                  {
                        "id": "B",
                        "text": "Tự động reset chip nếu phần mềm không xóa cờ định kỳ"
                  },
                  {
                        "id": "C",
                        "text": "Tự động phát tín hiệu cấp cứu vô tuyến về mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Điều chỉnh hướng tấm pin mặt trời theo góc chiếu sáng"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-3",
            "type": "single_choice",
            "prompt": "Hành động phần mềm định kỳ ghi tín hiệu xóa bộ đếm của Watchdog Timer được gọi bằng thuật ngữ chuyên ngành là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bẻ gãy đồng hồ"
                  },
                  {
                        "id": "B",
                        "text": "Cho chó ăn / Đá chó canh"
                  },
                  {
                        "id": "C",
                        "text": "Khóa chó canh"
                  },
                  {
                        "id": "D",
                        "text": "Đặt lại ngày giờ"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-4",
            "type": "single_choice",
            "prompt": "Nếu một lập trình viên đặt lệnh 'đá chó' WDT bên trong một chương trình ngắt định thời (Timer ISR) chạy độc lập, sai lầm nghiêm trọng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "WDT vẫn bị xóa dù các tác vụ nghiệp vụ đã bị treo"
                  },
                  {
                        "id": "B",
                        "text": "Bộ tạo dao động thạch anh ngoại vi bị hỏng vĩnh viễn"
                  },
                  {
                        "id": "C",
                        "text": "Bộ đếm thời gian hệ thống hoạt động vượt ngưỡng chuẩn"
                  },
                  {
                        "id": "D",
                        "text": "Nguồn pin vệ tinh bị suy giảm dung lượng nhanh chóng"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'Task Watchdog Timer' (TWDT) trong hệ điều hành FreeRTOS trên ESP32 theo dõi đối tượng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Theo dõi nhiệt độ thực tế trên các khối nguồn thứ cấp"
                  },
                  {
                        "id": "B",
                        "text": "Theo dõi tình trạng phản hồi định kỳ của từng tác vụ"
                  },
                  {
                        "id": "C",
                        "text": "Giám sát cường độ tín hiệu thu phát trên anten vô tuyến"
                  },
                  {
                        "id": "D",
                        "text": "Tính toán tọa độ và vận tốc của vệ tinh trên quỹ đạo"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-6",
            "type": "single_choice",
            "prompt": "Khoảng thời gian Timeout điển hình thường được thiết lập cho Watchdog Timer trên hệ thống máy tính vệ tinh là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "5 đến 7 ngày"
                  },
                  {
                        "id": "B",
                        "text": "30 đến 60 phút"
                  },
                  {
                        "id": "C",
                        "text": "1 đến 5 giây"
                  },
                  {
                        "id": "D",
                        "text": "10 đến 50 micro-giây"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Fault Detection, Isolation and Recovery' (FDIR) trong C&DH là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phần mềm giám sát và biểu diễn đồ thị thông số viễn đo"
                  },
                  {
                        "id": "B",
                        "text": "Cảm biến đo nhiệt độ tiếp giáp của các khối nguồn thứ cấp"
                  },
                  {
                        "id": "C",
                        "text": "Bộ nhớ lưu trữ dữ liệu tốc độ cao tích hợp trên bo C&DH"
                  },
                  {
                        "id": "D",
                        "text": "Quy trình tự động phát hiện, cô lập và phục hồi lỗi hệ thống"
                  }
            ]
      },
      {
            "id": "q-doc-3-4-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Watchdog Task' (Tác vụ giám sát phần mềm) trong kiến trúc đa nhiệm C&DH có nhiệm vụ gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vô hiệu hóa cổng giao tiếp nối tiếp khi hệ thống bận"
                  },
                  {
                        "id": "B",
                        "text": "Liên tục gửi bản tin trạng thái lên giao diện trạm"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra các tác vụ trước khi xóa cờ WDT phần cứng"
                  },
                  {
                        "id": "D",
                        "text": "Tắt màn hình giám sát để bảo vệ mạch tải trọng ngoài"
                  }
            ]
      }
]),
      practice('practice-3-wdt-event', 'Câu hỏi kiểm tra Thực hành Watchdog & Event', 'Cấu hình esp_task_wdt_init(), đăng ký esp_task_wdt_add(), gọi định kỳ esp_task_wdt_reset() và truyền nhận dữ liệu qua hàng đợi xQueueSend() / xQueueReceive().',
        ['Lab3-04_Watchdog_And_Event', 'Lab3-05_Event_Driven_Queue'], [
      {
            "id": "q-practice-3-wdt-event-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hàng đợi Thông điệp' (Message Queue) trong FreeRTOS mang lại lợi ích nào cho giao tiếp liên tác vụ (IPC)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lưu trữ trực tiếp luồng video từ camera tải trọng"
                  },
                  {
                        "id": "B",
                        "text": "Truyền dữ liệu an toàn và có thứ tự giữa các tác vụ"
                  },
                  {
                        "id": "C",
                        "text": "Tự động đồng bộ hóa thời gian thực qua sóng vô tuyến"
                  },
                  {
                        "id": "D",
                        "text": "Tăng tốc độ xung nhịp cho khối truyền thông nối tiếp"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-2",
            "type": "single_choice",
            "prompt": "Khái niệm 'Chó canh phần cứng' (Hardware Watchdog Timer - WDT) đóng vai trò lá chắn sống còn nào cho vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Báo động khi phát hiện xâm nhập cơ học từ bên ngoài"
                  },
                  {
                        "id": "B",
                        "text": "Tự động reset chip nếu phần mềm không xóa cờ định kỳ"
                  },
                  {
                        "id": "C",
                        "text": "Tự động phát tín hiệu cấp cứu vô tuyến về mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Điều chỉnh hướng tấm pin mặt trời theo góc chiếu sáng"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-3",
            "type": "single_choice",
            "prompt": "Hành động phần mềm định kỳ ghi tín hiệu xóa bộ đếm của Watchdog Timer được gọi bằng thuật ngữ chuyên ngành là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bẻ gãy đồng hồ"
                  },
                  {
                        "id": "B",
                        "text": "Cho chó ăn / Đá chó canh"
                  },
                  {
                        "id": "C",
                        "text": "Khóa chó canh"
                  },
                  {
                        "id": "D",
                        "text": "Đặt lại ngày giờ"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-4",
            "type": "single_choice",
            "prompt": "Nếu một lập trình viên đặt lệnh 'đá chó' WDT bên trong một chương trình ngắt định thời (Timer ISR) chạy độc lập, sai lầm nghiêm trọng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "WDT vẫn bị xóa dù các tác vụ nghiệp vụ đã bị treo"
                  },
                  {
                        "id": "B",
                        "text": "Bộ tạo dao động thạch anh ngoại vi bị hỏng vĩnh viễn"
                  },
                  {
                        "id": "C",
                        "text": "Bộ đếm thời gian hệ thống hoạt động vượt ngưỡng chuẩn"
                  },
                  {
                        "id": "D",
                        "text": "Nguồn pin vệ tinh bị suy giảm dung lượng nhanh chóng"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'Task Watchdog Timer' (TWDT) trong hệ điều hành FreeRTOS trên ESP32 theo dõi đối tượng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Theo dõi nhiệt độ thực tế trên các khối nguồn thứ cấp"
                  },
                  {
                        "id": "B",
                        "text": "Theo dõi tình trạng phản hồi định kỳ của từng tác vụ"
                  },
                  {
                        "id": "C",
                        "text": "Giám sát cường độ tín hiệu thu phát trên anten vô tuyến"
                  },
                  {
                        "id": "D",
                        "text": "Tính toán tọa độ và vận tốc của vệ tinh trên quỹ đạo"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-6",
            "type": "single_choice",
            "prompt": "Khoảng thời gian Timeout điển hình thường được thiết lập cho Watchdog Timer trên hệ thống máy tính vệ tinh là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "5 đến 7 ngày"
                  },
                  {
                        "id": "B",
                        "text": "30 đến 60 phút"
                  },
                  {
                        "id": "C",
                        "text": "1 đến 5 giây"
                  },
                  {
                        "id": "D",
                        "text": "10 đến 50 micro-giây"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Fault Detection, Isolation and Recovery' (FDIR) trong C&DH là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phần mềm giám sát và biểu diễn đồ thị thông số viễn đo"
                  },
                  {
                        "id": "B",
                        "text": "Cảm biến đo nhiệt độ tiếp giáp của các khối nguồn thứ cấp"
                  },
                  {
                        "id": "C",
                        "text": "Bộ nhớ lưu trữ dữ liệu tốc độ cao tích hợp trên bo C&DH"
                  },
                  {
                        "id": "D",
                        "text": "Quy trình tự động phát hiện, cô lập và phục hồi lỗi hệ thống"
                  }
            ]
      },
      {
            "id": "q-practice-3-wdt-event-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Watchdog Task' (Tác vụ giám sát phần mềm) trong kiến trúc đa nhiệm C&DH có nhiệm vụ gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vô hiệu hóa cổng giao tiếp nối tiếp khi hệ thống bận"
                  },
                  {
                        "id": "B",
                        "text": "Liên tục gửi bản tin trạng thái lên giao diện trạm"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra các tác vụ trước khi xóa cờ WDT phần cứng"
                  },
                  {
                        "id": "D",
                        "text": "Tắt màn hình giám sát để bảo vệ mạch tải trọng ngoài"
                  }
            ]
      }
]),
    ],
  },
  4: {
    summary: 'Xây dựng hệ sinh thái thu thập dữ liệu đa cảm biến và tải trọng quang học hoàn chỉnh.',
    checkpoints: [
      doc('doc-4-1', 'Câu hỏi kiểm tra Doc 4.1', 'Chân Open-Drain I2C, điều kiện START/STOP trên SDA/SCL, ACK/NACK, địa chỉ 0x76 của BMP280 và công thức độ cao khí áp.', [
      {
            "id": "q-doc-4-1-1",
            "type": "single_choice",
            "prompt": "Cảm biến khí áp và nhiệt độ kỹ thuật số BMP280 của Bosch Sensortec đo lường áp suất môi trường dựa trên hiệu ứng vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiệu ứng nhiệt điện Seebeck trên tiếp giáp bán dẫn"
                  },
                  {
                        "id": "B",
                        "text": "Hiệu ứng áp điện trở trên màng bán dẫn Silicon"
                  },
                  {
                        "id": "C",
                        "text": "Hiệu ứng cảm ứng điện từ Faraday trong từ trường"
                  },
                  {
                        "id": "D",
                        "text": "Hiệu ứng quang điện trong khối vật liệu nhạy sáng"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-2",
            "type": "single_choice",
            "prompt": "Công thức khí áp chuẩn (Barometric Formula) dùng để tính toán cao độ tương đối $h$ từ áp suất đo được $P$ và áp suất mực nước biển $P_0$ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "$h = 44330 \\times (1 - P / P_0)$"
                  },
                  {
                        "id": "B",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^2]$"
                  },
                  {
                        "id": "C",
                        "text": "$h = 44330 \\times (P_0 / P - 1)$"
                  },
                  {
                        "id": "D",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^{0.1903}]$"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-3",
            "type": "single_choice",
            "prompt": "Tại sao trên chip cảm biến BMP280, nhà sản xuất bắt buộc phải tích hợp sẵn một cảm biến nhiệt độ bên cạnh cảm biến áp suất?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để làm nóng màng cảm biến khí áp khi hoạt động"
                  },
                  {
                        "id": "B",
                        "text": "Để đo nhiệt độ bề mặt của các tấm pin Mặt Trời"
                  },
                  {
                        "id": "C",
                        "text": "Để phân biệt trạng thái ngày và đêm trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Để bù trừ sai số nhiệt độ phi tuyến cho phép đo áp"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-4",
            "type": "single_choice",
            "prompt": "Tập hợp các tham số hiệu chuẩn (Calibration / Trim Parameters) của BMP280 (gồm $T_1 - T_3$ và $P_1 - P_9$) được lưu trữ ở đâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Trong bộ nhớ RAM tĩnh của máy tính nhúng trung tâm"
                  },
                  {
                        "id": "B",
                        "text": "Trong bộ nhớ ROM/OTP nội bộ bên trong chip BMP280"
                  },
                  {
                        "id": "C",
                        "text": "Trên phân vùng lưu trữ của thẻ nhớ MicroSD ngoài"
                  },
                  {
                        "id": "D",
                        "text": "Trong vùng nhớ thanh ghi cấu hình tạm thời của chip"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-5",
            "type": "single_choice",
            "prompt": "Tại sao trên module ESP32-CAM, chip vi điều khiển ESP32 bắt buộc phải là phiên bản tích hợp thêm bộ nhớ PSRAM (Pseudo-SRAM) 4MB ngoài?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đệm khung hình ảnh độ phân giải cao vượt bộ nhớ trong"
                  },
                  {
                        "id": "B",
                        "text": "Lưu trữ mã nguồn chương trình nhị phân của firmware"
                  },
                  {
                        "id": "C",
                        "text": "Tăng tần số xung nhịp làm việc của nhân vi xử lý"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp dòng điện công suất lớn cho đèn trợ sáng"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'GSD' (Ground Sampling Distance - Khoảng cách lấy mẫu mặt đất) của ảnh viễn thám chụp từ vệ tinh được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Kích thước phân giải mặt đất tương ứng giữa hai điểm ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Vận tốc bay tương đối của vệ tinh so với bề mặt địa hình"
                  },
                  {
                        "id": "C",
                        "text": "Chiều cao danh định của tầng đối lưu trong khí quyển"
                  },
                  {
                        "id": "D",
                        "text": "Cự ly truyền sóng thẳng giữa hai trạm quan sát mặt đất"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-7",
            "type": "single_choice",
            "prompt": "Để tăng độ phân giải không gian (giảm GSD) của ảnh chụp từ vệ tinh ở cùng một độ cao quỹ đạo, giải pháp quang học là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tăng tiêu cự ống kính hoặc giảm kích thước pixel ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng ống kính có góc trường nhìn rộng hơn nữa"
                  },
                  {
                        "id": "C",
                        "text": "Thay đổi bộ lọc màu quang học gắn trên cảm biến"
                  },
                  {
                        "id": "D",
                        "text": "Rút ngắn thời gian phơi sáng của màn trập điện tử"
                  }
            ]
      },
      {
            "id": "q-doc-4-1-8",
            "type": "single_choice",
            "prompt": "Cảm biến khí quyển BMP280 có thể cấu hình chế độ lấy mẫu quá mức (Oversampling) tối đa lên tới bao nhiêu lần cho áp suất?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1 lần"
                  },
                  {
                        "id": "B",
                        "text": "1024 lần"
                  },
                  {
                        "id": "C",
                        "text": "16 lần"
                  },
                  {
                        "id": "D",
                        "text": "100 lần"
                  }
            ]
      }
]),
      practice('practice-4-bmp280', 'Câu hỏi kiểm tra Thực hành BMP280', 'Đọc chuỗi byte Wire.read(), bù phi tuyến với hệ số hiệu chuẩn (dig_T, dig_P) và tính độ cao theo công thức Hypsometric.',
        ['Lab4-01a_Environment_I2C', 'Lab4-01b_Environment_Library'], [
      {
            "id": "q-practice-4-bmp280-1",
            "type": "single_choice",
            "prompt": "Cảm biến khí áp và nhiệt độ kỹ thuật số BMP280 của Bosch Sensortec đo lường áp suất môi trường dựa trên hiệu ứng vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiệu ứng nhiệt điện Seebeck trên tiếp giáp bán dẫn"
                  },
                  {
                        "id": "B",
                        "text": "Hiệu ứng áp điện trở trên màng bán dẫn Silicon"
                  },
                  {
                        "id": "C",
                        "text": "Hiệu ứng cảm ứng điện từ Faraday trong từ trường"
                  },
                  {
                        "id": "D",
                        "text": "Hiệu ứng quang điện trong khối vật liệu nhạy sáng"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-2",
            "type": "single_choice",
            "prompt": "Dải đo áp suất khí quyển làm việc danh định của cảm biến BMP280 là trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 hPa đến 100 hPa"
                  },
                  {
                        "id": "B",
                        "text": "1500 hPa đến 3000 hPa"
                  },
                  {
                        "id": "C",
                        "text": "300 hPa đến 1100 hPa"
                  },
                  {
                        "id": "D",
                        "text": "5000 hPa đến 10000 hPa"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-3",
            "type": "single_choice",
            "prompt": "Công thức khí áp chuẩn (Barometric Formula) dùng để tính toán cao độ tương đối $h$ từ áp suất đo được $P$ và áp suất mực nước biển $P_0$ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "$h = 44330 \\times (1 - P / P_0)$"
                  },
                  {
                        "id": "B",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^2]$"
                  },
                  {
                        "id": "C",
                        "text": "$h = 44330 \\times (P_0 / P - 1)$"
                  },
                  {
                        "id": "D",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^{0.1903}]$"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-4",
            "type": "single_choice",
            "prompt": "Tại sao trên chip cảm biến BMP280, nhà sản xuất bắt buộc phải tích hợp sẵn một cảm biến nhiệt độ bên cạnh cảm biến áp suất?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để làm nóng màng cảm biến khí áp khi hoạt động"
                  },
                  {
                        "id": "B",
                        "text": "Để đo nhiệt độ bề mặt của các tấm pin Mặt Trời"
                  },
                  {
                        "id": "C",
                        "text": "Để phân biệt trạng thái ngày và đêm trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Để bù trừ sai số nhiệt độ phi tuyến cho phép đo áp"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-5",
            "type": "single_choice",
            "prompt": "Tập hợp các tham số hiệu chuẩn (Calibration / Trim Parameters) của BMP280 (gồm $T_1 - T_3$ và $P_1 - P_9$) được lưu trữ ở đâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Trong bộ nhớ RAM tĩnh của máy tính nhúng trung tâm"
                  },
                  {
                        "id": "B",
                        "text": "Trong bộ nhớ ROM/OTP nội bộ bên trong chip BMP280"
                  },
                  {
                        "id": "C",
                        "text": "Trên phân vùng lưu trữ của thẻ nhớ MicroSD ngoài"
                  },
                  {
                        "id": "D",
                        "text": "Trong vùng nhớ thanh ghi cấu hình tạm thời của chip"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-6",
            "type": "single_choice",
            "prompt": "Tại sao trên module ESP32-CAM, chip vi điều khiển ESP32 bắt buộc phải là phiên bản tích hợp thêm bộ nhớ PSRAM (Pseudo-SRAM) 4MB ngoài?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đệm khung hình ảnh độ phân giải cao vượt bộ nhớ trong"
                  },
                  {
                        "id": "B",
                        "text": "Lưu trữ mã nguồn chương trình nhị phân của firmware"
                  },
                  {
                        "id": "C",
                        "text": "Tăng tần số xung nhịp làm việc của nhân vi xử lý"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp dòng điện công suất lớn cho đèn trợ sáng"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'GSD' (Ground Sampling Distance - Khoảng cách lấy mẫu mặt đất) của ảnh viễn thám chụp từ vệ tinh được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Kích thước phân giải mặt đất tương ứng giữa hai điểm ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Vận tốc bay tương đối của vệ tinh so với bề mặt địa hình"
                  },
                  {
                        "id": "C",
                        "text": "Chiều cao danh định của tầng đối lưu trong khí quyển"
                  },
                  {
                        "id": "D",
                        "text": "Cự ly truyền sóng thẳng giữa hai trạm quan sát mặt đất"
                  }
            ]
      },
      {
            "id": "q-practice-4-bmp280-8",
            "type": "single_choice",
            "prompt": "Để tăng độ phân giải không gian (giảm GSD) của ảnh chụp từ vệ tinh ở cùng một độ cao quỹ đạo, giải pháp quang học là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tăng tiêu cự ống kính hoặc giảm kích thước pixel ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng ống kính có góc trường nhìn rộng hơn nữa"
                  },
                  {
                        "id": "C",
                        "text": "Thay đổi bộ lọc màu quang học gắn trên cảm biến"
                  },
                  {
                        "id": "D",
                        "text": "Rút ngắn thời gian phơi sáng của màn trập điện tử"
                  }
            ]
      }
]),
      doc('doc-4-2', 'Câu hỏi kiểm tra Doc 4.2', 'Cấu trúc cảm biến MEMS, trôi dạt (Drift) của con quay, nhiễu tần số cao của gia tốc kế và hệ số α = 0.98 trong bộ lọc bù.', [
      {
            "id": "q-doc-4-2-1",
            "type": "single_choice",
            "prompt": "Cảm biến quán tính MEMS 6 trục MPU6500 bao gồm những khối chức năng đo lường vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3 trục gia tốc kế và 3 trục con quay hồi chuyển"
                  },
                  {
                        "id": "B",
                        "text": "3 trục áp suất khí quyển và 3 trục độ ẩm tương đối"
                  },
                  {
                        "id": "C",
                        "text": "6 trục cảm biến nhiệt độ tiếp giáp bán dẫn nội bộ"
                  },
                  {
                        "id": "D",
                        "text": "3 trục từ kế đo từ trường và 3 trục cảm biến quang"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-2",
            "type": "single_choice",
            "prompt": "Khi đặt bo mạch cảm biến MPU6500 nằm yên tĩnh trên mặt bàn nằm ngang, gia tốc kế trục Z sẽ đọc được giá trị xấp xỉ bằng bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "+1.0 g do phản lực đỡ của mặt bàn"
                  },
                  {
                        "id": "B",
                        "text": "0.0 g do cảm biến ở trạng thái tĩnh"
                  },
                  {
                        "id": "C",
                        "text": "-1.0 g do trọng lực hướng xuống"
                  },
                  {
                        "id": "D",
                        "text": "+9.8 g do gia tốc rơi tự do Trái Đất"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-3",
            "type": "single_choice",
            "prompt": "Khối con quay hồi chuyển (Gyroscope) của MPU6500 đo lường đại lượng vật lý nào của vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ góc quay tức thời quanh các trục vật lý"
                  },
                  {
                        "id": "B",
                        "text": "Vị trí tuyệt đối so với tâm Trái Đất"
                  },
                  {
                        "id": "C",
                        "text": "Góc nghiêng từ trường"
                  },
                  {
                        "id": "D",
                        "text": "Tổng quãng đường vệ tinh đã bay"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-4",
            "type": "single_choice",
            "prompt": "Hiện tượng tiêu cực lớn nhất của con quay hồi chuyển MEMS khi tích phân vận tốc góc theo thời gian để tính góc nghiêng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ xử lý của thuật toán lọc bị chậm"
                  },
                  {
                        "id": "B",
                        "text": "Nhiệt độ của các phiến cực vi cơ tăng cao"
                  },
                  {
                        "id": "C",
                        "text": "Linh kiện bị nứt vỡ cơ học do dao động"
                  },
                  {
                        "id": "D",
                        "text": "Trôi góc tích lũy theo thời gian do lệch điểm 0"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-5",
            "type": "single_choice",
            "prompt": "Ngược lại với con quay hồi chuyển, góc nghiêng tính toán từ gia tốc kế (Accelerometer) có ưu và nhược điểm gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ đo được góc nghiêng trong môi trường chân không"
                  },
                  {
                        "id": "B",
                        "text": "Không trôi dài hạn nhưng nhạy với rung động tức thời"
                  },
                  {
                        "id": "C",
                        "text": "Không thể đo được góc tĩnh khi nằm yên trên mặt bàn"
                  },
                  {
                        "id": "D",
                        "text": "Bị trôi dạt tích lũy nhanh hơn con quay hồi chuyển"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-6",
            "type": "single_choice",
            "prompt": "Bộ lọc bù (Complementary Filter) giải quyết bài toán dung hòa giữa gia tốc kế và con quay hồi chuyển theo nguyên lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tắt hoàn toàn tín hiệu đo của khối gia tốc kế"
                  },
                  {
                        "id": "B",
                        "text": "Lọc thông cao cho con quay và thông thấp cho gia tốc"
                  },
                  {
                        "id": "C",
                        "text": "Cộng trung bình số học hai giá trị thu thập được"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ sử dụng dữ liệu tích phân từ con quay hồi chuyển"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-7",
            "type": "single_choice",
            "prompt": "Dải thang đo toàn phần của gia tốc kế trên MPU6500 có thể lập trình cấu hình ở các mức nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "±1g, ±2g, ±3g và ±4g"
                  },
                  {
                        "id": "B",
                        "text": "±5g, ±10g, ±15g và ±20g"
                  },
                  {
                        "id": "C",
                        "text": "±10g, ±20g, ±40g và ±80g"
                  },
                  {
                        "id": "D",
                        "text": "±2g, ±4g, ±8g và ±16g"
                  }
            ]
      },
      {
            "id": "q-doc-4-2-8",
            "type": "single_choice",
            "prompt": "Cảm biến gia tốc MPU6500 có thể được sử dụng để xác định trạng thái 'Rơi tự do' (Free-fall / Microgravity) của vệ tinh dựa trên dấu hiệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Nhiệt độ hoạt động của các phiến cực tăng vọt"
                  },
                  {
                        "id": "B",
                        "text": "Vận tốc góc đo được từ con quay đạt mức tối đa"
                  },
                  {
                        "id": "C",
                        "text": "Gia tốc đo trên trục Z đạt giá trị tới hạn 100g"
                  },
                  {
                        "id": "D",
                        "text": "Tổng độ lớn véc-tơ gia tốc trên cả 3 trục tiệm cận 0g"
                  }
            ]
      }
]),
      practice('practice-4-imu', 'Câu hỏi kiểm tra Thực hành IMU MPU6500', 'Đọc số nguyên 16-bit bù 2, đổi ra đơn vị g và °/s, thuật toán tích phân vận tốc góc và xuất log trực quan 3 trục.',
        ['Lab4-02a_IMU_I2C', 'Lab4-02b_IMU_Library'], [
      {
            "id": "q-practice-4-imu-1",
            "type": "single_choice",
            "prompt": "Cảm biến quán tính MEMS 6 trục MPU6500 bao gồm những khối chức năng đo lường vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3 trục gia tốc kế và 3 trục con quay hồi chuyển"
                  },
                  {
                        "id": "B",
                        "text": "3 trục áp suất khí quyển và 3 trục độ ẩm tương đối"
                  },
                  {
                        "id": "C",
                        "text": "6 trục cảm biến nhiệt độ tiếp giáp bán dẫn nội bộ"
                  },
                  {
                        "id": "D",
                        "text": "3 trục từ kế đo từ trường và 3 trục cảm biến quang"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-2",
            "type": "single_choice",
            "prompt": "Nguyên lý hoạt động của gia tốc kế MEMS bên trong MPU6500 dựa trên hiện tượng cơ học nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biến dạng cơ học của cột chất lỏng vi lưu"
                  },
                  {
                        "id": "B",
                        "text": "Khúc xạ chùm tia sáng qua lăng kính quang học"
                  },
                  {
                        "id": "C",
                        "text": "Hiện tượng phóng hồ quang giữa các cực vi cơ"
                  },
                  {
                        "id": "D",
                        "text": "Biến đổi điện dung khi khối lượng thử dịch chuyển"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-3",
            "type": "single_choice",
            "prompt": "Khi đặt bo mạch cảm biến MPU6500 nằm yên tĩnh trên mặt bàn nằm ngang, gia tốc kế trục Z sẽ đọc được giá trị xấp xỉ bằng bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "+1.0 g do phản lực đỡ của mặt bàn"
                  },
                  {
                        "id": "B",
                        "text": "0.0 g do cảm biến ở trạng thái tĩnh"
                  },
                  {
                        "id": "C",
                        "text": "-1.0 g do trọng lực hướng xuống"
                  },
                  {
                        "id": "D",
                        "text": "+9.8 g do gia tốc rơi tự do Trái Đất"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-4",
            "type": "single_choice",
            "prompt": "Khối con quay hồi chuyển (Gyroscope) của MPU6500 đo lường đại lượng vật lý nào của vệ tinh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ góc quay tức thời quanh các trục vật lý"
                  },
                  {
                        "id": "B",
                        "text": "Vị trí tuyệt đối so với tâm Trái Đất"
                  },
                  {
                        "id": "C",
                        "text": "Góc nghiêng từ trường"
                  },
                  {
                        "id": "D",
                        "text": "Tổng quãng đường vệ tinh đã bay"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-5",
            "type": "single_choice",
            "prompt": "Hiện tượng tiêu cực lớn nhất của con quay hồi chuyển MEMS khi tích phân vận tốc góc theo thời gian để tính góc nghiêng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tốc độ xử lý của thuật toán lọc bị chậm"
                  },
                  {
                        "id": "B",
                        "text": "Nhiệt độ của các phiến cực vi cơ tăng cao"
                  },
                  {
                        "id": "C",
                        "text": "Linh kiện bị nứt vỡ cơ học do dao động"
                  },
                  {
                        "id": "D",
                        "text": "Trôi góc tích lũy theo thời gian do lệch điểm 0"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-6",
            "type": "single_choice",
            "prompt": "Ngược lại với con quay hồi chuyển, góc nghiêng tính toán từ gia tốc kế (Accelerometer) có ưu và nhược điểm gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ đo được góc nghiêng trong môi trường chân không"
                  },
                  {
                        "id": "B",
                        "text": "Không trôi dài hạn nhưng nhạy với rung động tức thời"
                  },
                  {
                        "id": "C",
                        "text": "Không thể đo được góc tĩnh khi nằm yên trên mặt bàn"
                  },
                  {
                        "id": "D",
                        "text": "Bị trôi dạt tích lũy nhanh hơn con quay hồi chuyển"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-7",
            "type": "single_choice",
            "prompt": "Bộ lọc bù (Complementary Filter) giải quyết bài toán dung hòa giữa gia tốc kế và con quay hồi chuyển theo nguyên lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tắt hoàn toàn tín hiệu đo của khối gia tốc kế"
                  },
                  {
                        "id": "B",
                        "text": "Lọc thông cao cho con quay và thông thấp cho gia tốc"
                  },
                  {
                        "id": "C",
                        "text": "Cộng trung bình số học hai giá trị thu thập được"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ sử dụng dữ liệu tích phân từ con quay hồi chuyển"
                  }
            ]
      },
      {
            "id": "q-practice-4-imu-8",
            "type": "single_choice",
            "prompt": "Bản tin NMEA GPRMC (Recommended Minimum Specific GNSS Data) cung cấp tập hợp các thông số cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Áp suất khí quyển và nhiệt độ môi trường xung quanh"
                  },
                  {
                        "id": "B",
                        "text": "Khung dữ liệu hình ảnh nhị phân truyền từ máy ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Giờ UTC, tọa độ kinh vĩ, vận tốc và hướng di chuyển"
                  },
                  {
                        "id": "D",
                        "text": "Nhiệt độ tiếp giáp bán dẫn trên bo mạch máy tính"
                  }
            ]
      }
]),
      doc('doc-4-3', 'Câu hỏi kiểm tra Doc 4.3', 'Băng tần L1 1575.42 MHz, ăng-ten gốm Patch, khuếch đại LNA, thời gian chốt vị trí TTFF (Cold/Warm/Hot Start) và tốc độ baud 9600 của L76X.', [
      {
            "id": "q-doc-4-3-1",
            "type": "single_choice",
            "prompt": "Module định vị vệ tinh toàn cầu GNSS L76X có khả năng đồng thời thu tín hiệu từ những hệ thống chùm vệ tinh định vị nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mạng viễn thông di động mặt đất thế hệ thứ 4"
                  },
                  {
                        "id": "B",
                        "text": "GPS của Mỹ, GLONASS của Nga và BDS của Trung Quốc"
                  },
                  {
                        "id": "C",
                        "text": "Các trạm phát sóng WiFi công cộng tầm xa"
                  },
                  {
                        "id": "D",
                        "text": "Các phao tiêu vô tuyến hàng hải ven biển"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-2",
            "type": "single_choice",
            "prompt": "Số lượng vệ tinh GNSS tối thiểu mà module L76X bắt buộc phải khóa tín hiệu (Lock) để có thể xác định được tọa độ 3 chiều (Kinh độ, Vĩ độ, Cao độ) và thời gian là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3 vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "1 vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Tối thiểu 4 vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "10 vệ tinh"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-3",
            "type": "single_choice",
            "prompt": "Ăng-ten gốm chủ động (Active Patch Antenna) khác với ăng-ten gốm thụ động (Passive Patch Antenna) của module GNSS ở điểm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ăng-ten chủ động không cần hướng góc thu sóng lên trời"
                  },
                  {
                        "id": "B",
                        "text": "Ăng-ten chủ động tích hợp bộ khuếch đại LNA và cần cấp DC"
                  },
                  {
                        "id": "C",
                        "text": "Ăng-ten thụ động có khả năng thu bắt tín hiệu nhạy hơn"
                  },
                  {
                        "id": "D",
                        "text": "Ăng-ten chủ động được chế tạo bằng vật liệu đặc biệt"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-4",
            "type": "single_choice",
            "prompt": "Chuẩn giao tiếp dữ liệu ngõ ra văn bản thông dụng nhất được module GNSS L76X xuất ra cổng nối tiếp UART là chuẩn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chuẩn định dạng tài liệu có cấu trúc JSON"
                  },
                  {
                        "id": "B",
                        "text": "Chuẩn khung dữ liệu nhị phân tốc độ cao CAN"
                  },
                  {
                        "id": "C",
                        "text": "Chuẩn siêu văn bản hiển thị trên trình duyệt"
                  },
                  {
                        "id": "D",
                        "text": "Chuẩn NMEA 0183 với các câu tin ASCII bắt đầu bằng ký tự tiền tố '\\$'"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hot Start' (Khởi động nóng) của máy thu GNSS có thời gian định vị (TTFF) cực nhanh (khoảng 1 - 2 giây) là nhờ yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Máy thu hoạt động ở quỹ đạo thấp nên tín hiệu mạnh"
                  },
                  {
                        "id": "B",
                        "text": "Máy thu duy trì pin RTC và giữ nguyên lịch thiên văn"
                  },
                  {
                        "id": "C",
                        "text": "Máy thu được sấy nóng bằng điện trở nhiệt trước đó"
                  },
                  {
                        "id": "D",
                        "text": "Các vệ tinh định vị phát tín hiệu công suất cực đại"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-6",
            "type": "single_choice",
            "prompt": "Module GNSS L76X kết nối với OBC thông qua giao tiếp phần cứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giao tiếp SPI tốc độ cao"
                  },
                  {
                        "id": "B",
                        "text": "Bus song song 16-bit"
                  },
                  {
                        "id": "C",
                        "text": "Giao tiếp nối tiếp UART bất đồng bộ"
                  },
                  {
                        "id": "D",
                        "text": "Đường dây tương tự Analog"
                  }
            ]
      },
      {
            "id": "q-doc-4-3-7",
            "type": "single_choice",
            "prompt": "Khi vệ tinh bay ở quỹ đạo thấp LEO với vận tốc xấp xỉ 7.6 km/s, hạn chế kỹ thuật nào của các module GPS thương mại thông thường (như COCOM Limits) cần lưu ý?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Máy thu GPS tiêu thụ công suất điện vượt quá 100W"
                  },
                  {
                        "id": "B",
                        "text": "Máy thu GPS không thể hoạt động được trong bóng tối"
                  },
                  {
                        "id": "C",
                        "text": "Quy chuẩn COCOM khóa máy thu khi vận tốc vượt 515 m/s"
                  },
                  {
                        "id": "D",
                        "text": "Các linh kiện vi cơ bên trong máy thu bị bong tróc"
                  }
            ]
      }
]),
      practice('practice-4-nmea-raw', 'Câu hỏi kiểm tra Thực hành Đọc NMEA thô', 'Khởi tạo UART2, gom ký tự vào bộ đệm dòng, kiểm tra ký tự bắt đầu $ và ký tự kết thúc \r\n.',
        ['Lab4-03a_GPS_UART'], [
      {
            "id": "q-practice-4-nmea-raw-1",
            "type": "single_choice",
            "prompt": "Module định vị vệ tinh toàn cầu GNSS L76X có khả năng đồng thời thu tín hiệu từ những hệ thống chùm vệ tinh định vị nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mạng viễn thông di động mặt đất thế hệ thứ 4"
                  },
                  {
                        "id": "B",
                        "text": "GPS của Mỹ, GLONASS của Nga và BDS của Trung Quốc"
                  },
                  {
                        "id": "C",
                        "text": "Các trạm phát sóng WiFi công cộng tầm xa"
                  },
                  {
                        "id": "D",
                        "text": "Các phao tiêu vô tuyến hàng hải ven biển"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-2",
            "type": "single_choice",
            "prompt": "Số lượng vệ tinh GNSS tối thiểu mà module L76X bắt buộc phải khóa tín hiệu (Lock) để có thể xác định được tọa độ 3 chiều (Kinh độ, Vĩ độ, Cao độ) và thời gian là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3 vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "1 vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Tối thiểu 4 vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "10 vệ tinh"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-3",
            "type": "single_choice",
            "prompt": "Ăng-ten gốm chủ động (Active Patch Antenna) khác với ăng-ten gốm thụ động (Passive Patch Antenna) của module GNSS ở điểm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ăng-ten chủ động không cần hướng góc thu sóng lên trời"
                  },
                  {
                        "id": "B",
                        "text": "Ăng-ten chủ động tích hợp bộ khuếch đại LNA và cần cấp DC"
                  },
                  {
                        "id": "C",
                        "text": "Ăng-ten thụ động có khả năng thu bắt tín hiệu nhạy hơn"
                  },
                  {
                        "id": "D",
                        "text": "Ăng-ten chủ động được chế tạo bằng vật liệu đặc biệt"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-4",
            "type": "single_choice",
            "prompt": "Chuẩn giao tiếp dữ liệu ngõ ra văn bản thông dụng nhất được module GNSS L76X xuất ra cổng nối tiếp UART là chuẩn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chuẩn định dạng tài liệu có cấu trúc JSON"
                  },
                  {
                        "id": "B",
                        "text": "Chuẩn khung dữ liệu nhị phân tốc độ cao CAN"
                  },
                  {
                        "id": "C",
                        "text": "Chuẩn siêu văn bản hiển thị trên trình duyệt"
                  },
                  {
                        "id": "D",
                        "text": "Chuẩn NMEA 0183 với các câu tin ASCII bắt đầu bằng ký tự tiền tố '\\$'"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-5",
            "type": "single_choice",
            "prompt": "Bản tin NMEA GPRMC (Recommended Minimum Specific GNSS Data) cung cấp tập hợp các thông số cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Áp suất khí quyển và nhiệt độ môi trường xung quanh"
                  },
                  {
                        "id": "B",
                        "text": "Khung dữ liệu hình ảnh nhị phân truyền từ máy ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Giờ UTC, tọa độ kinh vĩ, vận tốc và hướng di chuyển"
                  },
                  {
                        "id": "D",
                        "text": "Nhiệt độ tiếp giáp bán dẫn trên bo mạch máy tính"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-6",
            "type": "single_choice",
            "prompt": "Bản tin NMEA GPGGA (Global Positioning System Fix Data) cung cấp thông tin đặc thù quan trọng nào mà câu GPRMC không có?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mã định danh định vị của kỹ sư trực trạm mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Điện áp và dòng điện tiêu thụ của phân hệ nguồn"
                  },
                  {
                        "id": "C",
                        "text": "Độ cao so với mực nước biển và số vệ tinh bám được"
                  },
                  {
                        "id": "D",
                        "text": "Đặc tính phản xạ quang phổ của bề mặt địa hình"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hot Start' (Khởi động nóng) của máy thu GNSS có thời gian định vị (TTFF) cực nhanh (khoảng 1 - 2 giây) là nhờ yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Máy thu hoạt động ở quỹ đạo thấp nên tín hiệu mạnh"
                  },
                  {
                        "id": "B",
                        "text": "Máy thu duy trì pin RTC và giữ nguyên lịch thiên văn"
                  },
                  {
                        "id": "C",
                        "text": "Máy thu được sấy nóng bằng điện trở nhiệt trước đó"
                  },
                  {
                        "id": "D",
                        "text": "Các vệ tinh định vị phát tín hiệu công suất cực đại"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-raw-8",
            "type": "single_choice",
            "prompt": "Module GNSS L76X kết nối với OBC thông qua giao tiếp phần cứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giao tiếp SPI tốc độ cao"
                  },
                  {
                        "id": "B",
                        "text": "Bus song song 16-bit"
                  },
                  {
                        "id": "C",
                        "text": "Giao tiếp nối tiếp UART bất đồng bộ"
                  },
                  {
                        "id": "D",
                        "text": "Đường dây tương tự Analog"
                  }
            ]
      }
]),
      doc('doc-4-4', 'Câu hỏi kiểm tra Doc 4.4', 'Các trường câu tin RMC/GGA/GSA, tách trường bằng dấu phẩy, đổi tọa độ ddmm.mmmm sang độ thập phân và kiểm tra Checksum XOR (*hh).', [
      {
            "id": "q-doc-4-4-1",
            "type": "single_choice",
            "prompt": "Bản tin NMEA GPRMC (Recommended Minimum Specific GNSS Data) cung cấp tập hợp các thông số cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Áp suất khí quyển và nhiệt độ môi trường xung quanh"
                  },
                  {
                        "id": "B",
                        "text": "Khung dữ liệu hình ảnh nhị phân truyền từ máy ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Giờ UTC, tọa độ kinh vĩ, vận tốc và hướng di chuyển"
                  },
                  {
                        "id": "D",
                        "text": "Nhiệt độ tiếp giáp bán dẫn trên bo mạch máy tính"
                  }
            ]
      },
      {
            "id": "q-doc-4-4-2",
            "type": "single_choice",
            "prompt": "Bản tin NMEA GPGGA (Global Positioning System Fix Data) cung cấp thông tin đặc thù quan trọng nào mà câu GPRMC không có?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mã định danh định vị của kỹ sư trực trạm mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Điện áp và dòng điện tiêu thụ của phân hệ nguồn"
                  },
                  {
                        "id": "C",
                        "text": "Độ cao so với mực nước biển và số vệ tinh bám được"
                  },
                  {
                        "id": "D",
                        "text": "Đặc tính phản xạ quang phổ của bề mặt địa hình"
                  }
            ]
      },
      {
            "id": "q-doc-4-4-3",
            "type": "single_choice",
            "prompt": "Để chuyển đổi tọa độ từ định dạng NMEA `DDMM.MMMM` sang định dạng độ thập phân (Decimal Degrees - DD), công thức toán học là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "DD = Degrees × 60 + Minutes"
                  },
                  {
                        "id": "B",
                        "text": "DD = Degrees +"
                  },
                  {
                        "id": "C",
                        "text": "DD = Degrees + Minutes"
                  },
                  {
                        "id": "D",
                        "text": "DD = Degrees / Minutes"
                  }
            ]
      },
      {
            "id": "q-doc-4-4-4",
            "type": "single_choice",
            "prompt": "Thời gian UTC trích xuất từ câu tin NMEA GPRMC (ví dụ chuỗi `123519.00`) có ý nghĩa biểu thị thời gian nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mốc thời gian 12 giờ ngày 35 tháng 19 trong năm"
                  },
                  {
                        "id": "B",
                        "text": "Mã định danh của vệ tinh GPS đang phát tín hiệu"
                  },
                  {
                        "id": "C",
                        "text": "Thời điểm 12 giờ 35 phút 19 giây chuẩn quốc tế UTC"
                  },
                  {
                        "id": "D",
                        "text": "Vận tốc bay tương đối tính theo hải lý trên giờ"
                  }
            ]
      },
      {
            "id": "q-doc-4-4-5",
            "type": "single_choice",
            "prompt": "Chuỗi kiểm tra mã kiểm tra (Checksum) ở cuối mỗi câu NMEA 0183 (ví dụ `*2C`) được tính toán bằng thuật toán nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thuật toán tính toán mã băm an toàn chuẩn SHA-256"
                  },
                  {
                        "id": "B",
                        "text": "Tính tổng số học modulo của tất cả các byte bản tin"
                  },
                  {
                        "id": "C",
                        "text": "Phép toán XOR bit liên tiếp giữa ký tự '\\$' và ký tự '*'"
                  },
                  {
                        "id": "D",
                        "text": "Phép nhân modulo 256 của toàn bộ các ký tự chuỗi"
                  }
            ]
      }
]),
      practice('practice-4-nmea-decode', 'Câu hỏi kiểm tra Thực hành Giải mã NMEA', 'Hàm strchr(), strtok(), tính Checksum XOR giữa $ và *, kiểm tra cờ hợp lệ A/V trước khi dùng dữ liệu.',
        ['Lab4-03b_GPS_Library', 'Lab4-03c_GPS_PTITCube'], [
      {
            "id": "q-practice-4-nmea-decode-1",
            "type": "single_choice",
            "prompt": "Để khởi tạo cổng nối tiếp phần cứng thứ hai (Serial2) của ESP32 để giao tiếp với module GNSS L76X ở tốc độ 9600 baud, cú pháp C++ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khởi tạo cổng Serial chính với tốc độ 9600 baud mặc định"
                  },
                  {
                        "id": "B",
                        "text": "Khởi tạo Serial2 ở 9600 baud, cấu hình 8N1 và gán đúng chân RX/TX"
                  },
                  {
                        "id": "C",
                        "text": "Khởi tạo thư viện SoftwareSerial trên các chân GPIO bất kỳ"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng hàm Serial2.begin() nhưng không chỉ định cấu hình chân kết nối"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-2",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ nào sau đây đọc luồng ký tự nối tiếp từ module GNSS cho đến khi thu thập đủ một dòng câu tin NMEA hoàn chỉnh?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Gọi trực tiếp Serial2.readString() không giới hạn thời gian chờ"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng vòng lặp vô hạn đọc ký tự liên tục không dừng"
                  },
                  {
                        "id": "C",
                        "text": "Đọc duy nhất một ký tự bằng hàm Serial2.read() rồi kết thúc"
                  },
                  {
                        "id": "D",
                        "text": "Kiểm tra available(), đọc từng ký tự vào đệm cho đến khi gặp '\\n'"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-3",
            "type": "single_choice",
            "prompt": "Để kiểm tra xem dòng chuỗi NMEA nhận được có phải là bản tin GPRMC hay không, cú pháp kiểm tra chuỗi C++ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng hàm strcmp() so sánh chuỗi với định danh GPGGA"
                  },
                  {
                        "id": "B",
                        "text": "Dùng hàm strlen() kiểm tra chuỗi có độ dài đúng 6 ký tự"
                  },
                  {
                        "id": "C",
                        "text": "Dùng toán tử so sánh bằng line == GPRMC trực tiếp"
                  },
                  {
                        "id": "D",
                        "text": "Dùng hàm strncmp() kiểm tra 6 ký tự đầu là tiền tố GPRMC"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-4",
            "type": "single_choice",
            "prompt": "Hàm C++ nào sau đây giúp tách chuỗi NMEA thành các trường dữ liệu ngăn cách bởi dấu phẩy `','`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng hàm strstr() tìm kiếm chuỗi con trong bản tin"
                  },
                  {
                        "id": "B",
                        "text": "Dùng hàm strchr() kiểm tra sự xuất hiện của ký tự đơn lẻ"
                  },
                  {
                        "id": "C",
                        "text": "Dùng toán tử phân tách chuỗi logic trong cấu trúc C++"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng hàm strtok() với ký tự phân tách là dấu phẩy ','"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-5",
            "type": "single_choice",
            "prompt": "Hàm C++ nào sau đây tính toán và xác thực mã checksum NMEA của chuỗi ký tự nhận được?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tính phép XOR liên tiếp giữa ký tự '\\$' và '*' rồi so sánh với mã nhận"
                  },
                  {
                        "id": "B",
                        "text": "Cộng dồn tất cả các mã ASCII từ đầu câu cho đến ký tự xuống dòng"
                  },
                  {
                        "id": "C",
                        "text": "Tính tổng kiểm tra CRC-16 trên toàn bộ mảng byte của câu tin NMEA"
                  },
                  {
                        "id": "D",
                        "text": "Đếm tổng số ký tự và số dấu phẩy xuất hiện trong câu tin NMEA"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-6",
            "type": "single_choice",
            "prompt": "Để gửi lệnh cấu hình chu kỳ phát bản tin lên module GNSS L76X (ví dụ lệnh PMTK cài đặt tần số 5 Hz), chuỗi lệnh C++ gửi qua Serial2 là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Gửi chuỗi lệnh chuẩn định dạng PMTK cấu hình chu kỳ phát kèm checksum"
                  },
                  {
                        "id": "B",
                        "text": "Gửi chuỗi lệnh văn bản không định dạng SET_RATE_5HZ lên module"
                  },
                  {
                        "id": "C",
                        "text": "Gửi trực tiếp một byte số nguyên chỉ định tần số xung nhịp đo"
                  },
                  {
                        "id": "D",
                        "text": "Gửi lệnh văn bản đơn giản RATE qua cổng giao tiếp nối tiếp"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-7",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ nào sau đây định dạng toàn bộ dữ liệu từ BMP280, MPU6500 và GNSS thành một chuỗi bản ghi CSV duy nhất:",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng snprintf() định dạng dữ liệu nhưng thiếu trường kinh độ địa lý"
                  },
                  {
                        "id": "B",
                        "text": "Dùng hàm sprintf() không kiểm soát độ dài bộ đệm dễ gây tràn ô nhớ"
                  },
                  {
                        "id": "C",
                        "text": "Dùng snprintf() kiểm soát kích thước đệm và định dạng đầy đủ các trường đo"
                  },
                  {
                        "id": "D",
                        "text": "Dùng hàm strncpy() sao chép trực tiếp chuỗi định dạng thô vào bộ nhớ"
                  }
            ]
      },
      {
            "id": "q-practice-4-nmea-decode-8",
            "type": "single_choice",
            "prompt": "Đoạn mã C++ nào sau đây kiểm tra tính hợp lệ chéo (Cross-validation) giữa độ cao tính từ áp suất BMP280 và độ cao từ GNSS:",
            "choices": [
                  {
                        "id": "A",
                        "text": "So sánh trị tuyệt đối độ lệch giữa hai cảm biến với một ngưỡng dung sai cho phép"
                  },
                  {
                        "id": "B",
                        "text": "Kiểm tra điều kiện bằng nhau tuyệt đối giữa số đo khí áp và định vị GNSS"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm tra điều kiện số đo khí áp có nhỏ hơn áp suất mực nước biển hay không"
                  },
                  {
                        "id": "D",
                        "text": "Kiểm tra sự hiện diện của tín hiệu vệ tinh bằng cách so sánh cao độ với 0"
                  }
            ]
      }
]),
      doc('doc-4-5', 'Câu hỏi kiểm tra Doc 4.5', 'Xung nhịp XCLK 10-20 MHz, cấu hình SCCB, nén JPEG phần cứng, byte bắt đầu SOI 0xFFD8, kết thúc EOI 0xFFD9 và giao thức bắt tay OBC-CAM.', [
      {
            "id": "q-doc-4-5-1",
            "type": "single_choice",
            "prompt": "Tải trọng quang học Camera OV2640 tích hợp trên module ESP32-CAM có độ phân giải cảm biến ảnh vật lý tối đa là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "48 Megapixel"
                  },
                  {
                        "id": "B",
                        "text": "2.0 Megapixel"
                  },
                  {
                        "id": "C",
                        "text": "12 Megapixel"
                  },
                  {
                        "id": "D",
                        "text": "0.3 Megapixel"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-2",
            "type": "single_choice",
            "prompt": "Ưu điểm vượt trội của vi mạch cảm biến ảnh OV2640 đối với các hệ thống nhúng có dung lượng RAM hạn chế như ESP32 là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Không tiêu hao năng lượng điện trong lúc chụp ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Tích hợp sẵn bộ nén JPEG phần cứng trên chip"
                  },
                  {
                        "id": "C",
                        "text": "Tự động phát dữ liệu ảnh trực tiếp lên vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Có khả năng quan sát hồng ngoại xuyên bóng tối"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-3",
            "type": "single_choice",
            "prompt": "Chuẩn giao tiếp phần cứng DVP (Digital Video Port) giữa cảm biến ảnh OV2640 và vi điều khiển ESP32 sử dụng các đường tín hiệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cáp quang đơn mốt truyền dữ liệu tốc độ cực cao"
                  },
                  {
                        "id": "B",
                        "text": "Giao thức truyền thông không dây băng thông hẹp"
                  },
                  {
                        "id": "C",
                        "text": "Bus dữ liệu song song 8-bit cùng các xung đồng bộ"
                  },
                  {
                        "id": "D",
                        "text": "Giao thức truyền nối tiếp 1 dây tốc độ thấp"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-4",
            "type": "single_choice",
            "prompt": "Đặc điểm cấu trúc tệp ảnh nén JPEG xuất từ cảm biến Camera OV2640 qua giao diện dữ liệu nối tiếp là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tệp ảnh luôn bắt đầu bằng byte mào đầu SOI (0xFF 0xD8) và kết thúc bằng byte đánh dấu EOI (0xFF 0xD9)"
                  },
                  {
                        "id": "B",
                        "text": "Tệp ảnh luôn được mã hóa thành các ký tự văn bản mã ASCII độ dài cố định 1024 bytes"
                  },
                  {
                        "id": "C",
                        "text": "Dữ liệu ảnh luôn chứa tọa độ GPS được chèn cứng vào byte đầu tiên"
                  },
                  {
                        "id": "D",
                        "text": "Dữ liệu ảnh là luồng tín hiệu analog quét từng dòng quét màn hình"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-5",
            "type": "single_choice",
            "prompt": "Góc FOV (Field of View - Trường nhìn) của ống kính quang học gắn trên camera CubeSat có ý nghĩa vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cường độ chiếu sáng của hệ thống đèn trợ sáng LED"
                  },
                  {
                        "id": "B",
                        "text": "Góc mở không gian mà cảm biến ảnh có thể bao quát"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng cách lấy nét quang học tối thiểu của thấu kính"
                  },
                  {
                        "id": "D",
                        "text": "Hệ số méo phi tuyến dạng cầu của hệ quang học"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-6",
            "type": "single_choice",
            "prompt": "Hiện tượng 'Rolling Shutter' (Màn chập quét dòng) trên cảm biến ảnh CMOS OV2640 có thể gây ra hiện tượng méo ảnh nào khi vệ tinh đang bị quay lộn?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Độ phân giải của ảnh chụp bị phóng đại gấp nhiều lần"
                  },
                  {
                        "id": "B",
                        "text": "Ảnh bị biến dạng hình học dạng nghiêng hoặc lượn sóng"
                  },
                  {
                        "id": "C",
                        "text": "Toàn bộ khung ảnh bị đảo ngược màu sắc thành âm bản"
                  },
                  {
                        "id": "D",
                        "text": "Tệp tin hình ảnh bị mất hoàn toàn thông tin tiêu đề"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-7",
            "type": "single_choice",
            "prompt": "Dòng tiêu thụ đỉnh của module Camera ESP32-CAM trong khoảnh khắc đang chụp ảnh và kích hoạt nén JPEG có thể lên tới:",
            "choices": [
                  {
                        "id": "A",
                        "text": "15 mA đến 30 mA"
                  },
                  {
                        "id": "B",
                        "text": "50 mA đến 80 mA"
                  },
                  {
                        "id": "C",
                        "text": "160 mA đến 250 mA"
                  },
                  {
                        "id": "D",
                        "text": "450 mA đến 600 mA"
                  }
            ]
      },
      {
            "id": "q-doc-4-5-8",
            "type": "single_choice",
            "prompt": "Khi truyền dữ liệu hình ảnh JPEG qua giao diện nối tiếp, dấu hiệu nhận biết bắt đầu của một tệp ảnh JPEG (SOI Marker) là 2 byte hex nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0xFF 0xD8"
                  },
                  {
                        "id": "B",
                        "text": "0x00 0x00"
                  },
                  {
                        "id": "C",
                        "text": "0xFF 0xD9"
                  },
                  {
                        "id": "D",
                        "text": "0x55 0xAA"
                  }
            ]
      }
]),
      practice('practice-4-camera', 'Câu hỏi kiểm tra Thực hành Camera OV2640', 'Gửi lệnh bắt tay p, đọc chuỗi SIZE:n, nhận luồng byte ảnh JPEG nhị phân, ghi trực tiếp theo khối vào MicroSD và gửi DONE.',
        ['Lab4-04a_Camera_UART', 'Lab4-04b_Camera_Library'], [
      {
            "id": "q-practice-4-camera-1",
            "type": "single_choice",
            "prompt": "Tải trọng quang học Camera OV2640 tích hợp trên module ESP32-CAM có độ phân giải cảm biến ảnh vật lý tối đa là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "48 Megapixel"
                  },
                  {
                        "id": "B",
                        "text": "2.0 Megapixel"
                  },
                  {
                        "id": "C",
                        "text": "12 Megapixel"
                  },
                  {
                        "id": "D",
                        "text": "0.3 Megapixel"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-2",
            "type": "single_choice",
            "prompt": "Đặc điểm cấu trúc tệp ảnh nén JPEG xuất từ cảm biến Camera OV2640 qua giao diện dữ liệu nối tiếp là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tệp ảnh luôn bắt đầu bằng byte mào đầu SOI (0xFF 0xD8) và kết thúc bằng byte đánh dấu EOI (0xFF 0xD9)"
                  },
                  {
                        "id": "B",
                        "text": "Tệp ảnh luôn được mã hóa thành các ký tự văn bản mã ASCII độ dài cố định 1024 bytes"
                  },
                  {
                        "id": "C",
                        "text": "Dữ liệu ảnh luôn chứa tọa độ GPS được chèn cứng vào byte đầu tiên"
                  },
                  {
                        "id": "D",
                        "text": "Dữ liệu ảnh là luồng tín hiệu analog quét từng dòng quét màn hình"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-3",
            "type": "single_choice",
            "prompt": "Góc FOV (Field of View - Trường nhìn) của ống kính quang học gắn trên camera CubeSat có ý nghĩa vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cường độ chiếu sáng của hệ thống đèn trợ sáng LED"
                  },
                  {
                        "id": "B",
                        "text": "Góc mở không gian mà cảm biến ảnh có thể bao quát"
                  },
                  {
                        "id": "C",
                        "text": "Khoảng cách lấy nét quang học tối thiểu của thấu kính"
                  },
                  {
                        "id": "D",
                        "text": "Hệ số méo phi tuyến dạng cầu của hệ quang học"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-4",
            "type": "single_choice",
            "prompt": "Dòng tiêu thụ đỉnh của module Camera ESP32-CAM trong khoảnh khắc đang chụp ảnh và kích hoạt nén JPEG có thể lên tới:",
            "choices": [
                  {
                        "id": "A",
                        "text": "15 mA đến 30 mA"
                  },
                  {
                        "id": "B",
                        "text": "50 mA đến 80 mA"
                  },
                  {
                        "id": "C",
                        "text": "160 mA đến 250 mA"
                  },
                  {
                        "id": "D",
                        "text": "450 mA đến 600 mA"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-5",
            "type": "single_choice",
            "prompt": "Trong giao thức bắt tay (Handshake) chụp và truyền dữ liệu ảnh từ Camera Payload về bộ vi xử lý OBC, trình tự chuẩn gồm các bước nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "OBC gửi lệnh chụp ('capture') -> Chờ Camera phản hồi kích thước tệp ảnh -> OBC đọc luồng byte dữ liệu nhị phân của ảnh qua UART cho đến hết kích thước danh định"
                  },
                  {
                        "id": "B",
                        "text": "Camera liên tục phát dữ liệu ảnh mà không cần lệnh kích hoạt từ OBC"
                  },
                  {
                        "id": "C",
                        "text": "OBC gửi toàn bộ tọa độ GPS sang Camera rồi mới nhận được tín hiệu ảnh"
                  },
                  {
                        "id": "D",
                        "text": "Camera chỉ truyền ảnh khi được rọi đèn flash từ ngoài không gian"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-6",
            "type": "single_choice",
            "prompt": "Khi sử dụng 74HC4066 để cô lập module Camera OV2640 khỏi hệ thống CubeSat, chân điều khiển nào của IC được kết nối với OBC?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chân kết nối với bộ tạo dao động thạch anh ngoài"
                  },
                  {
                        "id": "B",
                        "text": "Chân ngõ ra dữ liệu số của bộ chuyển đổi tương tự"
                  },
                  {
                        "id": "C",
                        "text": "Chân cấp nguồn điện lưới xoay chiều công nghiệp"
                  },
                  {
                        "id": "D",
                        "text": "Chân kích hoạt logic nối với các chân GPIO của OBC"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-7",
            "type": "single_choice",
            "prompt": "Hiện tượng rò rỉ dòng điện qua các diode bảo vệ ESD nội bộ của chip camera khi tắt nguồn VCC nhưng vẫn giữ nguyên đường tín hiệu I2C được gọi là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiện tượng đoản mạch trực tiếp"
                  },
                  {
                        "id": "B",
                        "text": "Hiện tượng siêu dẫn"
                  },
                  {
                        "id": "C",
                        "text": "Hiện tượng cấp nguồn ký sinh"
                  },
                  {
                        "id": "D",
                        "text": "Hiện tượng khuếch đại dòng"
                  }
            ]
      },
      {
            "id": "q-practice-4-camera-8",
            "type": "single_choice",
            "prompt": "Để triệt tiêu hoàn toàn hiện tượng cấp nguồn ký sinh (Phantom Powering) từ bus sang Camera OV2640 khi tắt camera, giải pháp tối ưu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tăng giá trị của các điện trở kéo lên trên bus giao tiếp"
                  },
                  {
                        "id": "B",
                        "text": "Chỉ thực hiện ngắt đường mass chung của khối module camera"
                  },
                  {
                        "id": "C",
                        "text": "Ngắt đồng thời cả đường cấp nguồn VCC và các đường bus tín hiệu"
                  },
                  {
                        "id": "D",
                        "text": "Ngắt toàn bộ hệ thống nguồn điện của vệ tinh trên quỹ đạo"
                  }
            ]
      }
]),
      doc('doc-4-6', 'Câu hỏi kiểm tra Doc 4.6', 'Chu trình lấy mẫu tuần tự đa cảm biến, cấu trúc gói viễn trắc hợp nhất (Unified Struct) và cách chọn chu kỳ lấy mẫu theo hằng số thời gian vật lý.', [
      {
            "id": "q-doc-4-6-1",
            "type": "single_choice",
            "prompt": "Trong cấu trúc tổng thể của vệ tinh nhân tạo, phân hệ Tải trọng (Payload) đóng vai trò chiến lược nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển góc quay của tấm pin mặt trời"
                  },
                  {
                        "id": "B",
                        "text": "Cung cấp nguồn điện cho các tải tiêu thụ"
                  },
                  {
                        "id": "C",
                        "text": "Hạ cánh vệ tinh an toàn trở về Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Thực hiện mục tiêu khoa học công nghệ của sứ mệnh"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-2",
            "type": "single_choice",
            "prompt": "Dải đo áp suất khí quyển làm việc danh định của cảm biến BMP280 là trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 hPa đến 100 hPa"
                  },
                  {
                        "id": "B",
                        "text": "1500 hPa đến 3000 hPa"
                  },
                  {
                        "id": "C",
                        "text": "300 hPa đến 1100 hPa"
                  },
                  {
                        "id": "D",
                        "text": "5000 hPa đến 10000 hPa"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-3",
            "type": "single_choice",
            "prompt": "Nguyên lý hoạt động của gia tốc kế MEMS bên trong MPU6500 dựa trên hiện tượng cơ học nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biến dạng cơ học của cột chất lỏng vi lưu"
                  },
                  {
                        "id": "B",
                        "text": "Khúc xạ chùm tia sáng qua lăng kính quang học"
                  },
                  {
                        "id": "C",
                        "text": "Hiện tượng phóng hồ quang giữa các cực vi cơ"
                  },
                  {
                        "id": "D",
                        "text": "Biến đổi điện dung khi khối lượng thử dịch chuyển"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-4",
            "type": "single_choice",
            "prompt": "Trong công thức bộ lọc bù $\\theta = \\alpha \\times (\\theta + \\omega \\cdot \\Delta t) + (1 - \\alpha) \\times \\theta_{acc}$, ý nghĩa của hệ số $\\alpha = 0.98$ là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thời gian lọc kéo dài liên tục trong 98 chu kỳ"
                  },
                  {
                        "id": "B",
                        "text": "Dành 98% trọng số tin cậy cho số liệu gia tốc kế"
                  },
                  {
                        "id": "C",
                        "text": "Góc ước lượng bị trôi dạt 98% sau mỗi giây lấy mẫu"
                  },
                  {
                        "id": "D",
                        "text": "Dành 98% trọng số cho con quay và 2% cho gia tốc kế"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'DOP' (Dilution of Precision - Độ pha loãng độ chính xác) trong định vị vệ tinh GNSS phản ánh yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khả năng thu sóng đa hướng không cần ngắm chuẩn"
                  },
                  {
                        "id": "B",
                        "text": "Tích hợp sẵn bộ khuếch đại LNA và cần cấp nguồn DC"
                  },
                  {
                        "id": "C",
                        "text": "Khả năng bắt sóng mạnh hơn ăng-ten chủ động"
                  },
                  {
                        "id": "D",
                        "text": "Chế tạo bằng vật liệu vàng nguyên chất dẫn điện"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Cold Start' (Khởi động lạnh) của máy thu GNSS L76X xảy ra trong điều kiện nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi nhiệt độ môi trường phòng lab hạ dưới 0 độ C"
                  },
                  {
                        "id": "B",
                        "text": "Khi bề mặt ăng-ten bị bao phủ hoàn toàn bởi băng tuyết"
                  },
                  {
                        "id": "C",
                        "text": "Khi nguồn điện cung cấp bị suy giảm đột ngột"
                  },
                  {
                        "id": "D",
                        "text": "Khi mất toàn bộ lịch thiên văn, thời gian và vị trí"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-7",
            "type": "single_choice",
            "prompt": "Giải pháp sử dụng vi mạch chuyển mạch tương tự 74HC4066 trong phân hệ Payload của CubeSat nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cho phép vi điều khiển OBC chia sẻ luân phiên một cổng giao tiếp phần cứng (UART2) giữa hai thiết bị là Module Định Vị GNSS/GPS và Camera Chụp Ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Tăng gấp 4 lần điện áp cấp nguồn cho cảm biến camera"
                  },
                  {
                        "id": "C",
                        "text": "Chuyển đổi tín hiệu số từ camera thành tín hiệu quang học phát trực tiếp vào không gian"
                  },
                  {
                        "id": "D",
                        "text": "Tự động giải mã chuỗi NMEA từ cảm biến GPS thành hình ảnh"
                  }
            ]
      },
      {
            "id": "q-doc-4-6-8",
            "type": "single_choice",
            "prompt": "Vi mạch 74HC4066 bao gồm bao nhiêu khóa chuyển mạch tương tự (Bilateral Analog Switches) độc lập bên trong một vỏ chip?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ gồm 1 khóa đơn duy nhất bên trong vỏ chip"
                  },
                  {
                        "id": "B",
                        "text": "Gồm 16 khóa chuyển mạch tốc độ cao độc lập"
                  },
                  {
                        "id": "C",
                        "text": "Gồm 4 khóa chuyển mạch tương tự hai chiều độc lập"
                  },
                  {
                        "id": "D",
                        "text": "Gồm 8 khóa chuyển mạch logic một chiều có chốt"
                  }
            ]
      }
]),
      practice('practice-4-all-sensors', 'Câu hỏi kiểm tra Thực hành Đa Cảm Biến', 'Gom cấu trúc struct TelemetryPacket, gắn dấu thời gian millis(), đọc tuần tự BMP280, MPU6500, GPS và in bảng Serial.',
        ['Lab4-05_Read_All_Sensors'], [
      {
            "id": "q-practice-4-all-sensors-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc lập trình lấy mẫu đa cảm biến không phong bế (Non-blocking Multi-rate Polling), cấu trúc C++ chuẩn là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Quản lý các mốc thời gian millis() riêng biệt cho từng loại cảm biến"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng các lệnh delay() nối tiếp xen kẽ giữa các lần đọc cảm biến"
                  },
                  {
                        "id": "C",
                        "text": "Chạy nhiều vòng lặp while lồng nhau với điều kiện cờ báo hoàn thành"
                  },
                  {
                        "id": "D",
                        "text": "Đưa vi điều khiển vào chế độ ngủ sâu giữa các lần đọc dữ liệu"
                  }
            ]
      }
]),
      doc('doc-4-7', 'Câu hỏi kiểm tra Doc 4.7', 'Khóa chuyển mạch tương tự 4 kênh 74HC4066, nguyên tắc chuyển mạch Break-Before-Make và giải pháp dồn kênh UART giữa Camera và GNSS.', [
      {
            "id": "q-doc-4-7-1",
            "type": "single_choice",
            "prompt": "Trong cấu trúc tổng thể của vệ tinh nhân tạo, phân hệ Tải trọng (Payload) đóng vai trò chiến lược nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển góc quay của tấm pin mặt trời"
                  },
                  {
                        "id": "B",
                        "text": "Cung cấp nguồn điện cho các tải tiêu thụ"
                  },
                  {
                        "id": "C",
                        "text": "Hạ cánh vệ tinh an toàn trở về Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Thực hiện mục tiêu khoa học công nghệ của sứ mệnh"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-2",
            "type": "single_choice",
            "prompt": "Cảm biến khí áp và nhiệt độ kỹ thuật số BMP280 của Bosch Sensortec đo lường áp suất môi trường dựa trên hiệu ứng vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hiệu ứng nhiệt điện Seebeck trên tiếp giáp bán dẫn"
                  },
                  {
                        "id": "B",
                        "text": "Hiệu ứng áp điện trở trên màng bán dẫn Silicon"
                  },
                  {
                        "id": "C",
                        "text": "Hiệu ứng cảm ứng điện từ Faraday trong từ trường"
                  },
                  {
                        "id": "D",
                        "text": "Hiệu ứng quang điện trong khối vật liệu nhạy sáng"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-3",
            "type": "single_choice",
            "prompt": "Dải đo áp suất khí quyển làm việc danh định của cảm biến BMP280 là trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 hPa đến 100 hPa"
                  },
                  {
                        "id": "B",
                        "text": "1500 hPa đến 3000 hPa"
                  },
                  {
                        "id": "C",
                        "text": "300 hPa đến 1100 hPa"
                  },
                  {
                        "id": "D",
                        "text": "5000 hPa đến 10000 hPa"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-4",
            "type": "single_choice",
            "prompt": "Công thức khí áp chuẩn (Barometric Formula) dùng để tính toán cao độ tương đối $h$ từ áp suất đo được $P$ và áp suất mực nước biển $P_0$ là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "$h = 44330 \\times (1 - P / P_0)$"
                  },
                  {
                        "id": "B",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^2]$"
                  },
                  {
                        "id": "C",
                        "text": "$h = 44330 \\times (P_0 / P - 1)$"
                  },
                  {
                        "id": "D",
                        "text": "$h = 44330 \\times [1 - (P / P_0)^{0.1903}]$"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-5",
            "type": "single_choice",
            "prompt": "Tại sao trên chip cảm biến BMP280, nhà sản xuất bắt buộc phải tích hợp sẵn một cảm biến nhiệt độ bên cạnh cảm biến áp suất?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để làm nóng màng cảm biến khí áp khi hoạt động"
                  },
                  {
                        "id": "B",
                        "text": "Để đo nhiệt độ bề mặt của các tấm pin Mặt Trời"
                  },
                  {
                        "id": "C",
                        "text": "Để phân biệt trạng thái ngày và đêm trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Để bù trừ sai số nhiệt độ phi tuyến cho phép đo áp"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-6",
            "type": "single_choice",
            "prompt": "Tập hợp các tham số hiệu chuẩn (Calibration / Trim Parameters) của BMP280 (gồm $T_1 - T_3$ và $P_1 - P_9$) được lưu trữ ở đâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Trong bộ nhớ RAM tĩnh của máy tính nhúng trung tâm"
                  },
                  {
                        "id": "B",
                        "text": "Trong bộ nhớ ROM/OTP nội bộ bên trong chip BMP280"
                  },
                  {
                        "id": "C",
                        "text": "Trên phân vùng lưu trữ của thẻ nhớ MicroSD ngoài"
                  },
                  {
                        "id": "D",
                        "text": "Trong vùng nhớ thanh ghi cấu hình tạm thời của chip"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-7",
            "type": "single_choice",
            "prompt": "Cảm biến quán tính MEMS 6 trục MPU6500 bao gồm những khối chức năng đo lường vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3 trục gia tốc kế và 3 trục con quay hồi chuyển"
                  },
                  {
                        "id": "B",
                        "text": "3 trục áp suất khí quyển và 3 trục độ ẩm tương đối"
                  },
                  {
                        "id": "C",
                        "text": "6 trục cảm biến nhiệt độ tiếp giáp bán dẫn nội bộ"
                  },
                  {
                        "id": "D",
                        "text": "3 trục từ kế đo từ trường và 3 trục cảm biến quang"
                  }
            ]
      },
      {
            "id": "q-doc-4-7-8",
            "type": "single_choice",
            "prompt": "Nguyên lý hoạt động của gia tốc kế MEMS bên trong MPU6500 dựa trên hiện tượng cơ học nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biến dạng cơ học của cột chất lỏng vi lưu"
                  },
                  {
                        "id": "B",
                        "text": "Khúc xạ chùm tia sáng qua lăng kính quang học"
                  },
                  {
                        "id": "C",
                        "text": "Hiện tượng phóng hồ quang giữa các cực vi cơ"
                  },
                  {
                        "id": "D",
                        "text": "Biến đổi điện dung khi khối lượng thử dịch chuyển"
                  }
            ]
      }
]),
      practice('practice-4-mux', 'Câu hỏi kiểm tra Thực hành Multiplexer', 'Khối code điều khiển chân chọn kênh: ngắt Camera, chờ 10ms, bật GPS để đọc tọa độ; chụp ảnh xong trả lại kênh GPS.',
        ['Lab4-06_Camera_Multiplexer'], [
      {
            "id": "q-practice-4-mux-1",
            "type": "single_choice",
            "prompt": "Trong cấu trúc tổng thể của vệ tinh nhân tạo, phân hệ Tải trọng (Payload) đóng vai trò chiến lược nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điều khiển góc quay của tấm pin mặt trời"
                  },
                  {
                        "id": "B",
                        "text": "Cung cấp nguồn điện cho các tải tiêu thụ"
                  },
                  {
                        "id": "C",
                        "text": "Hạ cánh vệ tinh an toàn trở về Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Thực hiện mục tiêu khoa học công nghệ của sứ mệnh"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-2",
            "type": "single_choice",
            "prompt": "Dải đo áp suất khí quyển làm việc danh định của cảm biến BMP280 là trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 hPa đến 100 hPa"
                  },
                  {
                        "id": "B",
                        "text": "1500 hPa đến 3000 hPa"
                  },
                  {
                        "id": "C",
                        "text": "300 hPa đến 1100 hPa"
                  },
                  {
                        "id": "D",
                        "text": "5000 hPa đến 10000 hPa"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-3",
            "type": "single_choice",
            "prompt": "Nguyên lý hoạt động của gia tốc kế MEMS bên trong MPU6500 dựa trên hiện tượng cơ học nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biến dạng cơ học của cột chất lỏng vi lưu"
                  },
                  {
                        "id": "B",
                        "text": "Khúc xạ chùm tia sáng qua lăng kính quang học"
                  },
                  {
                        "id": "C",
                        "text": "Hiện tượng phóng hồ quang giữa các cực vi cơ"
                  },
                  {
                        "id": "D",
                        "text": "Biến đổi điện dung khi khối lượng thử dịch chuyển"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-4",
            "type": "single_choice",
            "prompt": "Trong công thức bộ lọc bù $\\theta = \\alpha \\times (\\theta + \\omega \\cdot \\Delta t) + (1 - \\alpha) \\times \\theta_{acc}$, ý nghĩa của hệ số $\\alpha = 0.98$ là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thời gian lọc kéo dài liên tục trong 98 chu kỳ"
                  },
                  {
                        "id": "B",
                        "text": "Dành 98% trọng số tin cậy cho số liệu gia tốc kế"
                  },
                  {
                        "id": "C",
                        "text": "Góc ước lượng bị trôi dạt 98% sau mỗi giây lấy mẫu"
                  },
                  {
                        "id": "D",
                        "text": "Dành 98% trọng số cho con quay và 2% cho gia tốc kế"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'DOP' (Dilution of Precision - Độ pha loãng độ chính xác) trong định vị vệ tinh GNSS phản ánh yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khả năng thu sóng đa hướng không cần ngắm chuẩn"
                  },
                  {
                        "id": "B",
                        "text": "Tích hợp sẵn bộ khuếch đại LNA và cần cấp nguồn DC"
                  },
                  {
                        "id": "C",
                        "text": "Khả năng bắt sóng mạnh hơn ăng-ten chủ động"
                  },
                  {
                        "id": "D",
                        "text": "Chế tạo bằng vật liệu vàng nguyên chất dẫn điện"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-6",
            "type": "single_choice",
            "prompt": "Khái niệm 'Cold Start' (Khởi động lạnh) của máy thu GNSS L76X xảy ra trong điều kiện nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi nhiệt độ môi trường phòng lab hạ dưới 0 độ C"
                  },
                  {
                        "id": "B",
                        "text": "Khi bề mặt ăng-ten bị bao phủ hoàn toàn bởi băng tuyết"
                  },
                  {
                        "id": "C",
                        "text": "Khi nguồn điện cung cấp bị suy giảm đột ngột"
                  },
                  {
                        "id": "D",
                        "text": "Khi mất toàn bộ lịch thiên văn, thời gian và vị trí"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-7",
            "type": "single_choice",
            "prompt": "Giải pháp sử dụng vi mạch chuyển mạch tương tự 74HC4066 trong phân hệ Payload của CubeSat nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cho phép vi điều khiển OBC chia sẻ luân phiên một cổng giao tiếp phần cứng (UART2) giữa hai thiết bị là Module Định Vị GNSS/GPS và Camera Chụp Ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Tăng gấp 4 lần điện áp cấp nguồn cho cảm biến camera"
                  },
                  {
                        "id": "C",
                        "text": "Chuyển đổi tín hiệu số từ camera thành tín hiệu quang học phát trực tiếp vào không gian"
                  },
                  {
                        "id": "D",
                        "text": "Tự động giải mã chuỗi NMEA từ cảm biến GPS thành hình ảnh"
                  }
            ]
      },
      {
            "id": "q-practice-4-mux-8",
            "type": "single_choice",
            "prompt": "Vi mạch 74HC4066 bao gồm bao nhiêu khóa chuyển mạch tương tự (Bilateral Analog Switches) độc lập bên trong một vỏ chip?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ gồm 1 khóa đơn duy nhất bên trong vỏ chip"
                  },
                  {
                        "id": "B",
                        "text": "Gồm 16 khóa chuyển mạch tốc độ cao độc lập"
                  },
                  {
                        "id": "C",
                        "text": "Gồm 4 khóa chuyển mạch tương tự hai chiều độc lập"
                  },
                  {
                        "id": "D",
                        "text": "Gồm 8 khóa chuyển mạch logic một chiều có chốt"
                  }
            ]
      }
]),
    ],
  },
  5: {
    summary: 'Thiết lập tuyến liên lạc không gian hai chiều tin cậy cao giữa vệ tinh và trạm mặt đất.',
    checkpoints: [
      doc('doc-5-1', 'Câu hỏi kiểm tra Doc 5.1', 'Băng tần UHF 433 MHz, phương trình suy hao Friis FSPL, cân bằng tuyến (Link Budget), dự trữ phai (Fade Margin) và độ dịch tần Doppler (±9.5 kHz).', [
      {
            "id": "q-doc-5-1-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc của một vệ tinh CubeSat, phân hệ Truyền thông (COM) đảm nhận vai trò cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Duy trì liên lạc vô tuyến hai chiều giữa vệ tinh và trạm"
                  },
                  {
                        "id": "B",
                        "text": "Chuyển hóa quang năng Mặt Trời thành điện năng nguồn"
                  },
                  {
                        "id": "C",
                        "text": "Kiểm soát nhiệt độ vệ tinh không bị đóng băng trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Tạo lực đẩy cơ học để hiệu chỉnh và nâng cao quỹ đạo bay"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-2",
            "type": "single_choice",
            "prompt": "Khái niệm 'Đường lên' (Uplink) trong kỹ thuật thông tin vệ tinh được định nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tuyến truyền sóng vô tuyến từ vệ tinh xuống mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Tuyến sóng vô tuyến từ trạm mặt đất gửi lên vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Dòng điện cung cấp từ bộ pin thứ cấp lên các bo mạch"
                  },
                  {
                        "id": "D",
                        "text": "Tuyến liên lạc vô tuyến giữa các vệ tinh bay cùng biên đội"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-3",
            "type": "single_choice",
            "prompt": "Cơ quan chuyên trách quốc tế chịu trách nhiệm điều phối và phân bổ tần số vô tuyến cho tất cả các vệ tinh không gian là tổ chức nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ngân hàng Thế giới"
                  },
                  {
                        "id": "B",
                        "text": "Tổ chức Y tế Thế giới"
                  },
                  {
                        "id": "C",
                        "text": "Hiệp hội Hàng không Dân dụng"
                  },
                  {
                        "id": "D",
                        "text": "Liên minh Viễn thông Quốc tế"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-4",
            "type": "single_choice",
            "prompt": "Băng tần vô tuyến nghiệp dư UHF (Ultra High Frequency) thường được cấp phép cho các vệ tinh giáo dục CubeSat nằm trong dải tần số nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "430 MHz đến 440 MHz"
                  },
                  {
                        "id": "B",
                        "text": "144 MHz đến 148 MHz"
                  },
                  {
                        "id": "C",
                        "text": "10 GHz đến 12 GHz"
                  },
                  {
                        "id": "D",
                        "text": "2.4 GHz đến 2.5 GHz"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-5",
            "type": "single_choice",
            "prompt": "Băng tần VHF (Very High Frequency) dành cho liên lạc vệ tinh nghiệp dư nằm trong khoảng tần số nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1240 MHz đến 1300 MHz"
                  },
                  {
                        "id": "B",
                        "text": "430 MHz đến 440 MHz"
                  },
                  {
                        "id": "C",
                        "text": "144 MHz đến 146 MHz"
                  },
                  {
                        "id": "D",
                        "text": "26.9 MHz đến 27.4 MHz"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-6",
            "type": "single_choice",
            "prompt": "Băng tần vô tuyến S-band (khoảng 2.0 GHz đến 2.4 GHz) thường được trang bị trên các CubeSat nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Truyền đường xuống tốc độ cao cho ảnh và dữ liệu tải trọng"
                  },
                  {
                        "id": "B",
                        "text": "Cung cấp nguồn năng lượng điện thay thế các tấm pin"
                  },
                  {
                        "id": "C",
                        "text": "Xác định tọa độ vị trí của vệ tinh khi đi vào vùng tối"
                  },
                  {
                        "id": "D",
                        "text": "Đo nhiệt độ tiếp giáp của các phần tử chấn tử anten"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-7",
            "type": "single_choice",
            "prompt": "Định luật truyền sóng tự do Friis (Friis Transmission Equation) xác định công suất tín hiệu thu được ($P_r$) dựa trên các yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Công suất phát, độ lợi hai anten, bước sóng và khoảng cách"
                  },
                  {
                        "id": "B",
                        "text": "Chỉ phụ thuộc vào độ cao tương đối của trạm thu mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Tổng khối lượng vật lý của khung vỏ kết cấu vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Nhiệt độ nhiệt động học trung bình của tầng khí quyển"
                  }
            ]
      },
      {
            "id": "q-doc-5-1-8",
            "type": "single_choice",
            "prompt": "Suy hao đường truyền trong không gian tự do (Free-Space Path Loss - FSPL) là hiện tượng suy giảm công suất sóng do nguyên nhân vật lý nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Do sóng vô tuyến bị các hạt bụi trong vũ trụ hấp thụ"
                  },
                  {
                        "id": "B",
                        "text": "Do năng lượng sóng bị cản trở bởi các tầng mây dày"
                  },
                  {
                        "id": "C",
                        "text": "Do năng lượng sóng phát tán hình cầu khi khoảng cách tăng"
                  },
                  {
                        "id": "D",
                        "text": "Do ma sát cơ học với các phân tử khí quyển loãng"
                  }
            ]
      }
]),
      doc('doc-5-2', 'Câu hỏi kiểm tra Doc 5.2', 'Điều chế trải phổ Chirp CSS, hệ số trải phổ SF (7-12), băng thông BW, chân M0/M1/AUX và công suất phát 20 dBm (100 mW) của E32-433T20D.', [
      {
            "id": "q-doc-5-2-1",
            "type": "single_choice",
            "prompt": "Trong module vô tuyến thực hành LoRa Ebyte E32, vi mạch thu phát cao tần lõi được tích hợp bên trong là dòng vi mạch nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "ESP32"
                  },
                  {
                        "id": "B",
                        "text": "Semtech SX1278"
                  },
                  {
                        "id": "C",
                        "text": "Atmega328P"
                  },
                  {
                        "id": "D",
                        "text": "NE555"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-2",
            "type": "single_choice",
            "prompt": "Tần số sóng mang trung tâm mặc định của module thực hành Ebyte E32-433T20D là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "2.4 GHz"
                  },
                  {
                        "id": "B",
                        "text": "433 MHz"
                  },
                  {
                        "id": "C",
                        "text": "868 MHz"
                  },
                  {
                        "id": "D",
                        "text": "915 MHz"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-3",
            "type": "single_choice",
            "prompt": "Công suất phát bức xạ tối đa của module thực hành Ebyte E32-433T20D là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 Watt"
                  },
                  {
                        "id": "B",
                        "text": "1 mW"
                  },
                  {
                        "id": "C",
                        "text": "20 dBm"
                  },
                  {
                        "id": "D",
                        "text": "50 Watt"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-4",
            "type": "single_choice",
            "prompt": "Module Ebyte E32 giao tiếp với vi điều khiển OBC thông qua chuẩn giao diện phần cứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giao diện bus truyền thông nối tiếp I2C hai dây tốc độ chuẩn"
                  },
                  {
                        "id": "B",
                        "text": "Giao diện bus mạng vi sai điều khiển công nghiệp chuẩn CAN"
                  },
                  {
                        "id": "C",
                        "text": "Cổng nối tiếp UART bất đồng bộ ở mức điện áp logic TTL 3.3V"
                  },
                  {
                        "id": "D",
                        "text": "Giao tiếp nối tiếp đồng bộ 4 dây theo chuẩn công nghiệp SPI"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-5",
            "type": "single_choice",
            "prompt": "Hai chân cấu hình chế độ hoạt động `M0` và `M1` trên module E32 cho phép thiết lập bao nhiêu chế độ vận hành?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hỗ trợ thiết lập tối đa 8 chế độ hoạt động chuyên biệt khác nhau"
                  },
                  {
                        "id": "B",
                        "text": "Cấu hình được tới 16 trạng thái vận hành độc lập trên bo mạch"
                  },
                  {
                        "id": "C",
                        "text": "4 chế độ: Normal, Wake-up, Power-saving và Sleep/Program"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ cho phép chuyển đổi qua lại giữa đúng 2 chế độ cơ bản"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-6",
            "type": "single_choice",
            "prompt": "Khi cả hai chân `M0 = 0` và `M1 = 0` (đều ở mức logic LOW), module E32 hoạt động ở chế độ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chế độ ngủ sâu"
                  },
                  {
                        "id": "B",
                        "text": "Chế độ hoạt động bình thường"
                  },
                  {
                        "id": "C",
                        "text": "Chế độ cài đặt tham số"
                  },
                  {
                        "id": "D",
                        "text": "Chế độ tự hủy"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-7",
            "type": "single_choice",
            "prompt": "Khi cấu hình chân `M0 = 1` và `M1 = 1` (đều ở mức logic HIGH), module E32 chuyển sang chế độ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chế độ sạc pin"
                  },
                  {
                        "id": "B",
                        "text": "Chế độ chụp ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Chế độ phát công suất cực đại"
                  },
                  {
                        "id": "D",
                        "text": "Chế độ Sleep / Cấu hình"
                  }
            ]
      },
      {
            "id": "q-doc-5-2-8",
            "type": "single_choice",
            "prompt": "Chân tín hiệu chỉ thị `AUX` trên module Ebyte E32 có đặc điểm trạng thái hoạt động nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Liên tục phát ra tín hiệu xung nhịp đồng bộ tần số 100 MHz"
                  },
                  {
                        "id": "B",
                        "text": "Luôn duy trì cố định ở mức logic HIGH trong suốt quá trình chạy"
                  },
                  {
                        "id": "C",
                        "text": "Chân chuyên dụng dùng để cung cấp điện áp nguồn nuôi cho mạch"
                  },
                  {
                        "id": "D",
                        "text": "Mức HIGH khi rảnh rỗi sẵn sàng, chuyển LOW khi module đang bận"
                  }
            ]
      }
]),
      practice('practice-5-lora', 'Câu hỏi kiểm tra Thực hành LoRa E32', 'Khởi tạo UART1, kiểm tra chân AUX ở mức HIGH trước khi gửi, giải thuật truyền chuỗi viễn trắc định kỳ và xử lý bộ đệm nhận không đồng bộ.',
        ['Lab5-01a_Send_Telemetry_UART', 'Lab5-01b_Send_Telemetry_Library', 'Lab5-02a_Receive_Command_UART', 'Lab5-02b_Receive_Command_Library'], [
      {
            "id": "q-practice-5-lora-1",
            "type": "single_choice",
            "prompt": "Trong module vô tuyến thực hành LoRa Ebyte E32, vi mạch thu phát cao tần lõi được tích hợp bên trong là dòng vi mạch nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "ESP32"
                  },
                  {
                        "id": "B",
                        "text": "Semtech SX1278"
                  },
                  {
                        "id": "C",
                        "text": "Atmega328P"
                  },
                  {
                        "id": "D",
                        "text": "NE555"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-2",
            "type": "single_choice",
            "prompt": "Tần số sóng mang trung tâm mặc định của module thực hành Ebyte E32-433T20D là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "2.4 GHz"
                  },
                  {
                        "id": "B",
                        "text": "433 MHz"
                  },
                  {
                        "id": "C",
                        "text": "868 MHz"
                  },
                  {
                        "id": "D",
                        "text": "915 MHz"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-3",
            "type": "single_choice",
            "prompt": "Công suất phát bức xạ tối đa của module thực hành Ebyte E32-433T20D là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 Watt"
                  },
                  {
                        "id": "B",
                        "text": "1 mW"
                  },
                  {
                        "id": "C",
                        "text": "20 dBm"
                  },
                  {
                        "id": "D",
                        "text": "50 Watt"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-4",
            "type": "single_choice",
            "prompt": "Module Ebyte E32 giao tiếp với vi điều khiển OBC thông qua chuẩn giao diện phần cứng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giao diện bus truyền thông nối tiếp I2C hai dây tốc độ chuẩn"
                  },
                  {
                        "id": "B",
                        "text": "Giao diện bus mạng vi sai điều khiển công nghiệp chuẩn CAN"
                  },
                  {
                        "id": "C",
                        "text": "Cổng nối tiếp UART bất đồng bộ ở mức điện áp logic TTL 3.3V"
                  },
                  {
                        "id": "D",
                        "text": "Giao tiếp nối tiếp đồng bộ 4 dây theo chuẩn công nghiệp SPI"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-5",
            "type": "single_choice",
            "prompt": "Hai chân cấu hình chế độ hoạt động `M0` và `M1` trên module E32 cho phép thiết lập bao nhiêu chế độ vận hành?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hỗ trợ thiết lập tối đa 8 chế độ hoạt động chuyên biệt khác nhau"
                  },
                  {
                        "id": "B",
                        "text": "Cấu hình được tới 16 trạng thái vận hành độc lập trên bo mạch"
                  },
                  {
                        "id": "C",
                        "text": "4 chế độ: Normal, Wake-up, Power-saving và Sleep/Program"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ cho phép chuyển đổi qua lại giữa đúng 2 chế độ cơ bản"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-6",
            "type": "single_choice",
            "prompt": "Khi cả hai chân `M0 = 0` và `M1 = 0` (đều ở mức logic LOW), module E32 hoạt động ở chế độ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chế độ ngủ sâu"
                  },
                  {
                        "id": "B",
                        "text": "Chế độ hoạt động bình thường"
                  },
                  {
                        "id": "C",
                        "text": "Chế độ cài đặt tham số"
                  },
                  {
                        "id": "D",
                        "text": "Chế độ tự hủy"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-7",
            "type": "single_choice",
            "prompt": "Khi cấu hình chân `M0 = 1` và `M1 = 1` (đều ở mức logic HIGH), module E32 chuyển sang chế độ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chế độ sạc pin"
                  },
                  {
                        "id": "B",
                        "text": "Chế độ chụp ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Chế độ phát công suất cực đại"
                  },
                  {
                        "id": "D",
                        "text": "Chế độ Sleep / Cấu hình"
                  }
            ]
      },
      {
            "id": "q-practice-5-lora-8",
            "type": "single_choice",
            "prompt": "Chân tín hiệu chỉ thị `AUX` trên module Ebyte E32 có đặc điểm trạng thái hoạt động nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Liên tục phát ra tín hiệu xung nhịp đồng bộ tần số 100 MHz"
                  },
                  {
                        "id": "B",
                        "text": "Luôn duy trì cố định ở mức logic HIGH trong suốt quá trình chạy"
                  },
                  {
                        "id": "C",
                        "text": "Chân chuyên dụng dùng để cung cấp điện áp nguồn nuôi cho mạch"
                  },
                  {
                        "id": "D",
                        "text": "Mức HIGH khi rảnh rỗi sẵn sàng, chuyển LOW khi module đang bận"
                  }
            ]
      }
]),
      doc('doc-5-3', 'Câu hỏi kiểm tra Doc 5.3', 'Cấu trúc khung viễn trắc (Header, Payload, CRC), đa thức CRC-16-CCITT (0x1021), cơ chế sửa sai ARQ Stop-and-Wait và mô hình trạm mặt đất Web.', [
      {
            "id": "q-doc-5-3-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Đường xuống' (Downlink) trong kỹ thuật thông tin vệ tinh là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tuyến truyền sóng vô tuyến từ vệ tinh xuống mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Tín hiệu truyền dữ liệu số qua cáp giao tiếp USB"
                  },
                  {
                        "id": "C",
                        "text": "Dòng điện xả từ bộ pin thứ cấp vào các tải tiêu thụ"
                  },
                  {
                        "id": "D",
                        "text": "Sóng vô tuyến phản xạ ngược từ bề mặt của đại dương"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-2",
            "type": "single_choice",
            "prompt": "Một vệ tinh phát sóng ở băng tần UHF 435 MHz bay ở quỹ đạo cách trạm mặt đất 1000 km, suy hao FSPL xấp xỉ khoảng:",
            "choices": [
                  {
                        "id": "A",
                        "text": "85 dB"
                  },
                  {
                        "id": "B",
                        "text": "145 dB"
                  },
                  {
                        "id": "C",
                        "text": "195 dB"
                  },
                  {
                        "id": "D",
                        "text": "250 dB"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-3",
            "type": "single_choice",
            "prompt": "Nếu trạm mặt đất không có cơ chế điều chỉnh bù sai lệch tần số Doppler (Doppler Tracking / AFC), hậu quả đối với việc thu nhận dữ liệu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bổ sung các tấm chắn bức xạ nhiệt xung quanh module thu"
                  },
                  {
                        "id": "B",
                        "text": "Phần mềm tự động dịch tần số thu phát bù theo Doppler"
                  },
                  {
                        "id": "C",
                        "text": "Tăng công suất phát sóng của vệ tinh lên mức tối đa"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng anten thu có độ rộng búp sóng cực kỳ hẹp"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-4",
            "type": "single_choice",
            "prompt": "Trường 'Từ đồng bộ' (Sync Word / Preamble Delimiter) trong khung truyền vô tuyến đóng vai trò gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa toàn bộ các gói tin đang chờ trong hàng đợi phát"
                  },
                  {
                        "id": "B",
                        "text": "Báo hiệu chính xác điểm bắt đầu của dữ liệu tải trọng"
                  },
                  {
                        "id": "C",
                        "text": "Đo điện áp và nhiệt độ của khối máy tính nhúng OBC"
                  },
                  {
                        "id": "D",
                        "text": "Nâng cao độ nhạy thu của khối tiền khuếch đại LNA"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-5",
            "type": "single_choice",
            "prompt": "Mã kiểm tra dư thừa tuần hoàn (CRC) đặt ở cuối khung truyền vô tuyến có vai trò sống còn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phát hiện bit sai do nhiễu để chấp nhận hoặc hủy gói tin"
                  },
                  {
                        "id": "B",
                        "text": "Nén kích thước dữ liệu để tiết kiệm băng thông truyền"
                  },
                  {
                        "id": "C",
                        "text": "Mã hóa bảo mật luồng thông tin chống bị nghe lén trộm"
                  },
                  {
                        "id": "D",
                        "text": "Tăng cường công suất bức xạ điện từ ra ngoài không gian"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-6",
            "type": "single_choice",
            "prompt": "Giao thức kiểm soát luồng và sửa lỗi 'Dừng và Chờ' (Stop-and-Wait ARQ) hoạt động theo nguyên tắc nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bên thu chủ động truyền dữ liệu trước cho bên phát nhận"
                  },
                  {
                        "id": "B",
                        "text": "Cả hai bên cùng đồng thời truyền dữ liệu lên đường truyền"
                  },
                  {
                        "id": "C",
                        "text": "Bên phát gửi liên tục mà không cần quan tâm phản hồi"
                  },
                  {
                        "id": "D",
                        "text": "Gửi từng gói và chờ ACK từ bên thu trước khi gửi tiếp"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-7",
            "type": "single_choice",
            "prompt": "Tín hiệu phản hồi 'ACK' (Acknowledgment Packet) trong giao thức ARQ mang ý nghĩa gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Yêu cầu ngắt kết nối phiên liên lạc vô tuyến hiện tại"
                  },
                  {
                        "id": "B",
                        "text": "Báo gói tin nhận vẹn toàn, sẵn sàng nhận gói tiếp theo"
                  },
                  {
                        "id": "C",
                        "text": "Cảnh báo nguồn năng lượng pin tại trạm mặt đất bị yếu"
                  },
                  {
                        "id": "D",
                        "text": "Thông báo gói tin bị lỗi dữ liệu và yêu cầu truyền lại"
                  }
            ]
      },
      {
            "id": "q-doc-5-3-8",
            "type": "single_choice",
            "prompt": "Khoảng thời gian chờ phản hồi tối đa (ARQ Timeout) trong giao thức Stop-and-Wait được thiết lập nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để xả bớt lượng điện tích dư thừa tích lũy trong pin"
                  },
                  {
                        "id": "B",
                        "text": "Tránh treo bên phát nếu gói tin hoặc gói ACK bị thất lạc"
                  },
                  {
                        "id": "C",
                        "text": "Để nâng cao tốc độ truyền tải trên kênh thông tin số"
                  },
                  {
                        "id": "D",
                        "text": "Để tắt máy tính nhúng sau khi hoàn tất phiên truyền dữ liệu"
                  }
            ]
      }
]),
      practice('practice-5-ground', 'Câu hỏi kiểm tra Thực hành Trạm Mặt Đất', 'Đóng gói chuỗi JSON/CSV kèm mã CRC16, phát qua LoRa, phía thu kiểm tra CRC, tách trường dữ liệu và chuyển tiếp lên Dashboard LMS.',
        ['Lab5-03_Satellite_Comm_System'], [
      {
            "id": "q-practice-5-ground-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Đường xuống' (Downlink) trong kỹ thuật thông tin vệ tinh là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tuyến truyền sóng vô tuyến từ vệ tinh xuống mặt đất"
                  },
                  {
                        "id": "B",
                        "text": "Tín hiệu truyền dữ liệu số qua cáp giao tiếp USB"
                  },
                  {
                        "id": "C",
                        "text": "Dòng điện xả từ bộ pin thứ cấp vào các tải tiêu thụ"
                  },
                  {
                        "id": "D",
                        "text": "Sóng vô tuyến phản xạ ngược từ bề mặt của đại dương"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-2",
            "type": "single_choice",
            "prompt": "Một vệ tinh phát sóng ở băng tần UHF 435 MHz bay ở quỹ đạo cách trạm mặt đất 1000 km, suy hao FSPL xấp xỉ khoảng:",
            "choices": [
                  {
                        "id": "A",
                        "text": "85 dB"
                  },
                  {
                        "id": "B",
                        "text": "145 dB"
                  },
                  {
                        "id": "C",
                        "text": "195 dB"
                  },
                  {
                        "id": "D",
                        "text": "250 dB"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-3",
            "type": "single_choice",
            "prompt": "Nếu trạm mặt đất không có cơ chế điều chỉnh bù sai lệch tần số Doppler (Doppler Tracking / AFC), hậu quả đối với việc thu nhận dữ liệu là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bổ sung các tấm chắn bức xạ nhiệt xung quanh module thu"
                  },
                  {
                        "id": "B",
                        "text": "Phần mềm tự động dịch tần số thu phát bù theo Doppler"
                  },
                  {
                        "id": "C",
                        "text": "Tăng công suất phát sóng của vệ tinh lên mức tối đa"
                  },
                  {
                        "id": "D",
                        "text": "Sử dụng anten thu có độ rộng búp sóng cực kỳ hẹp"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-4",
            "type": "single_choice",
            "prompt": "Trường 'Từ đồng bộ' (Sync Word / Preamble Delimiter) trong khung truyền vô tuyến đóng vai trò gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xóa toàn bộ các gói tin đang chờ trong hàng đợi phát"
                  },
                  {
                        "id": "B",
                        "text": "Báo hiệu chính xác điểm bắt đầu của dữ liệu tải trọng"
                  },
                  {
                        "id": "C",
                        "text": "Đo điện áp và nhiệt độ của khối máy tính nhúng OBC"
                  },
                  {
                        "id": "D",
                        "text": "Nâng cao độ nhạy thu của khối tiền khuếch đại LNA"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-5",
            "type": "single_choice",
            "prompt": "Mã kiểm tra dư thừa tuần hoàn (CRC) đặt ở cuối khung truyền vô tuyến có vai trò sống còn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phát hiện bit sai do nhiễu để chấp nhận hoặc hủy gói tin"
                  },
                  {
                        "id": "B",
                        "text": "Nén kích thước dữ liệu để tiết kiệm băng thông truyền"
                  },
                  {
                        "id": "C",
                        "text": "Mã hóa bảo mật luồng thông tin chống bị nghe lén trộm"
                  },
                  {
                        "id": "D",
                        "text": "Tăng cường công suất bức xạ điện từ ra ngoài không gian"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-6",
            "type": "single_choice",
            "prompt": "Giao thức kiểm soát luồng và sửa lỗi 'Dừng và Chờ' (Stop-and-Wait ARQ) hoạt động theo nguyên tắc nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bên thu chủ động truyền dữ liệu trước cho bên phát nhận"
                  },
                  {
                        "id": "B",
                        "text": "Cả hai bên cùng đồng thời truyền dữ liệu lên đường truyền"
                  },
                  {
                        "id": "C",
                        "text": "Bên phát gửi liên tục mà không cần quan tâm phản hồi"
                  },
                  {
                        "id": "D",
                        "text": "Gửi từng gói và chờ ACK từ bên thu trước khi gửi tiếp"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-7",
            "type": "single_choice",
            "prompt": "Tín hiệu phản hồi 'ACK' (Acknowledgment Packet) trong giao thức ARQ mang ý nghĩa gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Yêu cầu ngắt kết nối phiên liên lạc vô tuyến hiện tại"
                  },
                  {
                        "id": "B",
                        "text": "Báo gói tin nhận vẹn toàn, sẵn sàng nhận gói tiếp theo"
                  },
                  {
                        "id": "C",
                        "text": "Cảnh báo nguồn năng lượng pin tại trạm mặt đất bị yếu"
                  },
                  {
                        "id": "D",
                        "text": "Thông báo gói tin bị lỗi dữ liệu và yêu cầu truyền lại"
                  }
            ]
      },
      {
            "id": "q-practice-5-ground-8",
            "type": "single_choice",
            "prompt": "Khoảng thời gian chờ phản hồi tối đa (ARQ Timeout) trong giao thức Stop-and-Wait được thiết lập nhằm mục đích gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để xả bớt lượng điện tích dư thừa tích lũy trong pin"
                  },
                  {
                        "id": "B",
                        "text": "Tránh treo bên phát nếu gói tin hoặc gói ACK bị thất lạc"
                  },
                  {
                        "id": "C",
                        "text": "Để nâng cao tốc độ truyền tải trên kênh thông tin số"
                  },
                  {
                        "id": "D",
                        "text": "Để tắt máy tính nhúng sau khi hoàn tất phiên truyền dữ liệu"
                  }
            ]
      }
]),
    ],
  },
  6: {
    summary: 'Làm chủ các quy chuẩn cơ khí hàng không vũ trụ và hoàn thiện lắp ráp cấu trúc CubeSat 1U.',
    checkpoints: [
      doc('doc-6-1', 'Câu hỏi kiểm tra Doc 6.1', 'Vai trò chịu tải cơ học, tản nhiệt dẫn truyền, che chắn bức xạ, tiếp địa đẳng thế và chống hàn nguội trong chân không.', [
      {
            "id": "q-doc-6-1-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc tổng thể của vệ tinh CubeSat, phân hệ Cấu trúc Cơ khí (Structure) đảm nhận vai trò nền tảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xử lý các thuật toán điều khiển của hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Tạo ra nguồn điện năng cho toàn bộ vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Phát sóng viễn thông truyền dữ liệu về đất"
                  },
                  {
                        "id": "D",
                        "text": "Khung chịu lực, định vị và bảo vệ các phân hệ"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-2",
            "type": "single_choice",
            "prompt": "Tác động hỗ trợ trực tiếp của khung cấu trúc kim loại đối với phân hệ Năng lượng (EPS) là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động kích hoạt chu trình sạc cho pin"
                  },
                  {
                        "id": "B",
                        "text": "Tăng mức điện áp nguồn pin lên gấp đôi"
                  },
                  {
                        "id": "C",
                        "text": "Biến đổi dòng xoay chiều thành một chiều"
                  },
                  {
                        "id": "D",
                        "text": "Bảo vệ cell pin và tản nhiệt cho mạch nguồn"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-3",
            "type": "single_choice",
            "prompt": "Tác động bảo vệ quan trọng của khung vỏ nhôm kín đối với máy tính trung tâm (OBC) và các mạch số là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chắn can nhiễu điện từ và giảm liều bức xạ"
                  },
                  {
                        "id": "B",
                        "text": "Tự động phát hiện và vá lỗi mã nguồn bay"
                  },
                  {
                        "id": "C",
                        "text": "Gia tăng xung nhịp hoạt động của vi xử lý"
                  },
                  {
                        "id": "D",
                        "text": "Lưu trữ dữ liệu thay cho bộ nhớ bán dẫn"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-4",
            "type": "single_choice",
            "prompt": "Khung cơ khí giữ vai trò quyết định nào đối với cụm cảm biến quán tính (IMU) và tải trọng quang học Camera?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động lấy nét cho thấu kính máy ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Cố định hệ tọa độ tránh lệch trục cảm biến"
                  },
                  {
                        "id": "C",
                        "text": "Làm mát chủ động cho cụm cảm biến nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp đường nguồn điện áp ổn định 5V"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-5",
            "type": "single_choice",
            "prompt": "Bộ phận nào trên khung cơ khí của CubeSat đóng vai trò là giao diện tiếp xúc cơ học trực tiếp với ống phóng P-POD của tên lửa đẩy?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bề mặt của các tấm pin quang điện ngoài"
                  },
                  {
                        "id": "B",
                        "text": "4 thanh ray nhẵn dọc theo 4 cạnh góc đứng"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống cáp nối tín hiệu giữa các bo"
                  },
                  {
                        "id": "D",
                        "text": "Cụm thấu kính quang học của máy ảnh bay"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-6",
            "type": "single_choice",
            "prompt": "Tải trọng gia tốc tĩnh cực đại (Static Quasi-steady Acceleration) mà khung cơ khí CubeSat phải chịu đựng trong giai đoạn phóng tên lửa thường đạt khoảng:",
            "choices": [
                  {
                        "id": "A",
                        "text": "1 g đến 2 g"
                  },
                  {
                        "id": "B",
                        "text": "80 g đến 100 g"
                  },
                  {
                        "id": "C",
                        "text": "8 g đến 15 g"
                  },
                  {
                        "id": "D",
                        "text": "0.1 g đến 0.5 g"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-7",
            "type": "single_choice",
            "prompt": "Môi trường dao động ngẫu nhiên (Random Vibration) tác động lên khung CubeSat trong lúc tên lửa vượt qua tầng khí quyển dày có dải tần số điển hình là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "100 kHz đến 500 kHz"
                  },
                  {
                        "id": "B",
                        "text": "20 Hz đến 2000 Hz"
                  },
                  {
                        "id": "C",
                        "text": "0.01 Hz đến 0.1 Hz"
                  },
                  {
                        "id": "D",
                        "text": "1 MHz đến 10 MHz"
                  }
            ]
      },
      {
            "id": "q-doc-6-1-8",
            "type": "single_choice",
            "prompt": "Tần số dao động riêng cơ bản thứ nhất (Fundamental Natural Frequency / First Resonance) của khung cơ khí CubeSat 1U bắt buộc phải thỏa mãn điều kiện nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Không cần quan tâm tần số dao động riêng"
                  },
                  {
                        "id": "B",
                        "text": "Tần số riêng càng thấp thì càng an toàn"
                  },
                  {
                        "id": "C",
                        "text": "Tần số riêng thứ nhất vượt ngưỡng quy định"
                  },
                  {
                        "id": "D",
                        "text": "Bắt buộc phải cố định chính xác tại 50 Hz"
                  }
            ]
      }
]),
      doc('doc-6-2', 'Câu hỏi kiểm tra Doc 6.2', 'Hợp kim nhôm hàng không Al 6061-T6, quy trình xử lý bề mặt Anodize cứng Type III cho ray trượt, lớp phủ Alodine tiếp địa và tiêu chuẩn thoát khí ASTM E595 (TML < 1%, CVCM < 0.1%).', [
      {
            "id": "q-doc-6-2-1",
            "type": "single_choice",
            "prompt": "Tiêu chuẩn thử nghiệm thoát khí trong chân không nhiệt ASTM E595 (Outgassing Test) đặt ra những giới hạn nghiêm ngặt nào đối với vật liệu không gian?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vật liệu phải phát ra ánh sáng huỳnh quang"
                  },
                  {
                        "id": "B",
                        "text": "TML ≤ 1.0% và lượng ngưng tụ CVCM ≤ 0.10%"
                  },
                  {
                        "id": "C",
                        "text": "Vật liệu phải hòa tan hoàn toàn trong nước"
                  },
                  {
                        "id": "D",
                        "text": "Khối lượng vật liệu càng nặng thì càng tốt"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-2",
            "type": "single_choice",
            "prompt": "Hậu quả nghiêm trọng của hiện tượng thoát khí (Outgassing) từ vật liệu kém chất lượng bên trong CubeSat là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hơi ngưng tụ bám màng bẩn lên kính và tấm pin"
                  },
                  {
                        "id": "B",
                        "text": "Vệ tinh bị suy giảm khối lượng nhanh chóng"
                  },
                  {
                        "id": "C",
                        "text": "Làm gia tăng độ bền cơ học của khung sườn"
                  },
                  {
                        "id": "D",
                        "text": "Giúp tấm pin Mặt Trời nạp điện nhanh hơn"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-3",
            "type": "single_choice",
            "prompt": "Hợp kim nhôm hàng không vũ trụ nào được sử dụng phổ biến nhất để gia công khung cấu trúc CubeSat 1U?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thép gang xám công nghiệp nặng thông dụng"
                  },
                  {
                        "id": "B",
                        "text": "Hợp kim nhôm Al 6061-T6 hoặc Al 7075-T6"
                  },
                  {
                        "id": "C",
                        "text": "Kim loại chì nguyên chất có khối lượng lớn"
                  },
                  {
                        "id": "D",
                        "text": "Nhôm đúc thông thường dùng trong gia dụng"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-4",
            "type": "single_choice",
            "prompt": "Hợp kim nhôm Al 7075-T6 có ưu thế vượt trội nào so với Al 6061-T6 trong các kết cấu chịu lực cao?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dễ hàn dính bằng thiếc hàn mạch hơn Al 6061"
                  },
                  {
                        "id": "B",
                        "text": "Chống chịu ăn mòn tốt hơn trong môi trường biển"
                  },
                  {
                        "id": "C",
                        "text": "Độ bền kéo và giới hạn chảy vượt trội gần gấp đôi"
                  },
                  {
                        "id": "D",
                        "text": "Có khối lượng riêng nhẹ hơn Al 6061 khoảng mười lần"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-5",
            "type": "single_choice",
            "prompt": "Đặc tính dẫn nhiệt cao của hợp kim nhôm (khoảng 160 - 170 W/(m·K)) mang lại lợi ích gì cho việc kiểm soát nhiệt độ CubeSat?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giữ nhiệt độ bên trong vệ tinh cố định 100 độ C"
                  },
                  {
                        "id": "B",
                        "text": "Làm nóng nhanh toàn bộ khung vỏ khi vào vùng tối"
                  },
                  {
                        "id": "C",
                        "text": "Dẫn nhiệt linh kiện ra vỏ ngoài để bức xạ nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Cách nhiệt hoàn toàn giữa bên trong và bên ngoài"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-6",
            "type": "single_choice",
            "prompt": "Mô-men xoắn siết khuyến nghị tiêu chuẩn cho bu lông thép không gỉ kích thước M3 bắt vào ren hợp kim nhôm Al 6061 là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.6 N·m đến 0.9 N·m"
                  },
                  {
                        "id": "B",
                        "text": "50 N·m đến 70 N·m"
                  },
                  {
                        "id": "C",
                        "text": "10 N·m đến 15 N·m"
                  },
                  {
                        "id": "D",
                        "text": "0.01 N·m đến 0.05 N·m"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-7",
            "type": "single_choice",
            "prompt": "Giải pháp ngăn ngừa ăn mòn điện hóa giữa bu lông thép không gỉ và khung sườn hợp kim nhôm là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng lớp mạ tương thích hoặc hợp chất chống dính kẹt"
                  },
                  {
                        "id": "B",
                        "text": "Không sử dụng bất kỳ bu lông cơ khí nào trong khung"
                  },
                  {
                        "id": "C",
                        "text": "Hàn nhiệt nóng chảy trực tiếp hai kim loại với nhau"
                  },
                  {
                        "id": "D",
                        "text": "Ngâm toàn bộ kết cấu khung nhôm trong nước muối đặc"
                  }
            ]
      },
      {
            "id": "q-doc-6-2-8",
            "type": "single_choice",
            "prompt": "Ký hiệu trạng thái nhiệt luyện '-T6' trong hợp kim nhôm Al 6061-T6 có ý nghĩa kỹ thuật nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bề mặt hợp kim nhôm được tôi cứng bằng chùm tia laser"
                  },
                  {
                        "id": "B",
                        "text": "Kim loại được làm nguội tự nhiên trong không khí tĩnh"
                  },
                  {
                        "id": "C",
                        "text": "Tôi dung dịch kết hợp hóa già nhân tạo để hóa bền"
                  },
                  {
                        "id": "D",
                        "text": "Nhôm nguyên chất không qua bất kỳ quá trình xử lý nhiệt"
                  }
            ]
      }
]),
      doc('doc-6-3', 'Câu hỏi kiểm tra Doc 6.3', 'Chuẩn ngăn xếp PC/104, bu lông rỗng thông hơi chống rò rỉ ảo (Virtual Leak), keo khóa ren kỵ khí Loctite 222, bảng cân đối khối lượng (Mass Budget) và vị trí trọng tâm CoM (±20 mm).', [
      {
            "id": "q-doc-6-3-1",
            "type": "single_choice",
            "prompt": "Khung cấu trúc kim loại ảnh hưởng như thế nào đến khả năng hoạt động của phân hệ Truyền thông (COM)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm mặt phẳng đất phản xạ cho anten đơn cực"
                  },
                  {
                        "id": "B",
                        "text": "Thay đổi màu sắc bề mặt bức xạ của anten"
                  },
                  {
                        "id": "C",
                        "text": "Tăng tần số phát sóng của anten lên mười lần"
                  },
                  {
                        "id": "D",
                        "text": "Ngăn chặn hoàn toàn sóng viễn thông phát xạ"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-2",
            "type": "single_choice",
            "prompt": "Mối quan hệ giữa sự phân bố khối lượng của khung cơ khí và động lực học tách vệ tinh khỏi ống phóng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối lượng không tác động tới động lực học"
                  },
                  {
                        "id": "B",
                        "text": "Khung càng nặng thì vệ tinh bay càng nhanh"
                  },
                  {
                        "id": "C",
                        "text": "Lệch CoM tạo mô-men gây quay lộn dữ dội"
                  },
                  {
                        "id": "D",
                        "text": "Trọng tâm luôn tự động nằm ở tâm hình học"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-3",
            "type": "single_choice",
            "prompt": "Tiêu chuẩn thiết kế quốc tế CalPoly quy định vị trí trọng tâm (CoM) thực tế của một CubeSat 1U phải nằm trong giới hạn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Phải nằm lệch hẳn về một góc của cấu trúc"
                  },
                  {
                        "id": "B",
                        "text": "Có thể nằm tại bất kỳ vị trí tùy ý nào"
                  },
                  {
                        "id": "C",
                        "text": "Bán kính lệch không quá ±2.0 cm quanh tâm"
                  },
                  {
                        "id": "D",
                        "text": "Nằm cách tâm hình học một khoảng tối thiểu 5 cm"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-4",
            "type": "single_choice",
            "prompt": "Kiến trúc xếp chồng bo mạch tiêu chuẩn công nghiệp 'PC/104' được định nghĩa bởi đặc điểm hình học nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Các bo mạch được gắn bố trí hoàn toàn ngẫu nhiên"
                  },
                  {
                        "id": "B",
                        "text": "Các bo mạch có biên dạng hình tròn đồng tâm"
                  },
                  {
                        "id": "C",
                        "text": "Các bo mạch được liên kết với nhau bằng dây cáp"
                  },
                  {
                        "id": "D",
                        "text": "Bo mạch xếp chồng song song qua 4 trụ và đầu bus"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-5",
            "type": "single_choice",
            "prompt": "Kích thước danh định của một bo mạch PCB chuẩn PC/104 sử dụng cho CubeSat 1U là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "50.0 mm x 50.0 mm"
                  },
                  {
                        "id": "B",
                        "text": "90.17 mm x 95.89 mm"
                  },
                  {
                        "id": "C",
                        "text": "200.0 mm x 200.0 mm"
                  },
                  {
                        "id": "D",
                        "text": "10.0 mm x 10.0 mm"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-6",
            "type": "single_choice",
            "prompt": "Bốn lỗ bắt bu lông tại 4 góc của bo mạch chuẩn PC/104 thường có đường kính lỗ danh định là bao nhiêu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "3.2 mm"
                  },
                  {
                        "id": "B",
                        "text": "0.5 mm"
                  },
                  {
                        "id": "C",
                        "text": "1.0 mm"
                  },
                  {
                        "id": "D",
                        "text": "10.0 mm"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-7",
            "type": "single_choice",
            "prompt": "Khoảng cách tầng (Stacking Height) giữa các bo mạch trong khối PC/104 CubeSat được duy trì bởi linh kiện cơ khí nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hệ thống dây treo lò xo giảm chấn chuyển động"
                  },
                  {
                        "id": "B",
                        "text": "Trụ ren kim loại chuẩn cao 15 mm hoặc 20 mm"
                  },
                  {
                        "id": "C",
                        "text": "Keo nến nóng chảy dán cố định các tấm bo"
                  },
                  {
                        "id": "D",
                        "text": "Miếng đệm carton chèn chặt giữa các tầng"
                  }
            ]
      },
      {
            "id": "q-doc-6-3-8",
            "type": "single_choice",
            "prompt": "Đầu nối bus xếp chồng xuyên tầng (Stack-through Header Connector) trong kiến trúc PC/104 có ưu điểm kỹ thuật nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm tăng tính thẩm mỹ cho khối xếp chồng bo"
                  },
                  {
                        "id": "B",
                        "text": "Tăng xung nhịp dao động của thạch anh hệ thống"
                  },
                  {
                        "id": "C",
                        "text": "Chống cháy nổ tuyệt đối cho toàn bộ mạch điện"
                  },
                  {
                        "id": "D",
                        "text": "Chân cắm xuyên tầng truyền tín hiệu và đường bus"
                  }
            ]
      }
]),
      practice('practice-6-frame', 'Câu hỏi kiểm tra Thực hành Khung Cơ Khí', 'Trình tự xếp chồng các tầng bo, quy tắc siết bu lông theo đường chéo đối xứng, kiểm tra dung sai kích thước 1U (100 × 100 × 113.5 mm) và độ phẳng thanh ray.',
        [], [
      {
            "id": "q-practice-6-frame-1",
            "type": "single_choice",
            "prompt": "Trong kiến trúc tổng thể của vệ tinh CubeSat, phân hệ Cấu trúc Cơ khí (Structure) đảm nhận vai trò nền tảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Xử lý các thuật toán điều khiển của hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Tạo ra nguồn điện năng cho toàn bộ vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Phát sóng viễn thông truyền dữ liệu về đất"
                  },
                  {
                        "id": "D",
                        "text": "Khung chịu lực, định vị và bảo vệ các phân hệ"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-2",
            "type": "single_choice",
            "prompt": "Tác động hỗ trợ trực tiếp của khung cấu trúc kim loại đối với phân hệ Năng lượng (EPS) là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động kích hoạt chu trình sạc cho pin"
                  },
                  {
                        "id": "B",
                        "text": "Tăng mức điện áp nguồn pin lên gấp đôi"
                  },
                  {
                        "id": "C",
                        "text": "Biến đổi dòng xoay chiều thành một chiều"
                  },
                  {
                        "id": "D",
                        "text": "Bảo vệ cell pin và tản nhiệt cho mạch nguồn"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-3",
            "type": "single_choice",
            "prompt": "Tác động bảo vệ quan trọng của khung vỏ nhôm kín đối với máy tính trung tâm (OBC) và các mạch số là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chắn can nhiễu điện từ và giảm liều bức xạ"
                  },
                  {
                        "id": "B",
                        "text": "Tự động phát hiện và vá lỗi mã nguồn bay"
                  },
                  {
                        "id": "C",
                        "text": "Gia tăng xung nhịp hoạt động của vi xử lý"
                  },
                  {
                        "id": "D",
                        "text": "Lưu trữ dữ liệu thay cho bộ nhớ bán dẫn"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-4",
            "type": "single_choice",
            "prompt": "Khung cơ khí giữ vai trò quyết định nào đối với cụm cảm biến quán tính (IMU) và tải trọng quang học Camera?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động lấy nét cho thấu kính máy ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Cố định hệ tọa độ tránh lệch trục cảm biến"
                  },
                  {
                        "id": "C",
                        "text": "Làm mát chủ động cho cụm cảm biến nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Cung cấp đường nguồn điện áp ổn định 5V"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-5",
            "type": "single_choice",
            "prompt": "Bộ phận nào trên khung cơ khí của CubeSat đóng vai trò là giao diện tiếp xúc cơ học trực tiếp với ống phóng P-POD của tên lửa đẩy?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bề mặt của các tấm pin quang điện ngoài"
                  },
                  {
                        "id": "B",
                        "text": "4 thanh ray nhẵn dọc theo 4 cạnh góc đứng"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống cáp nối tín hiệu giữa các bo"
                  },
                  {
                        "id": "D",
                        "text": "Cụm thấu kính quang học của máy ảnh bay"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-6",
            "type": "single_choice",
            "prompt": "Mối quan hệ giữa sự phân bố khối lượng của khung cơ khí và động lực học tách vệ tinh khỏi ống phóng là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối lượng không tác động tới động lực học"
                  },
                  {
                        "id": "B",
                        "text": "Khung càng nặng thì vệ tinh bay càng nhanh"
                  },
                  {
                        "id": "C",
                        "text": "Lệch CoM tạo mô-men gây quay lộn dữ dội"
                  },
                  {
                        "id": "D",
                        "text": "Trọng tâm luôn tự động nằm ở tâm hình học"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-7",
            "type": "single_choice",
            "prompt": "Tải trọng gia tốc tĩnh cực đại (Static Quasi-steady Acceleration) mà khung cơ khí CubeSat phải chịu đựng trong giai đoạn phóng tên lửa thường đạt khoảng:",
            "choices": [
                  {
                        "id": "A",
                        "text": "1 g đến 2 g"
                  },
                  {
                        "id": "B",
                        "text": "80 g đến 100 g"
                  },
                  {
                        "id": "C",
                        "text": "8 g đến 15 g"
                  },
                  {
                        "id": "D",
                        "text": "0.1 g đến 0.5 g"
                  }
            ]
      },
      {
            "id": "q-practice-6-frame-8",
            "type": "single_choice",
            "prompt": "Môi trường dao động ngẫu nhiên (Random Vibration) tác động lên khung CubeSat trong lúc tên lửa vượt qua tầng khí quyển dày có dải tần số điển hình là:",
            "choices": [
                  {
                        "id": "A",
                        "text": "100 kHz đến 500 kHz"
                  },
                  {
                        "id": "B",
                        "text": "20 Hz đến 2000 Hz"
                  },
                  {
                        "id": "C",
                        "text": "0.01 Hz đến 0.1 Hz"
                  },
                  {
                        "id": "D",
                        "text": "1 MHz đến 10 MHz"
                  }
            ]
      }
]),
    ],
  },
  7: {
    summary: 'Tích hợp toàn diện 6 phân hệ thành một hệ thống hoạt động đồng bộ và mô phỏng sứ mệnh không gian.',
    checkpoints: [
      doc('doc-7-1', 'Câu hỏi kiểm tra Doc 7.1', 'Năm thách thức kỹ thuật khi tích hợp 1U (tranh chấp bus I2C/SPI, sụt áp Brownout tải đỉnh, nhiễu LoRa EMI, tản nhiệt chân không, deadlock) và mô hình Super-loop Non-blocking.', [
      {
            "id": "q-doc-7-1-1",
            "type": "single_choice",
            "prompt": "Kiến trúc phần mềm bay phân tầng (Layered Flight Software Architecture) mang lại lợi ích gì cho CubeSat?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tách biệt phần cứng, dịch vụ lõi và ứng dụng"
                  },
                  {
                        "id": "B",
                        "text": "Tăng thêm độ phức tạp mã nguồn và thời gian chạy"
                  },
                  {
                        "id": "C",
                        "text": "Làm phần mềm chạy chậm hơn và khó bảo trì hệ thống"
                  },
                  {
                        "id": "D",
                        "text": "Gia tăng dung lượng bộ nhớ RAM và tiêu hao năng lượng"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-2",
            "type": "single_choice",
            "prompt": "Trạng thái đầu tiên của CubeSat ngay sau khi rời khỏi ống phóng P-POD là trạng thái nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "STATE_PAYLOAD_EXEC"
                  },
                  {
                        "id": "B",
                        "text": "STATE_SAFE_MODE"
                  },
                  {
                        "id": "C",
                        "text": "STATE_BOOT"
                  },
                  {
                        "id": "D",
                        "text": "STATE_REBOOT"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-3",
            "type": "single_choice",
            "prompt": "Các nhiệm vụ định kỳ được thực thi trong trạng thái STATE_NORMAL_OPS bao gồm những gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dừng toàn bộ mọi tác vụ xử lý của hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Đọc cảm biến, lưu thẻ nhớ, phát Beacon định kỳ"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ sạc pin và ngắt toàn bộ các khối chức năng"
                  },
                  {
                        "id": "D",
                        "text": "Kích hoạt máy ảnh chụp liên tục vào bộ nhớ"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-4",
            "type": "single_choice",
            "prompt": "Trạng thái 'STATE_PAYLOAD_EXEC' (Thực thi tải trọng nhiệm vụ) được kích hoạt trong trường hợp nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi vệ tinh nằm hoàn toàn trong vùng tối của Trái Đất"
                  },
                  {
                        "id": "B",
                        "text": "Khi mức điện áp của khối pin giảm xuống dưới ngưỡng 20%"
                  },
                  {
                        "id": "C",
                        "text": "Khi nhận lệnh điều khiển hoặc tới tọa độ mục tiêu"
                  },
                  {
                        "id": "D",
                        "text": "Tự động kích hoạt liên tục không ngừng nghỉ suốt ngày"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-5",
            "type": "single_choice",
            "prompt": "Trạng thái 'STATE_POWER_SAVE' (Tiết kiệm năng lượng) được kích hoạt khi thông số nào vượt ngưỡng cảnh báo?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Điện áp pin tụt sâu dưới ngưỡng an toàn trong tối"
                  },
                  {
                        "id": "B",
                        "text": "Vận tốc góc quay quanh trục quán tính tăng vọt"
                  },
                  {
                        "id": "C",
                        "text": "Nhiệt độ môi trường phòng thí nghiệm tăng quá cao"
                  },
                  {
                        "id": "D",
                        "text": "Dung lượng bộ nhớ lưu trữ trên thẻ nhớ bị đầy"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-6",
            "type": "single_choice",
            "prompt": "Trong trạng thái STATE_POWER_SAVE, phần mềm bay sẽ thực hiện các biện pháp cắt giảm tiêu thụ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Kích hoạt toàn bộ cảm biến trên bo mạch hoạt động"
                  },
                  {
                        "id": "B",
                        "text": "Xóa toàn bộ mã nguồn chương trình trong bộ nhớ flash"
                  },
                  {
                        "id": "C",
                        "text": "Phát tín hiệu sóng vô tuyến với công suất cực đại"
                  },
                  {
                        "id": "D",
                        "text": "Tắt Camera, GPS, giãn chu kỳ Beacon và giảm xung CPU"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-7",
            "type": "single_choice",
            "prompt": "Khi nào vệ tinh được phép tự động thoát khỏi trạng thái STATE_POWER_SAVE để quay về STATE_NORMAL_OPS?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Pin được sạc hồi phục vượt ngưỡng có trễ an toàn"
                  },
                  {
                        "id": "B",
                        "text": "Ngay khi có tín hiệu bấm nút cưỡng bức từ trạm thu"
                  },
                  {
                        "id": "C",
                        "text": "Hệ thống bị khóa vĩnh viễn không thể tự thoát ra"
                  },
                  {
                        "id": "D",
                        "text": "Tự động đếm lùi thời gian sau đúng 5 giây hoạt động"
                  }
            ]
      },
      {
            "id": "q-doc-7-1-8",
            "type": "single_choice",
            "prompt": "Trạng thái 'STATE_SAFE_MODE' (Chế độ an toàn sống còn) được kích hoạt trong hoàn cảnh khẩn cấp nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi vệ tinh đã hoàn thành toàn bộ sứ mệnh khoa học"
                  },
                  {
                        "id": "B",
                        "text": "Pin sụt áp đáy, cảm biến tê liệt hoặc OBC reset lặp"
                  },
                  {
                        "id": "C",
                        "text": "Khi nhận được bản tin dữ liệu mới từ trạm mặt đất"
                  },
                  {
                        "id": "D",
                        "text": "Khi vệ tinh bay qua vùng có điều kiện thời tiết đẹp"
                  }
            ]
      }
]),
      practice('practice-7-superloop', 'Câu hỏi kiểm tra Thực hành Phần mềm Bay Tuần tự', 'Kỹ thuật chia chu kỳ lấy mẫu độc lập bằng biến millis(), đọc cảm biến, ghi MicroSD và phát LoRa không dùng bất kỳ lệnh delay() nào.',
        ['Lab7-01_Full_Satellite_Program'], [
      {
            "id": "q-practice-7-superloop-1",
            "type": "single_choice",
            "prompt": "Trong trạng thái STATE_PAYLOAD_EXEC, chuỗi thao tác nào được thực hiện tuần tự?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Định dạng thẻ nhớ và khởi động lại vi điều khiển"
                  },
                  {
                        "id": "B",
                        "text": "Bật đèn sưởi ấm cho buồng máy tính trung tâm OBC"
                  },
                  {
                        "id": "C",
                        "text": "Bật Camera, chụp ảnh JPEG, lưu SD và báo cáo OBC"
                  },
                  {
                        "id": "D",
                        "text": "Phát tín hiệu âm thanh cảnh báo về trạm mặt đất"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-2",
            "type": "single_choice",
            "prompt": "Trong kiến trúc lập trình tuần tự (Sequential Super-Loop) cho vệ tinh CubeSat, hàm `setup()` thực hiện nhiệm vụ gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khởi tạo phần cứng, kiểm tra sẵn sàng và đặt FSM ban đầu"
                  },
                  {
                        "id": "B",
                        "text": "Chạy lặp đi lặp lại vô tận trong suốt vòng đời hoạt động"
                  },
                  {
                        "id": "C",
                        "text": "Xóa sạch toàn bộ dữ liệu đang lưu trữ trên bộ nhớ flash"
                  },
                  {
                        "id": "D",
                        "text": "Tắt toàn bộ hệ thống máy tính để chuẩn bị cho chu trình bay"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-3",
            "type": "single_choice",
            "prompt": "Tại sao trong hàm `loop()` của phần mềm bay vệ tinh, lập trình viên TUYỆT ĐỐI KHÔNG ĐƯỢC sử dụng hàm `delay()`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vì hàm delay làm gia tăng tốc độ tính toán của bộ vi xử lý"
                  },
                  {
                        "id": "B",
                        "text": "Gây đóng băng CPU, làm lỡ viễn lệnh và trễ đá Watchdog"
                  },
                  {
                        "id": "C",
                        "text": "Vì hàm delay làm tiêu hao dung lượng pin nhiều hơn mức cho phép"
                  },
                  {
                        "id": "D",
                        "text": "Vì hàm delay làm sai lệch màu sắc của các bức ảnh chụp được"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-4",
            "type": "single_choice",
            "prompt": "Giải pháp lập trình không chặn (Non-blocking Timing) tiêu chuẩn trong C++ để thay thế hàm `delay()` là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng hàm millis kết hợp biến lưu mốc trước để kiểm tra"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng một vòng lặp rỗng liên tục không có điều kiện thoát"
                  },
                  {
                        "id": "C",
                        "text": "Gọi hàm delay với khoảng thời gian cực ngắn 1 mili-giây"
                  },
                  {
                        "id": "D",
                        "text": "Thực hiện ngắt nguồn vi điều khiển rồi khởi động lại tức thì"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-5",
            "type": "single_choice",
            "prompt": "Một chu kỳ vòng lặp chính `loop()` của vệ tinh CubeSat trong Lab7-01 bao gồm những bước xử lý tuần tự nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bước 1: Tắt nguồn hệ thống -> Bước 2: Bật nguồn hệ thống"
                  },
                  {
                        "id": "B",
                        "text": "Chỉ thực hiện một bước duy nhất là tạm dừng để nghỉ ngơi"
                  },
                  {
                        "id": "C",
                        "text": "Giám sát EPS -> Đọc cảm biến -> Phân tích lệnh -> Cập nhật FSM"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ thực hiện tác vụ chụp ảnh liên tục bằng máy ảnh quang học"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-6",
            "type": "single_choice",
            "prompt": "Thời gian thực thi của một vòng lặp `loop()` (Loop Execution Time) trong điều kiện bình thường nên được khống chế ở mức nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Từ -40°C đến +85°C bảo đảm hoạt động tin cậy trong quỹ đạo"
                  },
                  {
                        "id": "B",
                        "text": "Từ 0°C đến +40°C phù hợp môi trường văn phòng tiêu chuẩn"
                  },
                  {
                        "id": "C",
                        "text": "Từ +50°C đến +150°C chuyên dụng cho các lò phản ứng nhiệt"
                  },
                  {
                        "id": "D",
                        "text": "Từ -200°C đến +500°C đáp ứng các môi trường không gian sâu"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-7",
            "type": "single_choice",
            "prompt": "Trong bài thực hành Lab7-01, biến toàn cục `SystemState currentState` lưu trữ thông tin gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dung lượng bộ nhớ còn trống trên thẻ nhớ lưu trữ dữ liệu"
                  },
                  {
                        "id": "B",
                        "text": "Số điện thoại liên lạc khẩn cấp của kíp trực trạm mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Họ và tên của kỹ sư lập trình phần mềm cho hệ thống bay"
                  },
                  {
                        "id": "D",
                        "text": "Trạng thái hoạt động hiện thời của vệ tinh"
                  }
            ]
      },
      {
            "id": "q-practice-7-superloop-8",
            "type": "single_choice",
            "prompt": "Thao tác 'Đá Watchdog' (Kick the Dog / Reset Watchdog Timer) được đặt ở vị trí nào trong vòng lặp `loop()`?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Không cần thiết phải gọi hàm này trong toàn bộ chương trình"
                  },
                  {
                        "id": "B",
                        "text": "Đặt ngẫu nhiên tại bất kỳ vị trí nào bên trong các hàm xử lý"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ gọi thao tác này một lần duy nhất bên trong hàm khởi tạo"
                  },
                  {
                        "id": "D",
                        "text": "Đặt ở cuối loop, bảo đảm toàn bộ chu trình chạy thông suốt"
                  }
            ]
      }
]),
      doc('doc-7-2', 'Câu hỏi kiểm tra Doc 7.2', 'Kiến trúc phần mềm bay 4 tầng (BSP, Subsystem Driver, Middleware, Application), máy trạng thái sứ mệnh FSM (BOOT, SAFE, NOMINAL, COMMS, CRITICAL) và chiến lược tự phục hồi FDIR.', [
      {
            "id": "q-doc-7-2-1",
            "type": "single_choice",
            "prompt": "Khái niệm 'Máy trạng thái hữu hạn' (Finite State Machine - FSM) trong phần mềm vệ tinh là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Cơ cấu cơ học đóng ngắt chu trình vận hành vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Hệ thống in mốc thời gian thực thi của tác vụ bay"
                  },
                  {
                        "id": "C",
                        "text": "Bộ đếm thời gian trôi của các sự kiện trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Mô hình chuyển trạng thái dựa trên sự kiện kích hoạt"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-2",
            "type": "single_choice",
            "prompt": "Tại sao trong trạng thái STATE_BOOT, bộ đếm thời gian 30 phút im lặng (30-Minute Radio Silence) là bắt buộc?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chờ khối pin Li-Po nạp đủ 100% dung lượng danh định"
                  },
                  {
                        "id": "B",
                        "text": "Đợi phi hành gia mặt đất hoàn tất thiết lập trạm thu"
                  },
                  {
                        "id": "C",
                        "text": "Trôi ra cự ly an toàn trước khi bung anten phát sóng"
                  },
                  {
                        "id": "D",
                        "text": "Làm mát các khối vi mạch số và cảm biến sau phóng"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-3",
            "type": "single_choice",
            "prompt": "Sau khi hoàn tất 30 phút im lặng trong STATE_BOOT, hành động tiếp theo của vệ tinh là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Bung ăng-ten và chuyển sang ổn định tư thế"
                  },
                  {
                        "id": "B",
                        "text": "Tự động tắt hoàn toàn nguồn điện của vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Kích hoạt cụm máy ảnh quang học chụp tức thì"
                  },
                  {
                        "id": "D",
                        "text": "Xóa sạch toàn bộ dữ liệu trong bộ nhớ flash"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-4",
            "type": "single_choice",
            "prompt": "Trạng thái 'STATE_DETUMBLE' (Ổn định tư thế giảm quay) có mục tiêu cốt lõi gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Giảm vận tốc góc hỗn loạn xuống ngưỡng an toàn"
                  },
                  {
                        "id": "B",
                        "text": "Phát gói tin viễn thông thoại về trạm mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Đo nhiệt độ hồng ngoại của bề mặt Trái Đất"
                  },
                  {
                        "id": "D",
                        "text": "Tăng tốc độ quay của vệ tinh quanh trục chính"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-5",
            "type": "single_choice",
            "prompt": "Thuật toán điều khiển dập tắt vận tốc góc kinh điển nhất dùng cho CubeSat trong trạng thái Detumble là thuật toán nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Thuật toán B-dot"
                  },
                  {
                        "id": "B",
                        "text": "Thuật toán mã hóa RSA"
                  },
                  {
                        "id": "C",
                        "text": "Thuật toán sắp xếp nhanh"
                  },
                  {
                        "id": "D",
                        "text": "Thuật toán tìm đường Dijkstra"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-6",
            "type": "single_choice",
            "prompt": "Khi vận tốc góc xoay của vệ tinh đã giảm xuống dưới ngưỡng an toàn (ví dụ: < 5 deg/s), FSM sẽ chuyển sang trạng thái nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "STATE_NORMAL_OPS"
                  },
                  {
                        "id": "B",
                        "text": "STATE_SAFE_MODE"
                  },
                  {
                        "id": "C",
                        "text": "Tắt toàn bộ hệ thống"
                  },
                  {
                        "id": "D",
                        "text": "STATE_BOOT"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-7",
            "type": "single_choice",
            "prompt": "Khái niệm 'Hysteresis' (Vùng trễ ngưỡng) trong chuyển đổi trạng thái FSM có ý nghĩa gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Dùng 2 ngưỡng kích hoạt tránh dao động trạng thái"
                  },
                  {
                        "id": "B",
                        "text": "Tăng cường dòng điện sưởi ấm cho khối pin nguồn"
                  },
                  {
                        "id": "C",
                        "text": "Xóa sạch toàn bộ dữ liệu tạm thời trong bộ nhớ cache"
                  },
                  {
                        "id": "D",
                        "text": "Làm sai lệch giá trị đo đạc của các cụm cảm biến"
                  }
            ]
      },
      {
            "id": "q-doc-7-2-8",
            "type": "single_choice",
            "prompt": "Trong thiết kế phần mềm bay, 'FDIR' là viết tắt của cụm từ chuyên môn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Fault Detection, Isolation, and Recovery"
                  },
                  {
                        "id": "B",
                        "text": "Flight Data Internet Relay"
                  },
                  {
                        "id": "C",
                        "text": "Fast Direct Instruction Register"
                  },
                  {
                        "id": "D",
                        "text": "File Directory Information Record"
                  }
            ]
      }
]),
      doc('doc-7-3', 'Câu hỏi kiểm tra Doc 7.3', 'Sổ tay vận hành bay FOM, quy trình phiên liên lạc trạm mặt đất (AOS, Handshake, Data Dump, LOS), chu kỳ quỹ đạo LEO 95 phút và mô phỏng vùng tối (Eclipse) 35 phút.', [
      {
            "id": "q-doc-7-3-1",
            "type": "single_choice",
            "prompt": "Tài liệu 'Sổ tay Vận hành Bay' (Flight Operations Manual - FOM) của vệ tinh phục vụ đối tượng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "1.0 đến 2.0 mét"
                  },
                  {
                        "id": "B",
                        "text": "300 đến 600 km"
                  },
                  {
                        "id": "C",
                        "text": "10000 đến 20000 km"
                  },
                  {
                        "id": "D",
                        "text": "50 đến 80 mét"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-2",
            "type": "single_choice",
            "prompt": "Quy trình chuẩn bị trước phiên bay qua (Pre-Pass Checklist) bắt đầu trước thời điểm vệ tinh xuất hiện (AOS) khoảng bao lâu?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.1 đến 0.5 mét"
                  },
                  {
                        "id": "B",
                        "text": "10 đến 50 km"
                  },
                  {
                        "id": "C",
                        "text": "1000 đến 2000 km"
                  },
                  {
                        "id": "D",
                        "text": "2.0 đến 3.5 mét"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-3",
            "type": "single_choice",
            "prompt": "Hành động đầu tiên của kíp trực ngay khi trạm mặt đất bắt được tín hiệu vô tuyến (AOS) là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Gửi lệnh kích hoạt cụm máy ảnh chụp bề mặt tức thì"
                  },
                  {
                        "id": "B",
                        "text": "Mở tiệc ăn mừng vì đã phát hiện thấy tín hiệu vệ tinh"
                  },
                  {
                        "id": "C",
                        "text": "Khóa sóng mang, kiểm tra Beacon và thông báo trạng thái"
                  },
                  {
                        "id": "D",
                        "text": "Tắt toàn bộ hệ thống máy tính để bảo đảm an toàn điện"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-4",
            "type": "single_choice",
            "prompt": "Ma trận tình huống bất thường (Anomaly Matrix / Contingency Decision Tree) trong tài liệu FOM có cấu trúc gồm những cột nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Triệu chứng, nguyên nhân, mức độ, ứng phó và phục hồi"
                  },
                  {
                        "id": "B",
                        "text": "Bảng chấm công ngày làm việc của các thành viên kíp"
                  },
                  {
                        "id": "C",
                        "text": "Bảng tính lương và thưởng cho các vị trí chuyên trách"
                  },
                  {
                        "id": "D",
                        "text": "Bản đồ chỉ dẫn giao thông đường bộ tới vị trí trạm thu"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-5",
            "type": "single_choice",
            "prompt": "Nếu trong một phiên bay qua, trạm mặt đất hoàn toàn KHÔNG thu được tín hiệu vô tuyến tại thời điểm AOS dự tính (Mất liên lạc / Loss of Signal), bước xử lý đầu tiên là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tắt toàn bộ nguồn cung cấp điện cho các thiết bị trạm"
                  },
                  {
                        "id": "B",
                        "text": "Tuyên bố vệ tinh đã phát nổ hoàn toàn trên quỹ đạo bay"
                  },
                  {
                        "id": "C",
                        "text": "Rời khỏi vị trí làm việc và kết thúc phiên trực sớm"
                  },
                  {
                        "id": "D",
                        "text": "Kiểm tra cáp anten, LNA, góc xoay, tần số thu và mạng lưới"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-6",
            "type": "single_choice",
            "prompt": "Hiện tượng 'Pin sụt áp sâu trong vùng tối Eclipse' (Deep Battery Depletion) được kíp trực phát hiện qua dấu hiệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Áp pin dưới 3.5V và dòng xả cao do tải chưa ngắt kịp"
                  },
                  {
                        "id": "B",
                        "text": "Tốc độ di chuyển của vệ tinh trên quỹ đạo bị chậm lại"
                  },
                  {
                        "id": "C",
                        "text": "Nhiệt độ môi trường bên ngoài phòng điều khiển suy giảm"
                  },
                  {
                        "id": "D",
                        "text": "Màn hình hiển thị tại trạm mặt đất bị suy giảm độ sáng"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-7",
            "type": "single_choice",
            "prompt": "Trong vận hành CubeSat, khái niệm 'Contact Window' (Cửa sổ liên lạc) là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.1 đến 0.5 mét"
                  },
                  {
                        "id": "B",
                        "text": "10 đến 50 km"
                  },
                  {
                        "id": "C",
                        "text": "1000 đến 2000 km"
                  },
                  {
                        "id": "D",
                        "text": "2.0 đến 3.5 mét"
                  }
            ]
      },
      {
            "id": "q-doc-7-3-8",
            "type": "single_choice",
            "prompt": "Khái niệm 'Pass Timeline' (Dòng thời gian phiên bay) trong FOM phân chia thời gian 10 phút của một phiên bay thành những pha nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "30 đến 45 giây"
                  },
                  {
                        "id": "B",
                        "text": "5 đến 12 phút"
                  },
                  {
                        "id": "C",
                        "text": "1 đến 2 giờ"
                  },
                  {
                        "id": "D",
                        "text": "24 đến 48 giờ"
                  }
            ]
      }
]),
      practice('practice-7-rtos', 'Câu hỏi kiểm tra Thực hành Phần mềm Bay Đa Nhiệm', 'Phân chia tác vụ đa nhiệm FreeRTOS: Task_Sensor (Core 1), Task_Storage (Core 1), Task_Comms (Core 0), truyền dữ liệu qua Queue và đồng bộ bus bằng Mutex.',
        ['Lab7-02_RTOS_Satellite_System'], [
      {
            "id": "q-practice-7-rtos-1",
            "type": "single_choice",
            "prompt": "Cơ chế bảo vệ ngăn ngừa tràn ngăn xếp 'Stack Overflow Detection' trong FreeRTOS hoạt động như thế nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động cấp phát thêm dung lượng bộ nhớ cho tác vụ"
                  },
                  {
                        "id": "B",
                        "text": "Xóa bỏ tác vụ bị lỗi ra khỏi danh sách của bộ lập lịch"
                  },
                  {
                        "id": "C",
                        "text": "Không cần cơ chế bảo vệ vì RAM luôn được tối ưu sẵn"
                  },
                  {
                        "id": "D",
                        "text": "Ghi mẫu byte cuối Stack; nếu bị đè sẽ gọi hàm cảnh báo"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-2",
            "type": "single_choice",
            "prompt": "Hệ điều hành thời gian thực FreeRTOS trên vi điều khiển hai lõi ESP32 mang lại ưu thế vượt trội gì so với vòng lặp tuần tự?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Làm gia tăng mức tiêu thụ điện năng của chip lên gấp trăm lần"
                  },
                  {
                        "id": "B",
                        "text": "Không đem lại bất kỳ ưu thế kỹ thuật nào so với vòng lặp tuần tự"
                  },
                  {
                        "id": "C",
                        "text": "Chia tác vụ độc lập chạy song song 2 lõi với ưu tiên ngắt trước"
                  },
                  {
                        "id": "D",
                        "text": "Làm cho cấu trúc mã nguồn chương trình trở nên phức tạp khó đọc"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-3",
            "type": "single_choice",
            "prompt": "Hàm FreeRTOS nào được sử dụng để tạo một tác vụ mới và ghim (Pin) tác vụ đó vào một lõi CPU xác định?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 đến 20 byte"
                  },
                  {
                        "id": "B",
                        "text": "128 đến 256 byte"
                  },
                  {
                        "id": "C",
                        "text": "10 đến 20 Megabyte"
                  },
                  {
                        "id": "D",
                        "text": "1 đến 2 Gigabyte"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-4",
            "type": "single_choice",
            "prompt": "Trong kiến trúc phân bổ hai lõi của CubeSat, Core 0 thường được phân công chuyên trách các tác vụ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Để trống hoàn toàn không phân bổ bất kỳ tác vụ nào thực thi"
                  },
                  {
                        "id": "B",
                        "text": "Tác vụ truyền thông vô tuyến và quản lý ngăn xếp mạng"
                  },
                  {
                        "id": "C",
                        "text": "Chuyên xử lý các tệp âm thanh phát nhạc cảnh báo ra loa ngoài"
                  },
                  {
                        "id": "D",
                        "text": "Chuyên thực hiện tác vụ ngắt nguồn và đưa hệ thống vào ngủ sâu"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-5",
            "type": "single_choice",
            "prompt": "Core 1 của ESP32 trong CubeSat thường được phân công thực thi các tác vụ nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tác vụ sứ mệnh chính, đọc cảm biến, tính tư thế và xử lý ảnh"
                  },
                  {
                        "id": "B",
                        "text": "Chỉ làm nhiệm vụ đếm số giây trôi qua kể từ khi khởi động"
                  },
                  {
                        "id": "C",
                        "text": "Chỉ làm nhiệm vụ điều khiển quạt gió làm mát đế chip bán dẫn"
                  },
                  {
                        "id": "D",
                        "text": "Để trống dự phòng cho các ứng dụng phần mềm nâng cấp sau này"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-6",
            "type": "single_choice",
            "prompt": "Cơ chế định thời ưu tiên ngắt trước (Preemptive Scheduling) trong FreeRTOS hoạt động theo nguyên tắc nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Mỗi tác vụ được cấp phát luân phiên đúng một giây thực thi"
                  },
                  {
                        "id": "B",
                        "text": "Các tác vụ được thực thi lần lượt theo thứ tự bảng chữ cái tên"
                  },
                  {
                        "id": "C",
                        "text": "Tác vụ ưu tiên cao hơn lập tức chiếm CPU, ngắt tác vụ thấp"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ nào có số dòng mã nguồn dài hơn sẽ được chạy trước tiên"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-7",
            "type": "single_choice",
            "prompt": "Trong hệ thống bay CubeSat của Lab7-02, tác vụ nào sau đây nên được gán mức ưu tiên cao nhất (Highest Priority)?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tác vụ ghi dữ liệu nhật ký viễn trắc khối lớn vào thẻ nhớ SD"
                  },
                  {
                        "id": "B",
                        "text": "Tác vụ giám sát an toàn, đá Watchdog và giải mã viễn lệnh"
                  },
                  {
                        "id": "C",
                        "text": "Tác vụ định kỳ đọc giá trị nhiệt độ từ cảm biến nhiệt trên bo"
                  },
                  {
                        "id": "D",
                        "text": "Tác vụ điều khiển nhấp nháy đèn LED chỉ thị trạng thái nhịp tim"
                  }
            ]
      },
      {
            "id": "q-practice-7-rtos-8",
            "type": "single_choice",
            "prompt": "Để tạm dừng một tác vụ FreeRTOS trong một khoảng thời gian xác định mà KHÔNG làm đóng băng CPU, hàm nào được sử dụng?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Gọi hàm delay thông thường với thời gian 100 mili-giây"
                  },
                  {
                        "id": "B",
                        "text": "Sử dụng một vòng lặp vô hạn chờ cờ điều kiện chuyển đổi"
                  },
                  {
                        "id": "C",
                        "text": "Gọi hàm kết thúc chương trình để trả tài nguyên cho máy"
                  },
                  {
                        "id": "D",
                        "text": "Gọi hàm vTaskDelay(pdMS_TO_TICKS(100)) chuẩn FreeRTOS"
                  }
            ]
      }
]),
    ],
  },
  8: {
    summary: 'Vận dụng tư duy Kỹ thuật Hệ thống thiết kế, lập trình và bảo vệ đồ án sứ mệnh CubeSat độc lập.',
    checkpoints: [
      doc('doc-8-1', 'Câu hỏi kiểm tra Doc 8.1', 'Phương pháp luận Kỹ thuật Hệ thống (Systems Engineering), quy trình vòng đời dự án NASA/ESA (Pre-Phase A đến Phase F), ma trận kiểm định MECE và phương pháp Test/Analysis/Inspection/Demo.', [
      {
            "id": "q-doc-8-1-1",
            "type": "single_choice",
            "prompt": "Mô hình Quản lý Vòng đời Dự án theo Pha (Phased Project Planning) của NASA/ESA chia vòng đời sứ mệnh không gian thành mấy pha chính?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ bao gồm một giai đoạn duy nhất trong vòng đời"
                  },
                  {
                        "id": "B",
                        "text": "Gồm 6 pha từ Pre-Phase A đến Phase E"
                  },
                  {
                        "id": "C",
                        "text": "Gồm 2 pha cơ bản là chế tạo và vận hành trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Gồm 100 pha nhỏ chia tách thành các nhiệm vụ độc lập"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-2",
            "type": "single_choice",
            "prompt": "Giai đoạn 'Pre-Phase A: Nghiên cứu Khái niệm' (Concept Studies) nhằm trả lời câu hỏi cốt lõi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khối lượng tổng thể của toàn bộ vệ tinh là bao nhiêu"
                  },
                  {
                        "id": "B",
                        "text": "Quy cách in ấn và định dạng tài liệu kỹ thuật dự án"
                  },
                  {
                        "id": "C",
                        "text": "Mục tiêu khoa học, tính khả thi và kiến trúc tổng thể"
                  },
                  {
                        "id": "D",
                        "text": "Địa điểm tìm mua linh kiện thương mại có mức giá rẻ"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-3",
            "type": "single_choice",
            "prompt": "Giai đoạn 'Phase A: Phát triển Khái niệm và Công nghệ' (Concept & Technology Development) kết thúc bằng cột mốc đánh giá kỹ thuật nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đánh giá nghiệm thu bay (AR)"
                  },
                  {
                        "id": "B",
                        "text": "Đánh giá sẵn sàng phóng (FRR)"
                  },
                  {
                        "id": "C",
                        "text": "Đánh giá định nghĩa sứ mệnh (MDR/SRR)"
                  },
                  {
                        "id": "D",
                        "text": "Đánh giá kết thúc sứ mệnh (DR)"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-4",
            "type": "single_choice",
            "prompt": "Giai đoạn 'Phase B: Thiết kế Sơ bộ' (Preliminary Design) tập trung vào công việc trọng tâm nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tổ chức họp báo công bố kế hoạch phát triển dự án"
                  },
                  {
                        "id": "B",
                        "text": "Thực hiện thanh toán toàn bộ chi phí phóng cho đối tác"
                  },
                  {
                        "id": "C",
                        "text": "Hàn gắn các linh kiện điện tử lên bo mạch mẫu bay thật"
                  },
                  {
                        "id": "D",
                        "text": "Thiết lập đường cơ sở thiết kế và phân bổ yêu cầu"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-5",
            "type": "single_choice",
            "prompt": "Cột mốc đánh giá kỹ thuật quan trọng nhất khép lại giai đoạn Phase B là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "FRR"
                  },
                  {
                        "id": "B",
                        "text": "AR"
                  },
                  {
                        "id": "C",
                        "text": "MDR"
                  },
                  {
                        "id": "D",
                        "text": "PDR"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-6",
            "type": "single_choice",
            "prompt": "Giai đoạn 'Phase C: Thiết kế Chi tiết và Chế tạo' (Final Design and Fabrication) bao gồm những hoạt động nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Hoàn thiện bản vẽ chi tiết, đóng băng mã và chế tạo STM"
                  },
                  {
                        "id": "B",
                        "text": "Chờ đợi tên lửa đẩy hoàn thành việc tích hợp bệ phóng"
                  },
                  {
                        "id": "C",
                        "text": "Lắp ráp toàn bộ mẫu bay chính thức ngay lập tức trên bàn"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ tập trung viết báo cáo nghiên cứu lý thuyết trên giấy"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-7",
            "type": "single_choice",
            "prompt": "Cột mốc đánh giá kỹ thuật mang tính sống còn khép lại giai đoạn Phase C để cho phép chế tạo mẫu bay (Flight Model) là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "CDR"
                  },
                  {
                        "id": "B",
                        "text": "SRR"
                  },
                  {
                        "id": "C",
                        "text": "PDR"
                  },
                  {
                        "id": "D",
                        "text": "MDR"
                  }
            ]
      },
      {
            "id": "q-doc-8-1-8",
            "type": "single_choice",
            "prompt": "Giai đoạn 'Phase D: Tích hợp Hệ thống, Thử nghiệm và Phóng' (System Assembly, Integration & Test, and Launch) gồm những công đoạn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Viết lại toàn bộ hệ thống yêu cầu kỹ thuật của sứ mệnh"
                  },
                  {
                        "id": "B",
                        "text": "Thiết kế lại biên dạng khung sườn nhôm từ bản vẽ cơ sở"
                  },
                  {
                        "id": "C",
                        "text": "Lắp ráp mẫu bay, thử nghiệm môi trường và phóng quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Chỉ chờ đợi ngày phóng mà không thực hiện thêm thử nghiệm"
                  }
            ]
      }
]),
      doc('doc-8-2', 'Câu hỏi kiểm tra Doc 8.2', 'Nguyên tắc lựa chọn khối trực quan hóa Dashboard LMS (Radial Gauge, Line Chart, 3D Attitude, GPS Map, Uplink Console) và ánh xạ trường dữ liệu Telemetry.', [
      {
            "id": "q-doc-8-2-1",
            "type": "single_choice",
            "prompt": "Biểu đồ Gantt (Gantt Chart) trong quản lý tiến độ sứ mệnh CubeSat giúp người chỉ huy theo dõi điều gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Theo dõi giá trị dòng điện nạp xả tức thời của khối pin nguồn"
                  },
                  {
                        "id": "B",
                        "text": "Dòng thời gian, mốc phụ thuộc và đường găng quyết định phóng"
                  },
                  {
                        "id": "C",
                        "text": "Theo dõi sự biến thiên nhiệt độ của các đế chip bán dẫn bo"
                  },
                  {
                        "id": "D",
                        "text": "Theo dõi tình hình thời tiết và lượng mưa tại khu vực trạm thu"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-2",
            "type": "single_choice",
            "prompt": "Công cụ 'Dashboard Builder' trên nền tảng LMS của PTITCube cho phép sinh viên làm gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tùy biến Dashboard trạm bằng kéo thả Widget và gắn biến"
                  },
                  {
                        "id": "B",
                        "text": "Tham gia các trò chơi giải trí trực tuyến nhiều người chơi trên mạng"
                  },
                  {
                        "id": "C",
                        "text": "Thực hiện các thao tác sửa chữa phần cứng máy vi tính để bàn trong lab"
                  },
                  {
                        "id": "D",
                        "text": "Giao dịch mua bán và trao đổi các linh kiện phần cứng trên sàn điện tử"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Data Binding' (Liên kết dữ liệu) trong Dashboard Builder có nghĩa là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ánh xạ trường viễn trắc vào widget để tự cập nhật dữ liệu mới"
                  },
                  {
                        "id": "B",
                        "text": "Xóa toàn bộ các tệp dữ liệu lưu trữ tạm thời trên bộ nhớ trình duyệt"
                  },
                  {
                        "id": "C",
                        "text": "Khóa quyền truy cập dữ liệu bằng mật khẩu quản trị viên cấp cao"
                  },
                  {
                        "id": "D",
                        "text": "Dán cố định các linh kiện điện tử lại với nhau bằng các loại keo dán"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-4",
            "type": "single_choice",
            "prompt": "Widget 'Attitude 3D View' (Mô hình Tư thế Không gian 3D) yêu cầu liên kết với những biến dữ liệu nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biến lưu trữ giá trị nhiệt độ đo được từ cảm biến nhiệt độ trên bo"
                  },
                  {
                        "id": "B",
                        "text": "Biến lưu trữ mức điện áp danh định tức thời của khối pin năng lượng"
                  },
                  {
                        "id": "C",
                        "text": "Bộ ba góc tư thế Euler gồm Roll, Pitch và Yaw từ IMU"
                  },
                  {
                        "id": "D",
                        "text": "Biến đếm số lượng các gói tin viễn trắc đã thu nhận được từ vệ tinh"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-5",
            "type": "single_choice",
            "prompt": "Widget 'Orbital Ground Track Map' (Bản đồ Vết quét Quỹ đạo) hiển thị thông tin trực quan nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vị trí tương đối của Mặt Trăng so với hệ thống quỹ đạo Trái Đất"
                  },
                  {
                        "id": "B",
                        "text": "Bản đồ quy hoạch hạ tầng đô thị của các khu dân cư trên mặt đất"
                  },
                  {
                        "id": "C",
                        "text": "Tọa độ GPS vệ tinh, đường quỹ đạo dự báo và nón phủ sóng"
                  },
                  {
                        "id": "D",
                        "text": "Bản đồ chỉ dẫn các tuyến đường đi của hệ thống xe buýt công cộng"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-6",
            "type": "single_choice",
            "prompt": "Widget 'Telemetry Line Chart' (Đồ thị Viễn trắc Chuỗi Thời gian) có tính năng nào hỗ trợ phân tích xu hướng?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Biểu diễn thông số theo thời gian, hỗ trợ zoom và xuất đồ thị"
                  },
                  {
                        "id": "B",
                        "text": "Tự động thay đổi màu sắc hiển thị của các đường nét một cách ngẫu nhiên"
                  },
                  {
                        "id": "C",
                        "text": "Tự động kích hoạt lệnh tắt nguồn máy vi tính điều hành của phòng trạm"
                  },
                  {
                        "id": "D",
                        "text": "Xóa sạch toàn bộ các dòng dữ liệu cũ để tiết kiệm dung lượng màn hình"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-7",
            "type": "single_choice",
            "prompt": "Widget 'Battery Radial Gauge' (Đồng hồ Đo Mức Năng lượng Pin) đổi màu từ Xanh lá sang Đỏ khi nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Khi người vận hành nhấp đúp chuột vào bề mặt hiển thị của widget đó"
                  },
                  {
                        "id": "B",
                        "text": "Khi điện áp pin tụt xuống dưới ngưỡng an toàn cài đặt trước"
                  },
                  {
                        "id": "C",
                        "text": "Khi bộ pin nguồn năng lượng được nạp đầy 100% dung lượng tích trữ"
                  },
                  {
                        "id": "D",
                        "text": "Khi môi trường xung quanh vệ tinh chuyển sang pha tối của Trái Đất"
                  }
            ]
      },
      {
            "id": "q-doc-8-2-8",
            "type": "single_choice",
            "prompt": "Widget 'Telecommand Uplink Console' (Bảng Điều khiển Phát lệnh) cung cấp chức năng an toàn nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tự động phát câu lệnh viễn lệnh khi không có người trực tại phòng trạm"
                  },
                  {
                        "id": "B",
                        "text": "Lựa chọn và gửi ngẫu nhiên một câu lệnh bất kỳ lên trên không gian"
                  },
                  {
                        "id": "C",
                        "text": "Ngăn chặn và phong bế hoàn toàn mọi câu lệnh muốn gửi đi từ trạm đất"
                  },
                  {
                        "id": "D",
                        "text": "Menu lệnh sẵn, kiểm tra tham số, xác nhận Arm/Execute và log ACK"
                  }
            ]
      }
]),
      doc('doc-8-3', 'Câu hỏi kiểm tra Doc 8.3', 'Kiến trúc 3 đề tài Capstone chuyên sâu: Cảnh báo Cháy rừng (AI/Edge Detection), Nông nghiệp Thông minh IoT (Store-and-Forward) và Tìm kiếm Cứu nạn SAR (Emergency Beacon Relay).', [
      {
            "id": "q-doc-8-3-1",
            "type": "single_choice",
            "prompt": "Trong thiết kế sứ mệnh IoT chuyển tiếp dữ liệu (Store-and-Forward Mission), thuật ngữ 'Store-and-Forward' mô tả nguyên lý gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vệ tinh thu dữ liệu IoT mặt đất, lưu trên tàu rồi trút xuống trạm"
                  },
                  {
                        "id": "B",
                        "text": "Quy trình chuyển tiếp các bức thư tay truyền thống qua đường bưu điện"
                  },
                  {
                        "id": "C",
                        "text": "Lưu trữ các kiện hàng hóa vật lý bên trong kho bãi trung chuyển"
                  },
                  {
                        "id": "D",
                        "text": "Hoạt động kinh doanh và bán hàng trực tuyến qua mạng Internet mở"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-2",
            "type": "single_choice",
            "prompt": "Dung lượng bộ nhớ lưu trữ trên vệ tinh cho sứ mệnh Store-and-Forward cần được tính toán dựa trên những yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lựa chọn ngẫu nhiên một con số bất kỳ theo cảm tính của kỹ sư"
                  },
                  {
                        "id": "B",
                        "text": "Dung lượng điện tích định mức khả dụng của bộ pin năng lượng"
                  },
                  {
                        "id": "C",
                        "text": "Tổng khối lượng vật liệu kim loại nhôm dùng để gia công khung"
                  },
                  {
                        "id": "D",
                        "text": "Số nút cảm biến, kích thước gói tin, tần suất gửi và thời gian trễ"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-3",
            "type": "single_choice",
            "prompt": "Khái niệm 'Latency' (Độ trễ dữ liệu) trong mạng vệ tinh Store-and-Forward quỹ đạo LEO thường nằm trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.01 đến 0.05 giây"
                  },
                  {
                        "id": "B",
                        "text": "1 đến 3 giây"
                  },
                  {
                        "id": "C",
                        "text": "30 đến 60 phút"
                  },
                  {
                        "id": "D",
                        "text": "12 đến 24 giờ"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-4",
            "type": "single_choice",
            "prompt": "Hệ thống phao cứu nạn khẩn cấp Cospas-Sarsat quốc tế hoạt động dựa trên dải tần số vô tuyến nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 đến 20 byte"
                  },
                  {
                        "id": "B",
                        "text": "64 đến 128 byte"
                  },
                  {
                        "id": "C",
                        "text": "10 đến 20 Megabyte"
                  },
                  {
                        "id": "D",
                        "text": "1 đến 2 Gigabyte"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-5",
            "type": "single_choice",
            "prompt": "Mục tiêu sứ mệnh của Đề tài Capstone 1: 'Hệ thống Viễn thám & Giám sát Cháy rừng' là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "CubeSat 1U tích hợp OV2640 chụp ảnh, dò cháy và gửi tọa độ"
                  },
                  {
                        "id": "B",
                        "text": "Đo khoảng cách vật lý từ vị trí vệ tinh tới tâm Mặt Trời"
                  },
                  {
                        "id": "C",
                        "text": "Chữa cháy trực tiếp các đám cháy rừng bằng nước phun từ trên"
                  },
                  {
                        "id": "D",
                        "text": "Dự báo thời điểm và cường độ xuất hiện của các trận động đất"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-6",
            "type": "single_choice",
            "prompt": "Phương pháp phát hiện đám cháy rừng dựa trên xử lý ảnh của Camera OV2640 sử dụng thuật toán nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đo đạc độ dày cơ học của tệp hình ảnh kỹ thuật số chụp được"
                  },
                  {
                        "id": "B",
                        "text": "Đếm số lượng lá cây trên các tán rừng xuất hiện trong khung"
                  },
                  {
                        "id": "C",
                        "text": "Quan sát trực tiếp và đánh giá định tính bằng mắt thường của người"
                  },
                  {
                        "id": "D",
                        "text": "Phân tích màu nhận diện điểm ảnh đỏ-cam kết hợp khói xám"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-7",
            "type": "single_choice",
            "prompt": "Cảm biến nhiệt độ hồng ngoại hoặc cảm biến nhiệt độ khí quyển BMP280 đóng vai trò kiểm chứng chéo gì trong đề tài Cháy rừng?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Ghi nhận nhiệt tăng vọt tại điểm chụp loại bỏ cháy giả"
                  },
                  {
                        "id": "B",
                        "text": "Đo đạc nhiệt độ của không khí bên trong phòng điều hành trạm"
                  },
                  {
                        "id": "C",
                        "text": "Kích hoạt chức năng sưởi ấm cho khối pin năng lượng của vệ tinh"
                  },
                  {
                        "id": "D",
                        "text": "Hoàn toàn không đem lại bất kỳ vai trò kỹ thuật nào trong đề tài"
                  }
            ]
      },
      {
            "id": "q-doc-8-3-8",
            "type": "single_choice",
            "prompt": "Khi phát hiện một điểm cháy rừng tiềm năng, gói tin 'Khẩn cấp Cảnh báo Cháy' (Wildfire Alert Packet) được tạo ra chứa thông tin gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Một bài thơ miêu tả vẻ đẹp của thiên nhiên và rừng cây xanh"
                  },
                  {
                        "id": "B",
                        "text": "Tọa độ GPS, nhiệt độ đỉnh, giờ UTC, diện tích cháy và mã ảnh"
                  },
                  {
                        "id": "C",
                        "text": "Họ và tên của kỹ sư lập trình thuật toán nhận diện đám cháy"
                  },
                  {
                        "id": "D",
                        "text": "Toàn bộ tệp mã nguồn C++ của thuật toán phân tích điểm ảnh"
                  }
            ]
      }
]),
      practice('practice-8-capstone', 'Câu hỏi kiểm tra Thực hành Đồ án Capstone', 'Hoàn thiện mã nguồn bay độc lập, kết nối bộ giả lập viễn trắc Telemetry Simulator, xuất bản Dashboard LMS và lập báo cáo nghiệm thu kỹ thuật.',
        ['Lab8-01_Custom_Mission'], [
      {
            "id": "q-practice-8-capstone-1",
            "type": "single_choice",
            "prompt": "Mô hình Quản lý Vòng đời Dự án theo Pha (Phased Project Planning) của NASA/ESA chia vòng đời sứ mệnh không gian thành mấy pha chính?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Chỉ bao gồm một giai đoạn duy nhất trong vòng đời"
                  },
                  {
                        "id": "B",
                        "text": "Gồm 6 pha từ Pre-Phase A đến Phase E"
                  },
                  {
                        "id": "C",
                        "text": "Gồm 2 pha cơ bản là chế tạo và vận hành trên quỹ đạo"
                  },
                  {
                        "id": "D",
                        "text": "Gồm 100 pha nhỏ chia tách thành các nhiệm vụ độc lập"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-2",
            "type": "single_choice",
            "prompt": "Hoàn thành khối kiến thức Kỹ thuật Hệ thống Sứ mệnh Không gian, học viên sở hữu tư duy kỹ thuật đỉnh cao nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Tư duy thương mại và kinh doanh buôn bán các thiết bị vệ tinh"
                  },
                  {
                        "id": "B",
                        "text": "Tư duy của người thợ sửa chữa và thay thế linh kiện thủ công"
                  },
                  {
                        "id": "C",
                        "text": "Tư duy sáng tác văn học và viết các bài báo khoa học đại chúng"
                  },
                  {
                        "id": "D",
                        "text": "Tư duy Kỹ sư Trưởng quản lý giao diện, rủi ro và quy trình MECE"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-3",
            "type": "single_choice",
            "prompt": "Trong thiết kế sứ mệnh IoT chuyển tiếp dữ liệu (Store-and-Forward Mission), thuật ngữ 'Store-and-Forward' mô tả nguyên lý gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Vệ tinh thu dữ liệu IoT mặt đất, lưu trên tàu rồi trút xuống trạm"
                  },
                  {
                        "id": "B",
                        "text": "Quy trình chuyển tiếp các bức thư tay truyền thống qua đường bưu điện"
                  },
                  {
                        "id": "C",
                        "text": "Lưu trữ các kiện hàng hóa vật lý bên trong kho bãi trung chuyển"
                  },
                  {
                        "id": "D",
                        "text": "Hoạt động kinh doanh và bán hàng trực tuyến qua mạng Internet mở"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-4",
            "type": "single_choice",
            "prompt": "Dung lượng bộ nhớ lưu trữ trên vệ tinh cho sứ mệnh Store-and-Forward cần được tính toán dựa trên những yếu tố nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Lựa chọn ngẫu nhiên một con số bất kỳ theo cảm tính của kỹ sư"
                  },
                  {
                        "id": "B",
                        "text": "Dung lượng điện tích định mức khả dụng của bộ pin năng lượng"
                  },
                  {
                        "id": "C",
                        "text": "Tổng khối lượng vật liệu kim loại nhôm dùng để gia công khung"
                  },
                  {
                        "id": "D",
                        "text": "Số nút cảm biến, kích thước gói tin, tần suất gửi và thời gian trễ"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-5",
            "type": "single_choice",
            "prompt": "Khái niệm 'Latency' (Độ trễ dữ liệu) trong mạng vệ tinh Store-and-Forward quỹ đạo LEO thường nằm trong khoảng nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "0.01 đến 0.05 giây"
                  },
                  {
                        "id": "B",
                        "text": "1 đến 3 giây"
                  },
                  {
                        "id": "C",
                        "text": "30 đến 60 phút"
                  },
                  {
                        "id": "D",
                        "text": "12 đến 24 giờ"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-6",
            "type": "single_choice",
            "prompt": "Hệ thống phao cứu nạn khẩn cấp Cospas-Sarsat quốc tế hoạt động dựa trên dải tần số vô tuyến nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "10 đến 20 byte"
                  },
                  {
                        "id": "B",
                        "text": "64 đến 128 byte"
                  },
                  {
                        "id": "C",
                        "text": "10 đến 20 Megabyte"
                  },
                  {
                        "id": "D",
                        "text": "1 đến 2 Gigabyte"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-7",
            "type": "single_choice",
            "prompt": "Mục tiêu sứ mệnh của Đề tài Capstone 1: 'Hệ thống Viễn thám & Giám sát Cháy rừng' là gì?",
            "choices": [
                  {
                        "id": "A",
                        "text": "CubeSat 1U tích hợp OV2640 chụp ảnh, dò cháy và gửi tọa độ"
                  },
                  {
                        "id": "B",
                        "text": "Đo khoảng cách vật lý từ vị trí vệ tinh tới tâm Mặt Trời"
                  },
                  {
                        "id": "C",
                        "text": "Chữa cháy trực tiếp các đám cháy rừng bằng nước phun từ trên"
                  },
                  {
                        "id": "D",
                        "text": "Dự báo thời điểm và cường độ xuất hiện của các trận động đất"
                  }
            ]
      },
      {
            "id": "q-practice-8-capstone-8",
            "type": "single_choice",
            "prompt": "Phương pháp phát hiện đám cháy rừng dựa trên xử lý ảnh của Camera OV2640 sử dụng thuật toán nào?",
            "choices": [
                  {
                        "id": "A",
                        "text": "Đo đạc độ dày cơ học của tệp hình ảnh kỹ thuật số chụp được"
                  },
                  {
                        "id": "B",
                        "text": "Đếm số lượng lá cây trên các tán rừng xuất hiện trong khung"
                  },
                  {
                        "id": "C",
                        "text": "Quan sát trực tiếp và đánh giá định tính bằng mắt thường của người"
                  },
                  {
                        "id": "D",
                        "text": "Phân tích màu nhận diện điểm ảnh đỏ-cam kết hợp khói xám"
                  }
            ]
      }
]),
    ],
  },
};

export const labQuestionsUrl = labId => '/lab' + labId + '/questions';
export function getLabQuestionSet(labId) { return LAB_QUESTION_SETS[labId] || null; }
