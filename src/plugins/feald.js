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
export const RADAR_TITLES = [
  '5年前',
  '3年前',
  '1年前',
  '現在',
  '1年後',
  '3年後',
  '5年後',
]
export const RADAR_HEADERS = ['技術', '知識', '知名', '勉強', '経験']
export const RADAR_SKILL_VALUES = [
  '',
  'AtCoder 灰色',
  'AtCoder 茶色',
  'AtCoder 緑色',
  'AtCoder 水色',
  'AtCoder 青色以上',
]
export const RADAR_KNOWLEDGE_VALUES = [
  '',
  '業務知識のみ',
  '記事での知識発信（ブログ等）',
  '発表での知識発信（LT等）',
  '収益が発生する知識発信（書籍等）',
  '副業となる知識発信（講演等）',
]
export const RADAR_RECOGNITION_VALUES = [
  '',
  '無名',
  '社内での有名人',
  '外部コミュニティの一部に認知',
  'SNS フォロワ数 >>> フォロー数',
  'ある分野の第一人者',
]
export const RADAR_STUDY_VALUES = [
  '',
  '業務外 年150時間未満（週3時間未満）',
  '業務外 年150～300時間（週3～6時間）',
  '業務外 年300～450時間（週6～9時間）',
  '業務外 年450～600時間（週9～12時間）',
  '業務外 年600時間以上（週12時間以上）',
]
export const RADAR_EXPERIENCE_VALUES = [
  '',
  '開発経験',
  'リーダ経験',
  'アジャイル経験',
  'スクラム全役割経験',
  'プロジェクトマネージャ経験',
]
export const RADAR_VALUES = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2, 1],
  [2, 1, 1, 3, 2],
  [2, 2, 2, 5, 2],
  [3, 3, 3, 4, 3],
  [4, 4, 3, 3, 4],
  [5, 5, 4, 3, 5],
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