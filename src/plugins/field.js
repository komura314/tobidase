export const keyTop = 'top'
export const keyAbout = 'about'
export const keyTimeline = 'timeline'
export const keyWork = 'work'
export const keyContact = 'contact'

export const prefixCompornentId = 'compornent-'
export const prefixRefId = 'ref'

const TOP = {
  key: keyTop,
  disp: 'Top',
  scrollId: `#${prefixCompornentId}${keyTop}`,
}

const PROFILE = {
  key: keyAbout,
  disp: 'About',
  scrollId: `#${prefixCompornentId}${keyAbout}`,
}

const WORK = {
  key: keyWork,
  disp: 'Work',
  scrollId: `#${prefixCompornentId}${keyWork}`,
}

const LIFEPLAN = {
  key: keyTimeline,
  disp: 'Timeline',
  scrollId: `#${prefixCompornentId}${keyTimeline}`,
}

const CONTACT = {
  key: keyContact,
  disp: 'Contact',
  scrollId: `#${prefixCompornentId}${keyContact}`,
}

export const HEADERS = [TOP, PROFILE, WORK, LIFEPLAN, CONTACT]

export const HEADER_KEY_LIST = []
for (const header of HEADERS) {
  HEADER_KEY_LIST.push(header.key)
}

// RadarChart
export const TIMELINE_TITLES = [
  '～2年前',
  '2年前～現在',
  '現在～2年後',
  '2年後～',
]
export const STATUS_HEADERS = ['技術力', '知識量', '知名度', '経験値', '勉強量']
export const STATUS_SKILL_VALUES = [
  '',
  'AtCoder 灰色',
  'AtCoder 茶色',
  'AtCoder 緑色',
  'AtCoder 水色以上',
]
export const STATUS_KNOWLEDGE_VALUES = [
  '',
  '業務における知識のみ',
  'Webによる情報発信を実施（技術ブログ等）',
  '発表による情報発信を実施（LT等）',
  '収益が発生する情報発信を実施（書籍等）',
]
export const STATUS_RECOGNITION_VALUES = [
  '',
  '社内現場で活躍',
  '社内全域で活躍',
  '外部コミュニティで活躍',
  'SNSフォロワ数 >>> フォロー数',
]
export const STATUS_EXPERIENCE_VALUES = [
  '',
  '開発経験あり',
  'リーダ経験あり',
  'アジャイル経験あり',
  'プロジェクトマネージャ経験あり',
]
export const STATUS_STUDY_VALUES = [
  '',
  '業務外 年100時間未満',
  '業務外 年100～300時間',
  '業務外 年300～500時間',
  '業務外 年500時間以上',
]
export const STATUS_VALUE_DETAILS = [
  STATUS_SKILL_VALUES,
  STATUS_KNOWLEDGE_VALUES,
  STATUS_RECOGNITION_VALUES,
  STATUS_EXPERIENCE_VALUES,
  STATUS_STUDY_VALUES,
]
export const STATUS_VALUES = [
  [1, 1, 1, 1, 2],
  [2, 2, 2, 2, 3],
  [3, 3, 3, 3, 4],
  [4, 4, 4, 4, 3],
]