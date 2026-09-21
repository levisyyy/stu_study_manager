/**
 * 登录配置（MVP 阶段写死在前端；注意：纯前端校验可被绕过，
 * 正式上线应换成后端鉴权，此处仅作观看门槛）
 */
window.SITE_AUTH = {
  username: "13391986339",
  password: "111"
};

/**
 * 课程与课节数据（MVP 阶段写死在本地，后续接后端时替换为接口请求）
 * 结构：一个课程包含多个课节；列表页右上角"切换"可切换课程
 *
 * 新增课程：在 COURSES 数组加一个 { id, name, lessons: [...] }
 * 新增课节：在对应课程的 lessons 数组里加一条，type 分两种：
 * - 不填 type（默认 url 模式）：走 xgplayer 播放直链，填 url 字段
 * - type: "vod"（云点播 SimpleAES 加密课节）：走 TCPlayer，
 *   填 appID/fileID/psign/licenseUrl/domain
 */
window.DEFAULT_COURSE_ID = "shufa-chuji";

window.COURSES = [
  {
    id: "shufa-chuji",
    name: "书法初级班",
    lessons: [
      {
        id: "vidio1",
        title: "第一课 ·supbase",
        desc: "录播课 · mp4",
        url: "https://guvvcvlmafohlyhbdpil.supabase.co/storage/v1/object/sign/test_vidio/test/vidio1.mp4?token=eyJraWQiOiJmMDUxMWQ2Zi1kMjRiLTQ2YTctYmFlYS0zNTQ3ZWQ3MjlhYWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZXN0X3ZpZGlvL3Rlc3QvdmlkaW8xLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAwMDU1OTQsImV4cCI6MjA3MzgyOTU5NH0.rCXsWfySbdIPNOjjNKJkPr_RGSrN8BDwfZkDqBy8_Uk"
      },
      {
        id: "lesson3",
        title: "第三课 · SimpleAES 加密视频",
        desc: "录播课 · HLS 私有加密（需 psign）",
        type: "vod",
        appID: "1257306140",
        fileID: "5001834821483851066",
        // 用控制台「播放器签名工具」生成（过期时间可不填=永久有效）
        psign: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTI1NzMwNjE0MCwiZmlsZUlkIjoiNTAwMTgzNDgyMTQ4Mzg1MTA2NiIsImN1cnJlbnRUaW1lU3RhbXAiOjE3OTAwMTQ4NTAsImNvbnRlbnRJbmZvIjp7ImF1ZGlvVmlkZW9UeXBlIjoiUHJvdGVjdGVkQWRhcHRpdmUiLCJkcm1BZGFwdGl2ZUluZm8iOnsicHJpdmF0ZUVuY3J5cHRpb25EZWZpbml0aW9uIjoxMn19LCJ1cmxBY2Nlc3NJbmZvIjp7ImRvbWFpbiI6IjEyNTczMDYxNDAudm9kLXFjbG91ZC5jb20iLCJzY2hlbWUiOiJIVFRQUyJ9fQ.jVkcRJ3nzmSff8xgaPkWZRAgTzucfS_yBT_AKeqvy2s",
        // 视立方控制台申请的 Web 播放器基础版 License（免费/一年），绑定域名 lessyysry.com
        licenseUrl: "https://1257306140.trtcube-license.cn/license/v2/1257306140_1/v_cube.license",
        // License 绑定的域名（本地 localhost 调试时播放器用它通过域名校验）
        domain: "lessyysry.com"
      }
    ]
  },
  {
    id: "guohua-chuji",
    name: "国画初级班",
    lessons: [
      {
        id: "lesson2",
        title: "第二课 · 腾讯云点播视频",
        desc: "录播课 · mp4",
        url: "https://1257306140.vod-qcloud.com/ce45b85fvodcq1257306140/b4105d3e5001834821483851066/h49NHxPfvzcA.mp4"
      }
    ]
  }
];
