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

const LIFEPLAN = {
  key: keyTimeline,
  disp: 'Timeline',
  scrollId: `#${prefixCompornentId}${keyTimeline}`,
}

const DESIRED = {
  key: keyWork,
  disp: 'Work',
  scrollId: `#${prefixCompornentId}${keyWork}`,
}

const CONTACT = {
  key: keyContact,
  disp: 'Contact',
  scrollId: `#${prefixCompornentId}${keyContact}`,
}

export const HEADERS = [TOP, PROFILE, LIFEPLAN, DESIRED, CONTACT]

export const HEADER_KEY_LIST = []
for (const header of HEADERS) {
  HEADER_KEY_LIST.push(header.key)
}

// RadarChart
export const TIMELINE_TITLES = [
  '5年前',
  '3年前',
  '1年前',
  '現在',
  '1年後',
  '3年後',
  '5年後',
]
export const STATUS_HEADERS = ['技術力', '知識量', '知名度', '勉強量', '経験値']
export const STATUS_SKILL_VALUES = [
  '',
  'AtCoder 灰色',
  'AtCoder 茶色',
  'AtCoder 緑色',
  'AtCoder 水色',
  'AtCoder 青色以上',
]
export const STATUS_KNOWLEDGE_VALUES = [
  '',
  '業務における知識のみ',
  '記事による情報発信を実施（ブログ等）',
  '発表による情報発信を実施（LT等）',
  '収益が発生する情報発信を実施（書籍等）',
  '副業となる情報発信を実施（講師等）',
]
export const STATUS_RECOGNITION_VALUES = [
  '',
  '社内現場で活躍',
  '社内全域で活躍',
  '外部コミュニティの一部で活躍',
  'SNSフォロワ数 >>> フォロー数',
  'ある分野の第一人者',
]
export const STATUS_STUDY_VALUES = [
  '',
  '業務外 年150時間未満',
  '業務外 年150～300時間',
  '業務外 年300～450時間',
  '業務外 年450～600時間',
  '業務外 年600時間以上',
]
export const STATUS_EXPERIENCE_VALUES = [
  '',
  '開発経験あり',
  'リーダ経験あり',
  'アジャイル経験あり',
  'スクラム全役割経験あり',
  'プロジェクトマネージャ経験あり',
]
export const STATUS_VALUE_DETAILS = [
  STATUS_SKILL_VALUES,
  STATUS_KNOWLEDGE_VALUES,
  STATUS_RECOGNITION_VALUES,
  STATUS_STUDY_VALUES,
  STATUS_EXPERIENCE_VALUES,
]
export const STATUS_VALUES = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2, 1],
  [2, 1, 1, 3, 1],
  [2, 2, 2, 5, 2],
  [3, 3, 3, 5, 3],
  [4, 4, 3, 4, 4],
  [5, 5, 4, 4, 5],
]
export const RADER_COLOR = [
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
  'rgba(25, 118, 210, 1)',
]
export const RADER_COLOR_BACK = [
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
  'rgba(25, 118, 210, 0.2)',
]
export const RADER_COLOR_HIGHLITE = '#fff'
export const RADER_HIT_RADIUS = 30