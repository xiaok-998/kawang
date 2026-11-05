/* ============================================================
   商城资源配置文件
   ------------------------------------------------------------
   所有联系方式、收款码、商品图片 / 视频都集中在这里。改这个文件即可，
   index.html 不用动。

   规则：
   1. 图片、视频放 img/ 目录，路径写 'img/文件名'；
   2. items 按商品 id 配图，配了就用这一组（第一张是商品原图，自动排最前）；
   3. 某个商品没在 items 里配，就回退到 gallery 里同分类的图集；
   4. 分类也没配，就只用商品自带的原图；
   5. 不需要的项留空数组 [] 或删掉。

   商品 id 对照（items 里的键）：
     IOS 和平精英全系统
       i1  全系统CN                i2  Via全系统内透
       i3  A全系统内透              i4  ST巨魔
       i5  NV单绘制                i6  SKC裸奔追踪
       g_ds6cce  FuckSTE           g_obmb55  星巴克STE内核
       g_ajq7v3  全系统Core自签      g_pg1xcj  和平雷达
     IOS 和平定制
       i7  止痛药Air               i8  Via-全火版          i9  超人漏打
     安卓和平
       i10 万达漏打追踪             i11 和平VS陀螺仪        i12 Aipro白金
       g_prpwwm 定制版机刷单透
     IOS CF穿越
       g_h44sow  CFM/GG绘制        g_ygosas  TroCFM内透
     IOS 三角洲
       g_e4lowo  Tcll              g_59vlus  RikkaM 雷达
   ============================================================ */

window.SHOP_CONFIG = {

    /* ---------- 联系方式（企业微信客服） ---------- */
    contact: {
        kfLink: 'https://work.weixin.qq.com/kfid/kfcd5f15f36aef89671',  // 一键跳转：点按钮直接拉起企微客服会话
        kfQr: 'img/kf_qr.jpg',                             // 客服二维码（扫码联系），放 img/ 里，换成远程直链也行
        kfTip: '微信扫码 或 点击按钮 直接联系在线客服',       // 弹窗里的一句提示文案
        contactPlaceholder: '请输入QQ或联系方式...',         // 下单输入框提示语
    },

    /* ---------- 收款二维码（全站唯一下单入口） ----------
       两张码就是本站自己的收款码，已存到 img/ 目录，页面不再依赖任何外部 CDN。
       换码两种方式，都只改下面这两个字符串：
         1) 本地图：把新码丢进 img/ 目录，写 'img/文件名.png'（推荐，加载最快）；
         2) 远程图：直接写 https 直链（png / jpg / webp 都行），但对方站挂掉时码会拉不到。
       改了保存刷新即生效，不用动 index.html。

       当前两张码的解码内容（自己重新生成时填同样的值）：
         微信   wxp://f2f0u682feWn4gsYcBCRYCCwafsOI5XjTWbo3Eu4m3COZDkg8Vq8KP_Yfce3f2yz97BN
         支付宝 https://qr.alipay.com/2m614791xrnqchcixykhk31 */
    pay: {
        wechat: 'img/pay_wechat.png',
        alipay: 'img/pay_alipay.png',
    },

    /* ---------- 商品级图集：每个商品自己的实拍图
       发卡商品的键用商品名（店铺 goods_key 会变，名称稳定），自营商品用 id ----------
       按商品 id 配。原则：一张图只给一个商品用，不跨商品重复。
       商品自带的原图（img/item_*.jpg）自动排第一张，这里配的排在后面。
       没配的商品回退到分类图（index.html 数据块里的 cat 图）。 */
    items: {
        /* ===== 和平精英全系统（iOS）===== */
        'i1':       ['img/cn_bai.jpg'],                        // 巅峰赛 SSS 战绩实拍
        'i2':       ['img/via_panel.jpg', 'img/peace_via.jpg'],// Via 设置面板 + Via-Air HUD 实拍
        'i3':       ['img/a_neitou.jpg'],                      // A 内透吃鸡结算实拍
        'i4':       ['img/st_menu.jpg'],                       // ST 内核菜单实拍
        'i5':       ['img/satan_menu.jpg', 'img/peace_ace.jpg'],// Satan 绘制菜单 + 王牌结算
        'i6':       ['img/skc_menu.jpg'],                      // SKC 菜单实拍
        'FuckSTE': ['img/ios_anchor.jpg', 'img/peace_rank.jpg'],// iOS 主播同款海报 + 王牌主页
        '星巴克STE内核（全系统）': ['img/hall_live.jpg', 'img/peace_badge.jpg'],// 大厅实拍 + 王牌徽章实战
        '全系统Core自签': ['img/baibang.jpg', 'img/peace_win.jpg'],  // 百榜同款海报 + 吃鸡冠军
        '和平雷达（一卡通）': ['img/peace_stats.jpg'],                   // 巅峰赛数据图（雷达数据感）

        /* ===== 和平定制（iOS）===== */
        'i7':       ['img/zhitongyao.jpg'],                    // 止痛药菜单实拍
        'i8':       ['img/see_through.jpg'],                   // 透视白模实战
        'i9':       ['img/louda_menu.jpg', 'img/peace_menu.jpg'],// 漏打菜单 + 心悦漏打实拍

        /* ===== 安卓和平 ===== */
        'i10':      ['img/wanda_track.jpg'],                   // 万达追踪菜单实拍
        'i11':      ['img/vs_gyro.jpg'],                       // 陀螺仪菜单实拍
        '定制版机刷单透': ['img/street_live.png'],                   // 街头实战大图

        /* ===== CF 穿越 ===== */
        'CFM/GG绘制（10.25更新）': ['img/cf_menu.jpg', 'img/cf_record.jpg'],  // CF 辅助菜单 + 战绩
        'TroCFM内透（全系统）': ['img/cf_live.jpg'],                       // CF 真机暗光实拍

        /* ===== 失控 ===== */
        'Rustmobile自瞄/追踪（全系统）': ['img/vip_poster.jpg'],                    // VIP 透视/无后/自瞄/追踪海报
    },

    /* ---------- 商品级视频：按商品 id 配，排在图片之后 ---------- */
    itemVideos: {
        'TroCFM内透（全系统）': 'img/cf_demo.mp4',   // CF 透视上色实战录屏
        'CFM/GG绘制（10.25更新）': 'img/cf_demo.mp4',
    },

    /* ---------- 分类兜底图集 ----------
       商品级已按"一图一用"分完，这里保持为空；
       没配图的商品直接用商品原图或分类图，不重复占用上面任何一张。 */
    gallery: {},

    /* ---------- 分类兜底视频 ---------- */
    videos: {},
};
