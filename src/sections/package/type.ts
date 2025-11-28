export type PackageProps = {
  img: string;
  title: string;
};

export type PackageBenefitsProps = {
  title: string;
  items: string[];
};

export type PackageType = 'combo' | 'single';

export type ComboPlan = {
  durationMonths: 6 | 12 | 18;
  originalPrice: number;
  price: number;
  gifts: string[];
  diamond: number;
  popular?: boolean;
};

export type ComboPackage = {
  name: string;
  description?: string;
  subjects: string[];
  plans: ComboPlan[];
};

export type SinglePlan = {
  durationMonths: 6 | 12 | 18;
  originalPrice: number;
  price: number;
  diamond: number;
  sub?: string;
  gifts: string[];
};

export type SubjectPackage = {
  subject: string;
  icon?: string;
  plans: SinglePlan[];
};

export type PackageCourseProps = {
  combos: ComboPackage[];
  subject: SubjectPackage[];
};
