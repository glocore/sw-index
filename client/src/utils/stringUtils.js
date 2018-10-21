class StringUtils {
  sanitizeString = string => string.replace(/^[a-zA-Z0-9 ]/g, '').trim()

  checkIfEmptyString = string => !(string.trim().length)
}

export default new StringUtils()