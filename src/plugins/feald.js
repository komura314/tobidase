export const keyTop = "top"
export const keyProfile = "profile"
export const keyLifeplan = "lifeplan"
export const keyDesired = "desired"
export const keyContact = "contact"

export const prefixCompornentId = "compornent-"

const TOP = {
  key: keyTop,
  disp: 'Top',
  scrollId: `#${prefixCompornentId}${keyTop}`,
}

const PROFILE = {
  key: keyProfile,
  disp: 'Profile',
  scrollId: `#${prefixCompornentId}${keyProfile}`,
}

const LIFEPLAN = {
  key: keyLifeplan,
  disp: 'Lifeplan',
  scrollId: `#${prefixCompornentId}${keyLifeplan}`,
}

const DESIRED = {
  key: keyDesired,
  disp: 'Desired',
  scrollId: `#${prefixCompornentId}${keyDesired}`,
}

const CONTACT = {
  key: keyContact,
  disp: 'Contact',
  scrollId: `#${prefixCompornentId}${keyContact}`,
}

export const HEADERS = [
  TOP,
  PROFILE,
  LIFEPLAN,
  DESIRED,
  CONTACT,
]