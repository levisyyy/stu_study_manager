/**
 * 登录配置（MVP 阶段写死在前端；注意：纯前端校验可被绕过，
 * 正式上线应换成后端鉴权，此处仅作观看门槛）
 */
window.SITE_AUTH = {
  username: "13391986339",
  password: "111"
};

/**
 * 腾讯云 TCPlayer 公共配置（不加密直链 / SimpleAES 加密课节都会用到）
 * licenseUrl：视立方控制台申请的 Web 播放器基础版 License（免费/一年）
 * domain：License 绑定的域名（GitHub Pages 部署；本地 localhost 调试时播放器用它过域名校验）
 */
window.VOD_CONFIG = {
  licenseUrl: "https://1257306140.trtcube-license.cn/license/v2/1257306140_1/v_cube.license",
  domain: "levisyyy.github.io"
};

/**
 * 课程与课节数据（MVP 阶段写死在本地，后续接后端时替换为接口请求）
 * 结构：一个课程包含多个课节；列表页右上角"切换"可切换课程
 *
 * 课节播放模式（type 字段）：
 * - 不填 type：xgplayer 播直链（填 url）
 * - type: "tcplayer"：TCPlayer 播腾讯云不加密直链（填 url；License 走 VOD_CONFIG）
 * - type: "vod"：TCPlayer 播 SimpleAES 加密课节
 *   （填 appID/fileID/psign，psign 用控制台「播放器签名工具」生成）
 */
window.DEFAULT_COURSE_ID = "shufa-chuji";

window.COURSES = [
  {
    id: "shufa-chuji",
    name: "书法初级班",
    lessons: [
      {
        id: "1",
        title: "第一节腾讯云不加密",
        desc: "TCPlayer 播放 · 不加密",
        type: "tcplayer",
        url: "https://1257306140.vod-qcloud.com/ce45b85fvodcq1257306140/b4105d3e5001834821483851066/h49NHxPfvzcA.mp4"
      },
      {
        id: "2",
        title: "第二节腾讯云加密视频",
        desc: "TCPlayer 播放 · SimpleAES 加密",
        type: "vod",
        appID: "1257306140",
        fileID: "5001834821483851066",
        // 用控制台「播放器签名工具」生成（过期时间可不填=永久有效）
        psign: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTI1NzMwNjE0MCwiZmlsZUlkIjoiNTAwMTgzNDgyMTQ4Mzg1MTA2NiIsImN1cnJlbnRUaW1lU3RhbXAiOjE3OTAwMTQ4NTAsImNvbnRlbnRJbmZvIjp7ImF1ZGlvVmlkZW9UeXBlIjoiUHJvdGVjdGVkQWRhcHRpdmUiLCJkcm1BZGFwdGl2ZUluZm8iOnsicHJpdmF0ZUVuY3J5cHRpb25EZWZpbml0aW9uIjoxMn19LCJ1cmxBY2Nlc3NJbmZvIjp7ImRvbWFpbiI6IjEyNTczMDYxNDAudm9kLXFjbG91ZC5jb20iLCJzY2hlbWUiOiJIVFRQUyJ9fQ.jVkcRJ3nzmSff8xgaPkWZRAgTzucfS_yBT_AKeqvy2s"
      },
      {
        id: "3",
        title: "第1节sup不加密",
        desc: "xgplayer 播放 · 不加密",
        url: "https://guvvcvlmafohlyhbdpil.supabase.co/storage/v1/object/sign/test_vidio/test/vidio1.mp4?token=eyJraWQiOiJmMDUxMWQ2Zi1kMjRiLTQ2YTctYmFlYS0zNTQ3ZWQ3MjlhYWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZXN0X3ZpZGlvL3Rlc3QvdmlkaW8xLm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTAwMDU1OTQsImV4cCI6MjA3MzgyOTU5NH0.rCXsWfySbdIPNOjjNKJkPr_RGSrN8BDwfZkDqBy8_Uk"
      }
    ]
  },
  {
    id: "guohua-chuji",
    name: "国画初级班",
    lessons: []
  }
];
