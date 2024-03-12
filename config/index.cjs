/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1f8b95a986492212',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1e55f3bb9b5f9bb776b6a1e9b57344c9',

  PROVINCE: '河南',
  CITY: '商丘',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofUwn6UqM45E0xJKyPtN-9_PkfVI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '9i409-BInlHmE-CSKKDutc7ysBUvRaXi-FTPRAHkCzo',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '02-22',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '哥哥', year: '2001', date: '04-08',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-05-12' },
      ],
      
    },
  ],

   TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'f138e98861b7399ebee5710a959cb2b7',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  },

    /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '9i409-BInlHmE-CSKKDutc7ysBUvRaXi-FTPRAHkCzo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ug-mLNR1ZApp0rgzYNeCIqmg5AZS7JpfpkmIiJgUceY',
    }
  ],

}

module.exports = USER_CONFIG
