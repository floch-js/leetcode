/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  const map = new Map([
    ['b', 0],
    ['a', 0],
    ['l', 0],
    ['o', 0],
    ['n', 0],
  ]);

  for (const c of text) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1);
    }
  }

  map.set('l', map.get('l') >> 1);
  map.set('o', map.get('o') >> 1);

  return Math.min(...map.values());
}

const text =
  'krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw';

const output = maxNumberOfBalloons(text);

console.log(output); // eslint-disable-line no-console
