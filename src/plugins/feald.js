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
