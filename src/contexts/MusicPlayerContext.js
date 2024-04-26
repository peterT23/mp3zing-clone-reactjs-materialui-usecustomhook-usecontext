import React, { useState } from "react";
// import Track1 from "../data/music/";
// import Track2 from "../data/music/CoPhong-HoQuangHieu.mp3";
// import Track3 from "../data/music/Dangnamnhi.mp3";
// import Track4 from "../data/music/HoaNoBenDuong-QuangDangTran.mp3";
// import Track5 from "../data/music/sau-loi-tu-khuoc.mp3";
// import img1 from "public/music-image/bentuongphung.jpeg";
// import img2 from "public/music-image/cophong.jpeg";
// import img3 from "public/music-image/Dangnamnhi.jpeg";
// import img4 from "public/music-image/Hoanobenduong.jpeg";
// import img5 from "/public/music-image/sauloitukhuoc.jpeg";

import data from "../data/data";
const MusicPlayerContext = React.createContext();

const defaultValues = data;

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
