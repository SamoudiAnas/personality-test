import type { NextApiRequest, NextApiResponse } from "next";
import { calculatePersonality } from "@/utils/calculatePersonality";

type PersonalityResult = {
  extroversion: number;
  agreeableness: number;
  conscientiousness: number;
  neuroticism: number;
  experience: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PersonalityResult>
) {
  const questionsScore = req.body;

  res.status(200).json(calculatePersonality(questionsScore));
}

//reference to the test: https://openpsychometrics.org/printable/big-five-personality-test.pdf
