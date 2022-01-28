/**
 * @param {string} c
 * @return {boolean}
 */
const isDigit = (c) => c >= '0' && c <= '9';

/**
 * @param {string} c
 * @return {boolean}
 */
const isHex = (c) =>
  isDigit(c) || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');

/**
 * @param {string} ip
 * @return {string}
 */
function validIPAddress(ip) {
  if (!ip) return 'Neither';

  const ipv4 = ip.split('.');
  let ipv6;

  if (ipv4.length !== 4) {
    ipv6 = ip.split(':');
    if (ipv6.length !== 8) return 'Neither';
    else {
      const isValid = ipv6.every((section) => {
        const haveGoodLength = section.length >= 1 && section.length <= 4;
        const areHex = [...section].every(isHex);
        return haveGoodLength && areHex;
      });
      return isValid ? 'IPv6' : 'Neither';
    }
  } else {
    const isValid = ipv4.every((section) => {
      const areDigits = [...section].every(isDigit);
      const dontHaveLeadingZero = !(section.length > 1 && section[0] === '0');
      const sectionValue = parseInt(section);
      const haveCorrectValue = sectionValue >= 0 && sectionValue <= 255;
      return areDigits && dontHaveLeadingZero && haveCorrectValue;
    });
    return isValid ? 'IPv4' : 'Neither';
  }
}

/*const ip = '192.0.0.1'*/

/*const output = validIPAddress(ip)*/

/*console.log(output)*/
