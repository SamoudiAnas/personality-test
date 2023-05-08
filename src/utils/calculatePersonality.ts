/* reference to the test: 
 https://openpsychometrics.org/printable/big-five-personality-test.pdf 
 it explains why we put these numbers in their respective places */

export function calculatePersonality(result: number[]) {
  let extroversion =
    20 +
    result[0] -
    result[5] +
    result[10] -
    result[15] +
    result[20] -
    result[25] +
    result[30] -
    result[35] +
    result[40] -
    result[45];

  let agreeableness =
    14 -
    result[1] +
    result[6] -
    result[11] +
    result[16] -
    result[21] +
    result[26] -
    result[31] +
    result[36] -
    result[41] +
    result[46];

  let conscientiousness =
    14 +
    result[2] -
    result[7] +
    result[12] -
    result[17] +
    result[22] -
    result[27] +
    result[32] -
    result[37] +
    result[42] -
    result[47];

  let neuroticism =
    38 +
    result[3] -
    result[8] +
    result[13] -
    result[18] +
    result[23] -
    result[28] +
    result[33] -
    result[38] +
    result[43] -
    result[48];

  let experience =
    38 +
    result[4] -
    result[9] +
    result[14] -
    result[19] +
    result[24] -
    result[29] +
    result[34] -
    result[39] +
    result[44] -
    result[49];

  return {
    extroversion,
    agreeableness,
    conscientiousness,
    neuroticism,
    experience,
  };
}
