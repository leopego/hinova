export function removeBarFromText(text: string) {
  const textWithoutBars = text.replaceAll("\n", ",").replaceAll("\\n", ", ");
  return textWithoutBars;
}
