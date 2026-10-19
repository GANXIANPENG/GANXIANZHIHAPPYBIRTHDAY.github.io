/*
 * 把照片 / 视频放进 assets/，再将对应路径写入 src。
 * 例如：src: "assets/childhood-01.webp"
 * 视频请设 kind: "video"，并可提供 poster: "assets/video-cover.webp"。
 */
window.MEMORIES = [
  { id: "01", chapter: "childhood", chapterName: "最初的星球", title: "小小的你", date: "THE BEGINNING", caption: "在这里写下一句关于这张照片的回忆。", kind: "image", src: assets/1.jpg"", poster: "", art: "rose" },
  { id: "02", chapter: "childhood", chapterName: "最初的星球", title: "那年的夏天", date: "A SUNNY DAY", caption: "留一句只有你们记得的细节。", kind: "image", src: "", poster: "", art: "blue" },
  { id: "03", chapter: "family", chapterName: "我们的轨道", title: "一起回家的路", date: "SAME ORBIT", caption: "一段平常日子里的小小闪光。", kind: "image", src: "", poster: "", art: "gold" },
  { id: "04", chapter: "family", chapterName: "我们的轨道", title: "家的声音", date: "HOME FREQUENCY", caption: "可以放一张合照，或一段家人的视频。", kind: "image", src: "", poster: "", art: "violet" },
  { id: "05", chapter: "adventure", chapterName: "去往远方", title: "地图之外", date: "OUT OF ORBIT", caption: "写下你们一起去过的地方。", kind: "image", src: "", poster: "", art: "teal" },
  { id: "06", chapter: "adventure", chapterName: "去往远方", title: "快乐的证据", date: "FIELD RECORDING", caption: "一段旅行视频，会让这颗星更鲜活。", kind: "video", src: "", poster: "", art: "coral" },
  { id: "07", chapter: "today", chapterName: "此刻的光", title: "现在的你", date: "RIGHT NOW", caption: "写一句此刻最想对她说的话。", kind: "image", src: "", poster: "", art: "mint" },
  { id: "08", chapter: "today", chapterName: "此刻的光", title: "下一颗星", date: "TO BE CONTINUED", caption: "未来还有很多故事，等着一起收藏。", kind: "image", src: "", poster: "", art: "lilac" }
];
