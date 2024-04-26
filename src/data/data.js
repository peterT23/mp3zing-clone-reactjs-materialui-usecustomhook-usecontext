import Track1 from "./music/BenTuongPhung-PhuQuyTre.mp3";
import Track2 from "./music/CoPhong-HoQuangHieu.mp3";
import Track3 from "./music/Dangnamnhi.mp3";
import Track4 from "./music/HoaNoBenDuong-QuangDangTran.mp3";
import Track5 from "./music/sau-loi-tu-khuoc.mp3";
import Track6 from "./music/CoSaoCungDanh-DatKaa.mp3";
import Track7 from "./music/camtucau.mp3";
import Track8 from "./music/Thang4LaLoiNoiDoiCuaEmSEESINGSHARE1-HaAnhTuan.mp3";
import Track9 from "./music/TraiTimGiuaBauTroi-TrinhDinhQuang.mp3";
import Track10 from "./music/DanOngKhongNoi-PhanManhQuynhKarik.mp3";
import img1 from "./music-image/bentuongphung.jpeg";
import img2 from "./music-image/cophong.jpeg";
import img3 from "./music-image/Dangnamnhi.jpeg";
import img4 from "./music-image/Hoanobenduong.jpeg";
import img5 from "./music-image/sauloitukhuoc.jpeg";
import img6 from "./music-image/cosaocungdanh.jpeg";
import img7 from "./music-image/camtucau.jpeg";
import img8 from "./music-image/thangtulaloinoidoicuaem.jpeg";
import img9 from "./music-image/traitimgiuabautroi.jpeg";
import img10 from "./music-image/danongkhongnoi.jpeg";

const data = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Bến Tương Phùng",
      file: Track1,
      musician: "Lê Chí Trung",
      singer: "Phú Quý",
      type: "V-pop, Việt Nam",
      like: "106,9k",
      playTime: "2,2M",
      img: img1,
    },
    {
      name: "Cô Phòng",
      file: Track2,
      musician: "Huỳnh Văn",
      singer: "Hồ Quang Hiếu",
      type: "V-pop, Việt Nam",
      like: "10,9k",
      playTime: "500K",
      img: img2,
    },
    {
      name: "Đấng Nam Nhi",
      file: Track3,
      musician: "Nguyễn Vĩ",
      singer: "Thái Học",
      type: "V-pop, Việt Nam",
      like: "123k",
      playTime: "1.2M",
      img: img3,
    },
    {
      name: "Hoa Nở Bên Đường",
      file: Track4,
      musician: "Đông Thiên Đức",
      singer: "Quang Đăng",
      type: "V-pop, Việt Nam",
      like: "123k",
      playTime: "1.2M",
      img: img4,
    },

    {
      name: "Sau Lời Từ Khước",
      file: Track5,
      musician: "Phan Mạnh Quỳnh",
      singer: "Phan Mạnh Quỳnh",
      type: "V-pop, Việt Nam",
      like: "123k",
      playTime: "1.2M",
      img: img5,
    },

    {
      name: "Có sao cũng đành",
      file: Track6,
      musician: "Nguyễn Tấn Đạt",
      singer: "DatKaa",
      type: "V-pop, Việt Nam",
      like: "35,3k",
      playTime: "2M",
      img: img6,
    },
    {
      name: "Cẩm Tú Cầu",
      file: Track7,
      musician: "Huỳnh Văn",
      singer: "Rayo,Huỳnh Văn",
      type: "V-pop, Việt Nam",
      like: "76,6k",
      playTime: "2,6M",
      img: img7,
    },
    {
      name: "Tháng 4 là lời nói dối của em",
      file: Track8,
      musician: "Phạm Toàn Thắng",
      singer: "Hà Anh Tuấn",
      type: "V-pop, Việt Nam",
      like: "76,6k",
      playTime: "2,6M",
      img: img8,
    },
    {
      name: "Trái tim giữa bầu trời",
      file: Track9,
      musician: "Trịnh Đình Quang",
      singer: "Trịnh Đình Quang",
      type: "V-pop, Việt Nam",
      like: "16k",
      playTime: "480k",
      img: img9,
    },
    {
      name: "Đàn ông không nói",
      file: Track10,
      musician: "Phan Mạnh Quỳnh, Karik",
      singer: "Phan Mạnh Quỳnh, Karik",
      type: "V-pop, Việt Nam",
      like: "171,5k",
      playTime: "10M",
      img: img10,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

export default data;
