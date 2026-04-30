const toast = document.getElementById("toast");
const langToggle = document.getElementById("langToggle");
const accountToggle = document.getElementById("accountToggle");
const inviteRange = document.getElementById("inviteRange");
const inviteCount = document.getElementById("inviteCount");
const growthLabel = document.getElementById("growthLabel");
const nextUnlock = document.getElementById("nextUnlock");
const nextUnlockText = document.getElementById("nextUnlockText");
const chogath = document.getElementById("chogath");
const dish = document.getElementById("dish");
const startInviteButton = document.getElementById("startInviteButton");
const sharePostLogin = document.getElementById("sharePostLogin");
const shareChannelStub = "whatsapp";
const copyLinkButton = document.getElementById("copyLinkButton");
const downloadCardButton = document.getElementById("downloadCardButton");
const inviteLinkValue = document.getElementById("inviteLinkValue");
const returnStatusTitle = document.getElementById("returnStatusTitle");
const returnStatusText = document.getElementById("returnStatusText");
const simulateReturnButton = document.getElementById("simulateReturnButton");
const chapterDots = Array.from(document.querySelectorAll(".chapter-dot"));
const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
const chapterNavLinks = Array.from(document.querySelectorAll(".site-nav a, .chapter-actions a[href^=\"#\"]"));
const leaderboardTabs = Array.from(document.querySelectorAll(".leaderboard-tab"));
const leaderboardTable = document.getElementById("leaderboardTable");
const leaderboardCopy = document.getElementById("leaderboardCopy");
const prevPageButton = document.getElementById("prevPageButton");
const nextPageButton = document.getElementById("nextPageButton");
const storybookStage = document.querySelector(".storybook");
const feastRewardTierList = document.getElementById("feastRewardTierList");
const playTeaser = document.getElementById("playTeaser");
const modalShell = document.getElementById("modalShell");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const loginForm = document.getElementById("loginForm");
const riotId = document.getElementById("riotId");
const loginModalView = document.getElementById("loginModalView");
const cardModalView = document.getElementById("cardModalView");
const shareModalView = document.getElementById("shareModalView");
const shareModalTitleHeading = shareModalView.querySelector("h3");
const modalPreviewSender = document.getElementById("modalPreviewSender");
const modalPreviewFriend = document.getElementById("modalPreviewFriend");
const modalPreviewSavedSeatSuffix = document.getElementById("modalPreviewSavedSeatSuffix");
const modalPreviewDearPrefix = document.getElementById("modalPreviewDearPrefix");
const modalPreviewDearSuffix = document.getElementById("modalPreviewDearSuffix");
const modalPreviewChannel = document.getElementById("modalPreviewChannel");
const useCardButton = document.getElementById("useCardButton");
const closeCardButton = document.getElementById("closeCardButton");
const shareSummaryRecipient = document.getElementById("shareSummaryRecipient");
const shareSummaryChannel = document.getElementById("shareSummaryChannel");
const shareSummaryAccount = document.getElementById("shareSummaryAccount");
const shareSummaryLink = document.getElementById("shareSummaryLink");
const confirmSendButton = document.getElementById("confirmSendButton");
const backToCardButton = document.getElementById("backToCardButton");

function setTextIfPresent(element, value) {
  if (element) {
    element.textContent = value;
  }
}

const translations = {
  en: {
    pageTitle: "Still Hungry | The Return Book",
    langToggle: "中文",
    brandEyebrow: "Wild Rift Return Tale",
    brandTitle: "Still Hungry",
    navCover: "Prelude",
    navFeast: "Feast",
    navShare: "Letter",
    navReturn: "Return",
    prevPage: "Previous",
    nextPage: "Next",
    loginButton: "Log In",
    coverLabel: "Chapter I",
    coverTitle: "One seat is still waiting.",
    coverText:
      "Invite a friend back to Wild Rift. When they return, both of you get rewarded.",
    coverPrimary: "Invite a Friend",
    coverSecondary: "See How It Works",
    bookCover: "Still Hungry",
    bookCaption: "A page waits. A name can still be written into it.",
    promiseLabel: "Chapter II",
    promiseTitle: "Simple promise. Immediate reward.",
    promiseText:
      "Write one invite, send it fast, and let the return resolve instantly.",
    promisePill1: "A page written for one friend",
    promisePill2: "A feast that reacts in real time",
    promisePill3: "A reward path shared by both players",
    promiseCard1Title: "A page is written",
    promiseCard1Text: "Write one short line that feels personal.",
    promiseCard2Title: "Return + Reward",
    promiseCard2Text: "They come back. Both players get rewarded right away.",
    feastLabel: "Chapter III",
    feastTitle: "Slide to preview rewards",
    feastRewardsHeading: "Rewards",
    sliderLabel: "Returning friends",
    rewardTeaseLabel: "The next plate",
    rewardTeaseText: "A few more guests and the feast tips into the next reward tier.",
    shareLabel: "Chapter IV",
    shareEntryTitle: "Invite a friend back",
    shareEntryText:
      "Tap start, sign in with your Wild Rift account, then copy your link or download a story card.",
    startInvite: "Start inviting",
    shareEntryNote: "Reward tiers are previewed in Chapter III.",
    copyInviteLink: "Copy invite link",
    downloadSocialCard: "Download story card",
    senderLabel: "Who writes the page",
    senderPlaceholder: "Your summoner name",
    friendLabel: "Who receives it",
    friendPlaceholder: "Friend name",
    channelLabel: "Where it appears",
    channelWhatsapp: "WhatsApp / iMessage",
    channelTwitter: "X / Twitter",
    channelInstagram: "Instagram Story",
    channelTiktok: "TikTok Clip",
    generateLink: "Write Invite Link",
    copyLink: "Copy invite link",
    sendInvite: "Send Invite",
    sendInviteDirect: "Send This Link",
    sendInviteVisual: "Prepare Story Post",
    openCardButton: "Compose Social Card",
    openCardReady: "Open Social Card",
    linkStateLabel: "Invitation",
    linkStateTitle: "Your tracked invite URL",
    linkStateText:
      "Generate first. Direct channels send it raw; visual channels can add a story card.",
    linkSummaryLabel: "Invite URL",
    channelGuidanceDirectTitle: "Direct-share channel",
    channelGuidanceDirectText:
      "This channel can carry the invite link on its own. The social card is optional, not essential.",
    channelGuidanceVisualTitle: "Visual-share channel",
    channelGuidanceVisualText:
      "This channel needs a visual story asset, but the same tracked invite link still has to live in the caption, sticker, bio, or follow-up message.",
    qrNote: "QR codes still matter for offline posters, broadcasts, or event signage, but they should not be the main mobile invite path here.",
    stateLoggedOut: "Logged out",
    stateLoggedIn: "Logged in",
    stateLinkMissing: "Link not generated",
    stateLinkReady: "Link ready",
    stateCardMissing: "Card not generated",
    stateCardReady: "Card ready",
    previewSmall: "A page from the story",
    previewSavedSeatSuffix: " saved you a seat.",
    previewDearPrefix: "Dear ",
    previewDearSuffix: ", the feast is waiting and the Rift remembers.",
    previewOptimised: "Optimised for",
    flowLabel: "What happens next",
    flow1Title: "A page arrives",
    flow1Text: "The friend receives something that feels written for them, not blasted to everyone.",
    flow2Title: "The world opens",
    flow2Text: "They enter the story layer first, where the invitation feels ceremonial instead of transactional.",
    flow3Title: "The Rift calls",
    flow3Text: "A deep link then sends them back into Wild Rift to complete the return.",
    flow4Title: "The feast moves",
    flow4Text: "Cho'Gath responds, the table changes, and both players step closer to the next reward.",
    loginModalLabel: "Account Gate",
    loginModalTitle: "Sign in before the page can be addressed to someone.",
    loginModalText:
      "The campaign still needs a real Wild Rift account underneath the story, so the tracked link, reward resolution, and return event can all belong to the correct player.",
    loginField1: "Riot ID",
    loginField2: "Region",
    loginConfirm: "Log In to Continue",
    cardModalLabel: "Generated Story Page",
    cardModalTitle: "This is the version made for visual channels.",
    useCardButton: "Use This Page",
    closeModalButton: "Close",
    shareModalLabel: "Send Invite",
    shareModalTitle: "Review the delivery flow before it goes out.",
    shareModalTitleDirect: "You are about to send the tracked path itself.",
    shareModalTitleVisual: "You are about to publish a story asset that still leads back to the same tracked path.",
    summaryRecipient: "Recipient",
    summaryChannel: "Channel",
    summaryAccount: "Account",
    summaryLink: "Invite Link",
    sendFlow1Title: "Address the page",
    sendFlow1Text: "The invitation is prepared for the selected channel without losing its tracked path.",
    sendFlow2Title: "Let it travel",
    sendFlow2Text: "The message carries the reader back to the story and from there into the game.",
    sendFlow3Title: "Let it count",
    sendFlow3Text: "The system records who sent it, who received it, and whether the return really happened.",
    confirmSendButton: "Confirm and Send",
    backToCardButton: "Back to Card",
    returnLabel: "Chapter V",
    returnTitle: "Friend returns → rewards unlock",
    returnText:
      "Deep link opens Wild Rift. Both accounts update instantly.",
    returnCard1Label: "For the returning player",
    returnCard1Title: "Return to Wild Rift",
    returnCard1Text: "If the game is already installed, go straight in. If not, route to the store first and resume the story after first open.",
    returnCard2Label: "For the inviter",
    returnCard2Title: "See the table change",
    returnCard2Text: "A plate disappears, Cho'Gath grows, and the progress moves before the moment can feel abstract.",
    returnStatusLabel: "Current ending",
    returnStatusTitle: "Waiting for your first sent invite",
    returnStatusText:
      "Once a friend receives the story page, you can simulate the comeback moment here.",
    returnStatusArmedTitle: "Invite delivered. Waiting for comeback.",
    returnStatusArmedText:
      "Your friend has the story page. Trigger the return when you want to demo the reward resolution.",
    returnStatusDoneTitle: "The comeback is complete.",
    returnStatusDoneText:
      "Cho'Gath has eaten, the count has increased, and both players are now closer to the next tier.",
    simulateReturn: "Simulate Friend Return",
    rewardFeatureLabel: "Grand Prize",
    reward1Label: "1 friend",
    reward1Text: "Champion chest for both inviter and returning friend.",
    reward3Label: "3 friends",
    reward3Text: "Champion capsule and XP boost.",
    reward5Label: "5 friends",
    reward5Text: "Still Hungry loading screen and Cho'Gath emote.",
    reward7Label: "7 friends",
    reward7Text: "Rare chest and storybook ward skin.",
    reward10Label: "10 friends",
    reward10Text: "Pebble icon and campaign-exclusive border.",
    rewardTopLabel: "Global #1",
    rewardTopText: "Co-design a Cho'Gath skin with Riot.",
    epilogueLabel: "Chapter VI",
    epilogueTitle: "Invite now. Bring them back.",
    epilogueText:
      "Keep it simple: share the link, get the return, claim the reward.",
    leaderboardHeading: "Those Who Fed The Feast",
    leaderboardGlobal: "World Table",
    leaderboardRegional: "Nearby Table",
    leaderboardGlobalText: "The players who turned the feast into a global spectacle.",
    leaderboardRegionalText: "Players close enough to feel beatable, visible, and worth chasing.",
    leaderboardColRank: "Rank",
    leaderboardColPlayer: "Player",
    leaderboardColReturns: "Returns",
    playTeaser: "Watch the film",
    toastLinkReady: "Invite link generated.",
    toastLinkCopied: "Invite link copied.",
    toastNeedLogin: "Please log in first.",
    toastNeedLink: "Generate your invite link first.",
    toastNeedCard: "Create the social card first for visual-share channels.",
    toastLoggedIn: "Logged in. Copy your link or download the card.",
    toastInviteSent: "The page is on its way.",
    toastCardReady: "Story card generated.",
    toastCardDownloaded: "Story card downloaded.",
    toastCardDownloadFailed: "Could not export the card. Try again.",
    toastReturnComplete: "Return resolved. The feast just grew.",
    toastTeaserPlaceholder: "Film placeholder for now. The chapter can later hold the final trailer.",
    sizeText0: "The cutlery is aligned. Cho'Gath waits with impossible patience.",
    sizeText1: "The first plate arrives. He notices.",
    sizeText2: "Another guest returns. The feast has properly begun.",
    sizeText3: "He rises above the silverware. The room starts to feel smaller.",
    sizeText4: "This is no longer dinner. It has become an event.",
    sizeText5: "The feast has tipped into myth.",
    unlockText1: "A little longer, and the table reaches its first real flourish.",
    unlockText2: "The next returns push the feast toward its signature reward tier.",
    unlockText3: "One more wave of guests, and Cho'Gath becomes impossible to ignore.",
    unlockText4: "Only a few seats remain before the campaign-exclusive border appears.",
    unlockText5: "You are now chasing the final chapter of the feast."
  },
  zh: {
    pageTitle: "Still Hungry | 回归之书",
    langToggle: "EN",
    brandEyebrow: "Wild Rift 回流故事页",
    brandTitle: "Still Hungry",
    navCover: "序章",
    navFeast: "盛宴",
    navShare: "书信",
    navReturn: "回归",
    prevPage: "上一页",
    nextPage: "下一页",
    loginButton: "登录",
    coverLabel: "第一章",
    coverTitle: "只差你想邀请的那个人。",
    coverText:
      "邀请好友回归 Wild Rift。好友回来后，你们双方都能立刻拿到奖励。",
    coverPrimary: "立即邀请好友",
    coverSecondary: "看看怎么玩",
    bookCover: "Still Hungry",
    bookCaption: "这一页还空着，一个名字仍然可以被写进去。",
    promiseLabel: "第二章",
    promiseTitle: "承诺要简单，奖励要立刻。",
    promiseText:
      "写一句话、发出去；回归发生时，结果马上落地。",
    promisePill1: "一页写给某个人的邀请",
    promisePill2: "会实时回应的盛宴",
    promisePill3: "由双方共同推进的奖励路径",
    promiseCard1Title: "邀请",
    promiseCard1Text: "写一句更像“对他/她说”的话。",
    promiseCard2Title: "回归 + 领奖",
    promiseCard2Text: "好友回来了，你们两边都立刻拿到奖励。",
    feastLabel: "第三章",
    feastTitle: "拖动滑杆预览奖励",
    feastRewardsHeading: "奖励档位",
    sliderLabel: "回流好友数",
    rewardTeaseLabel: "下一道菜",
    rewardTeaseText: "再多几位宾客，盛宴就会翻进下一档奖励。",
    shareLabel: "第四章",
    shareEntryTitle: "邀请好友回归",
    shareEntryText:
      "点击开始邀请并登录 Wild Rift 账号，然后复制链接或下载社交卡片图片。",
    startInvite: "开始邀请",
    shareEntryNote: "奖励档位预览在第三章。",
    copyInviteLink: "复制邀请链接",
    downloadSocialCard: "下载社交卡片",
    senderLabel: "由谁写下这一页",
    senderPlaceholder: "输入你的名字",
    friendLabel: "写给谁",
    friendPlaceholder: "输入好友名字",
    channelLabel: "它将出现在哪里",
    channelWhatsapp: "WhatsApp / iMessage",
    channelTwitter: "X / Twitter",
    channelInstagram: "Instagram 故事",
    channelTiktok: "TikTok 短片",
    generateLink: "写下邀请链接",
    copyLink: "复制邀请链接",
    sendInvite: "发送邀请",
    sendInviteDirect: "发送这条链接",
    sendInviteVisual: "准备故事发布",
    openCardButton: "生成社交卡片",
    openCardReady: "打开社交卡片",
    linkStateLabel: "邀请本身",
    linkStateTitle: "你的可追踪邀请链接",
    linkStateText:
      "先生成链接：直发渠道可直接发送；视觉渠道可以加一张故事卡片。",
    linkSummaryLabel: "邀请链接",
    channelGuidanceDirectTitle: "直发型渠道",
    channelGuidanceDirectText:
      "这个渠道本身就能直接承载邀请链接，社交卡片只是锦上添花，不是必需品。",
    channelGuidanceVisualTitle: "视觉型渠道",
    channelGuidanceVisualText:
      "这个渠道需要视觉故事素材，但邀请链接仍然必须出现在贴纸、简介、文案或私信里，链路才算完整。",
    qrNote: "QR code 依然适合线下海报、直播或赛事现场，但不应该成为这里的主移动端邀请路径。",
    stateLoggedOut: "未登录",
    stateLoggedIn: "已登录",
    stateLinkMissing: "未生成链接",
    stateLinkReady: "链接已生成",
    stateCardMissing: "未生成卡片",
    stateCardReady: "卡片已生成",
    previewSmall: "来自故事中的一页",
    previewSavedSeatSuffix: " 为你留了位置。",
    previewDearPrefix: "亲爱的 ",
    previewDearSuffix: "，盛宴正在等你，峡谷依然记得你。",
    previewOptimised: "适配渠道",
    flowLabel: "接下来会发生什么",
    flow1Title: "一页送达",
    flow1Text: "好友收到的是像写给他的一页内容，而不是发给所有人的活动广播。",
    flow2Title: "世界被打开",
    flow2Text: "他先进入故事层，这样整个邀请更像仪式，而不是纯粹促销。",
    flow3Title: "峡谷发出召唤",
    flow3Text: "接着，深链才把他真正送回 Wild Rift，完成回归。",
    flow4Title: "盛宴开始回应",
    flow4Text: "Cho'Gath 会作出反应，餐桌会发生变化，而双方也一起迈向下一档奖励。",
    loginModalLabel: "账号验证",
    loginModalTitle: "在这一页真正写给某个人之前，你需要先登录。",
    loginModalText:
      "故事感可以在前台，但底层仍然需要真实的 Wild Rift 账号，好让邀请链接、奖励归属和回流事件都能准确落到正确玩家身上。",
    loginField1: "Riot ID",
    loginField2: "地区",
    loginConfirm: "登录并继续",
    cardModalLabel: "已生成故事页",
    cardModalTitle: "这是为视觉型渠道准备的故事页面版本。",
    useCardButton: "使用这一页",
    closeModalButton: "关闭",
    shareModalLabel: "发送邀请",
    shareModalTitle: "发送前，再确认一次完整投递流程。",
    shareModalTitleDirect: "你将直接发送这条可追踪的邀请路径。",
    shareModalTitleVisual: "你将发布一份故事素材，但它最终仍然会导回同一条邀请路径。",
    summaryRecipient: "接收对象",
    summaryChannel: "发送渠道",
    summaryAccount: "登录账号",
    summaryLink: "邀请链接",
    sendFlow1Title: "写上收件人",
    sendFlow1Text: "邀请会被整理成适合这个渠道的形式，但不会丢失底层追踪路径。",
    sendFlow2Title: "让它上路",
    sendFlow2Text: "这条消息会先把对方带回故事，再把他带回游戏。",
    sendFlow3Title: "让它被记住",
    sendFlow3Text: "系统会记录是谁发出、谁收到，以及这次回归是否真的发生。",
    confirmSendButton: "确认并发送",
    backToCardButton: "返回卡片",
    returnLabel: "第五章",
    returnTitle: "好友回归 → 立刻领奖",
    returnText:
      "深链打开 Wild Rift，两边账号即时结算。",
    returnCard1Label: "对回归者来说",
    returnCard1Title: "回到 Wild Rift",
    returnCard1Text: "如果已经安装，就直接进入游戏；如果没有，就先去商店下载，再在首次打开后续上这段故事。",
    returnCard2Label: "对邀请者来说",
    returnCard2Title: "看见餐桌变化",
    returnCard2Text: "一道菜消失，Cho'Gath 成长，进度在当下发生，而不是事后才被理解。",
    returnStatusLabel: "当前结局",
    returnStatusTitle: "还没有发出第一张邀请卡",
    returnStatusText:
      "当故事页被发送出去之后，你就可以在这里模拟好友回归并查看奖励结算。",
    returnStatusArmedTitle: "邀请已送达，等待好友回归。",
    returnStatusArmedText:
      "你的好友已经收到故事页。现在可以在演示时触发一次回流结算。",
    returnStatusDoneTitle: "回流已经完成。",
    returnStatusDoneText:
      "Cho'Gath 已经开吃，邀请数增加，双方也一起向下一档奖励推进。",
    simulateReturn: "模拟好友回归",
    rewardFeatureLabel: "大奖",
    reward1Label: "1 位好友",
    reward1Text: "邀请者和回归好友都获得 Champion chest。",
    reward3Label: "3 位好友",
    reward3Text: "获得 Champion capsule 与 XP boost。",
    reward5Label: "5 位好友",
    reward5Text: "解锁 Still Hungry 加载界面与 Cho'Gath 专属表情。",
    reward7Label: "7 位好友",
    reward7Text: "获得稀有宝箱与故事书风格 ward skin。",
    reward10Label: "10 位好友",
    reward10Text: "获得 Pebble icon 与活动限定边框。",
    rewardTopLabel: "全球第 1",
    rewardTopText: "与 Riot 共创一款 Cho'Gath 皮肤。",
    epilogueLabel: "第六章",
    epilogueTitle: "现在就邀请，把人带回来。",
    epilogueText:
      "就三步：分享链接、触发回归、领取奖励。",
    leaderboardHeading: "喂饱盛宴的人们",
    leaderboardGlobal: "世界长桌",
    leaderboardRegional: "附近长桌",
    leaderboardGlobalText: "那些把整场盛宴喂成全球奇观的玩家。",
    leaderboardRegionalText: "离你更近、也更值得去追赶的对手。",
    leaderboardColRank: "名次",
    leaderboardColPlayer: "玩家",
    leaderboardColReturns: "回流",
    playTeaser: "观看短片",
    toastLinkReady: "邀请链接已生成。",
    toastLinkCopied: "邀请链接已复制。",
    toastNeedLogin: "请先登录。",
    toastNeedLink: "请先生成邀请链接。",
    toastNeedCard: "视觉型渠道需要先生成社交卡片。",
    toastLoggedIn: "登录成功。现在可以复制链接或下载卡片。",
    toastInviteSent: "这一页已经出发了。",
    toastCardReady: "故事卡片已生成。",
    toastCardDownloaded: "卡片已下载。",
    toastCardDownloadFailed: "卡片生成失败，请重试。",
    toastReturnComplete: "回流已结算，盛宴刚刚成长了一次。",
    toastTeaserPlaceholder: "这里暂时还是短片占位，之后可以替换成正式影片。",
    sizeText0: "餐具已经摆好，Cho'Gath 以近乎不可能的耐心等待着。",
    sizeText1: "第一道菜终于上桌，它注意到了。",
    sizeText2: "又有一位宾客归来，盛宴这才真正开始。",
    sizeText3: "它已经高过银器，房间也随之显得更小了。",
    sizeText4: "这已经不只是晚餐，而是一场公开发生的盛事。",
    sizeText5: "盛宴已经翻进神话章节。",
    unlockText1: "再多停留一会儿，餐桌就会迎来第一次真正的盛放。",
    unlockText2: "接下来的回归，会把盛宴推向标志性的奖励层。",
    unlockText3: "再迎来一波宾客，Cho'Gath 就会变得再也无法被忽视。",
    unlockText4: "只差最后几张座位，活动限定边框就会出现。",
    unlockText5: "你已经开始追逐盛宴的最终篇章。"
  }
};

const boardData = {
  global: [
    ["#1", "PebbleKing", "118"],
    ["#2", "Thelma", "104"],
    ["#3", "Open Seat", "97"],
    ["#4", "Qiao", "83"]
  ],
  regional: [
    ["#12", "Thelma", "12"],
    ["#13", "RiceRift", "11"],
    ["#14", "NightQueue", "10"],
    ["#15", "Open Seat", "9"]
  ]
};

const growthStates = [
  { max: 0, scale: 0.82, sizeKey: "sizeText0", unlockKey: "unlockText1", next: 1 },
  { max: 3, scale: 0.9, sizeKey: "sizeText1", unlockKey: "unlockText1", next: 5 },
  { max: 7, scale: 1.02, sizeKey: "sizeText2", unlockKey: "unlockText2", next: 10 },
  { max: 12, scale: 1.14, sizeKey: "sizeText3", unlockKey: "unlockText3", next: 20 },
  { max: 16, scale: 1.24, sizeKey: "sizeText4", unlockKey: "unlockText4", next: 20 },
  { max: 20, scale: 1.36, sizeKey: "sizeText5", unlockKey: "unlockText5", next: 0 }
];

let currentLanguage = window.localStorage.getItem("still-hungry-lang") || "en";
let currentBoard = "global";
let isLoggedIn = false;
let linkGenerated = false;
let cardGenerated = false;
let inviteSent = false;
let friendReturned = false;
let generatedInviteLink = "riot.com/wr/feast?invite=thelma-wr";
let currentChapterIndex = 0;
let wheelLocked = false;
let scrollRaf = 0;

function updateAccountState() {
  const copy = getCopy();
  accountToggle.textContent = isLoggedIn ? riotId.value : copy.loginButton;

  if (friendReturned) {
    returnStatusTitle.textContent = copy.returnStatusDoneTitle;
    returnStatusText.textContent = copy.returnStatusDoneText;
  } else if (inviteSent) {
    returnStatusTitle.textContent = copy.returnStatusArmedTitle;
    returnStatusText.textContent = copy.returnStatusArmedText;
  } else {
    returnStatusTitle.textContent = copy.returnStatusTitle;
    returnStatusText.textContent = copy.returnStatusText;
  }

  updateShareChapterUi();
}

function isVisualChannel(channel = shareChannelStub) {
  return channel === "instagram" || channel === "tiktok";
}

function updateShareChapterUi() {
  if (!sharePostLogin || !startInviteButton) return;

  if (!isLoggedIn) {
    startInviteButton.hidden = false;
    sharePostLogin.hidden = true;
    sharePostLogin.classList.add("is-hidden");
    return;
  }

  startInviteButton.hidden = true;
  sharePostLogin.hidden = false;
  sharePostLogin.classList.remove("is-hidden");
}

function splitRiotId(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "Summoner";
  return trimmed.split("#")[0] || trimmed;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24) || "summoner";
}

function buildInviteLink() {
  const sender = slugify(riotId.value || "thelma");
  const friend = "friend";
  return `riot.com/wr/feast?invite=${sender}&friend=${friend}&channel=${shareChannelStub}`;
}

function openModal(view) {
  modalShell.classList.add("is-open");
  modalShell.setAttribute("aria-hidden", "false");
  [loginModalView, cardModalView, shareModalView].forEach((element) => {
    element.classList.toggle("is-active", element === view);
  });
}

function closeModal() {
  modalShell.classList.remove("is-open");
  modalShell.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function syncBookNavigation() {
  prevPageButton.disabled = currentChapterIndex === 0;
  nextPageButton.disabled = currentChapterIndex === chapters.length - 1;

  chapterDots.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentChapterIndex);
  });
}

function goToChapter(index) {
  const nextIndex = Math.max(0, Math.min(index, chapters.length - 1));
  const target = chapters[nextIndex];
  if (!target) return;
  currentChapterIndex = nextIndex;
  target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  syncBookNavigation();
}

function goToChapterById(id) {
  const nextIndex = chapters.findIndex((chapter) => chapter.id === id);
  if (nextIndex >= 0) {
    goToChapter(nextIndex);
  }
}

function nudgeChapter(direction) {
  if (wheelLocked) return;
  const nextIndex = currentChapterIndex + direction;
  if (nextIndex < 0 || nextIndex >= chapters.length) return;
  wheelLocked = true;
  goToChapter(nextIndex);
  window.setTimeout(() => {
    wheelLocked = false;
  }, 760);
}

function updateChapterFromScroll() {
  if (!storybookStage) return;
  if (modalShell.classList.contains("is-open")) return;
  const width = storybookStage.clientWidth || window.innerWidth;
  const rawIndex = width ? Math.round(storybookStage.scrollLeft / width) : 0;
  const nextIndex = Math.max(0, Math.min(rawIndex, chapters.length - 1));
  if (nextIndex !== currentChapterIndex) {
    currentChapterIndex = nextIndex;
    syncBookNavigation();
  }
}

function getCopy() {
  return translations[currentLanguage];
}

function getGrowthState(value) {
  return growthStates.find((state) => value <= state.max) ?? growthStates.at(-1);
}

function syncRewardTierList(listElement, count) {
  if (!listElement) return;
  const tiers = Array.from(listElement.querySelectorAll(".reward-tier-item"));
  const unlockedThresholds = tiers
    .map((tier) => Number(tier.dataset.threshold))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => a - b)
    .filter((threshold) => count >= threshold);

  const currentUnlocked = unlockedThresholds.length ? unlockedThresholds.at(-1) : 0;

  tiers.forEach((tier) => {
    const threshold = Number(tier.dataset.threshold);
    const unlocked = Number.isFinite(threshold) && count >= threshold;
    tier.classList.toggle("is-locked", !unlocked);
    tier.classList.toggle("is-active", unlocked && threshold === currentUnlocked);
  });
}

function updateGrowth(value) {
  const count = Number(value);
  const copy = getCopy();
  const state = getGrowthState(count);
  inviteCount.textContent = String(count);
  growthLabel.textContent = copy[state.sizeKey];
  nextUnlock.textContent = state.next ? String(Math.max(state.next - count, 0)) : "#1";
  nextUnlockText.textContent = copy[state.unlockKey];
  chogath.style.transform = `translateX(-50%) scale(${state.scale})`;

  dish.classList.remove("is-eaten");
  window.clearTimeout(updateGrowth.timeout);
  if (count > 0) {
    updateGrowth.timeout = window.setTimeout(() => {
      dish.classList.add("is-eaten");
    }, 220);
  }

  syncRewardTierList(feastRewardTierList, count);
}

function updatePreview() {
  const copy = getCopy();
  const sender = splitRiotId(riotId.value);
  const friend = "Friend";
  const channelKey = `channel${shareChannelStub.charAt(0).toUpperCase()}${shareChannelStub.slice(1)}`;
  const channelText = copy[channelKey] ?? "WhatsApp / iMessage";
  const shareLink = linkGenerated ? generatedInviteLink : buildInviteLink();
  setTextIfPresent(modalPreviewSender, sender);
  setTextIfPresent(modalPreviewFriend, friend);
  setTextIfPresent(modalPreviewSavedSeatSuffix, copy.previewSavedSeatSuffix);
  setTextIfPresent(modalPreviewDearPrefix, copy.previewDearPrefix);
  setTextIfPresent(modalPreviewDearSuffix, copy.previewDearSuffix);
  setTextIfPresent(modalPreviewChannel, `${copy.previewOptimised} ${channelText}`);
  setTextIfPresent(inviteLinkValue, shareLink);
  setTextIfPresent(shareSummaryRecipient, friend);
  setTextIfPresent(shareSummaryChannel, channelText);
  setTextIfPresent(shareSummaryAccount, riotId.value || "Thelma#WR");
  setTextIfPresent(shareSummaryLink, shareLink);
  setTextIfPresent(
    shareModalTitleHeading,
    isVisualChannel() ? copy.shareModalTitleVisual : copy.shareModalTitleDirect
  );
  confirmSendButton.textContent = isVisualChannel() ? copy.sendInviteVisual : copy.confirmSendButton;
}

async function generateStoryCardPngBlob() {
  const preview = document.querySelector(".modal-preview-page");
  if (!preview) {
    throw new Error("Missing preview markup");
  }

  const previousInlineDisplay = preview.style.display;
  preview.style.display = "block";

  try {
    const [{ default: htmlToCanvas }] = await Promise.all([
      import("https://cdn.jsdelivr.net/npm/html-to-image@1.11.13/+esm")
    ]);

    const dataUrl = await htmlToCanvas.toPng(preview, {
      pixelRatio: 2,
      cacheBust: true,
      backgroundColor: "#f0e4c8"
    });
    const response = await fetch(dataUrl);
    return await response.blob();
  } catch (error) {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas unsupported");
    }

    ctx.fillStyle = "#f0e4c8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(46, 26, 18, 0.22)";
    ctx.lineWidth = 6;
    ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);

    ctx.fillStyle = "#2e1a12";
    ctx.font = "600 42px Cinzel, serif";
    ctx.fillText("Still Hungry", 120, 220);

    ctx.font = "500 34px Inter, sans-serif";
    ctx.fillStyle = "rgba(46, 26, 18, 0.86)";
    const lines = preview.innerText.trim().split("\n").filter(Boolean).slice(0, 8);
    let y = 340;
    lines.forEach((line) => {
      ctx.fillText(line, 120, y);
      y += 64;
    });

    return await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("PNG export failed"));
          return;
        }
        resolve(blob);
      }, "image/png");
    });
  } finally {
    preview.style.display = previousInlineDisplay;
  }
}

function renderLeaderboard() {
  if (!leaderboardCopy || !leaderboardTable) return;
  const copy = getCopy();
  leaderboardCopy.textContent =
    currentBoard === "global" ? copy.leaderboardGlobalText : copy.leaderboardRegionalText;
  leaderboardTable.innerHTML = `
    <div class="leaderboard-table-row leaderboard-table-header">
      <span>${copy.leaderboardColRank}</span>
      <span>${copy.leaderboardColPlayer}</span>
      <span>${copy.leaderboardColReturns}</span>
    </div>
    ${boardData[currentBoard]
      .map(
        ([rank, player, returns]) => `
          <div class="leaderboard-table-row">
            <span>${rank}</span>
            <span>${player}</span>
            <span>${returns}</span>
          </div>`
      )
      .join("")}
  `;
}

function applyLanguage(language) {
  currentLanguage = language;
  const copy = getCopy();
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = copy.pageTitle;
  langToggle.textContent = copy.langToggle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (copy[key]) {
      element.placeholder = copy[key];
    }
  });

  updateGrowth(inviteRange.value);
  updatePreview();
  renderLeaderboard();
  updateAccountState();
  window.localStorage.setItem("still-hungry-lang", language);
}

inviteRange.addEventListener("input", (event) => {
  updateGrowth(event.target.value);
});

if (startInviteButton) {
  startInviteButton.addEventListener("click", () => {
    if (isLoggedIn) {
      showToast(getCopy().toastLoggedIn);
      return;
    }
    openModal(loginModalView);
    showToast(getCopy().toastNeedLogin);
  });
}

riotId.addEventListener("input", () => {
  if (linkGenerated || cardGenerated || inviteSent || friendReturned) {
    linkGenerated = false;
    cardGenerated = false;
    inviteSent = false;
    friendReturned = false;
  }
  updatePreview();
  updateAccountState();
});

accountToggle.addEventListener("click", () => {
  if (isLoggedIn) {
    isLoggedIn = false;
    linkGenerated = false;
    cardGenerated = false;
    inviteSent = false;
    friendReturned = false;
    generatedInviteLink = buildInviteLink();
    updatePreview();
    updateAccountState();
    return;
  }
  openModal(loginModalView);
});

if (downloadCardButton) {
  downloadCardButton.addEventListener("click", async () => {
    if (!isLoggedIn) {
      openModal(loginModalView);
      showToast(getCopy().toastNeedLogin);
      return;
    }
    if (!linkGenerated) {
      generatedInviteLink = buildInviteLink();
      linkGenerated = true;
      cardGenerated = false;
      inviteSent = false;
      friendReturned = false;
      updatePreview();
      updateAccountState();
      showToast(getCopy().toastLinkReady);
    }

    cardGenerated = true;
    updateAccountState();

    openModal(cardModalView);
    await window.requestAnimationFrame(() => {});

    try {
      const blob = await generateStoryCardPngBlob();
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      const senderSlug = slugify(riotId.value || "summoner");
      anchor.href = url;
      anchor.download = `still-hungry-invite-${senderSlug}.png`;
      anchor.rel = "noopener";
      anchor.click();
      URL.revokeObjectURL(url);
      showToast(getCopy().toastCardDownloaded);
      closeModal();
    } catch (error) {
      showToast(getCopy().toastCardDownloadFailed);
    }
  });
}

copyLinkButton.addEventListener("click", async () => {
  if (!isLoggedIn) {
    openModal(loginModalView);
    showToast(getCopy().toastNeedLogin);
    return;
  }
  if (!linkGenerated) {
    generatedInviteLink = buildInviteLink();
    linkGenerated = true;
    cardGenerated = false;
    inviteSent = false;
    friendReturned = false;
    updatePreview();
    updateAccountState();
    showToast(getCopy().toastLinkReady);
  }
  try {
    await navigator.clipboard.writeText(generatedInviteLink);
    showToast(getCopy().toastLinkCopied);
  } catch (error) {
    showToast(generatedInviteLink);
  }
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  isLoggedIn = true;
  generatedInviteLink = buildInviteLink();
  linkGenerated = true;
  cardGenerated = false;
  inviteSent = false;
  friendReturned = false;
  updatePreview();
  updateAccountState();
  closeModal();
  showToast(getCopy().toastLoggedIn);
});

useCardButton.addEventListener("click", () => {
  openModal(shareModalView);
});

confirmSendButton.addEventListener("click", () => {
  inviteSent = true;
  friendReturned = false;
  updateAccountState();
  closeModal();
  showToast(getCopy().toastInviteSent);
});

backToCardButton.addEventListener("click", () => {
  openModal(cardModalView);
});

closeCardButton.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

simulateReturnButton.addEventListener("click", () => {
  if (!linkGenerated) {
    showToast(getCopy().toastNeedLink);
    return;
  }
  const nextValue = Math.min(Number(inviteRange.value) + 1, 20);
  inviteRange.value = String(nextValue);
  updateGrowth(nextValue);
  inviteSent = false;
  friendReturned = true;
  updateAccountState();
  showToast(getCopy().toastReturnComplete);
});

playTeaser.addEventListener("click", () => {
  showToast(getCopy().toastTeaserPlaceholder);
});

leaderboardTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentBoard = tab.dataset.board;
    leaderboardTabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    renderLeaderboard();
  });
});

langToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "zh" : "en");
});

chapterDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToChapterById(dot.dataset.target);
  });
});

chapterNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href?.startsWith("#")) return;
    event.preventDefault();
    goToChapterById(href.slice(1));
  });
});

prevPageButton.addEventListener("click", () => {
  nudgeChapter(-1);
});

nextPageButton.addEventListener("click", () => {
  nudgeChapter(1);
});

// Carousel uses native horizontal scroll (touchpad/touch). Keep wheel default behavior.

window.addEventListener("keydown", (event) => {
  if (modalShell.classList.contains("is-open")) return;
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    nudgeChapter(1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    nudgeChapter(-1);
  }
});

if (storybookStage) {
  storybookStage.addEventListener(
    "scroll",
    () => {
      if (scrollRaf) return;
      scrollRaf = window.requestAnimationFrame(() => {
        scrollRaf = 0;
        updateChapterFromScroll();
      });
    },
    { passive: true }
  );
}

syncBookNavigation();

applyLanguage(currentLanguage);
