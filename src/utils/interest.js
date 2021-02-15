import { sigma } from './math';
import { DevError } from './errors';

const frequencies = {
  month: 12,
  quarter: 4,
  annual: 1,
};
const durations = {
  month: 1,
  quarter: 1,
  year: 1,
};
function validateCalculateInvestment(contribution, compound) {
  if (typeof contribution !== 'object' || contribution === null)
    throw new DevError('Contrution must be an object.');
  if (typeof contribution.principal !== 'number') throw new DevError('Principal should be number.');
  if (!(contribution.principal > 0)) throw new DevError('Principal must be a positive number.');
  if (!frequencies[contribution.frequency])
    throw new DevError(`Invalid contribution frequency: "${contribution.frequency}".`);
  if (typeof contribution.amount !== 'number')
    throw new DevError('Contribution amount should be a number.');
  if (!durations[contribution.duration])
    throw new DevError(`Invalid duration: "${contribution.duration}".`);
  
  if (typeof compound.rate !== 'number') throw new DevError('Rate should be a number.');
  if (!(compound.rate > 0 && compound.rate < 1)) throw new DevError('Rate should be between 0% and 100%');
  if (!frequencies[compound.frequency])
    throw new DevError(`Invalid compound frequency: "${compound.frequency}".`);
}

function calculateContributionForPeriod(compoundFrequency, contributionFrequency, contributionAmount) {
  return (contributionFrequency/compoundFrequency) * contributionAmount;
}

function interestSigmaFormula(i, constants) {
  const { rate, periodContribution } = constants;
  return (rate**i) * periodContribution;
}

export function calculateInvestment(contribution, compound) {
  validateCalculateInvestment(contribution, rate);
  const periodContribution = calculateContributionForPeriod(compound.frequency, contribution.frequency, contribution.amount);
  const _rate = 1 + rate;

  const interestSum = sigma(1, contribution.duration, interestSigmaFormula, { rate: _rate, periodContribution });
  return interestSum + ( (_rate**contribution.duration) * contribution.principal );
}