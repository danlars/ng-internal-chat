export const fuzzySearch = (needle: string, haystack: string) => {
  if (!needle) {
    return true;
  }

  if (!haystack) {
    return false;
  }

  let needleIndex = 0;
  needle = needle.toLowerCase();
  haystack = haystack.toLowerCase();

  for (const haystackCharacter of haystack) {
    const needleCharacter = needle[needleIndex];
    if (haystackCharacter === needleCharacter) {
      needleIndex++;
    }
    if (needleIndex === needle.length) {
      return true;
    }
  }

  return false;
};
