export type ResultType = {
  extroversion: number;
  agreeableness: number;
  conscientiousness: number;
  neuroticism: number;
  experience: number;
};

export type PersonalityKeys = keyof ResultType;
